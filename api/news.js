// ==========================================================
// Función de Vercel: /api/news
// Lee los titulares de varios feeds RSS de fútbol y los devuelve en JSON
// para la barra "RONDO TV". Solo titular, medio y enlace (nunca el texto).
// La respuesta se cachea en Vercel 30 minutos.
// ==========================================================

const FEEDS = {
    es: [
        { source: 'MARCA', url: 'https://e00-marca.uecdn.es/rss/futbol/primera-division.xml' },
        { source: 'AS', url: 'https://feeds.as.com/mrss-s/pages/as/site/as.com/section/futbol/portada/' },
        { source: 'MUNDO DEPORTIVO', url: 'https://www.mundodeportivo.com/rss/futbol.xml' }
    ],
    en: [
        { source: 'BBC SPORT', url: 'https://feeds.bbci.co.uk/sport/football/rss.xml' },
        { source: 'THE GUARDIAN', url: 'https://www.theguardian.com/football/rss' },
        { source: 'ESPN', url: 'https://www.espn.com/espn/rss/soccer/news' }
    ]
};
const PER_FEED = 4;
const TIMEOUT_MS = 5000;
// Se descartan titulares de más de 3 días (por si algún feed deja de actualizarse)
const MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000;
// Entradas que no son noticias (p. ej. "Portada de hoy de la Edición...")
const SKIP_TITLE = /^portada de hoy/i;

function decodeEntities(text) {
    return text
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
        .replace(/<[^>]+>/g, '')
        .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
        .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
        .replace(/&quot;/g, '"')
        .replace(/&apos;|&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/\s+/g, ' ')
        .trim();
}

function tag(block, name) {
    const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i'));
    return m ? decodeEntities(m[1]) : '';
}

function parseItems(xml, source) {
    const items = [];
    const re = /<item[\s>][\s\S]*?<\/item>/gi;
    let m;
    while ((m = re.exec(xml)) && items.length < PER_FEED) {
        const title = tag(m[0], 'title');
        const link = tag(m[0], 'link');
        const date = Date.parse(tag(m[0], 'pubDate'));
        if (!title || SKIP_TITLE.test(title) || !/^https?:\/\//.test(link)) continue;
        if (!Number.isNaN(date) && Date.now() - date > MAX_AGE_MS) continue;
        items.push({ source, title, link });
    }
    return items;
}

async function fetchFeed(feed) {
    try {
        const res = await fetch(feed.url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (compatible; RondoNews/1.0; +https://playrondo.app)' },
            signal: AbortSignal.timeout(TIMEOUT_MS)
        });
        if (!res.ok) return [];
        return parseItems(await res.text(), feed.source);
    } catch {
        return [];
    }
}

// Intercala los medios: 1º de cada medio, luego 2º de cada medio...
function interleave(lists) {
    const out = [];
    for (let i = 0; i < PER_FEED; i++) {
        for (const list of lists) if (list[i]) out.push(list[i]);
    }
    return out;
}

module.exports = async function handler(req, res) {
    const [es, en] = await Promise.all(
        ['es', 'en'].map(async lang => interleave(await Promise.all(FEEDS[lang].map(fetchFeed))))
    );
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
    res.status(200).json({ es, en, updated: new Date().toISOString() });
};
