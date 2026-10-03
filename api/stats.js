// ==========================================================
// Función de Vercel: /api/stats
// Estadísticas globales del reto del día ("23% lo acertó hoy").
// POST { date, mode, won, attempts } suma una partida y devuelve el resumen.
// GET ?date=AAAA-MM-DD&mode=teams devuelve el resumen sin sumar nada.
// Guarda solo contadores anónimos en Upstash Redis (integración de Vercel).
// La IP no se guarda: solo un hash con la fecha, para limitar envíos repetidos.
// ==========================================================

const crypto = require('crypto');

const MODES = ['teams', 'legends', 'decade'];
const MAX_ATTEMPTS = 50;              // Teams no tiene límite: de 50 en adelante cuenta como 50
const MAX_PER_IP = 10;                // partidas contadas por IP, modo y día
const TTL_SECONDS = 40 * 24 * 60 * 60;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(commands) {
    const res = await fetch(`${REDIS_URL}/pipeline`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${REDIS_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(commands),
        signal: AbortSignal.timeout(4000)
    });
    if (!res.ok) throw new Error(`Redis ${res.status}`);
    return (await res.json()).map(r => r.result);
}

// La fecha es la del jugador (su zona horaria): se acepta si está a menos de 36 h de ahora
function validDate(date) {
    if (!DATE_RE.test(date)) return false;
    const t = Date.parse(date + 'T12:00:00Z');
    return !Number.isNaN(t) && Math.abs(Date.now() - t) < 36 * 60 * 60 * 1000;
}

// HGETALL devuelve [campo, valor, campo, valor...]
function summarize(flat) {
    const h = {};
    for (let i = 0; flat && i < flat.length; i += 2) h[flat[i]] = Number(flat[i + 1]) || 0;
    const dist = {};
    for (const [k, v] of Object.entries(h)) if (k.startsWith('a')) dist[k.slice(1)] = v;
    return { played: h.p || 0, wins: h.w || 0, dist };
}

module.exports = async function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store');
    if (!REDIS_URL || !REDIS_TOKEN) return res.status(503).json({ error: 'stats not configured' });

    const src = req.method === 'POST' ? (req.body || {}) : (req.query || {});
    const date = String(src.date || '');
    const mode = String(src.mode || '');
    if (!MODES.includes(mode) || !validDate(date)) return res.status(400).json({ error: 'bad request' });

    const key = `rondo:stats:${date}:${mode}`;

    try {
        if (req.method === 'GET') {
            const [flat] = await redis([['HGETALL', key]]);
            return res.status(200).json(summarize(flat));
        }
        if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });

        const won = src.won === true;
        const attempts = Math.min(MAX_ATTEMPTS, Math.max(1, parseInt(src.attempts, 10) || 1));

        const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
        const ipKey = `rondo:ip:${date}:${mode}:` + crypto.createHash('sha256').update(ip + date).digest('hex').slice(0, 16);
        const [count] = await redis([['INCR', ipKey], ['EXPIRE', ipKey, 2 * 24 * 60 * 60]]);

        const commands = [];
        if (count <= MAX_PER_IP) {
            commands.push(['HINCRBY', key, 'p', 1]);
            if (won) commands.push(['HINCRBY', key, 'w', 1], ['HINCRBY', key, 'a' + attempts, 1]);
            commands.push(['EXPIRE', key, TTL_SECONDS]);
        }
        commands.push(['HGETALL', key]);
        const results = await redis(commands);
        return res.status(200).json(summarize(results[results.length - 1]));
    } catch (e) {
        return res.status(502).json({ error: 'stats unavailable' });
    }
};
