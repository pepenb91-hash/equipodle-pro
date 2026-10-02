// ==========================================================
// Página de soluciones: retos de ayer y de los 6 días anteriores
// Usa los mismos datos y la misma elección diaria que el juego (data.js),
// así que las respuestas coinciden siempre. Nunca muestra el reto de hoy.
// ==========================================================

const ANSWER_DAYS = 7;

const ANSWER_TEXT = {
    es: { team: 'Equipo', legend: 'Leyenda', decade: 'Decade', yesterday: 'Ayer' },
    en: { team: 'Team', legend: 'Legend', decade: 'Decade', yesterday: 'Yesterday' }
};

function dateKeyDaysAgo(n) {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return { date: d, key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` };
}

// Mismo orden de fuentes de escudo que el juego
function shieldUrl(team) {
    if (team.logoUrl) return team.logoUrl;
    return `https://en.wikipedia.org/wiki/Special:FilePath/${encodeURIComponent(team.wikiFile)}?width=150`;
}

function el(tag, className, text) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (text !== undefined) e.textContent = text;
    return e;
}

function answerRow(label, ...content) {
    const row = el('div', 'answer-row');
    row.append(el('span', 'answer-tag', label), ...content);
    return row;
}

function renderAnswers() {
    const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
    const t = ANSWER_TEXT[lang];
    const container = document.getElementById('answers');

    for (let i = 1; i <= ANSWER_DAYS; i++) {
        const { date, key } = dateKeyDaysAgo(i);
        const team = getTeamForDate(key);
        const legend = getLegendForDate(key);
        const events = [...getDecadeEventsForDate(key)].sort((a, b) => a.year - b.year);

        const day = el('section', 'day');
        const label = date.toLocaleDateString(lang, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        day.append(el('h2', 'day-date', i === 1 ? `${t.yesterday} · ${label}` : label));

        const crest = el('img', 'answer-img');
        crest.src = shieldUrl(team);
        crest.alt = team.name;
        crest.loading = 'lazy';
        day.append(answerRow(`⚽ ${t.team}`, crest, el('span', 'answer-name', team.name)));

        const photo = el('img', 'answer-img photo');
        photo.src = legend.photoUrl;
        photo.alt = legend.name;
        photo.loading = 'lazy';
        const country = lang === 'es' ? legend.country : legend.countryEn;
        day.append(answerRow(`⭐ ${t.legend}`, photo, el('span', 'answer-name', `${legend.name} (${country})`)));

        const list = el('ol', 'decade-list');
        events.forEach(e => {
            const li = el('li');
            li.append(el('span', 'year', e.year), el('span', '', e.text[lang]));
            list.append(li);
        });
        day.append(answerRow(`📅 ${t.decade}`, list));

        container.append(day);
    }
}

renderAnswers();
