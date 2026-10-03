// ==========================================================
// Función de Vercel: /api/daily-post (la lanza un cron cada mañana)
// Publica en Bluesky y en un canal de Telegram las respuestas de AYER
// y la invitación al reto de hoy. Nunca revela el reto del día.
//
// Variables de entorno (se configuran en Vercel, nunca en el código):
//   BLUESKY_HANDLE, BLUESKY_APP_PASSWORD   → cuenta de Bluesky (contraseña de aplicación)
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHANNEL   → bot de Telegram y canal (p. ej. @playrondo)
//   CRON_SECRET                            → Vercel lo envía en la llamada del cron
// Si faltan las de una plataforma, esa plataforma se salta sin error.
// ?dry=1 devuelve los textos sin publicar nada.
// ==========================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = 'https://playrondo.app';
const TZ = 'Europe/Madrid';

// Carga los datos del juego (data.js y decade_events.js son scripts de navegador)
function loadGameData() {
    const root = process.cwd();
    const code = fs.readFileSync(path.join(root, 'decade_events.js'), 'utf8') + '\n' +
        fs.readFileSync(path.join(root, 'data.js'), 'utf8') + '\n' +
        ';globalThis.__rondo = { getTeamForDate, getLegendForDate };';
    const context = vm.createContext({});
    vm.runInContext(code, context);
    return context.__rondo;
}

// "AAAA-MM-DD" de hoy en España y del día anterior
function madridDateKey(offsetDays = 0) {
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    const [y, m, d] = today.split('-').map(Number);
    const date = new Date(Date.UTC(y, m - 1, d + offsetDays));
    return date.toISOString().slice(0, 10);
}

function prettyDate(key, lang) {
    const [y, m, d] = key.split('-').map(Number);
    return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', { day: 'numeric', month: 'long', timeZone: 'UTC' });
}

function buildPosts(data) {
    const todayKey = madridDateKey(0);
    const yesterdayKey = madridDateKey(-1);
    const team = data.getTeamForDate(yesterdayKey);
    const legend = data.getLegendForDate(yesterdayKey);
    return {
        es: `⚽ RONDO · Reto del ${prettyDate(todayKey, 'es')}\n\n` +
            `Ayer el equipo era ${team.name} y la leyenda, ${legend.name}. ¿Lo sacaste?\n\n` +
            `Hoy tienes equipo, leyenda y 5 momentos de historia nuevos 👇\n${SITE}\n\n#Rondo #Wordle #fútbol`,
        en: `⚽ RONDO · ${prettyDate(todayKey, 'en')} puzzle\n\n` +
            `Yesterday's club was ${team.name} and the legend was ${legend.name}. Did you get them?\n\n` +
            `Today's club, legend and 5 history moments are live 👇\n${SITE}\n\n#Rondo #Wordle #football`
    };
}

// ---------- Bluesky ----------
async function bsky(endpoint, token, body, contentType = 'application/json') {
    const res = await fetch(`https://bsky.social/xrpc/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': contentType, ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: contentType === 'application/json' ? JSON.stringify(body) : body
    });
    if (!res.ok) throw new Error(`${endpoint}: ${res.status} ${await res.text()}`);
    return res.json();
}

// Enlaces y hashtags "clicables": Bluesky los marca por posición en bytes UTF-8
function facetsFor(text) {
    const facets = [];
    const byteIndex = i => Buffer.byteLength(text.slice(0, i), 'utf8');
    for (const m of text.matchAll(/https?:\/\/\S+/g)) {
        facets.push({ index: { byteStart: byteIndex(m.index), byteEnd: byteIndex(m.index + m[0].length) }, features: [{ $type: 'app.bsky.richtext.facet#link', uri: m[0] }] });
    }
    for (const m of text.matchAll(/#([\p{L}\p{N}_]+)/gu)) {
        facets.push({ index: { byteStart: byteIndex(m.index), byteEnd: byteIndex(m.index + m[0].length) }, features: [{ $type: 'app.bsky.richtext.facet#tag', tag: m[1] }] });
    }
    return facets;
}

async function postToBluesky(posts) {
    const { BLUESKY_HANDLE, BLUESKY_APP_PASSWORD } = process.env;
    if (!BLUESKY_HANDLE || !BLUESKY_APP_PASSWORD) return 'saltado (sin credenciales)';
    const session = await bsky('com.atproto.server.createSession', null, { identifier: BLUESKY_HANDLE, password: BLUESKY_APP_PASSWORD });
    // Tarjeta del enlace con la imagen de Rondo
    const img = Buffer.from(await (await fetch(`${SITE}/icons/og-image.jpg`)).arrayBuffer());
    const { blob } = await bsky('com.atproto.repo.uploadBlob', session.accessJwt, img, 'image/jpeg');
    for (const lang of ['es', 'en']) {
        const text = posts[lang];
        await bsky('com.atproto.repo.createRecord', session.accessJwt, {
            repo: session.did,
            collection: 'app.bsky.feed.post',
            record: {
                $type: 'app.bsky.feed.post',
                text,
                langs: [lang],
                createdAt: new Date().toISOString(),
                facets: facetsFor(text),
                embed: {
                    $type: 'app.bsky.embed.external',
                    external: { uri: SITE, title: 'Rondo — The daily football guessing game', description: lang === 'es' ? 'Adivina el equipo, la leyenda y ordena la historia. Cada día.' : 'Guess the club, the legend and put history in order. Every day.', thumb: blob }
                }
            }
        });
    }
    return 'publicado (es + en)';
}

// ---------- Telegram ----------
async function postToTelegram(posts) {
    const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHANNEL } = process.env;
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHANNEL) return 'saltado (sin credenciales)';
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHANNEL, text: posts.es, link_preview_options: { url: SITE, prefer_large_media: true } })
    });
    const data = await res.json();
    if (!data.ok) throw new Error(`Telegram: ${data.description}`);
    return 'publicado (es)';
}

module.exports = async function handler(req, res) {
    const dry = req.query && req.query.dry !== undefined;
    // Solo el cron de Vercel (que envía CRON_SECRET) puede publicar.
    // Sin CRON_SECRET configurado no se publica nunca, para que nadie pueda lanzarlo desde fuera
    const secret = process.env.CRON_SECRET;
    if (!dry && (!secret || req.headers.authorization !== `Bearer ${secret}`)) {
        return res.status(401).json({ error: 'No autorizado' });
    }
    const posts = buildPosts(loadGameData());
    if (dry) return res.status(200).json({ dry: true, posts });

    const results = {};
    for (const [name, fn] of [['bluesky', postToBluesky], ['telegram', postToTelegram]]) {
        try { results[name] = await fn(posts); } catch (e) { results[name] = `error: ${e.message}`; }
    }
    res.status(200).json({ results });
};
