// ==========================================================
// Rondo Studio: genera vídeos verticales (1080x1920) para redes
// "¿Adivinas el equipo?" y "¿Quién es esta leyenda?"
// Nunca usa el reto de hoy. Datos y reto diario de data.js
// ==========================================================

const W = 1080, H = 1920, FPS = 30;
const C = {
    green: '#2ed573', greenDark: '#18a352', ink: '#04170c', top: '#0f3d27', mid: '#082416', bottom: '#03110a',
    white: '#ffffff', muted: '#a6d4b9', red: '#ff3b3b', gold: '#ffd23f'
};

const TXT = {
    es: {
        teamTitle: '¿ADIVINAS EL EQUIPO?', legendTitle: '¿QUIÉN ES ESTA LEYENDA?',
        labels: ['LIGA', 'TÍTULOS', 'COLOR', 'VALOR', 'AÑOS EN 1ª', 'MARCA', 'ESTADIO'],
        country: 'PAÍS', born: 'NACIÓ EN', answer: 'ES...', play: 'JUEGA CADA DÍA', comment: '¿LO SACASTE? COMENTA 👇',
        caption: (f) => f === 'team'
            ? '¿Sabrías qué equipo es con estas 7 pistas? ⚽ Comenta tu respuesta antes de que salga 👇\n\nJuega cada día gratis en playrondo.app\n\n#futbol #adivinaelequipo #wordle #retofutbolero #laliga #futbolero'
            : '¿Quién es esta leyenda del fútbol? ⭐ Comenta antes de que se vea 👇\n\nJuega cada día gratis en playrondo.app\n\n#futbol #adivinaeljugador #leyendas #wordle #retofutbolero #futbolero'
    },
    en: {
        teamTitle: 'GUESS THE CLUB?', legendTitle: 'WHO IS THIS LEGEND?',
        labels: ['LEAGUE', 'TITLES', 'KIT COLOUR', 'SQUAD VALUE', 'TOP-FLIGHT YEARS', 'KIT BRAND', 'STADIUM'],
        country: 'COUNTRY', born: 'BORN IN', answer: "IT'S...", play: 'PLAY EVERY DAY', comment: 'DID YOU GET IT? COMMENT 👇',
        caption: (f) => f === 'team'
            ? 'Can you name the club from these 7 clues? ⚽ Comment before the reveal 👇\n\nPlay every day for free at playrondo.app\n\n#football #soccer #guesstheclub #footballwordle #footballquiz #premierleague'
            : 'Who is this football legend? ⭐ Comment before the reveal 👇\n\nPlay every day for free at playrondo.app\n\n#football #soccer #guesstheplayer #footballlegends #footballquiz #footballwordle'
    }
};

const COLOR_NAMES = {
    Blanco: ['Blanco', 'White'], Negro: ['Negro', 'Black'], Rojo: ['Rojo', 'Red'], Azul: ['Azul', 'Blue'],
    Amarillo: ['Amarillo', 'Yellow'], Verde: ['Verde', 'Green'], Violeta: ['Violeta', 'Purple'], Granate: ['Granate', 'Maroon'],
    Naranja: ['Naranja', 'Orange'], Celeste: ['Celeste', 'Sky blue'], Rojiblanco: ['Rojo y blanco', 'Red & white'],
    Azulgrana: ['Azul y granate', 'Blue & maroon'], Rojinegro: ['Rojo y negro', 'Red & black'], Blanquinegro: ['Blanco y negro', 'White & black'],
    Verdiblanco: ['Verde y blanco', 'Green & white'], Blanquiazul: ['Blanco y azul', 'White & blue'], Azulnegro: ['Azul y negro', 'Blue & black']
};

// ---------- MD5 (para la URL directa de Wikimedia, que sí permite usar la imagen en canvas) ----------
function md5(str) {
    function rh(n) { let s = ''; for (let j = 0; j <= 3; j++) s += ((n >> (j * 8 + 4)) & 0x0F).toString(16) + ((n >> (j * 8)) & 0x0F).toString(16); return s; }
    function ad(x, y) { const l = (x & 0xFFFF) + (y & 0xFFFF); return (((x >> 16) + (y >> 16) + (l >> 16)) << 16) | (l & 0xFFFF); }
    function rl(n, c) { return (n << c) | (n >>> (32 - c)); }
    function cm(q, a, b, x, s, t) { return ad(rl(ad(ad(a, q), ad(x, t)), s), b); }
    function ff(a, b, c, d, x, s, t) { return cm((b & c) | (~b & d), a, b, x, s, t); }
    function gg(a, b, c, d, x, s, t) { return cm((b & d) | (c & ~d), a, b, x, s, t); }
    function hh(a, b, c, d, x, s, t) { return cm(b ^ c ^ d, a, b, x, s, t); }
    function ii(a, b, c, d, x, s, t) { return cm(c ^ (b | ~d), a, b, x, s, t); }
    const utf8 = unescape(encodeURIComponent(str));
    const nb = ((utf8.length + 8) >> 6) + 1, x = new Array(nb * 16).fill(0);
    for (let i = 0; i < utf8.length; i++) x[i >> 2] |= utf8.charCodeAt(i) << ((i % 4) * 8);
    x[utf8.length >> 2] |= 0x80 << ((utf8.length % 4) * 8); x[nb * 16 - 2] = utf8.length * 8;
    let a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (let i = 0; i < x.length; i += 16) {
        const oa = a, ob = b, oc = c, od = d;
        a = ff(a, b, c, d, x[i], 7, -680876936); d = ff(d, a, b, c, x[i + 1], 12, -389564586); c = ff(c, d, a, b, x[i + 2], 17, 606105819); b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = ff(a, b, c, d, x[i + 4], 7, -176418897); d = ff(d, a, b, c, x[i + 5], 12, 1200080426); c = ff(c, d, a, b, x[i + 6], 17, -1473231341); b = ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = ff(a, b, c, d, x[i + 8], 7, 1770035416); d = ff(d, a, b, c, x[i + 9], 12, -1958414417); c = ff(c, d, a, b, x[i + 10], 17, -42063); b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = ff(a, b, c, d, x[i + 12], 7, 1804603682); d = ff(d, a, b, c, x[i + 13], 12, -40341101); c = ff(c, d, a, b, x[i + 14], 17, -1502002290); b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = gg(a, b, c, d, x[i + 1], 5, -165796510); d = gg(d, a, b, c, x[i + 6], 9, -1069501632); c = gg(c, d, a, b, x[i + 11], 14, 643717713); b = gg(b, c, d, a, x[i], 20, -373897302);
        a = gg(a, b, c, d, x[i + 5], 5, -701558691); d = gg(d, a, b, c, x[i + 10], 9, 38016083); c = gg(c, d, a, b, x[i + 15], 14, -660478335); b = gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = gg(a, b, c, d, x[i + 9], 5, 568446438); d = gg(d, a, b, c, x[i + 14], 9, -1019803690); c = gg(c, d, a, b, x[i + 3], 14, -187363961); b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = gg(a, b, c, d, x[i + 13], 5, -1444681467); d = gg(d, a, b, c, x[i + 2], 9, -51403784); c = gg(c, d, a, b, x[i + 7], 14, 1735328473); b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = hh(a, b, c, d, x[i + 5], 4, -378558); d = hh(d, a, b, c, x[i + 8], 11, -2022574463); c = hh(c, d, a, b, x[i + 11], 16, 1839030562); b = hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = hh(a, b, c, d, x[i + 1], 4, -1530992060); d = hh(d, a, b, c, x[i + 4], 11, 1272893353); c = hh(c, d, a, b, x[i + 7], 16, -155497632); b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = hh(a, b, c, d, x[i + 13], 4, 681279174); d = hh(d, a, b, c, x[i], 11, -358537222); c = hh(c, d, a, b, x[i + 3], 16, -722521979); b = hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = hh(a, b, c, d, x[i + 9], 4, -640364487); d = hh(d, a, b, c, x[i + 12], 11, -421815835); c = hh(c, d, a, b, x[i + 15], 16, 530742520); b = hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = ii(a, b, c, d, x[i], 6, -198630844); d = ii(d, a, b, c, x[i + 7], 10, 1126891415); c = ii(c, d, a, b, x[i + 14], 15, -1416354905); b = ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = ii(a, b, c, d, x[i + 12], 6, 1700485571); d = ii(d, a, b, c, x[i + 3], 10, -1894986606); c = ii(c, d, a, b, x[i + 10], 15, -1051523); b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = ii(a, b, c, d, x[i + 8], 6, 1873313359); d = ii(d, a, b, c, x[i + 15], 10, -30611744); c = ii(c, d, a, b, x[i + 6], 15, -1560198380); b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = ii(a, b, c, d, x[i + 4], 6, -145523070); d = ii(d, a, b, c, x[i + 11], 10, -1120210379); c = ii(c, d, a, b, x[i + 2], 15, 718787259); b = ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = ad(a, oa); b = ad(b, ob); c = ad(c, oc); d = ad(d, od);
    }
    return rh(a) + rh(b) + rh(c) + rh(d);
}

// URLs de escudo que permiten dibujar en canvas (CORS): Commons y Wikipedia directos, luego CDN
function crestUrls(team) {
    if (team.logoUrl) return [team.logoUrl];
    const f = team.wikiFile.replace(/ /g, '_');
    const h = md5(f);
    // Wikimedia solo sirve miniaturas de tamaños estándar (500px vale; 400px no).
    // Muchos escudos están en la Wikipedia inglesa (no libres), así que se prueba primero "en"
    const thumb = (wiki) => `https://upload.wikimedia.org/wikipedia/${wiki}/thumb/${h[0]}/${h.slice(0, 2)}/${encodeURIComponent(f)}/500px-${encodeURIComponent(f)}${f.toLowerCase().endsWith('.svg') ? '.png' : ''}`;
    return [thumb('en'), thumb('commons'), `https://cdn.jsdelivr.net/gh/luukhopman/football-logos@master/logos/${team.name}.png`];
}

function loadImage(urls) {
    return new Promise(resolve => {
        const list = [...urls];
        const next = () => {
            if (!list.length) return resolve(null);
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => resolve(img);
            img.onerror = next;
            img.src = list.shift();
        };
        next();
    });
}

// ---------- Elección de la respuesta (nunca la de hoy) ----------
function dateKey(offsetDays) {
    const d = new Date(); d.setDate(d.getDate() + offsetDays);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function pickAnswer(format, source) {
    const today = dateKey(0);
    const todays = format === 'team' ? getTeamForDate(today) : getLegendForDate(today);
    if (source === 'yesterday') return format === 'team' ? getTeamForDate(dateKey(-1)) : getLegendForDate(dateKey(-1));
    const pool = (format === 'team' ? teams : legends).filter(x => x !== todays);
    return pool[Math.floor(Math.random() * pool.length)];
}

// ---------- Dibujo ----------
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const ease = t => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 3);
const clamp01 = t => Math.min(Math.max(t, 0), 1);

function para(x, y, w, h, slant, color) {
    ctx.fillStyle = color; ctx.beginPath();
    ctx.moveTo(x + slant, y); ctx.lineTo(x + w, y); ctx.lineTo(x + w - slant, y + h); ctx.lineTo(x, y + h); ctx.closePath(); ctx.fill();
}
function text(str, x, y, size, color, align = 'center', weight = 700) {
    ctx.fillStyle = color; ctx.font = `${weight} ${size}px Teko`; ctx.textAlign = align; ctx.textBaseline = 'alphabetic'; ctx.fillText(str, x, y);
}
function fitText(str, maxW, size, weight = 700) {
    ctx.font = `${weight} ${size}px Teko`;
    while (ctx.measureText(str).width > maxW && size > 30) { size -= 4; ctx.font = `${weight} ${size}px Teko`; }
    return size;
}

function background() {
    const g = ctx.createLinearGradient(0, 0, W * 0.4, H);
    g.addColorStop(0, C.top); g.addColorStop(0.6, C.mid); g.addColorStop(1, C.bottom);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    ctx.save(); ctx.globalAlpha = 0.07; ctx.fillStyle = C.green;
    [[620, 760], [860, 920]].forEach(([a, b]) => { ctx.beginPath(); ctx.moveTo(a, 0); ctx.lineTo(b, 0); ctx.lineTo(b - 700, H); ctx.lineTo(a - 700, H); ctx.closePath(); ctx.fill(); });
    ctx.restore();
}

function brand(y = 120) {
    para(W / 2 - 230, y, 460, 130, 16, C.green); text('RONDO', W / 2, y + 112, 130, C.ink);
}

function titleBar(str, y, t) {
    const k = ease(t * 2);
    ctx.save(); ctx.globalAlpha = k; ctx.translate((1 - k) * -80, 0);
    const size = fitText(str, 900, 92);
    para(60, y, W - 120, 120, 18, C.white); text(str, W / 2, y + 96, size, C.top);
    ctx.restore();
}

function bottomBar(t, lang) {
    ctx.fillStyle = 'rgba(2,12,7,0.92)'; ctx.fillRect(0, H - 150, W, 150);
    ctx.fillStyle = C.white; ctx.beginPath(); ctx.moveTo(0, H - 150); ctx.lineTo(330, H - 150); ctx.lineTo(300, H); ctx.lineTo(0, H); ctx.closePath(); ctx.fill();
    text('RONDO TV', 160, H - 50, 72, C.top);
    ctx.globalAlpha = 0.5 + 0.5 * Math.abs(Math.sin(t * 3)); ctx.fillStyle = C.red; ctx.beginPath(); ctx.arc(375, H - 77, 14, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
    text('PLAYRONDO.APP', W - 50, H - 50, 76, C.green, 'right');
}

function countdown(local) {
    // local: 0..3 segundos. Velo oscuro detrás para que el número se lea sobre las pistas
    const n = 3 - Math.floor(local);
    if (n < 1) return;
    const frac = local % 1;
    const scale = 1.4 - 0.4 * ease(frac);
    ctx.fillStyle = 'rgba(3,17,10,0.55)'; ctx.fillRect(0, 450, W, 1310);
    ctx.save(); ctx.globalAlpha = 1 - frac * 0.6; ctx.translate(W / 2, 1080); ctx.scale(scale, scale);
    text(String(n), 0, 160, 480, C.gold);
    ctx.restore();
}

function outro(t, lang) {
    const k = ease(t * 2);
    ctx.save(); ctx.globalAlpha = k;
    para(110, 1500, W - 220, 110, 16, C.green); text(TXT[lang].play, W / 2, 1585, 92, C.ink);
    text(TXT[lang].comment, W / 2, 1700, 64, C.white);
    ctx.restore();
}

// ----- Formato "¿Adivinas el equipo?" -----
function teamClues(team, lang) {
    const color = (COLOR_NAMES[team.kitColor] || [team.kitColor, team.kitColor])[lang === 'es' ? 0 : 1];
    const num = n => n.toLocaleString(lang === 'es' ? 'es-ES' : 'en-GB');
    return [team.league, String(team.titles), color, `${num(team.budget)} M€`, String(team.yearsInFirst), team.brand, num(team.capacity)];
}

function drawTeam(t, d) {
    const L = TXT[d.lang];
    background(); brand();
    titleBar(L.teamTitle, 300, t / 1.2);
    const clues = teamClues(d.answer, d.lang);
    const reveal = t >= 15;
    clues.forEach((v, i) => {
        const start = 1.6 + i * 1.3;
        const k = ease((t - start) / 0.45);
        if (k <= 0) return;
        const y = 480 + i * 150;
        ctx.save(); ctx.globalAlpha = k; ctx.translate((1 - k) * -140, 0);
        para(70, y, 400, 124, 14, C.green);
        text(L.labels[i], 270, y + 90, fitText(L.labels[i], 340, 66), C.ink);
        para(450, y, 560, 124, 14, 'rgba(255,255,255,0.12)');
        text(v, 730, y + 96, fitText(v, 480, 96), C.white);
        ctx.restore();
    });
    if (t >= 11.6 && t < 14.6) countdown(t - 11.6);
    if (reveal) {
        const k = ease((t - 15) / 0.6);
        ctx.save(); ctx.globalAlpha = k;
        // Fondo oscuro sobre las pistas para que la respuesta destaque
        ctx.fillStyle = 'rgba(3,17,10,0.9)'; ctx.fillRect(0, 450, W, 1310);
        ctx.fillStyle = 'rgba(46,213,115,0.14)'; ctx.fillRect(0, 740, W, 660);
        const size = 300 + 40 * k;
        if (d.crest) {
            ctx.fillStyle = C.white; ctx.beginPath(); ctx.roundRect(W / 2 - size / 2 - 20, 800, size + 40, size + 40, 24); ctx.fill();
            const r = Math.min(size / d.crest.width, size / d.crest.height);
            ctx.drawImage(d.crest, W / 2 - d.crest.width * r / 2, 820 + (size - d.crest.height * r) / 2, d.crest.width * r, d.crest.height * r);
        }
        text(L.answer, W / 2, 790, 70, C.green);
        const nameSize = fitText(d.answer.name.toUpperCase(), W - 140, 140);
        text(d.answer.name.toUpperCase(), W / 2, 1320, nameSize, C.white);
        ctx.restore();
        if (t >= 16.5) outro(t - 16.5, d.lang);
    }
    bottomBar(t, d.lang);
}

// ----- Formato "¿Quién es esta leyenda?" -----
function drawLegend(t, d) {
    const L = TXT[d.lang];
    background(); brand();
    titleBar(L.legendTitle, 300, t / 1.2);
    const reveal = t >= 15;
    // Foto pixelada que se va aclarando (funciona en todos los navegadores)
    const box = { x: 140, y: 470, w: 800, h: 800 };
    if (d.photo) {
        const progress = reveal ? 1 : clamp01((t - 1.2) / 10);
        // De 6 a 40 "píxeles" de lado: se mantiene difícil hasta el final de la cuenta atrás
        const pixels = reveal ? 800 : Math.round(6 + Math.pow(progress, 3) * 34);
        const off = d.off; const octx = off.getContext('2d');
        const src = d.photo; const s = Math.min(src.width, src.height);
        const sx = (src.width - s) / 2, sy = Math.max(0, (src.height - s) * 0.2);
        off.width = pixels; off.height = pixels;
        octx.imageSmoothingEnabled = true; octx.drawImage(src, sx, sy, s, s, 0, 0, pixels, pixels);
        ctx.save(); ctx.imageSmoothingEnabled = reveal; ctx.drawImage(off, 0, 0, pixels, pixels, box.x, box.y, box.w, box.h); ctx.restore();
    }
    ctx.strokeStyle = C.green; ctx.lineWidth = 8;
    [[box.x + 20, box.y + 20, 1, 1], [box.x + box.w - 20, box.y + 20, -1, 1], [box.x + 20, box.y + box.h - 20, 1, -1], [box.x + box.w - 20, box.y + box.h - 20, -1, -1]].forEach(([x, y, sx, sy]) => {
        ctx.beginPath(); ctx.moveTo(x, y + 60 * sy); ctx.lineTo(x, y); ctx.lineTo(x + 60 * sx, y); ctx.stroke();
    });
    const country = d.lang === 'es' ? d.answer.country : d.answer.countryEn;
    [[L.country, country.toUpperCase(), 5], [L.born, String(d.answer.birthYear), 8]].forEach(([k, v, start], i) => {
        const e = ease((t - start) / 0.5);
        if (e <= 0 || reveal) return;
        const y = 1310 + i * 120;
        ctx.save(); ctx.globalAlpha = e; ctx.translate((1 - e) * -140, 0);
        para(70, y, 330, 100, 14, C.green); text(k, 235, y + 76, fitText(k, 280, 64), C.ink);
        para(380, y, 630, 100, 14, C.white); text(v, 695, y + 80, fitText(v, 560, 84), C.top);
        ctx.restore();
    });
    if (t >= 11.6 && t < 14.6) countdown(t - 11.6);
    if (reveal) {
        const k = ease((t - 15) / 0.6);
        ctx.save(); ctx.globalAlpha = k;
        para(70, 1300, W - 140, 150, 18, C.white);
        text(d.answer.name.toUpperCase(), W / 2, 1410, fitText(d.answer.name.toUpperCase(), W - 220, 130), C.top);
        ctx.restore();
        if (t >= 16.5) outro(t - 16.5, d.lang);
    }
    bottomBar(t, d.lang);
}

const DURATION = 19.5;

// ---------- Estado, vista previa y grabación ----------
let current = null;
let anim = null;

async function prepare() {
    const format = document.getElementById('format').value;
    const lang = document.getElementById('lang').value;
    const source = document.getElementById('source').value;
    const answer = pickAnswer(format, source);
    const d = { format, lang, answer, off: document.createElement('canvas') };
    setStatus('Cargando imágenes…');
    if (format === 'team') d.crest = await loadImage(crestUrls(answer));
    else d.photo = await loadImage([answer.photoUrl]);
    document.getElementById('answer-peek').textContent = `Respuesta del vídeo: ${answer.name}`;
    document.getElementById('caption').value = TXT[lang].caption(format);
    setStatus(format === 'team' && !d.crest ? 'Aviso: no se pudo cargar el escudo; el vídeo saldrá sin él.' : '');
    current = d;
    return d;
}

function drawFrame(t, d) { (d.format === 'team' ? drawTeam : drawLegend)(t, d); }

function play(d, onEnd) {
    cancelAnimationFrame(anim);
    const start = performance.now();
    const step = () => {
        const t = (performance.now() - start) / 1000;
        drawFrame(Math.min(t, DURATION), d);
        if (t < DURATION) anim = requestAnimationFrame(step); else if (onEnd) onEnd();
    };
    step();
}

function setStatus(s) { document.getElementById('status').textContent = s; }

document.getElementById('preview-btn').addEventListener('click', async () => {
    const d = await prepare();
    play(d);
});

document.getElementById('record-btn').addEventListener('click', async () => {
    const btn = document.getElementById('record-btn');
    btn.disabled = true;
    document.getElementById('share-btn').hidden = true;
    document.getElementById('download-link').hidden = true;
    const d = await prepare();
    const mime = ['video/mp4;codecs=avc1', 'video/mp4', 'video/webm;codecs=vp9', 'video/webm'].find(m => MediaRecorder.isTypeSupported(m));
    const ext = mime.startsWith('video/mp4') ? 'mp4' : 'webm';
    const stream = canvas.captureStream(FPS);
    const rec = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 8_000_000 });
    const chunks = [];
    rec.ondataavailable = e => e.data.size && chunks.push(e.data);
    rec.onstop = () => {
        const blob = new Blob(chunks, { type: mime.split(';')[0] });
        const name = `rondo-${d.format}-${dateKey(0)}.${ext}`;
        const link = document.getElementById('download-link');
        link.href = URL.createObjectURL(blob); link.download = name; link.hidden = false;
        const file = new File([blob], name, { type: blob.type });
        const shareBtn = document.getElementById('share-btn');
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            shareBtn.hidden = false;
            shareBtn.onclick = () => navigator.share({ files: [file], text: document.getElementById('caption').value }).catch(() => {});
        }
        window.__lastVideo = blob;
        setStatus(`Vídeo listo (${ext.toUpperCase()}, ${(blob.size / 1048576).toFixed(1)} MB).`);
        btn.disabled = false;
    };
    setStatus('Grabando… (unos 20 segundos, no cambies de pestaña)');
    rec.start(500);
    play(d, () => setTimeout(() => rec.stop(), 300));
});

document.getElementById('copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('caption').value).then(() => setStatus('Texto copiado.'));
});

// Primer fotograma al cargar
document.fonts.load('700 100px Teko').then(async () => { const d = await prepare(); drawFrame(0.9, d); });
