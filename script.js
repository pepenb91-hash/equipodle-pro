// ---------- Diccionarios de traducción ----------
const i18n = {
    es: {
        attemptsTitle: "Número de intentos",
        inputPlaceholder: "Escribe el nombre de un equipo...",
        colLeague: "Liga",
        colTitles: "Títulos",
        colColor: "Color",
        colBudget: "Valor €",
        colYears: "Años en 1ª",
        colBrand: "Marca",
        colStadium: "Estadio",
        victoryTitle: "¡Victoria!",
        victoryTextBefore: "Has adivinado el equipo en",
        victoryTextAfter: "intentos",
        nextGameIn: "Próximo equipo en",
        statsTitle: "Estadísticas",
        statPlayed: "Partidas",
        statWins: "Victorias",
        statWinRate: "% Victoria",
        statCurrentStreak: "Racha actual",
        statMaxStreak: "Mejor racha",
        statAvg: "Media intentos",
        closeBtn: "Cerrar",
        shareBtn: "Compartir resultado",
        levelUpTitle: "¡NUEVO NIVEL!",
        infoTitle: "Cómo jugar",
        tier0: "Sin racha",
        tier1: "En juego",
        tier2: "Calentando",
        tier3: "En llamas",
        tier4: "Imparable",
        tier5: "Eléctrico",
        tier6: "Diamante",
        tier7: "Leyenda"
    },
    en: {
        attemptsTitle: "Number of attempts",
        inputPlaceholder: "Type a team name...",
        colLeague: "League",
        colTitles: "Titles",
        colColor: "Color",
        colBudget: "Squad €",
        colYears: "Years in Top",
        colBrand: "Brand",
        colStadium: "Stadium",
        victoryTitle: "Victory!",
        victoryTextBefore: "You guessed the team in",
        victoryTextAfter: "attempts",
        nextGameIn: "Next team in",
        statsTitle: "Statistics",
        statPlayed: "Played",
        statWins: "Wins",
        statWinRate: "Win %",
        statCurrentStreak: "Current streak",
        statMaxStreak: "Best streak",
        statAvg: "Avg attempts",
        closeBtn: "Close",
        shareBtn: "Share result",
        levelUpTitle: "NEW LEVEL!",
        infoTitle: "How to play",
        tier0: "No streak",
        tier1: "Warming up",
        tier2: "Heating up",
        tier3: "On fire",
        tier4: "Unstoppable",
        tier5: "Electric",
        tier6: "Diamond",
        tier7: "Legend"
    }
};

const colorTranslations = {
    "Blanco":       { es: "Blanco",        en: "White" },
    "Negro":        { es: "Negro",         en: "Black" },
    "Rojo":         { es: "Rojo",          en: "Red" },
    "Azul":         { es: "Azul",          en: "Blue" },
    "Amarillo":     { es: "Amarillo",      en: "Yellow" },
    "Verde":        { es: "Verde",         en: "Green" },
    "Violeta":      { es: "Violeta",       en: "Purple" },
    "Granate":      { es: "Granate",       en: "Maroon" },
    "Naranja":      { es: "Naranja",       en: "Orange" },
    "Celeste":      { es: "Celeste",       en: "Sky Blue" },
    "Rojiblanco":   { es: "Rojo-Blanco",   en: "Red-White" },
    "Azulgrana":    { es: "Azul-Granate",  en: "Blue-Maroon" },
    "Rojinegro":    { es: "Rojo-Negro",    en: "Red-Black" },
    "Blanquinegro": { es: "Blanco-Negro",  en: "White-Black" },
    "Verdiblanco":  { es: "Verde-Blanco",  en: "Green-White" },
    "Blanquiazul":  { es: "Blanco-Azul",   en: "White-Blue" },
    "Azulnegro":    { es: "Azul-Negro",    en: "Blue-Black" }
};

// Abreviaturas cortas para móvil (pantallas estrechas)
const colorShort = {
    "Blanco":       { es: "Blanc",   en: "White" },
    "Negro":        { es: "Negro",   en: "Black" },
    "Rojo":         { es: "Rojo",    en: "Red" },
    "Azul":         { es: "Azul",    en: "Blue" },
    "Amarillo":     { es: "Amaril",  en: "Yellow" },
    "Verde":        { es: "Verde",   en: "Green" },
    "Violeta":      { es: "Violet",  en: "Purple" },
    "Granate":      { es: "Granat",  en: "Maroon" },
    "Naranja":      { es: "Naranj",  en: "Orange" },
    "Celeste":      { es: "Celest",  en: "Sky" },
    "Rojiblanco":   { es: "R-Blan",  en: "R-Wht" },
    "Azulgrana":    { es: "A-Gran",  en: "B-Mrn" },
    "Rojinegro":    { es: "R-Negr",  en: "R-Blk" },
    "Blanquinegro": { es: "B-Negr",  en: "W-Blk" },
    "Verdiblanco":  { es: "V-Blan",  en: "G-Wht" },
    "Blanquiazul":  { es: "B-Azul",  en: "W-Blu" },
    "Azulnegro":    { es: "A-Negr",  en: "B-Blk" }
};

let currentLang = 'es';

// ¿Estamos en móvil? Devuelve true si la ventana es estrecha.
function isMobile() {
    return window.innerWidth <= 700;
}

function translateColor(color) {
    // En móvil usamos abreviatura corta
    if (isMobile()) {
        const shortEntry = colorShort[color];
        if (shortEntry) return shortEntry[currentLang];
    }
    // En desktop, nombre completo
    const entry = colorTranslations[color];
    return entry ? entry[currentLang] : color;
}

// ---------- Contenido del modal "Cómo jugar" ----------
const howToPlayContent = {
    es: `
        <p>Cada día hay un <strong>equipo secreto</strong> de las 5 grandes ligas europeas. Tu misión: adivinar cuál es con el menor número de intentos posible.</p>

        <h3>Cómo funciona</h3>
        <p>Escribe el nombre de cualquier equipo en el buscador. Al seleccionarlo, aparecerá una fila con <strong>7 pistas</strong> que comparan tu equipo con el secreto:</p>
        <p><strong>Liga · Títulos · Color · Presupuesto · Años en primera · Marca · Estadio</strong></p>

        <h3>Qué significa cada color</h3>
        <div class="info-legend">
            <div class="info-legend-swatch correct">✓</div>
            <div class="info-legend-text"><strong>Verde:</strong> ¡acertado! Coincide con el equipo secreto.</div>
        </div>
        <div class="info-legend">
            <div class="info-legend-swatch partial">~</div>
            <div class="info-legend-text"><strong>Amarillo:</strong> estás cerca. El valor es similar o comparte color base.</div>
        </div>
        <div class="info-legend">
            <div class="info-legend-swatch wrong">✗</div>
            <div class="info-legend-text"><strong>Rojo:</strong> no coincide.</div>
        </div>

        <h3>Las flechas</h3>
        <div class="info-legend">
            <div class="info-legend-swatch wrong">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 12 L86 54 L66 54 L66 88 L34 88 L34 54 L14 54 Z" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>
            </div>
            <div class="info-legend-text"><strong>Flecha arriba:</strong> el valor del equipo secreto es <em>mayor</em>.</div>
        </div>
        <div class="info-legend">
            <div class="info-legend-swatch wrong">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(180deg);"><path d="M50 12 L86 54 L66 54 L66 88 L34 88 L34 54 L14 54 Z" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>
            </div>
            <div class="info-legend-text"><strong>Flecha abajo:</strong> el valor del equipo secreto es <em>menor</em>.</div>
        </div>

        <h3>Modo diario</h3>
        <p>Solo puedes jugar <strong>una partida al día</strong>. El equipo secreto es el mismo para todo el mundo y cambia a medianoche (hora local).</p>

        <h3>Racha de victorias</h3>
        <p>Cada día que aciertas, tu racha sube. Al alcanzar ciertos hitos (3, 5, 10, 20, 50, 100 y 200 victorias), tu balón evoluciona visualmente. ¿Llegarás a <strong>Leyenda</strong>?</p>
    `,
    en: `
        <p>Every day there is a <strong>secret team</strong> from Europe's top 5 leagues. Your mission: figure out which one with as few attempts as possible.</p>

        <h3>How it works</h3>
        <p>Type any team name in the search box. When you select it, a row appears with <strong>7 clues</strong> comparing your team to the secret one:</p>
        <p><strong>League · Titles · Color · Budget · Years in top flight · Brand · Stadium</strong></p>

        <h3>What each color means</h3>
        <div class="info-legend">
            <div class="info-legend-swatch correct">✓</div>
            <div class="info-legend-text"><strong>Green:</strong> correct! Matches the secret team.</div>
        </div>
        <div class="info-legend">
            <div class="info-legend-swatch partial">~</div>
            <div class="info-legend-text"><strong>Yellow:</strong> you're close. Value is similar or shares a base color.</div>
        </div>
        <div class="info-legend">
            <div class="info-legend-swatch wrong">✗</div>
            <div class="info-legend-text"><strong>Red:</strong> doesn't match.</div>
        </div>

        <h3>The arrows</h3>
        <div class="info-legend">
            <div class="info-legend-swatch wrong">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 12 L86 54 L66 54 L66 88 L34 88 L34 54 L14 54 Z" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>
            </div>
            <div class="info-legend-text"><strong>Up arrow:</strong> the secret team's value is <em>higher</em>.</div>
        </div>
        <div class="info-legend">
            <div class="info-legend-swatch wrong">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(180deg);"><path d="M50 12 L86 54 L66 54 L66 88 L34 88 L34 54 L14 54 Z" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>
            </div>
            <div class="info-legend-text"><strong>Down arrow:</strong> the secret team's value is <em>lower</em>.</div>
        </div>

        <h3>Daily mode</h3>
        <p>You can only play <strong>one game per day</strong>. The secret team is the same for everyone and changes at midnight (local time).</p>

        <h3>Winning streak</h3>
        <p>Every day you get it right, your streak grows. When reaching certain milestones (3, 5, 10, 20, 50, 100 and 200 wins), your ball evolves visually. Will you reach <strong>Legend</strong>?</p>
    `
};

// ---------- Tiers de racha ----------
const STREAK_TIERS = [
    { tier: 0, minStreak: 0,   ball: "🏐", extra: "",   nameKey: "tier0" },
    { tier: 1, minStreak: 3,   ball: "⚽", extra: "",   nameKey: "tier1" },
    { tier: 2, minStreak: 5,   ball: "⚽", extra: "✨", nameKey: "tier2" },
    { tier: 3, minStreak: 10,  ball: "⚽", extra: "🔥", nameKey: "tier3" },
    { tier: 4, minStreak: 20,  ball: "⚽", extra: "🔥", nameKey: "tier4" },
    { tier: 5, minStreak: 50,  ball: "⚽", extra: "⚡", nameKey: "tier5" },
    { tier: 6, minStreak: 100, ball: "⚽", extra: "💎", nameKey: "tier6" },
    { tier: 7, minStreak: 200, ball: "⚽", extra: "👑", nameKey: "tier7" }
];

function getTierForStreak(streak) {
    let result = STREAK_TIERS[0];
    for (const t of STREAK_TIERS) {
        if (streak >= t.minStreak) result = t;
    }
    return result;
}

// ---------- Iconos de flecha SVG ----------
const ARROW_SVG_UP = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M50 12 L86 54 L66 54 L66 88 L34 88 L34 54 L14 54 Z"
        fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
</svg>`;
const ARROW_SVG_DOWN = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="transform: rotate(180deg);">
  <path d="M50 12 L86 54 L66 54 L66 88 L34 88 L34 54 L14 54 Z"
        fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
</svg>`;

// ---------- EQUIPOS ----------
const teams = [
    // ESPAÑA
    { name: "Real Madrid", slug: "real-madrid", wikiFile: "Real_Madrid_CF.svg", league: "LaLiga", titles: 101, kitColor: "Blanco", budget: 939, yearsInFirst: 93, brand: "Adidas", capacity: 81044 },
    { name: "FC Barcelona", slug: "fc-barcelona", wikiFile: "FC_Barcelona_(crest).svg", league: "LaLiga", titles: 99, kitColor: "Azulgrana", budget: 859, yearsInFirst: 93, brand: "Nike", capacity: 99354 },
    { name: "Atlético Madrid", slug: "atletico-madrid", wikiFile: "Atletico_Madrid_2017_logo.svg", league: "LaLiga", titles: 33, kitColor: "Rojiblanco", budget: 378, yearsInFirst: 87, brand: "Nike", capacity: 70460 },
    { name: "Sevilla FC", slug: "sevilla", wikiFile: "Sevilla_FC_logo.svg", league: "LaLiga", titles: 15, kitColor: "Blanco", budget: 190, yearsInFirst: 80, brand: "Castore", capacity: 43883 },
    { name: "Real Sociedad", slug: "real-sociedad", wikiFile: "Real_Sociedad_logo.svg", league: "LaLiga", titles: 6, kitColor: "Blanquiazul", budget: 145, yearsInFirst: 77, brand: "Macron", capacity: 39500 },
    { name: "Athletic Club", slug: "athletic-bilbao", wikiFile: "Club_Athletic_Bilbao_logo.svg", league: "LaLiga", titles: 35, kitColor: "Rojiblanco", budget: 128, yearsInFirst: 93, brand: "Castore", capacity: 53289 },
    { name: "Real Betis", slug: "real-betis", wikiFile: "Real_betis_logo.svg", league: "LaLiga", titles: 4, kitColor: "Verdiblanco", budget: 135, yearsInFirst: 58, brand: "Hummel", capacity: 60721 },
    { name: "Villarreal CF", slug: "villarreal", wikiFile: "Villarreal_CF_logo-en.svg", league: "LaLiga", titles: 1, kitColor: "Amarillo", budget: 110, yearsInFirst: 25, brand: "Joma", capacity: 23500 },
    { name: "Valencia CF", slug: "valencia", wikiFile: "Valenciacf.svg", league: "LaLiga", titles: 23, kitColor: "Blanquinegro", budget: 95, yearsInFirst: 89, brand: "Puma", capacity: 49430 },
    { name: "Girona FC", slug: "girona", wikiFile: "Girona_FC_new_crest.svg", league: "LaLiga", titles: 0, kitColor: "Rojiblanco", budget: 65, yearsInFirst: 4, brand: "Puma", capacity: 14600 },
    { name: "Osasuna", slug: "osasuna", wikiFile: "Osasuna_logo.svg", league: "LaLiga", titles: 0, kitColor: "Rojo", budget: 55, yearsInFirst: 42, brand: "Macron", capacity: 23576 },
    { name: "Getafe CF", slug: "getafe", wikiFile: "Getafe_logo.svg", league: "LaLiga", titles: 0, kitColor: "Azul", budget: 50, yearsInFirst: 19, brand: "Joma", capacity: 16500 },
    { name: "Celta de Vigo", slug: "celta-vigo", wikiFile: "RC_Celta_de_Vigo_logo.svg", league: "LaLiga", titles: 0, kitColor: "Celeste", budget: 60, yearsInFirst: 58, brand: "Hummel", capacity: 24791 },
    { name: "RCD Mallorca", slug: "rcd-mallorca", wikiFile: "Rcd_mallorca.svg", league: "LaLiga", titles: 1, kitColor: "Rojo", budget: 45, yearsInFirst: 31, brand: "Nike", capacity: 23142 },
    { name: "Rayo Vallecano", slug: "rayo-vallecano", wikiFile: "Rayo_Vallecano_logo.svg", league: "LaLiga", titles: 0, kitColor: "Blanco", budget: 40, yearsInFirst: 21, brand: "Umbro", capacity: 14708 },
    { name: "Deportivo Alavés", slug: "alaves", wikiFile: "Deportivo_Alaves_logo_(2020).svg", league: "LaLiga", titles: 0, kitColor: "Blanquiazul", budget: 35, yearsInFirst: 18, brand: "Puma", capacity: 19840 },
    { name: "UD Las Palmas", slug: "las-palmas", wikiFile: "UD_Las_Palmas_logo.svg", league: "LaLiga", titles: 0, kitColor: "Amarillo", budget: 30, yearsInFirst: 35, brand: "Hummel", capacity: 32400 },
    { name: "Real Valladolid", slug: "real-valladolid", wikiFile: "Real_Valladolid_Logo.svg", league: "LaLiga", titles: 1, kitColor: "Violeta", budget: 32, yearsInFirst: 46, brand: "Kappa", capacity: 27618 },
    { name: "Leganés", slug: "leganes", wikiFile: "CD_Leganés_logo.svg", league: "LaLiga", titles: 0, kitColor: "Blanquiazul", budget: 28, yearsInFirst: 4, brand: "Joma", capacity: 12450 },
    { name: "RCD Espanyol", slug: "espanyol", wikiFile: "RCD_Espanyol_2024_Logo.svg", league: "LaLiga", titles: 4, kitColor: "Blanquiazul", budget: 45, yearsInFirst: 87, brand: "Kelme", capacity: 40000 },

    // INGLATERRA
    { name: "Manchester City", slug: "manchester-city", wikiFile: "Manchester_City_FC_badge.svg", league: "Premier", titles: 34, kitColor: "Celeste", budget: 850, yearsInFirst: 96, brand: "Puma", capacity: 53400 },
    { name: "Liverpool", slug: "liverpool", wikiFile: "Liverpool_FC.svg", league: "Premier", titles: 71, kitColor: "Rojo", budget: 700, yearsInFirst: 110, brand: "Nike", capacity: 61276 },
    { name: "Arsenal", slug: "arsenal", wikiFile: "Arsenal_FC.svg", league: "Premier", titles: 48, kitColor: "Rojo", budget: 650, yearsInFirst: 107, brand: "Adidas", capacity: 60704 },
    { name: "Manchester United", slug: "manchester-united", wikiFile: "Manchester_United_FC_crest.svg", league: "Premier", titles: 67, kitColor: "Rojo", budget: 780, yearsInFirst: 100, brand: "Adidas", capacity: 74310 },
    { name: "Chelsea", slug: "chelsea", wikiFile: "Chelsea_FC.svg", league: "Premier", titles: 34, kitColor: "Azul", budget: 620, yearsInFirst: 90, brand: "Nike", capacity: 40341 },
    { name: "Tottenham", slug: "tottenham", wikiFile: "Tottenham_Hotspur.svg", league: "Premier", titles: 26, kitColor: "Blanco", budget: 550, yearsInFirst: 90, brand: "Nike", capacity: 62850 },
    { name: "Aston Villa", slug: "aston-villa", wikiFile: "Aston_Villa_FC_new_crest.svg", league: "Premier", titles: 25, kitColor: "Granate", budget: 300, yearsInFirst: 111, brand: "Adidas", capacity: 42640 },
    { name: "Newcastle", slug: "newcastle", wikiFile: "Newcastle_United_Logo.svg", league: "Premier", titles: 14, kitColor: "Blanquinegro", budget: 350, yearsInFirst: 93, brand: "Adidas", capacity: 52305 },
    { name: "West Ham", slug: "west-ham", wikiFile: "West_Ham_United_FC_logo.svg", league: "Premier", titles: 6, kitColor: "Granate", budget: 200, yearsInFirst: 67, brand: "Umbro", capacity: 62500 },
    { name: "Everton", slug: "everton", wikiFile: "Everton_FC_logo.svg", league: "Premier", titles: 24, kitColor: "Azul", budget: 140, yearsInFirst: 122, brand: "Castore", capacity: 39572 },
    { name: "Brighton", slug: "brighton", wikiFile: "Brighton_&_Hove_Albion_logo.svg", league: "Premier", titles: 0, kitColor: "Blanquiazul", budget: 150, yearsInFirst: 11, brand: "Nike", capacity: 31800 },
    { name: "Wolves", slug: "wolves", wikiFile: "Wolverhampton_Wanderers.svg", league: "Premier", titles: 13, kitColor: "Amarillo", budget: 120, yearsInFirst: 69, brand: "Sudu", capacity: 32050 },
    { name: "Fulham", slug: "fulham", wikiFile: "Fulham_FC_(shield).svg", league: "Premier", titles: 0, kitColor: "Blanco", budget: 110, yearsInFirst: 29, brand: "Adidas", capacity: 25700 },
    { name: "Crystal Palace", slug: "crystal-palace", wikiFile: "Crystal_Palace_FC_logo_(2022).svg", league: "Premier", titles: 0, kitColor: "Azulgrana", budget: 100, yearsInFirst: 25, brand: "Macron", capacity: 25486 },
    { name: "Bournemouth", slug: "bournemouth", wikiFile: "AFC_Bournemouth_(2013).svg", league: "Premier", titles: 0, kitColor: "Rojinegro", budget: 85, yearsInFirst: 8, brand: "Umbro", capacity: 11307 },
    { name: "Brentford", slug: "brentford", wikiFile: "Brentford_FC_crest.svg", league: "Premier", titles: 0, kitColor: "Rojiblanco", budget: 80, yearsInFirst: 8, brand: "Umbro", capacity: 17250 },
    { name: "Nottingham Forest", slug: "nottingham-forest", wikiFile: "Nottingham_Forest_F.C._logo.svg", league: "Premier", titles: 13, kitColor: "Rojo", budget: 90, yearsInFirst: 58, brand: "Adidas", capacity: 30445 },
    { name: "Leicester City", slug: "leicester-city", wikiFile: "Leicester_City_crest.svg", league: "Premier", titles: 7, kitColor: "Azul", budget: 110, yearsInFirst: 56, brand: "Adidas", capacity: 32261 },
    { name: "Ipswich Town", slug: "ipswich", wikiFile: "Ipswich_Town.svg", league: "Premier", titles: 3, kitColor: "Azul", budget: 45, yearsInFirst: 27, brand: "Umbro", capacity: 29673 },
    { name: "Southampton", slug: "southampton", wikiFile: "FC_Southampton.svg", league: "Premier", titles: 1, kitColor: "Rojiblanco", budget: 70, yearsInFirst: 46, brand: "Puma", capacity: 32384 },

    // ITALIA
    { name: "Inter Milan", slug: "inter", wikiFile: "FC_Internazionale_Milano_2021.svg", league: "Serie A", titles: 46, kitColor: "Azulnegro", budget: 500, yearsInFirst: 93, brand: "Nike", capacity: 75817 },
    { name: "AC Milan", slug: "ac-milan", wikiFile: "Logo_of_AC_Milan.svg", league: "Serie A", titles: 49, kitColor: "Rojinegro", budget: 450, yearsInFirst: 91, brand: "Puma", capacity: 75817 },
    { name: "Juventus", slug: "juventus", wikiFile: "Juventus_FC_2017_logo.svg", league: "Serie A", titles: 71, kitColor: "Blanquinegro", budget: 550, yearsInFirst: 92, brand: "Adidas", capacity: 41507 },
    { name: "Napoli", slug: "napoli", wikiFile: "SSC_Neapel.svg", league: "Serie A", titles: 13, kitColor: "Celeste", budget: 280, yearsInFirst: 79, brand: "EA7", capacity: 54726 },
    { name: "AS Roma", slug: "roma", wikiFile: "AS_Roma_logo_(2017).svg", league: "Serie A", titles: 16, kitColor: "Granate", budget: 250, yearsInFirst: 92, brand: "Adidas", capacity: 72698 },
    { name: "Lazio", slug: "lazio", wikiFile: "S.S._Lazio_badge.svg", league: "Serie A", titles: 16, kitColor: "Celeste", budget: 190, yearsInFirst: 82, brand: "Mizuno", capacity: 70634 },
    { name: "Atalanta", slug: "atalanta", wikiFile: "AtalantaBC.svg", league: "Serie A", titles: 2, kitColor: "Azulnegro", budget: 150, yearsInFirst: 64, brand: "Joma", capacity: 21000 },
    { name: "Fiorentina", slug: "fiorentina", wikiFile: "ACF_Fiorentina_2.svg", league: "Serie A", titles: 10, kitColor: "Violeta", budget: 140, yearsInFirst: 87, brand: "Kappa", capacity: 43147 },
    { name: "Bologna", slug: "bologna", wikiFile: "Bologna_F.C._1909_logo.svg", league: "Serie A", titles: 10, kitColor: "Azulgrana", budget: 100, yearsInFirst: 78, brand: "Macron", capacity: 38279 },
    { name: "Torino", slug: "torino", wikiFile: "Torino_FC_Logo.svg", league: "Serie A", titles: 12, kitColor: "Granate", budget: 90, yearsInFirst: 81, brand: "Joma", capacity: 28177 },
    { name: "Udinese", slug: "udinese", wikiFile: "Udinese_Calcio_logo.svg", league: "Serie A", titles: 1, kitColor: "Blanquinegro", budget: 65, yearsInFirst: 52, brand: "Macron", capacity: 25144 },
    { name: "Monza", slug: "monza", wikiFile: "AC_Monza_logo_(2021).svg", league: "Serie A", titles: 0, kitColor: "Rojo", budget: 50, yearsInFirst: 3, brand: "Lotto", capacity: 16917 },
    { name: "Genoa", slug: "genoa", wikiFile: "Genoa_CFC_logo.svg", league: "Serie A", titles: 10, kitColor: "Rojinegro", budget: 60, yearsInFirst: 85, brand: "Kappa", capacity: 36598 },
    { name: "Lecce", slug: "lecce", wikiFile: "US_Lecce.svg", league: "Serie A", titles: 0, kitColor: "Amarillo", budget: 35, yearsInFirst: 19, brand: "M908", capacity: 31533 },
    { name: "Verona", slug: "verona", wikiFile: "Hellas_Verona_FC_logo_(2020).svg", league: "Serie A", titles: 1, kitColor: "Azul", budget: 40, yearsInFirst: 34, brand: "Joma", capacity: 39211 },
    { name: "Empoli", slug: "empoli", wikiFile: "Empoli_FC_logo.svg", league: "Serie A", titles: 0, kitColor: "Azul", budget: 30, yearsInFirst: 17, brand: "Kappa", capacity: 16284 },
    { name: "Cagliari", slug: "cagliari", wikiFile: "Cagliari_Calcio_1920.svg", league: "Serie A", titles: 1, kitColor: "Rojinegro", budget: 45, yearsInFirst: 43, brand: "EYE", capacity: 16416 },
    { name: "Parma", slug: "parma", wikiFile: "Logo_Parma_Calcio_1913_(adozione_2016).svg", league: "Serie A", titles: 8, kitColor: "Blanco", budget: 55, yearsInFirst: 28, brand: "Puma", capacity: 22352 },
    { name: "Como", slug: "como", wikiFile: "Como_1907_logo.svg", league: "Serie A", titles: 0, kitColor: "Azul", budget: 40, yearsInFirst: 14, brand: "Adidas", capacity: 13602 },
    { name: "Venezia", slug: "venezia", wikiFile: "Venezia_FC_logo_(2015).svg", league: "Serie A", titles: 1, kitColor: "Naranja", budget: 25, yearsInFirst: 14, brand: "Nocta", capacity: 11150 },

    // ALEMANIA
    { name: "Bayern Munich", slug: "bayern-munich", wikiFile: "FC_Bayern_München_logo_(2017).svg", league: "Bundesliga", titles: 84, kitColor: "Rojo", budget: 800, yearsInFirst: 60, brand: "Adidas", capacity: 75000 },
    { name: "Leverkusen", slug: "bayer-leverkusen", wikiFile: "Bayer_04_Leverkusen_logo.svg", league: "Bundesliga", titles: 4, kitColor: "Rojinegro", budget: 350, yearsInFirst: 46, brand: "Castore", capacity: 30210 },
    { name: "Borussia Dortmund", slug: "borussia-dortmund", wikiFile: "Borussia_Dortmund_logo.svg", league: "Bundesliga", titles: 22, kitColor: "Amarillo", budget: 480, yearsInFirst: 58, brand: "Puma", capacity: 81365 },
    { name: "RB Leipzig", slug: "rb-leipzig", wikiFile: "RB_Leipzig_2014_logo.svg", league: "Bundesliga", titles: 4, kitColor: "Blanco", budget: 380, yearsInFirst: 9, brand: "Puma", capacity: 47069 },
    { name: "Stuttgart", slug: "stuttgart", wikiFile: "VfB_Stuttgart_1893_Logo.svg", league: "Bundesliga", titles: 8, kitColor: "Blanco", budget: 180, yearsInFirst: 58, brand: "Jako", capacity: 60449 },
    { name: "Frankfurt", slug: "eintracht-frankfurt", wikiFile: "Eintracht_Frankfurt_Logo.svg", league: "Bundesliga", titles: 7, kitColor: "Rojinegro", budget: 200, yearsInFirst: 56, brand: "Nike", capacity: 58000 },
    { name: "Hoffenheim", slug: "hoffenheim", wikiFile: "Logo_TSG_Hoffenheim.svg", league: "Bundesliga", titles: 0, kitColor: "Azul", budget: 120, yearsInFirst: 17, brand: "Joma", capacity: 30150 },
    { name: "Werder Bremen", slug: "werder-bremen", wikiFile: "SV-Werder-Bremen-Logo.svg", league: "Bundesliga", titles: 16, kitColor: "Verdiblanco", budget: 90, yearsInFirst: 59, brand: "Hummel", capacity: 42100 },
    { name: "Freiburg", slug: "freiburg", wikiFile: "SC_Freiburg_logo.svg", league: "Bundesliga", titles: 0, kitColor: "Rojinegro", budget: 85, yearsInFirst: 25, brand: "Nike", capacity: 34700 },
    { name: "Wolfsburg", slug: "wolfsburg", wikiFile: "Logo-VfL-Wolfsburg.svg", league: "Bundesliga", titles: 3, kitColor: "Verde", budget: 130, yearsInFirst: 28, brand: "Nike", capacity: 30000 },
    { name: "Gladbach", slug: "borussia-monchengladbach", wikiFile: "Borussia_Mönchengladbach_logo.svg", league: "Bundesliga", titles: 10, kitColor: "Blanco", budget: 110, yearsInFirst: 57, brand: "Puma", capacity: 54022 },
    { name: "Union Berlin", slug: "union-berlin", wikiFile: "1._FC_Union_Berlin_Logo.svg", league: "Bundesliga", titles: 0, kitColor: "Rojo", budget: 75, yearsInFirst: 6, brand: "Adidas", capacity: 22012 },
    { name: "Mainz 05", slug: "mainz", wikiFile: "FSV_Mainz_05_Logo.svg", league: "Bundesliga", titles: 0, kitColor: "Rojo", budget: 55, yearsInFirst: 19, brand: "Jako", capacity: 33305 },
    { name: "Augsburg", slug: "augsburg", wikiFile: "Logo_FC_Augsburg.svg", league: "Bundesliga", titles: 0, kitColor: "Blanco", budget: 60, yearsInFirst: 14, brand: "Mizuno", capacity: 30660 },
    { name: "Bochum", slug: "bochum", wikiFile: "VfL_Bochum_logo.svg", league: "Bundesliga", titles: 0, kitColor: "Azul", budget: 35, yearsInFirst: 38, brand: "Mizuno", capacity: 26000 },
    { name: "Heidenheim", slug: "heidenheim", wikiFile: "1._FC_Heidenheim_1846.svg", league: "Bundesliga", titles: 0, kitColor: "Rojo", budget: 30, yearsInFirst: 2, brand: "Puma", capacity: 15000 },
    { name: "St. Pauli", slug: "st-pauli", wikiFile: "FC_St._Pauli_logo_(2018).svg", league: "Bundesliga", titles: 0, kitColor: "Negro", budget: 28, yearsInFirst: 9, brand: "Puma", capacity: 29546 },
    { name: "Holstein Kiel", slug: "holstein-kiel", wikiFile: "Holstein_Kiel_Logo.svg", league: "Bundesliga", titles: 1, kitColor: "Azul", budget: 22, yearsInFirst: 1, brand: "Puma", capacity: 15034 },

    // FRANCIA
    { name: "PSG", slug: "psg", wikiFile: "Paris_Saint-Germain_F.C..svg", league: "Ligue 1", titles: 51, kitColor: "Azul", budget: 750, yearsInFirst: 52, brand: "Nike", capacity: 47929 },
    { name: "Marseille", slug: "marseille", wikiFile: "Olympique_Marseille_logo.svg", league: "Ligue 1", titles: 28, kitColor: "Blanco", budget: 260, yearsInFirst: 75, brand: "Puma", capacity: 67394 },
    { name: "Monaco", slug: "monaco", wikiFile: "AS_Monaco_FC.svg", league: "Ligue 1", titles: 18, kitColor: "Rojiblanco", budget: 220, yearsInFirst: 66, brand: "Kappa", capacity: 18523 },
    { name: "Lyon", slug: "lyon", wikiFile: "Olympique_Lyonnais_logo.svg", league: "Ligue 1", titles: 21, kitColor: "Blanco", budget: 240, yearsInFirst: 66, brand: "Adidas", capacity: 59186 },
    { name: "Lille", slug: "lille", wikiFile: "Lille_OSC_2018_logo.svg", league: "Ligue 1", titles: 14, kitColor: "Rojo", budget: 160, yearsInFirst: 65, brand: "New Balance", capacity: 50186 },
    { name: "Lens", slug: "lens", wikiFile: "Rc-lens-logo.svg", league: "Ligue 1", titles: 4, kitColor: "Amarillo", budget: 110, yearsInFirst: 63, brand: "Puma", capacity: 38223 },
    { name: "Rennes", slug: "rennes", wikiFile: "Stade_Rennais_FC.svg", league: "Ligue 1", titles: 3, kitColor: "Rojinegro", budget: 120, yearsInFirst: 67, brand: "Puma", capacity: 29778 },
    { name: "Nice", slug: "nice", wikiFile: "OGC_Nice_logo.svg", league: "Ligue 1", titles: 7, kitColor: "Rojinegro", budget: 100, yearsInFirst: 66, brand: "Le Coq Sportif", capacity: 36178 },
    { name: "Reims", slug: "reims", wikiFile: "Stade_de_Reims_logo.svg", league: "Ligue 1", titles: 11, kitColor: "Rojiblanco", budget: 70, yearsInFirst: 39, brand: "Puma", capacity: 21029 },
    { name: "Toulouse", slug: "toulouse", wikiFile: "Toulouse_FC_2018_logo.svg", league: "Ligue 1", titles: 2, kitColor: "Violeta", budget: 55, yearsInFirst: 34, brand: "Nike", capacity: 33150 },
    { name: "Montpellier", slug: "montpellier", wikiFile: "Montpellier_HSC_(2000).svg", league: "Ligue 1", titles: 4, kitColor: "Naranja", budget: 50, yearsInFirst: 43, brand: "Nike", capacity: 32900 },
    { name: "Strasbourg", slug: "strasbourg", wikiFile: "Racing_Club_de_Strasbourg_logo.svg", league: "Ligue 1", titles: 4, kitColor: "Azul", budget: 65, yearsInFirst: 63, brand: "Adidas", capacity: 26109 },
    { name: "Brest", slug: "brest", wikiFile: "Stade_Brestois_29_logo.svg", league: "Ligue 1", titles: 0, kitColor: "Rojo", budget: 48, yearsInFirst: 19, brand: "Adidas", capacity: 15931 },
    { name: "Nantes", slug: "nantes", wikiFile: "FC_Nantes_logo.svg", league: "Ligue 1", titles: 15, kitColor: "Amarillo", budget: 60, yearsInFirst: 57, brand: "Macron", capacity: 35322 },
    { name: "Le Havre", slug: "le-havre", wikiFile: "Le_Havre_AC_logo.svg", league: "Ligue 1", titles: 1, kitColor: "Celeste", budget: 30, yearsInFirst: 25, brand: "Joma", capacity: 25178 },
    { name: "Auxerre", slug: "auxerre", wikiFile: "AJ_Auxerre_Logo.svg", league: "Ligue 1", titles: 5, kitColor: "Blanco", budget: 35, yearsInFirst: 33, brand: "Macron", capacity: 18500 },
    { name: "Angers", slug: "angers", wikiFile: "Angers_SCO_logo_2023.svg", league: "Ligue 1", titles: 0, kitColor: "Blanquinegro", budget: 25, yearsInFirst: 31, brand: "Kappa", capacity: 18752 },
    { name: "Saint-Étienne", slug: "saint-etienne", wikiFile: "AS_Saint-Étienne_logo.svg", league: "Ligue 1", titles: 22, kitColor: "Verde", budget: 40, yearsInFirst: 70, brand: "Hummel", capacity: 41965 }
];
// ==========================================================
// ==========  SISTEMA DE PARTIDA DIARIA + ESTADÍSTICAS ========
// ==========================================================

const STORAGE_KEY = 'equipodle_data_v1';

function getTodayKey() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}

function dateToSeed(dateStr) {
    return parseInt(dateStr.replaceAll('-', ''), 10);
}

function getDailyTeam() {
    const seed = dateToSeed(getTodayKey());
    const index = seed % teams.length;
    return teams[index];
}

function loadData() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return createEmptyData();
        return JSON.parse(raw);
    } catch (e) {
        return createEmptyData();
    }
}

function saveData(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('No se pudo guardar:', e);
    }
}

function createEmptyData() {
    return {
        stats: {
            played: 0,
            wins: 0,
            currentStreak: 0,
            maxStreak: 0,
            totalAttempts: 0
        },
        lastPlayed: null,
        lastResult: null
    };
}

function recordGameResult(won, attempts, team) {
    const data = loadData();
    const previousStreak = data.stats.currentStreak;
    const previousTierObj = getTierForStreak(previousStreak);

    data.stats.played++;
    if (won) {
        data.stats.wins++;
        data.stats.currentStreak++;
        data.stats.totalAttempts += attempts;
        if (data.stats.currentStreak > data.stats.maxStreak) {
            data.stats.maxStreak = data.stats.currentStreak;
        }
    } else {
        data.stats.currentStreak = 0;
    }

    const newTierObj = getTierForStreak(data.stats.currentStreak);
    data.lastPlayed = getTodayKey();
    data.lastResult = {
        won: won,
        attempts: attempts,
        teamName: team.name,
        teamWikiFile: team.wikiFile
    };
    saveData(data);

    return {
        previousTier: previousTierObj.tier,
        newTier: newTierObj.tier,
        newTierObj: newTierObj,
        levelUp: won && newTierObj.tier > previousTierObj.tier
    };
}

// ---------- Estado del juego ----------
let targetTeam;
let attemptsCount = 0;
let guessedTeams = [];
let guessResults = [];  // 🆕 guardamos los resultados de cada intento
let gameOver = false;
let activeSuggestionIndex = -1;
let currentSuggestions = [];
let countdownInterval = null;

const PARTIAL_THRESHOLDS = {
    titles: 5,
    budget: 50,
    yearsInFirst: 10,
    capacity: 10000
};
const REVEAL_DELAY = 500;

// ---------- Referencias DOM ----------
const input = document.getElementById('team-input');
const suggestions = document.getElementById('autocomplete-list');
const guessesContainer = document.getElementById('guesses-container');
const victoryOverlay = document.getElementById('victory-overlay');
const viewStatsBtn = document.getElementById('view-stats-btn');
const headerRow = document.getElementById('header-row');
const statsBtn = document.getElementById('stats-btn');
const statsOverlay = document.getElementById('stats-overlay');
const closeStatsBtn = document.getElementById('close-stats-btn');
const streakCapsule = document.getElementById('streak-capsule');
const streakBall = document.getElementById('streak-ball');
const streakExtra = document.getElementById('streak-extra');
const streakCount = document.getElementById('streak-count');
const levelupOverlay = document.getElementById('levelup-overlay');
const levelupBall = document.getElementById('levelup-ball');
const levelupExtra = document.getElementById('levelup-extra');
const levelupTierName = document.getElementById('levelup-tier-name');
const levelupStreakNumber = document.getElementById('levelup-streak-number');
const levelupCloseBtn = document.getElementById('levelup-close-btn');
const levelupAura = document.getElementById('levelup-aura');
const infoBtn = document.getElementById('info-btn');
const infoOverlay = document.getElementById('info-overlay');
const infoContent = document.getElementById('info-content');
const closeInfoBtn = document.getElementById('close-info-btn');

// ---------- Cápsula de racha ----------
function updateStreakCapsule(streak) {
    const tierObj = getTierForStreak(streak);
    streakCount.innerText = streak;
    streakBall.innerText = tierObj.ball;
    streakExtra.innerText = tierObj.extra;

    for (let i = 0; i <= 7; i++) streakCapsule.classList.remove(`tier-${i}`);
    streakCapsule.classList.add(`tier-${tierObj.tier}`);

    if (tierObj.tier >= 3) streakCapsule.classList.add('tier-high');
    else streakCapsule.classList.remove('tier-high');
}

// ---------- Utilidades de escudos ----------
function getShieldUrlList(wikiFile, teamName) {
    const wiki = encodeURIComponent(wikiFile);
    return [
        `https://en.wikipedia.org/wiki/Special:FilePath/${wiki}?width=150`,
        `https://commons.wikimedia.org/wiki/Special:FilePath/${wiki}?width=150`,
        `https://cdn.jsdelivr.net/gh/luukhopman/football-logos@master/logos/${teamName}.png`
    ];
}

function getInitials(name) {
    const clean = name.replace(/[^\w\sÁÉÍÓÚÜÑáéíóúüñ]/g, '');
    const words = clean.split(/\s+/).filter(w => w.length > 1 || /^[A-ZÁÉÍÓÚÜÑ]/.test(w));
    if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
    return words.slice(0, 3).map(w => w[0].toUpperCase()).join('');
}

function createShieldImg(team, className = '') {
    const wrapper = document.createElement('span');
    wrapper.className = `shield-wrapper ${className}`;
    const img = document.createElement('img');
    img.alt = team.name;
    img.className = 'shield-img';
    const fallback = document.createElement('span');
    fallback.className = 'shield-fallback';
    fallback.innerText = getInitials(team.name);
    fallback.style.display = 'none';
    const urls = getShieldUrlList(team.wikiFile, team.name);
    let urlIndex = 0;
    function tryNext() {
        if (urlIndex >= urls.length) {
            img.style.display = 'none';
            fallback.style.display = 'flex';
            return;
        }
        img.src = urls[urlIndex];
        urlIndex++;
    }
    img.onerror = tryNext;
    img.onload = () => { if (img.naturalWidth === 0) tryNext(); };
    tryNext();
    wrapper.appendChild(img);
    wrapper.appendChild(fallback);
    return wrapper;
}

function updateAttemptsUI() {
    document.getElementById('attempts-number').innerText = attemptsCount;
    const balls = document.getElementById('attempts-balls');
    balls.innerHTML = '';
    for (let i = 0; i < attemptsCount; i++) {
        const span = document.createElement('span');
        span.innerText = '⚽';
        balls.appendChild(span);
    }
}

function splitColor(color) {
    const c = color.toLowerCase();
    const map = ['rojo', 'blanco', 'azul', 'negro', 'amarillo', 'verde',
                 'violeta', 'celeste', 'naranja', 'granate', 'grana'];
    const found = [];
    for (const base of map) if (c.includes(base)) found.push(base);
    return found;
}

function colorsShareBase(a, b) {
    const sa = splitColor(a);
    const sb = splitColor(b);
    return sa.some(x => sb.includes(x));
}

function fitTextInSquare(squareEl) {
    const valueEl = squareEl.querySelector('.square-value');
    if (!valueEl) return;
    const sizes = [0.95, 0.85, 0.75, 0.68, 0.6];
    let i = 0;
    valueEl.style.fontSize = sizes[i] + 'rem';
    while (i < sizes.length - 1 && valueEl.scrollWidth > squareEl.clientWidth - 6) {
        i++;
        valueEl.style.fontSize = sizes[i] + 'rem';
    }
}

// ---------- Idioma ----------
function applyLanguage(lang) {
    currentLang = lang;
    const dict = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerText = dict[key];
    });
    input.placeholder = dict.inputPlaceholder;
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    refreshColorCells();

    if (!victoryOverlay.classList.contains('hidden')) {
        const data = loadData();
        if (data.lastPlayed === getTodayKey() && data.lastResult) {
            showDailyResultScreen(data);
        }
    }
    if (!statsOverlay.classList.contains('hidden')) {
        renderStatsModal();
    }
    if (!infoOverlay.classList.contains('hidden')) {
        infoContent.innerHTML = howToPlayContent[lang];
    }
}

function refreshColorCells() {
    document.querySelectorAll('.guess-row').forEach(row => {
        const squares = row.querySelectorAll('.square');
        const colorSquare = squares[2];
        if (!colorSquare) return;
        const originalColor = colorSquare.getAttribute('data-original-color');
        if (originalColor) {
            const valueEl = colorSquare.querySelector('.square-value');
            if (valueEl) {
                valueEl.innerText = translateColor(originalColor);
                fitTextInSquare(colorSquare);
            }
        }
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// ---------- Autocomplete ----------
input.addEventListener('input', () => { if (!gameOver) renderSuggestions(); });
input.addEventListener('focus', () => { if (!gameOver) renderSuggestions(); });
input.addEventListener('click', () => { if (!gameOver) renderSuggestions(); });

input.addEventListener('keydown', (e) => {
    if (gameOver) return;
    if (!currentSuggestions.length) return;
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeSuggestionIndex = (activeSuggestionIndex + 1) % currentSuggestions.length;
        highlightSuggestion();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeSuggestionIndex = (activeSuggestionIndex - 1 + currentSuggestions.length) % currentSuggestions.length;
        highlightSuggestion();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        const picked = activeSuggestionIndex >= 0 ? currentSuggestions[activeSuggestionIndex] : currentSuggestions[0];
        if (picked) selectSuggestion(picked);
    } else if (e.key === 'Escape') {
        clearSuggestions();
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) clearSuggestions();
});

function renderSuggestions() {
    const val = input.value.toLowerCase().trim();
    suggestions.innerHTML = '';
    activeSuggestionIndex = -1;
    let filtered = teams.filter(t => !guessedTeams.includes(t.name));
    if (val) filtered = filtered.filter(t => t.name.toLowerCase().includes(val));
    else filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    currentSuggestions = filtered;
    currentSuggestions.forEach((t, idx) => {
        const div = document.createElement('div');
        const shield = createShieldImg(t, 'suggestion-shield');
        const nameSpan = document.createElement('span');
        nameSpan.innerText = t.name;
        div.appendChild(shield);
        div.appendChild(nameSpan);
        div.onclick = () => selectSuggestion(t);
        div.onmouseenter = () => { activeSuggestionIndex = idx; highlightSuggestion(); };
        suggestions.appendChild(div);
    });
}

function highlightSuggestion() {
    [...suggestions.children].forEach((el, i) => {
        el.classList.toggle('active', i === activeSuggestionIndex);
    });
}

function selectSuggestion(team) {
    makeGuess(team);
    input.value = '';
    clearSuggestions();
    input.focus();
}

function clearSuggestions() {
    suggestions.innerHTML = '';
    currentSuggestions = [];
    activeSuggestionIndex = -1;
}

// ---------- Lógica del guess ----------
async function makeGuess(userTeam) {
    if (gameOver) return;
    attemptsCount++;
    guessedTeams.push(userTeam.name);
    updateAttemptsUI();

    if (attemptsCount === 1) headerRow.classList.remove('hidden');

    const row = document.createElement('div');
    row.className = 'guess-row';
    const infoDiv = document.createElement('div');
    infoDiv.className = 'team-cell-info';
    const shield = createShieldImg(userTeam, 'row-shield');
    const nameSpan = document.createElement('span');
    nameSpan.innerText = userTeam.name;
    infoDiv.appendChild(shield);
    infoDiv.appendChild(nameSpan);
    row.appendChild(infoDiv);
    guessesContainer.prepend(row);

    const metrics = [
        { key: 'league', val: userTeam.league, target: targetTeam.league },
        { key: 'titles', val: userTeam.titles, target: targetTeam.titles, isNum: true },
        { key: 'kitColor', val: userTeam.kitColor, target: targetTeam.kitColor, isColor: true },
        { key: 'budget', val: userTeam.budget, target: targetTeam.budget, isNum: true, unit: "M€" },
        { key: 'yearsInFirst', val: userTeam.yearsInFirst, target: targetTeam.yearsInFirst, isNum: true },
        { key: 'brand', val: userTeam.brand, target: targetTeam.brand },
        { key: 'capacity', val: userTeam.capacity, target: targetTeam.capacity, isNum: true, isCap: true }
    ];

    const rowStatuses = [];
        for (const m of metrics) {
        const sq = document.createElement('div');
        let status = 'wrong';
        if (m.val === m.target) status = 'correct';
        else if (m.isNum) {
            const diff = Math.abs(m.val - m.target);
            const threshold = PARTIAL_THRESHOLDS[m.key];
            if (threshold !== undefined && diff <= threshold) status = 'partial';
        } else if (m.isColor) {
            if (colorsShareBase(m.val, m.target)) status = 'partial';
        }
        sq.className = `square ${status}`;
            rowStatuses.push(status);

        if (m.isNum) {
            const text = m.isCap ? Math.round(m.val / 1000) + "k" : m.val + (m.unit || "");
            let arrowHtml = '';
            if (status !== 'correct') {
                if (m.val < m.target) arrowHtml = `<span class="square-bg-arrow">${ARROW_SVG_UP}</span>`;
                else if (m.val > m.target) arrowHtml = `<span class="square-bg-arrow">${ARROW_SVG_DOWN}</span>`;
            }
            sq.innerHTML = `${arrowHtml}<span class="square-value">${text}</span>`;
        } else if (m.isColor) {
            sq.setAttribute('data-original-color', m.val);
            sq.innerHTML = `<span class="square-value">${translateColor(m.val)}</span>`;
        } else {
            sq.innerHTML = `<span class="square-value">${m.val}</span>`;
        }
        row.appendChild(sq);
        requestAnimationFrame(() => fitTextInSquare(sq));
        await new Promise(r => setTimeout(r, REVEAL_DELAY));
    }
guessResults.push(rowStatuses);
if (userTeam.name === targetTeam.name) {
        gameOver = true;
        input.disabled = true;
        const result = recordGameResult(true, attemptsCount, targetTeam);
        updateStreakCapsule(loadData().stats.currentStreak);

        // 🎆 Lanzamos fuegos artificiales
        launchFireworks();

        setTimeout(() => {
            const data = loadData();
            if (result.levelUp) {
                showLevelUpModal(result.newTierObj, data.stats.currentStreak);
            } else {
                showDailyResultScreen(data);
            }
        }, 2200); // esperamos más tiempo para disfrutar los fuegos
    }
}

// ---------- Modal LEVEL UP ----------
function showLevelUpModal(tierObj, streak) {
    const dict = i18n[currentLang];
    levelupBall.innerText = tierObj.ball;
    levelupExtra.innerText = tierObj.extra;
    levelupTierName.innerText = dict[tierObj.nameKey] || 'Tier ' + tierObj.tier;
    levelupStreakNumber.innerText =
        (currentLang === 'es' ? 'Racha: ' : 'Streak: ') + streak;

    levelupAura.style.background = getAuraBackground(tierObj.tier);
    levelupAura.style.animation = getAuraAnimation(tierObj.tier);
    levelupAura.style.opacity = tierObj.tier === 0 ? '0' : '1';
    levelupAura.style.filter = tierObj.tier === 7 ? 'blur(8px)' : 'none';

    levelupOverlay.classList.remove('hidden');
}

function getAuraBackground(tier) {
    switch (tier) {
        case 2: return 'radial-gradient(circle, #ffd93d 0%, transparent 70%)';
        case 3: return 'radial-gradient(circle, #ff9f1c 0%, transparent 70%)';
        case 4: return 'radial-gradient(circle, #ff4d00 0%, #ff9f1c 40%, transparent 75%)';
        case 5: return 'radial-gradient(circle, #00d4ff 0%, #0080ff 50%, transparent 80%)';
        case 6: return 'radial-gradient(circle, #c5f8ff 0%, #64dfdf 40%, #00c9a7 80%, transparent 90%)';
        case 7: return 'conic-gradient(from 0deg, #ff6b35, #ffd700, #ff1493, #00ffff, #8a2be2, #ff6b35)';
        default: return 'transparent';
    }
}

function getAuraAnimation(tier) {
    if (tier === 7) return 'rotateAura 4s linear infinite';
    if (tier >= 5) return 'electricPulse 1.2s ease-in-out infinite';
    if (tier >= 2) return 'pulseAura 1.8s ease-in-out infinite';
    return 'none';
}

levelupCloseBtn.addEventListener('click', () => {
    levelupOverlay.classList.add('hidden');
    const data = loadData();
    showDailyResultScreen(data);
});

// ---------- Pantalla del resultado diario ----------
function showDailyResultScreen(data) {
    const card = document.getElementById('victory-card');
    const heading = document.getElementById('victory-heading');
    const emoji = card.querySelector('.confetti-emoji');
    const message = document.getElementById('victory-message');
    const dict = i18n[currentLang];

    heading.innerText = dict.victoryTitle;
    emoji.innerText = '🏆';

    message.innerHTML = `
        <span>${dict.victoryTextBefore}</span>
        <span id="victory-attempts">${data.lastResult.attempts}</span>
        <span>${dict.victoryTextAfter}</span>
    `;

    const victoryTeamDiv = document.getElementById('victory-team');
    victoryTeamDiv.innerHTML = '';
    const lastTeam = teams.find(t => t.name === data.lastResult.teamName) || {
        name: data.lastResult.teamName,
        wikiFile: data.lastResult.teamWikiFile
    };
    const shield = createShieldImg(lastTeam, 'victory-shield');
    const nameSpan = document.createElement('span');
    nameSpan.id = 'victory-team-name';
    nameSpan.innerText = lastTeam.name;
    victoryTeamDiv.appendChild(shield);
    victoryTeamDiv.appendChild(nameSpan);

    renderMiniStats(data.stats);
    startCountdown();

    victoryOverlay.classList.remove('hidden');
}

function renderMiniStats(stats) {
    const miniStats = document.getElementById('mini-stats');
    const dict = i18n[currentLang];
    const avg = stats.wins > 0 ? (stats.totalAttempts / stats.wins).toFixed(1) : '—';

    miniStats.innerHTML = `
        <div class="mini-stat">
            <div class="mini-stat-value">${stats.played}</div>
            <div class="mini-stat-label">${dict.statPlayed}</div>
        </div>
        <div class="mini-stat">
            <div class="mini-stat-value">${stats.currentStreak}</div>
            <div class="mini-stat-label">${dict.statCurrentStreak}</div>
        </div>
        <div class="mini-stat">
            <div class="mini-stat-value">${avg}</div>
            <div class="mini-stat-label">${dict.statAvg}</div>
        </div>
    `;
}

function startCountdown() {
    if (countdownInterval) clearInterval(countdownInterval);
    function update() {
        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const diffMs = tomorrow - now;
        if (diffMs <= 0) { location.reload(); return; }
        const h = Math.floor(diffMs / 3600000);
        const m = Math.floor((diffMs % 3600000) / 60000);
        const s = Math.floor((diffMs % 60000) / 1000);
        const timer = document.getElementById('countdown-timer');
        if (timer) {
            timer.innerText =
                String(h).padStart(2, '0') + ':' +
                String(m).padStart(2, '0') + ':' +
                String(s).padStart(2, '0');
        }
    }
    update();
    countdownInterval = setInterval(update, 1000);
}

function renderStatsModal() {
    const data = loadData();
    const dict = i18n[currentLang];
    const stats = data.stats;
    const avg = stats.wins > 0 ? (stats.totalAttempts / stats.wins).toFixed(1) : '—';
    const winRate = stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) + '%' : '—';

    const grid = document.getElementById('stats-grid');
    grid.innerHTML = `
        <div class="stat-box">
            <div class="stat-box-value">${stats.played}</div>
            <div class="stat-box-label">${dict.statPlayed}</div>
        </div>
        <div class="stat-box">
            <div class="stat-box-value">${stats.wins}</div>
            <div class="stat-box-label">${dict.statWins}</div>
        </div>
        <div class="stat-box">
            <div class="stat-box-value">${winRate}</div>
            <div class="stat-box-label">${dict.statWinRate}</div>
        </div>
        <div class="stat-box">
            <div class="stat-box-value">${stats.currentStreak}</div>
            <div class="stat-box-label">${dict.statCurrentStreak}</div>
        </div>
        <div class="stat-box">
            <div class="stat-box-value">${stats.maxStreak}</div>
            <div class="stat-box-label">${dict.statMaxStreak}</div>
        </div>
        <div class="stat-box">
            <div class="stat-box-value">${avg}</div>
            <div class="stat-box-label">${dict.statAvg}</div>
        </div>
    `;
}

statsBtn.addEventListener('click', () => {
    renderStatsModal();
    statsOverlay.classList.remove('hidden');
});
closeStatsBtn.addEventListener('click', () => {
    statsOverlay.classList.add('hidden');
});
statsOverlay.addEventListener('click', (e) => {
    if (e.target === statsOverlay) statsOverlay.classList.add('hidden');
});
viewStatsBtn.addEventListener('click', () => {
    renderStatsModal();
    statsOverlay.classList.remove('hidden');
});

// Click fuera de la tarjeta de victoria -> cerrarla
victoryOverlay.addEventListener('click', (e) => {
    if (e.target === victoryOverlay) {
        victoryOverlay.classList.add('hidden');
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
    }
});

// ---------- Modal Cómo jugar ----------
infoBtn.addEventListener('click', () => {
    infoContent.innerHTML = howToPlayContent[currentLang];
    infoOverlay.classList.remove('hidden');
});
closeInfoBtn.addEventListener('click', () => {
    infoOverlay.classList.add('hidden');
});
infoOverlay.addEventListener('click', (e) => {
    if (e.target === infoOverlay) infoOverlay.classList.add('hidden');
});

// ---------- Arranque ----------
function init() {
    targetTeam = getDailyTeam();
    applyLanguage('es');

    const data = loadData();
    updateStreakCapsule(data.stats.currentStreak);

    // Si es la PRIMERA vez que entras (nunca has jugado), abrir el modal "Cómo jugar" automáticamente
    if (data.stats.played === 0 && data.lastPlayed === null) {
        infoContent.innerHTML = howToPlayContent[currentLang];
        infoOverlay.classList.remove('hidden');
    }

    if (data.lastPlayed === getTodayKey() && data.lastResult) {
        gameOver = true;
        input.disabled = true;
        showDailyResultScreen(data);
    }
}

// Si el usuario gira el móvil o cambia el tamaño, refrescamos los colores
window.addEventListener('resize', () => {
    refreshColorCells();
});

// ---------- FUEGOS ARTIFICIALES 🎆 ----------
function launchFireworks() {
    // Si por alguna razón no cargó la librería, no rompe nada
    if (typeof confetti === 'undefined') return;

    const duration = 2000; // 2 segundos de espectáculo
    const animationEnd = Date.now() + duration;
    const colors = ['#2ed573', '#ffd700', '#e74c3c', '#ffffff', '#f1c40f'];

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }

        // Dos explosiones por tick: izquierda y derecha
        confetti({
            particleCount: 60,
            angle: 60,
            spread: 70,
            origin: { x: Math.random() * 0.3, y: Math.random() * 0.5 + 0.2 },
            colors: colors,
            startVelocity: 55,
            gravity: 0.9,
            scalar: 1.1,
            ticks: 200
        });

        confetti({
            particleCount: 60,
            angle: 120,
            spread: 70,
            origin: { x: 1 - Math.random() * 0.3, y: Math.random() * 0.5 + 0.2 },
            colors: colors,
            startVelocity: 55,
            gravity: 0.9,
            scalar: 1.1,
            ticks: 200
        });
    }, 350); // una ráfaga cada 350ms
}

// ---------- COMPARTIR RESULTADO ----------
function buildShareText() {
    const data = loadData();
    const attempts = data.lastResult ? data.lastResult.attempts : attemptsCount;
    const streak = data.stats.currentStreak;

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');

    const emojiMap = {
        'correct': '🟩',
        'partial': '🟨',
        'wrong':   '🟥'
    };

    const grid = guessResults.map(row =>
        row.map(s => emojiMap[s] || '⬜').join('')
    ).join('\n');

    const txt = currentLang === 'es'
        ? `⚽ Equipodle del ${dd}/${mm} ⚽\nAdivinado en ${attempts} intentos · Racha: ${streak} 🔥\n\n${grid}\n\nJuega en: equipodle-pro.vercel.app`
        : `⚽ Equipodle ${dd}/${mm} ⚽\nGuessed in ${attempts} tries · Streak: ${streak} 🔥\n\n${grid}\n\nPlay at: equipodle-pro.vercel.app`;

    return txt;
}

async function shareResult() {
    const text = buildShareText();
    const shareBtn = document.getElementById('share-result-btn');

    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Equipodle Pro',
                text: text
            });
            return;
        } catch (err) {
            // usuario canceló, probamos portapapeles
        }
    }

    try {
        await navigator.clipboard.writeText(text);
        const originalText = shareBtn.innerText;
        shareBtn.innerText = currentLang === 'es' ? '¡Copiado! ✓' : 'Copied! ✓';
        shareBtn.classList.add('copied');
        setTimeout(() => {
            shareBtn.innerText = originalText;
            shareBtn.classList.remove('copied');
        }, 2000);
    } catch (err) {
        alert(currentLang === 'es' ? 'No se pudo copiar :(' : "Couldn't copy :(");
    }
}

document.getElementById('share-result-btn').addEventListener('click', shareResult);

init();