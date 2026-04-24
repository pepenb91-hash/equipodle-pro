// ---------- Diccionarios de traducción ----------
const i18n = {
    es: {
        attemptsTitle: "Número de intentos",
        inputPlaceholder: "Escribe el nombre de un equipo...",
        colLeague: "Liga",
        colTitles: "Títulos",
        colColor: "Color",
        colBudget: "Valor",
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
        levelUpTitle: "¡NUEVO NIVEL!",
        infoTitle: "Cómo jugar",
        shareBtn: "Compartir resultado",
        tier0: "Sin racha",
        tier1: "En juego",
        tier2: "Calentando",
        tier3: "En llamas",
        tier4: "Imparable",
        tier5: "Eléctrico",
        tier6: "Diamante",
        tier7: "Leyenda",
        modeTeams: "Teams",
        modeLegends: "Legends",
        legendsTitle: "Rondo · Legends",
        legendsPlaceholder: "Escribe el nombre del jugador...",
        legendsAttemptsLabel: "Intentos",
        legendsOf: "de",
        hintBornIn: "Nacido en",
        legendsVictoryText: "Has adivinado al jugador en",
        legendsDefeatTitle: "¡Qué pena!",
        legendsDefeatText: "El jugador era:",
        legendsColLeft: "Intentos restantes",
        statsTeams: "Teams",
        statsLegends: "Legends",
        coffeeBtn: "Invítame a un café",
        diceText: "¿No sabes por dónde empezar? ¡Tira el dado!",
        aboutBtn: "Acerca de",
        aboutTitle: "Acerca de Rondo",
        cookieText: "Usamos cookies para entender cómo se usa Rondo. Sin datos personales, sin anuncios.",
        cookieAccept: "Entendido",
        modeDecade: "Decade",
        decadeAttemptsLabel: "Intentos restantes",
        decadeInstructions: "Arrastra los eventos de más antiguo a más reciente",
        decadePoolLabel: "Eventos disponibles",
        decadeSlotsLabel: "Orden cronológico",
        decadeOldest: "MÁS ANTIGUO",
        decadeNewest: "MÁS RECIENTE",
        decadeSubmit: "Enviar respuesta",
        decadeVictoryTitle: "¡Bien hecho!",
        decadeVictoryText: "Has acertado el orden en",
        decadeDefeatTitle: "Casi...",
        decadeDefeatText: "Se acabaron los intentos. Este era el orden correcto:",
        decadeAttemptWord: "intento",
        decadeAttemptsWord: "intentos"
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
        levelUpTitle: "NEW LEVEL!",
        infoTitle: "How to play",
        shareBtn: "Share result",
        tier0: "No streak",
        tier1: "Warming up",
        tier2: "Heating up",
        tier3: "On fire",
        tier4: "Unstoppable",
        tier5: "Electric",
        tier6: "Diamond",
        tier7: "Legend",
        modeTeams: "Teams",
        modeLegends: "Legends",
        legendsTitle: "Rondo · Legends",
        legendsPlaceholder: "Type the player's name...",
        legendsAttemptsLabel: "Attempts",
        legendsOf: "of",
        hintBornIn: "Born in",
        legendsVictoryText: "You guessed the player in",
        legendsDefeatTitle: "So close!",
        legendsDefeatText: "The player was:",
        legendsColLeft: "Attempts left",
        statsTeams: "Teams",
        statsLegends: "Legends",
        coffeeBtn: "Buy me a coffee",
        diceText: "Don't know where to start? Roll the dice!",
        aboutBtn: "About",
        aboutTitle: "About Rondo",
        cookieText: "We use cookies to understand how Rondo is used. No personal data, no ads.",
        cookieAccept: "Got it",
        modeDecade: "Decade",
        decadeAttemptsLabel: "Attempts left",
        decadeInstructions: "Drag the events from oldest to newest",
        decadePoolLabel: "Available events",
        decadeSlotsLabel: "Chronological order",
        decadeOldest: "OLDEST",
        decadeNewest: "NEWEST",
        decadeSubmit: "Submit answer",
        decadeVictoryTitle: "Well done!",
        decadeVictoryText: "You guessed the order in",
        decadeDefeatTitle: "Almost...",
        decadeDefeatText: "Out of attempts. This was the correct order:",
        decadeAttemptWord: "attempt",
        decadeAttemptsWord: "attempts"
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

let currentLang = 'en';

function isMobile() {
    return window.innerWidth <= 700;
}

function translateColor(color) {
    if (isMobile()) {
        const shortEntry = colorShort[color];
        if (shortEntry) return shortEntry[currentLang];
    }
    const entry = colorTranslations[color];
    return entry ? entry[currentLang] : color;
}

// ---------- Contenido "Cómo jugar" ----------
const howToPlayContent = {
    es: `
        <p>Hay dos modos: <strong>Teams</strong> (adivina un equipo por sus pistas) y <strong>Legends</strong> (adivina un jugador por su foto borrosa).</p>
        <h3>Modo Teams</h3>
        <p>Cada día hay un <strong>equipo secreto</strong> de las 5 grandes ligas europeas. Escribe el nombre de cualquier equipo y aparecerán 7 pistas: <strong>Liga, Títulos, Color, Valor, Años en 1ª, Marca y Estadio</strong>.</p>
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
        <h3>Modo Legends</h3>
        <p>Una foto borrosa de un jugador legendario. Tienes <strong>10 intentos</strong>. Con cada fallo, la foto se ve un poco más nítida. Tras 5 fallos verás también el año de nacimiento como pista extra.</p>
        <h3>Modo diario</h3>
        <p>Solo puedes jugar <strong>una partida al día de cada modo</strong>. Ambos cambian a medianoche (hora local).</p>
        <h3>Racha</h3>
        <p>La racha de Teams y Legends son <strong>independientes</strong>. Cada día que aciertas en Teams, tu balón evoluciona (3, 5, 10, 20, 50, 100, 200 victorias).</p>
        <p style="font-size: 0.8rem; color: #888; margin-top: 20px; font-style: italic; border-top: 1px solid #333; padding-top: 12px;">Rondo es un proyecto fan no oficial. Todos los escudos y fotos son propiedad de sus respectivos dueños.</p>
        `,
    en: `
        <p>There are two modes: <strong>Teams</strong> (guess a team by clues) and <strong>Legends</strong> (guess a player from a blurred photo).</p>
        <h3>Teams mode</h3>
        <p>Every day there's a <strong>secret team</strong> from Europe's top 5 leagues. Type any team name and you'll see 7 clues: <strong>League, Titles, Color, Value, Years in Top, Brand and Stadium</strong>.</p>
        <div class="info-legend">
            <div class="info-legend-swatch correct">✓</div>
            <div class="info-legend-text"><strong>Green:</strong> correct! Matches the secret team.</div>
        </div>
        <div class="info-legend">
            <div class="info-legend-swatch partial">~</div>
            <div class="info-legend-text"><strong>Yellow:</strong> you're close. Similar value or shared base color.</div>
        </div>
        <div class="info-legend">
            <div class="info-legend-swatch wrong">✗</div>
            <div class="info-legend-text"><strong>Red:</strong> doesn't match.</div>
        </div>
        <h3>Legends mode</h3>
        <p>A blurred photo of a legendary player. You have <strong>10 attempts</strong>. Each miss, the photo gets sharper. After 5 misses you'll see the birth year as extra hint.</p>
        <h3>Daily mode</h3>
        <p>Only <strong>one game per day of each mode</strong>. Both change at midnight (local time).</p>
        <h3>Streak</h3>
        <p>Teams and Legends streaks are <strong>independent</strong>. Each day you win in Teams mode, your ball evolves (3, 5, 10, 20, 50, 100, 200 wins).</p>
        <p style="font-size: 0.8rem; color: #888; margin-top: 20px; font-style: italic; border-top: 1px solid #333; padding-top: 12px;">Rondo is an unofficial fan project. All crests and photos belong to their respective owners.</p>
    `
};

// ---------- Contenido "About & Credits" ----------
const aboutContent = {
    es: `
        <p>Rondo es un juego diario de adivinanzas de fútbol creado por un fan, para fans. Una partida al día. Sin anuncios. Sin trampas.</p>
        
        <h3>El creador</h3>
        <p>Hecho con mucho amor y demasiado café por <strong>Jose Navarro</strong>. Si te gusta el juego, considera <a href="https://buymeacoffee.com/playrondo" target="_blank" rel="noopener">invitarme a un café ☕</a>.</p>

        <h3>Créditos de imágenes</h3>
        <p>Las fotos de jugadores legendarios provienen de <a href="https://commons.wikimedia.org/" target="_blank" rel="noopener">Wikimedia Commons</a>, mayoritariamente bajo licencias Creative Commons (CC BY, CC BY-SA). Los créditos individuales de cada fotógrafo están disponibles en la página original de Wikipedia de cada jugador.</p>
        <p>Los escudos de los equipos provienen de Wikipedia y otras fuentes públicas. Cada escudo es propiedad de su club correspondiente.</p>

        <h3>Datos</h3>
        <p>Los datos de los equipos (títulos, valor del plantel, capacidad del estadio, etc.) se han recopilado de fuentes públicas como Wikipedia y Transfermarkt. Pueden contener inexactitudes; si encuentras algún error, ¡avísame!</p>

        <div class="disclaimer">
            <strong>Aviso legal:</strong> Rondo es un proyecto fan no oficial. No está afiliado, asociado, autorizado, ni respaldado por LaLiga, Premier League, Serie A, Bundesliga, Ligue 1, FIFA, UEFA, ni ningún club o federación. Todos los nombres, marcas, escudos y fotografías son propiedad de sus respectivos dueños.
        </div>
    `,
    en: `
        <p>Rondo is a daily football guessing game made by a fan, for fans. One game a day. No ads. No tricks.</p>
        
        <h3>The creator</h3>
        <p>Built with a lot of love and way too much coffee by <strong>Jose Navarro</strong>. If you enjoy the game, consider <a href="https://buymeacoffee.com/playrondo" target="_blank" rel="noopener">buying me a coffee ☕</a>.</p>

        <h3>Image credits</h3>
        <p>Photos of legendary players come from <a href="https://commons.wikimedia.org/" target="_blank" rel="noopener">Wikimedia Commons</a>, mostly under Creative Commons licenses (CC BY, CC BY-SA). Individual photographer credits are available on each player's original Wikipedia page.</p>
        <p>Club crests come from Wikipedia and other public sources. Each crest is the property of its respective club.</p>

        <h3>Data</h3>
        <p>Team data (titles, squad value, stadium capacity, etc.) has been gathered from public sources like Wikipedia and Transfermarkt. It may contain inaccuracies; if you find any errors, please let me know!</p>

        <div class="disclaimer">
            <strong>Disclaimer:</strong> Rondo is an unofficial fan project. It is not affiliated with, associated with, authorized by, or endorsed by LaLiga, Premier League, Serie A, Bundesliga, Ligue 1, FIFA, UEFA, or any club or federation. All names, trademarks, crests, and photographs are property of their respective owners.
        </div>
    `
};

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
    { name: "Atlético Madrid", slug: "atletico-madrid", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/13.png", league: "LaLiga", titles: 33, kitColor: "Rojiblanco", budget: 378, yearsInFirst: 87, brand: "Nike", capacity: 70460 },
    { name: "Sevilla FC", slug: "sevilla", wikiFile: "Sevilla_FC_logo.svg", league: "LaLiga", titles: 15, kitColor: "Blanco", budget: 190, yearsInFirst: 80, brand: "Castore", capacity: 43883 },
    { name: "Real Sociedad", slug: "real-sociedad", wikiFile: "Real_Sociedad_logo.svg", league: "LaLiga", titles: 6, kitColor: "Blanquiazul", budget: 145, yearsInFirst: 77, brand: "Macron", capacity: 39500 },
    { name: "Athletic Club", slug: "athletic-bilbao", wikiFile: "Club_Athletic_Bilbao_logo.svg", league: "LaLiga", titles: 35, kitColor: "Rojiblanco", budget: 128, yearsInFirst: 93, brand: "Castore", capacity: 53289 },
    { name: "Real Betis", slug: "real-betis", wikiFile: "Real_betis_logo.svg", league: "LaLiga", titles: 4, kitColor: "Verdiblanco", budget: 135, yearsInFirst: 58, brand: "Hummel", capacity: 60721 },
    { name: "Villarreal CF", slug: "villarreal", wikiFile: "Villarreal_CF_logo-en.svg", league: "LaLiga", titles: 1, kitColor: "Amarillo", budget: 110, yearsInFirst: 25, brand: "Joma", capacity: 23500 },
    { name: "Valencia CF", slug: "valencia", wikiFile: "Valenciacf.svg", league: "LaLiga", titles: 23, kitColor: "Blanquinegro", budget: 95, yearsInFirst: 89, brand: "Puma", capacity: 49430 },
    { name: "Girona FC", slug: "girona", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/12321.png", league: "LaLiga", titles: 0, kitColor: "Rojiblanco", budget: 65, yearsInFirst: 4, brand: "Puma", capacity: 14600 },
    { name: "Osasuna", slug: "osasuna", wikiFile: "Osasuna_logo.svg", league: "LaLiga", titles: 0, kitColor: "Rojo", budget: 55, yearsInFirst: 42, brand: "Macron", capacity: 23576 },
    { name: "Getafe CF", slug: "getafe", wikiFile: "Getafe_logo.svg", league: "LaLiga", titles: 0, kitColor: "Azul", budget: 50, yearsInFirst: 19, brand: "Joma", capacity: 16500 },
    { name: "Celta de Vigo", slug: "celta-vigo", wikiFile: "RC_Celta_de_Vigo_logo.svg", league: "LaLiga", titles: 0, kitColor: "Celeste", budget: 60, yearsInFirst: 58, brand: "Hummel", capacity: 24791 },
    { name: "RCD Mallorca", slug: "rcd-mallorca", wikiFile: "Rcd_mallorca.svg", league: "LaLiga", titles: 1, kitColor: "Rojo", budget: 45, yearsInFirst: 31, brand: "Nike", capacity: 23142 },
    { name: "Rayo Vallecano", slug: "rayo-vallecano", wikiFile: "Rayo_Vallecano_logo.svg", league: "LaLiga", titles: 0, kitColor: "Blanco", budget: 40, yearsInFirst: 21, brand: "Umbro", capacity: 14708 },
    { name: "Deportivo Alavés", slug: "alaves", wikiFile: "Deportivo_Alaves_logo_(2020).svg", league: "LaLiga", titles: 0, kitColor: "Blanquiazul", budget: 35, yearsInFirst: 18, brand: "Puma", capacity: 19840 },
    { name: "UD Las Palmas", slug: "las-palmas", wikiFile: "UD_Las_Palmas_logo.svg", league: "LaLiga", titles: 0, kitColor: "Amarillo", budget: 30, yearsInFirst: 35, brand: "Hummel", capacity: 32400 },
    { name: "Real Valladolid", slug: "real-valladolid", wikiFile: "Real_Valladolid_Logo.svg", league: "LaLiga", titles: 1, kitColor: "Violeta", budget: 32, yearsInFirst: 46, brand: "Kappa", capacity: 27618 },
    { name: "Leganés", slug: "leganes", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/1244.png", league: "LaLiga", titles: 0, kitColor: "Blanquiazul", budget: 28, yearsInFirst: 4, brand: "Joma", capacity: 12450 },
    { name: "RCD Espanyol", slug: "espanyol", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/714.png", league: "LaLiga", titles: 4, kitColor: "Blanquiazul", budget: 45, yearsInFirst: 87, brand: "Kelme", capacity: 40000 },

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
    { name: "Fiorentina", slug: "fiorentina", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ACF_Fiorentina_-_logo_%28Italy%2C_2022%29.svg/250px-ACF_Fiorentina_-_logo_%28Italy%2C_2022%29.svg.png", league: "Serie A", titles: 10, kitColor: "Violeta", budget: 140, yearsInFirst: 87, brand: "Kappa", capacity: 43147 },
    { name: "Bologna", slug: "bologna", wikiFile: "Bologna_F.C._1909_logo.svg", league: "Serie A", titles: 10, kitColor: "Azulgrana", budget: 100, yearsInFirst: 78, brand: "Macron", capacity: 38279 },
    { name: "Torino", slug: "torino", wikiFile: "Torino_FC_Logo.svg", league: "Serie A", titles: 12, kitColor: "Granate", budget: 90, yearsInFirst: 81, brand: "Joma", capacity: 28177 },
    { name: "Udinese", slug: "udinese", wikiFile: "Udinese_Calcio_logo.svg", league: "Serie A", titles: 1, kitColor: "Blanquinegro", budget: 65, yearsInFirst: 52, brand: "Macron", capacity: 25144 },
    { name: "Monza", slug: "monza", wikiFile: "AC_Monza_logo_(2021).svg", league: "Serie A", titles: 0, kitColor: "Rojo", budget: 50, yearsInFirst: 3, brand: "Lotto", capacity: 16917 },
    { name: "Genoa", slug: "genoa", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/252.png", league: "Serie A", titles: 10, kitColor: "Rojinegro", budget: 60, yearsInFirst: 85, brand: "Kappa", capacity: 36598 },
    { name: "Lecce", slug: "lecce", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/1005.png", league: "Serie A", titles: 0, kitColor: "Amarillo", budget: 35, yearsInFirst: 19, brand: "M908", capacity: 31533 },
    { name: "Verona", slug: "verona", wikiFile: "Hellas_Verona_FC_logo_(2020).svg", league: "Serie A", titles: 1, kitColor: "Azul", budget: 40, yearsInFirst: 34, brand: "Joma", capacity: 39211 },
    { name: "Empoli", slug: "empoli", wikiFile: "Empoli_FC_logo.svg", league: "Serie A", titles: 0, kitColor: "Azul", budget: 30, yearsInFirst: 17, brand: "Kappa", capacity: 16284 },
    { name: "Cagliari", slug: "cagliari", wikiFile: "Cagliari_Calcio_1920.svg", league: "Serie A", titles: 1, kitColor: "Rojinegro", budget: 45, yearsInFirst: 43, brand: "EYE", capacity: 16416 },
    { name: "Parma", slug: "parma", wikiFile: "Logo_Parma_Calcio_1913_(adozione_2016).svg", league: "Serie A", titles: 8, kitColor: "Blanco", budget: 55, yearsInFirst: 28, brand: "Puma", capacity: 22352 },
    { name: "Como", slug: "como", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Calcio_Como_-_logo_%28Italy%2C_2019-%29.svg/250px-Calcio_Como_-_logo_%28Italy%2C_2019-%29.svg.png", league: "Serie A", titles: 0, kitColor: "Azul", budget: 40, yearsInFirst: 14, brand: "Adidas", capacity: 13602 },
    { name: "Venezia", slug: "venezia", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/607.png", league: "Serie A", titles: 1, kitColor: "Naranja", budget: 25, yearsInFirst: 14, brand: "Nocta", capacity: 11150 },

    // ALEMANIA
    { name: "Bayern Munich", slug: "bayern-munich", wikiFile: "FC_Bayern_München_logo_(2017).svg", league: "Bundesliga", titles: 84, kitColor: "Rojo", budget: 800, yearsInFirst: 60, brand: "Adidas", capacity: 75000 },
    { name: "Leverkusen", slug: "bayer-leverkusen", wikiFile: "Bayer_04_Leverkusen_logo.svg", league: "Bundesliga", titles: 4, kitColor: "Rojinegro", budget: 350, yearsInFirst: 46, brand: "Castore", capacity: 30210 },
    { name: "Borussia Dortmund", slug: "borussia-dortmund", wikiFile: "Borussia_Dortmund_logo.svg", league: "Bundesliga", titles: 22, kitColor: "Amarillo", budget: 480, yearsInFirst: 58, brand: "Puma", capacity: 81365 },
    { name: "RB Leipzig", slug: "rb-leipzig", wikiFile: "RB_Leipzig_2014_logo.svg", league: "Bundesliga", titles: 4, kitColor: "Blanco", budget: 380, yearsInFirst: 9, brand: "Puma", capacity: 47069 },
    { name: "Stuttgart", slug: "stuttgart", wikiFile: "VfB_Stuttgart_1893_Logo.svg", league: "Bundesliga", titles: 8, kitColor: "Blanco", budget: 180, yearsInFirst: 58, brand: "Jako", capacity: 60449 },
    { name: "Frankfurt", slug: "eintracht-frankfurt", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/24.png", league: "Bundesliga", titles: 7, kitColor: "Rojinegro", budget: 200, yearsInFirst: 56, brand: "Nike", capacity: 58000 },
    { name: "Hoffenheim", slug: "hoffenheim", wikiFile: "Logo_TSG_Hoffenheim.svg", league: "Bundesliga", titles: 0, kitColor: "Azul", budget: 120, yearsInFirst: 17, brand: "Joma", capacity: 30150 },
    { name: "Werder Bremen", slug: "werder-bremen", wikiFile: "SV-Werder-Bremen-Logo.svg", league: "Bundesliga", titles: 16, kitColor: "Verdiblanco", budget: 90, yearsInFirst: 59, brand: "Hummel", capacity: 42100 },
    { name: "Freiburg", slug: "freiburg", wikiFile: "SC_Freiburg_logo.svg", league: "Bundesliga", titles: 0, kitColor: "Rojinegro", budget: 85, yearsInFirst: 25, brand: "Nike", capacity: 34700 },
    { name: "Wolfsburg", slug: "wolfsburg", wikiFile: "Logo-VfL-Wolfsburg.svg", league: "Bundesliga", titles: 3, kitColor: "Verde", budget: 130, yearsInFirst: 28, brand: "Nike", capacity: 30000 },
    { name: "Gladbach", slug: "borussia-monchengladbach", wikiFile: "Borussia_Mönchengladbach_logo.svg", league: "Bundesliga", titles: 10, kitColor: "Blanco", budget: 110, yearsInFirst: 57, brand: "Puma", capacity: 54022 },
    { name: "Union Berlin", slug: "union-berlin", wikiFile: "1._FC_Union_Berlin_Logo.svg", league: "Bundesliga", titles: 0, kitColor: "Rojo", budget: 75, yearsInFirst: 6, brand: "Adidas", capacity: 22012 },
    { name: "Mainz 05", slug: "mainz", wikiFile: "FSV_Mainz_05_Logo.svg", league: "Bundesliga", titles: 0, kitColor: "Rojo", budget: 55, yearsInFirst: 19, brand: "Jako", capacity: 33305 },
    { name: "Augsburg", slug: "augsburg", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/167.png", league: "Bundesliga", titles: 0, kitColor: "Blanco", budget: 60, yearsInFirst: 14, brand: "Mizuno", capacity: 30660 },
    { name: "Bochum", slug: "bochum", wikiFile: "VfL_Bochum_logo.svg", league: "Bundesliga", titles: 0, kitColor: "Azul", budget: 35, yearsInFirst: 38, brand: "Mizuno", capacity: 26000 },
    { name: "Heidenheim", slug: "heidenheim", wikiFile: "1._FC_Heidenheim_1846.svg", league: "Bundesliga", titles: 0, kitColor: "Rojo", budget: 30, yearsInFirst: 2, brand: "Puma", capacity: 15000 },
    { name: "St. Pauli", slug: "st-pauli", wikiFile: "FC_St._Pauli_logo_(2018).svg", league: "Bundesliga", titles: 0, kitColor: "Negro", budget: 28, yearsInFirst: 9, brand: "Puma", capacity: 29546 },
    { name: "Holstein Kiel", slug: "holstein-kiel", wikiFile: "Holstein_Kiel_Logo.svg", league: "Bundesliga", titles: 1, kitColor: "Azul", budget: 22, yearsInFirst: 1, brand: "Puma", capacity: 15034 },

    // FRANCIA
    { name: "PSG", slug: "psg", wikiFile: "Paris_Saint-Germain_F.C..svg", league: "Ligue 1", titles: 51, kitColor: "Azul", budget: 750, yearsInFirst: 52, brand: "Nike", capacity: 47929 },
    { name: "Marseille", slug: "marseille", wikiFile: "Olympique_Marseille_logo.svg", league: "Ligue 1", titles: 28, kitColor: "Blanco", budget: 260, yearsInFirst: 75, brand: "Puma", capacity: 67394 },
    { name: "Monaco", slug: "monaco", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/162.png", league: "Ligue 1", titles: 18, kitColor: "Rojiblanco", budget: 220, yearsInFirst: 66, brand: "Kappa", capacity: 18523 },
    { name: "Lyon", slug: "lyon", wikiFile: "Olympique_Lyonnais_logo.svg", league: "Ligue 1", titles: 21, kitColor: "Blanco", budget: 240, yearsInFirst: 66, brand: "Adidas", capacity: 59186 },
    { name: "Lille", slug: "lille", wikiFile: "Lille_OSC_2018_logo.svg", league: "Ligue 1", titles: 14, kitColor: "Rojo", budget: 160, yearsInFirst: 65, brand: "New Balance", capacity: 50186 },
    { name: "Lens", slug: "lens", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/826.png", league: "Ligue 1", titles: 4, kitColor: "Amarillo", budget: 110, yearsInFirst: 63, brand: "Puma", capacity: 38223 },
    { name: "Rennes", slug: "rennes", wikiFile: "Stade_Rennais_FC.svg", league: "Ligue 1", titles: 3, kitColor: "Rojinegro", budget: 120, yearsInFirst: 67, brand: "Puma", capacity: 29778 },
    { name: "Nice", slug: "nice", wikiFile: "OGC_Nice_logo.svg", league: "Ligue 1", titles: 7, kitColor: "Rojinegro", budget: 100, yearsInFirst: 66, brand: "Le Coq Sportif", capacity: 36178 },
    { name: "Reims", slug: "reims", wikiFile: "Stade_de_Reims_logo.svg", league: "Ligue 1", titles: 11, kitColor: "Rojiblanco", budget: 70, yearsInFirst: 39, brand: "Puma", capacity: 21029 },
    { name: "Toulouse", slug: "toulouse", wikiFile: "Toulouse_FC_2018_logo.svg", league: "Ligue 1", titles: 2, kitColor: "Violeta", budget: 55, yearsInFirst: 34, brand: "Nike", capacity: 33150 },
    { name: "Montpellier", slug: "montpellier", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Montpellier_H%C3%A9rault_Sport_Club_%28logo%2C_2000%29.svg/250px-Montpellier_H%C3%A9rault_Sport_Club_%28logo%2C_2000%29.svg.png", league: "Ligue 1", titles: 4, kitColor: "Naranja", budget: 50, yearsInFirst: 43, brand: "Nike", capacity: 32900 },
    { name: "Strasbourg", slug: "strasbourg", wikiFile: "Racing_Club_de_Strasbourg_logo.svg", league: "Ligue 1", titles: 4, kitColor: "Azul", budget: 65, yearsInFirst: 63, brand: "Adidas", capacity: 26109 },
    { name: "Brest", slug: "brest", wikiFile: "Stade_Brestois_29_logo.svg", league: "Ligue 1", titles: 0, kitColor: "Rojo", budget: 48, yearsInFirst: 19, brand: "Adidas", capacity: 15931 },
    { name: "Nantes", slug: "nantes", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_FC_Nantes_%28avec_fond%29_-_2019.svg/250px-Logo_FC_Nantes_%28avec_fond%29_-_2019.svg.png", league: "Ligue 1", titles: 15, kitColor: "Amarillo", budget: 60, yearsInFirst: 57, brand: "Macron", capacity: 35322 },
    { name: "Le Havre", slug: "le-havre", wikiFile: "Le_Havre_AC_logo.svg", league: "Ligue 1", titles: 1, kitColor: "Celeste", budget: 30, yearsInFirst: 25, brand: "Joma", capacity: 25178 },
    { name: "Auxerre", slug: "auxerre", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/290.png", league: "Ligue 1", titles: 5, kitColor: "Blanco", budget: 35, yearsInFirst: 33, brand: "Macron", capacity: 18500 },
    { name: "Angers", slug: "angers", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Angers_Sporting_Club_de_l%27Ouest_logo.svg/250px-Angers_Sporting_Club_de_l%27Ouest_logo.svg.png", league: "Ligue 1", titles: 0, kitColor: "Blanquinegro", budget: 25, yearsInFirst: 31, brand: "Kappa", capacity: 18752 },
    { name: "Saint-Étienne", slug: "saint-etienne", wikiFile: "AS_Saint-Étienne_logo.svg", league: "Ligue 1", titles: 22, kitColor: "Verde", budget: 40, yearsInFirst: 70, brand: "Hummel", capacity: 41965 }
];

// ---------- LEYENDAS ----------
const legends = [
    { name: "Zinedine Zidane", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg/500px-Zinedine_Zidane_by_Tasnim_03.jpg", birthYear: 1972, country: "Francia", countryEn: "France" },
    { name: "Ronaldinho", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ronaldinho_in_2019.jpg/500px-Ronaldinho_in_2019.jpg", birthYear: 1980, country: "Brasil", countryEn: "Brazil" },
    { name: "Iker Casillas", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Iker-Casillas-SportsTrade-2021-cropped.jpg/500px-Iker-Casillas-SportsTrade-2021-cropped.jpg", birthYear: 1981, country: "España", countryEn: "Spain" },
    { name: "Xavi Hernández", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Xavi_13981129001173637176666027076571.jpg/500px-Xavi_13981129001173637176666027076571.jpg", birthYear: 1980, country: "España", countryEn: "Spain" },
    { name: "Andrés Iniesta", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Andr%C3%A9s_Iniesta_%28cropped%29.jpg/500px-Andr%C3%A9s_Iniesta_%28cropped%29.jpg", birthYear: 1984, country: "España", countryEn: "Spain" },
    { name: "Sergio Ramos", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sergio_Ramos_Interview_2021_%28cropped%29.jpg/500px-Sergio_Ramos_Interview_2021_%28cropped%29.jpg", birthYear: 1986, country: "España", countryEn: "Spain" },
    { name: "Carles Puyol", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/KL-2018_%287%29.jpg/500px-KL-2018_%287%29.jpg", birthYear: 1978, country: "España", countryEn: "Spain" },
    { name: "Alessandro Del Piero", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/25th_Laureus_World_Sports_Awards_-_Alessandro_Del_Piero_-_240421_155220_%28cropped%29.jpg/500px-25th_Laureus_World_Sports_Awards_-_Alessandro_Del_Piero_-_240421_155220_%28cropped%29.jpg", birthYear: 1974, country: "Italia", countryEn: "Italy" },
    { name: "Andrea Pirlo", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/20150616_-_Portugal_-_Italie_-_Gen%C3%A8ve_-_Andrea_Pirlo_%28cropped%29.jpg/500px-20150616_-_Portugal_-_Italie_-_Gen%C3%A8ve_-_Andrea_Pirlo_%28cropped%29.jpg", birthYear: 1979, country: "Italia", countryEn: "Italy" },
    { name: "Gianluigi Buffon", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Gianluigi_Buffon_%2831784615942%29_%28cropped%29.jpg/500px-Gianluigi_Buffon_%2831784615942%29_%28cropped%29.jpg", birthYear: 1978, country: "Italia", countryEn: "Italy" },
    { name: "Thierry Henry", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Thierry_Henry_%2851649035951%29_%28cropped%29.jpg/500px-Thierry_Henry_%2851649035951%29_%28cropped%29.jpg", birthYear: 1977, country: "Francia", countryEn: "France" },
    { name: "David Beckham", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/David_Beckham_UNICEF_%28cropped%29.jpg/500px-David_Beckham_UNICEF_%28cropped%29.jpg", birthYear: 1975, country: "Inglaterra", countryEn: "England" },
    { name: "Ronaldo Nazário", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/051119SMcC0014.jpg/500px-051119SMcC0014.jpg", birthYear: 1976, country: "Brasil", countryEn: "Brazil" },
    { name: "Diego Maradona", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/500px-Maradona-Mundial_86_con_la_copa.JPG", birthYear: 1960, country: "Argentina", countryEn: "Argentina" },
    { name: "Pelé", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pele_con_brasil_%28cropped%29.jpg/500px-Pele_con_brasil_%28cropped%29.jpg", birthYear: 1940, country: "Brasil", countryEn: "Brazil" },
    { name: "Johan Cruyff", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Johan_Cruyff_1974c.jpg/500px-Johan_Cruyff_1974c.jpg", birthYear: 1947, country: "Países Bajos", countryEn: "Netherlands" },
    { name: "Alfredo Di Stéfano", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Di_Stefano_1959.jpg/500px-Di_Stefano_1959.jpg", birthYear: 1926, country: "Argentina", countryEn: "Argentina" },
    { name: "Lionel Messi", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/500px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg", birthYear: 1987, country: "Argentina", countryEn: "Argentina" },
    { name: "Cristiano Ronaldo", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/500px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg", birthYear: 1985, country: "Portugal", countryEn: "Portugal" },
    { name: "Neymar", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Neymar_Jr_presentation_-_Press_conference_for_PSG_001_%28cropped%29.jpg/500px-Neymar_Jr_presentation_-_Press_conference_for_PSG_001_%28cropped%29.jpg", birthYear: 1992, country: "Brasil", countryEn: "Brazil" },
    { name: "Paul Scholes", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Paul_Scholes_2008.jpg/500px-Paul_Scholes_2008.jpg", birthYear: 1974, country: "Inglaterra", countryEn: "England" },
    { name: "Frank Lampard", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Frank_Lampard_2019.jpg/500px-Frank_Lampard_2019.jpg", birthYear: 1978, country: "Inglaterra", countryEn: "England" },
    { name: "Franz Beckenbauer", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Franz_Beckenbauer_%281975%29.jpg/500px-Franz_Beckenbauer_%281975%29.jpg", birthYear: 1945, country: "Alemania", countryEn: "Germany" },
    { name: "Roberto Carlos", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/LS3_1288_%2853332367864%29_%28cropped%29.jpg/500px-LS3_1288_%2853332367864%29_%28cropped%29.jpg", birthYear: 1973, country: "Brasil", countryEn: "Brazil" },
    { name: "George Weah", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/George_Weah_in_2019_%28cropped%29_mod-2.jpg/500px-George_Weah_in_2019_%28cropped%29_mod-2.jpg", birthYear: 1966, country: "Liberia", countryEn: "Liberia" },
    { name: "Frank Rijkaard", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/FrankRijkaard2.jpg/500px-FrankRijkaard2.jpg", birthYear: 1962, country: "Países Bajos", countryEn: "Netherlands" },
    { name: "Lev Yashin", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/LevYashin.JPG/500px-LevYashin.JPG", birthYear: 1929, country: "Unión Soviética", countryEn: "Soviet Union" },
    { name: "Ronaldo (Fenómeno)", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Feir%C3%A3o_Morar_Bem%2C_Viver_Melhor_%2837184774001%29_%28cropped%29.jpg/500px-Feir%C3%A3o_Morar_Bem%2C_Viver_Melhor_%2837184774001%29_%28cropped%29.jpg", birthYear: 1976, country: "Brasil", countryEn: "Brazil" },
    { name: "Hristo Stoichkov", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Stoichkov_in_2016.jpg/500px-Stoichkov_in_2016.jpg", birthYear: 1966, country: "Bulgaria", countryEn: "Bulgaria" },
    { name: "Luka Modrić", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ofrenda_de_la_Liga_y_la_Champions-57-L.Mill%C3%A1n_%2852109310843%29_%28Luka_Modri%C4%87%29.jpg/500px-Ofrenda_de_la_Liga_y_la_Champions-57-L.Mill%C3%A1n_%2852109310843%29_%28Luka_Modri%C4%87%29.jpg", birthYear: 1985, country: "Croacia", countryEn: "Croatia" },
    { name: "Ruud Gullit", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/25th_Laureus_World_Sports_Awards_-_Ruud_Gullit_-_240422_131911_%28cropped%29.jpg/500px-25th_Laureus_World_Sports_Awards_-_Ruud_Gullit_-_240422_131911_%28cropped%29.jpg", birthYear: 1962, country: "Países Bajos", countryEn: "Netherlands" },
    { name: "Bobby Charlton", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bobby_Charlton_en_1966_160.jpg/500px-Bobby_Charlton_en_1966_160.jpg", birthYear: 1937, country: "Inglaterra", countryEn: "England" },
    { name: "Giuseppe Meazza", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Giuseppe_Meazza_1935.jpg/500px-Giuseppe_Meazza_1935.jpg", birthYear: 1910, country: "Italia", countryEn: "Italy" },
    { name: "Roberto Baggio", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Roberto_Baggio_cropped.jpg/500px-Roberto_Baggio_cropped.jpg", birthYear: 1967, country: "Italia", countryEn: "Italy" },
    { name: "Kylian Mbappé", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Picture_with_Mbapp%C3%A9_%28cropped%29_%28cropped%29.jpg/500px-Picture_with_Mbapp%C3%A9_%28cropped%29_%28cropped%29.jpg", birthYear: 1998, country: "Francia", countryEn: "France" },
    { name: "Romário", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Senadores_da_57%C2%AA_Legislatura_%2852689451805%29.jpg/500px-Senadores_da_57%C2%AA_Legislatura_%2852689451805%29.jpg", birthYear: 1966, country: "Brasil", countryEn: "Brazil" },
    { name: "Eusébio", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Eusebio_en_1973.jpg/500px-Eusebio_en_1973.jpg", birthYear: 1942, country: "Portugal", countryEn: "Portugal" },
    { name: "Marco van Basten", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Marco_van_Basten_%28ca_2006%29.jpg/500px-Marco_van_Basten_%28ca_2006%29.jpg", birthYear: 1964, country: "Países Bajos", countryEn: "Netherlands" },
    { name: "Paolo Maldini", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Paolo_Maldini_AC_Milan_Technical_director_2018.jpg/500px-Paolo_Maldini_AC_Milan_Technical_director_2018.jpg", birthYear: 1968, country: "Italia", countryEn: "Italy" },
    { name: "Ferenc Puskás", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Ferenc_Puskas_en_1965.jpg", birthYear: 1927, country: "Hungría", countryEn: "Hungary" },
    { name: "Gerd Müller", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Gerd_muller_figurita.jpg/500px-Gerd_muller_figurita.jpg", birthYear: 1945, country: "Alemania", countryEn: "Germany" },
    { name: "Michel Platini", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Michel_Platini_in_Wroclaw_by_Klearchos_Kapoutsis_tight_crop.jpg/500px-Michel_Platini_in_Wroclaw_by_Klearchos_Kapoutsis_tight_crop.jpg", birthYear: 1955, country: "Francia", countryEn: "France" },
    { name: "Lothar Matthäus", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/2019_Lothar_Matth%C3%A4us.jpg/500px-2019_Lothar_Matth%C3%A4us.jpg", birthYear: 1961, country: "Alemania", countryEn: "Germany" }
];
// ==========================================================
// ==========  ALMACENAMIENTO Y ESTADO GLOBAL ===============
// ==========================================================

const STORAGE_KEY = 'equipodle_data_v2';

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

function getDailyLegend() {
    const seed = dateToSeed(getTodayKey()) + 7777;
    const index = seed % legends.length;
    return legends[index];
}

function createEmptyData() {
    return {
        teams: {
            stats: { played: 0, wins: 0, currentStreak: 0, maxStreak: 0, totalAttempts: 0 },
            lastPlayed: null,
            lastResult: null
        },
        legends: {
            stats: { played: 0, wins: 0, currentStreak: 0, maxStreak: 0, totalAttempts: 0 },
            lastPlayed: null,
            lastResult: null
        },
        decade: {
            stats: { played: 0, wins: 0, currentStreak: 0, maxStreak: 0, totalAttempts: 0 },
            lastPlayed: null,
            lastResult: null
        }
    };
}

function loadData() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            const oldRaw = localStorage.getItem('equipodle_data_v1');
            if (oldRaw) {
                const old = JSON.parse(oldRaw);
                const migrated = createEmptyData();
                migrated.teams.stats = old.stats || migrated.teams.stats;
                migrated.teams.lastPlayed = old.lastPlayed || null;
                if (old.lastResult) {
                    migrated.teams.lastResult = {
                        won: old.lastResult.won,
                        attempts: old.lastResult.attempts,
                        itemName: old.lastResult.teamName || old.lastResult.itemName,
                        itemWikiFile: old.lastResult.teamWikiFile || old.lastResult.itemWikiFile
                    };
                }
                saveData(migrated);
                return migrated;
            }
            return createEmptyData();
        }
        const parsed = JSON.parse(raw);
        // Migración: si no existe la sección decade, la añadimos
        if (!parsed.decade) {
            parsed.decade = {
                stats: { played: 0, wins: 0, currentStreak: 0, maxStreak: 0, totalAttempts: 0 },
                lastPlayed: null,
                lastResult: null
            };
            saveData(parsed);
        }
        return parsed;
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

function recordGameResult(mode, won, attempts, itemName, itemWikiFile) {
    const data = loadData();
    const section = data[mode];
    const previousStreak = section.stats.currentStreak;
    const previousTierObj = getTierForStreak(previousStreak);

    section.stats.played++;
    if (won) {
        section.stats.wins++;
        section.stats.currentStreak++;
        section.stats.totalAttempts += attempts;
        if (section.stats.currentStreak > section.stats.maxStreak) {
            section.stats.maxStreak = section.stats.currentStreak;
        }
    } else {
        section.stats.currentStreak = 0;
    }

    const newTierObj = getTierForStreak(section.stats.currentStreak);
    section.lastPlayed = getTodayKey();
    section.lastResult = { won, attempts, itemName, itemWikiFile };
    saveData(data);

    return {
        previousTier: previousTierObj.tier,
        newTier: newTierObj.tier,
        newTierObj: newTierObj,
        levelUp: won && newTierObj.tier > previousTierObj.tier
    };
}

// ==========================================================
// ==========  ESTADO DEL JUEGO =============================
// ==========================================================

let currentMode = 'teams';

let targetTeam;
let attemptsCount = 0;
let guessedTeams = [];
let guessResults = [];
let gameOver = false;
let activeSuggestionIndex = -1;
let currentSuggestions = [];

const LEGEND_MAX_ATTEMPTS = 10;
let targetLegend;
let legendAttemptsCount = 0;
let guessedLegends = [];
let legendGameOver = false;
let legendActiveSuggestionIndex = -1;
let legendCurrentSuggestions = [];

let countdownInterval = null;

const PARTIAL_THRESHOLDS = {
    titles: 5,
    budget: 50,
    yearsInFirst: 10,
    capacity: 10000
};
const REVEAL_DELAY = 500;

// ==========================================================
// ==========  REFERENCIAS DOM ==============================
// ==========================================================

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

const legendPhoto = document.getElementById('legend-photo');
const legendPhotoPlaceholder = document.getElementById('legend-photo-placeholder');
const legendPhotoInitials = document.getElementById('legend-photo-initials');
const legendHint = document.getElementById('legend-hint');
const legendHintYear = document.getElementById('legend-hint-year');
const legendInput = document.getElementById('legend-input');
const legendSuggestions = document.getElementById('legend-autocomplete-list');
const legendGuessesContainer = document.getElementById('legend-guesses-container');
const legendAttemptsNumber = document.getElementById('legends-attempts-number');
const teamsContainer = document.getElementById('game-container');
const legendsContainer = document.getElementById('legends-container');

// ==========================================================
// ==========  RACHA ========================================
// ==========================================================

function updateStreakCapsule() {
    const data = loadData();
    const streak = data[currentMode].stats.currentStreak;
    const tierObj = getTierForStreak(streak);
    streakCount.innerText = streak;
    streakBall.innerText = tierObj.ball;
    streakExtra.innerText = tierObj.extra;

    for (let i = 0; i <= 7; i++) streakCapsule.classList.remove(`tier-${i}`);
    streakCapsule.classList.add(`tier-${tierObj.tier}`);

    if (tierObj.tier >= 3) streakCapsule.classList.add('tier-high');
    else streakCapsule.classList.remove('tier-high');
}

// ==========================================================
// ==========  UTILIDADES ===================================
// ==========================================================

function getShieldUrlList(team) {
    if (team.logoUrl) {
        return [
            team.logoUrl,
            `https://cdn.jsdelivr.net/gh/luukhopman/football-logos@master/logos/${team.name}.png`
        ];
    }
    const wiki = encodeURIComponent(team.wikiFile);
    return [
        `https://en.wikipedia.org/wiki/Special:FilePath/${wiki}?width=150`,
        `https://commons.wikimedia.org/wiki/Special:FilePath/${wiki}?width=150`,
        `https://cdn.jsdelivr.net/gh/luukhopman/football-logos@master/logos/${team.name}.png`
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
    const urls = getShieldUrlList(team);
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

// Mapa explícito: cada color del juego -> sus colores base
// Resuelve compuestos como "Blanquinegro" (blanco+negro), "Rojiblanco" (rojo+blanco), etc.
const COLOR_BASES = {
    'rojo':         ['rojo'],
    'blanco':       ['blanco'],
    'azul':         ['azul'],
    'negro':        ['negro'],
    'amarillo':     ['amarillo'],
    'verde':        ['verde'],
    'violeta':      ['violeta'],
    'celeste':      ['celeste'],
    'naranja':      ['naranja'],
    'granate':      ['granate'],
    'rojiblanco':   ['rojo', 'blanco'],
    'rojinegro':    ['rojo', 'negro'],
    'blanquiazul':  ['blanco', 'azul'],
    'blanquinegro': ['blanco', 'negro'],
    'verdiblanco':  ['verde', 'blanco'],
    'azulgrana':    ['azul', 'granate'],
    'azulnegro':    ['azul', 'negro']
};

function splitColor(color) {
    return COLOR_BASES[color.toLowerCase()] || [];
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

// ==========================================================
// ==========  IDIOMA =======================================
// ==========================================================

function applyLanguage(lang) {
    currentLang = lang;
    const dict = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerText = dict[key];
    });
    input.placeholder = dict.inputPlaceholder;
    legendInput.placeholder = dict.legendsPlaceholder;
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    refreshColorCells();

    if (!victoryOverlay.classList.contains('hidden')) {
        const data = loadData();
        const section = data[currentMode];
        if (section.lastPlayed === getTodayKey() && section.lastResult) {
            if (currentMode === 'decade') {
                showDecadeResultScreen();
            } else {
                showDailyResultScreen();
            }
        }
    }
    if (!statsOverlay.classList.contains('hidden')) {
        renderStatsModal();
    }
    if (!infoOverlay.classList.contains('hidden')) {
        infoContent.innerHTML = howToPlayContent[lang];
    }
    if (!aboutOverlay.classList.contains('hidden')) {
        aboutContentEl.innerHTML = aboutContent[lang];
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

// ==========================================================
// ==========  MODO TEAMS ===================================
// ==========================================================

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
    if (!e.target.closest('.search-box')) {
        clearSuggestions();
        clearLegendSuggestions();
    }
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
        const result = recordGameResult('teams', true, attemptsCount, targetTeam.name, targetTeam.wikiFile || targetTeam.logoUrl);
        updateStreakCapsule();
        launchFireworks();

        setTimeout(() => {
            if (result.levelUp) {
                showLevelUpModal(result.newTierObj, loadData().teams.stats.currentStreak);
            } else {
                showDailyResultScreen();
            }
        }, 2200);
    }
}

// ==========================================================
// ==========  MODO LEGENDS =================================
// ==========================================================

legendInput.addEventListener('input', () => { if (!legendGameOver) renderLegendSuggestions(); });
legendInput.addEventListener('focus', () => { if (!legendGameOver) renderLegendSuggestions(); });
legendInput.addEventListener('click', () => { if (!legendGameOver) renderLegendSuggestions(); });

legendInput.addEventListener('keydown', (e) => {
    if (legendGameOver) return;
    if (!legendCurrentSuggestions.length) return;
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        legendActiveSuggestionIndex = (legendActiveSuggestionIndex + 1) % legendCurrentSuggestions.length;
        highlightLegendSuggestion();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        legendActiveSuggestionIndex = (legendActiveSuggestionIndex - 1 + legendCurrentSuggestions.length) % legendCurrentSuggestions.length;
        highlightLegendSuggestion();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        const picked = legendActiveSuggestionIndex >= 0 ? legendCurrentSuggestions[legendActiveSuggestionIndex] : legendCurrentSuggestions[0];
        if (picked) selectLegendSuggestion(picked);
    } else if (e.key === 'Escape') {
        clearLegendSuggestions();
    }
});

function renderLegendSuggestions() {
    const val = legendInput.value.toLowerCase().trim();
    legendSuggestions.innerHTML = '';
    legendActiveSuggestionIndex = -1;
    let filtered = legends.filter(l => !guessedLegends.includes(l.name));
    if (val) filtered = filtered.filter(l => l.name.toLowerCase().includes(val));
    else filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    legendCurrentSuggestions = filtered;
    legendCurrentSuggestions.forEach((l, idx) => {
        const div = document.createElement('div');
        const nameSpan = document.createElement('span');
        nameSpan.innerText = l.name;
        div.appendChild(nameSpan);
        div.onclick = () => selectLegendSuggestion(l);
        div.onmouseenter = () => { legendActiveSuggestionIndex = idx; highlightLegendSuggestion(); };
        legendSuggestions.appendChild(div);
    });
}

function highlightLegendSuggestion() {
    [...legendSuggestions.children].forEach((el, i) => {
        el.classList.toggle('active', i === legendActiveSuggestionIndex);
    });
}

function selectLegendSuggestion(legend) {
    makeLegendGuess(legend);
    legendInput.value = '';
    clearLegendSuggestions();
    legendInput.focus();
}

function clearLegendSuggestions() {
    legendSuggestions.innerHTML = '';
    legendCurrentSuggestions = [];
    legendActiveSuggestionIndex = -1;
}

function loadLegendPhoto(legend) {
    legendPhotoInitials.innerText = getInitials(legend.name);

    legendPhoto.onerror = () => {
        legendPhoto.style.display = 'none';
        legendPhotoPlaceholder.classList.remove('hidden-placeholder');
    };
    legendPhoto.onload = () => {
        if (legendPhoto.naturalWidth === 0) {
            legendPhoto.style.display = 'none';
            legendPhotoPlaceholder.classList.remove('hidden-placeholder');
        } else {
            legendPhoto.style.display = 'block';
            legendPhotoPlaceholder.classList.add('hidden-placeholder');
        }
    };

    legendPhoto.src = legend.photoUrl;
}

function updateLegendBlur() {
    for (let i = 0; i <= 10; i++) legendPhoto.classList.remove(`blur-${i}`);
    const remaining = LEGEND_MAX_ATTEMPTS - legendAttemptsCount;
    legendPhoto.classList.add(`blur-${remaining}`);
}

function updateLegendAttemptsUI() {
    legendAttemptsNumber.innerText = (LEGEND_MAX_ATTEMPTS - legendAttemptsCount);
}

function showLegendHint() {
    if (!targetLegend) return;
    legendHintYear.innerText = targetLegend.birthYear;
    legendHint.classList.remove('hidden');
}

function makeLegendGuess(userLegend) {
    if (legendGameOver) return;
    legendAttemptsCount++;
    guessedLegends.push(userLegend.name);

    if (userLegend.name === targetLegend.name) {
        legendGameOver = true;
        legendInput.disabled = true;
        updateLegendBlur();
        updateLegendAttemptsUI();
        for (let i = 0; i <= 10; i++) legendPhoto.classList.remove(`blur-${i}`);
        legendPhoto.classList.add('blur-0');

        const result = recordGameResult('legends', true, legendAttemptsCount, targetLegend.name, targetLegend.photoUrl);
        updateStreakCapsule();
        launchFireworks();

        setTimeout(() => {
            showDailyResultScreen();
        }, 2200);
        return;
    }

    const row = document.createElement('div');
    row.className = 'legend-guess-row';
    row.innerText = `❌ ${userLegend.name}`;
    legendGuessesContainer.prepend(row);

    updateLegendBlur();
    updateLegendAttemptsUI();

    if (legendAttemptsCount >= 5) {
        showLegendHint();
    }

    if (legendAttemptsCount >= LEGEND_MAX_ATTEMPTS) {
        legendGameOver = true;
        legendInput.disabled = true;
        for (let i = 0; i <= 10; i++) legendPhoto.classList.remove(`blur-${i}`);
        legendPhoto.classList.add('blur-0');
        recordGameResult('legends', false, legendAttemptsCount, targetLegend.name, targetLegend.photoUrl);
        updateStreakCapsule();

        setTimeout(() => {
            showDailyResultScreen();
        }, 1000);
    }
}

// ==========================================================
// ==========  CAMBIO DE MODO ===============================
// ==========================================================

function switchMode(newMode) {
    currentMode = newMode;
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === newMode);
    });

    // Ocultar todos los modos
    teamsContainer.classList.add('hidden');
    legendsContainer.classList.add('hidden');
    decadeContainer.classList.add('hidden');

    // Mostrar el modo activo
    if (newMode === 'teams') {
        teamsContainer.classList.remove('hidden');
    } else if (newMode === 'legends') {
        legendsContainer.classList.remove('hidden');
    } else if (newMode === 'decade') {
        decadeContainer.classList.remove('hidden');
    }

    const data = loadData();
    const section = data[newMode];
    if (section.lastPlayed === getTodayKey() && section.lastResult) {
        if (newMode === 'decade') {
            showDecadeResultScreen();
        } else {
            showDailyResultScreen();
        }
    } else {
        victoryOverlay.classList.add('hidden');
    }

    updateStreakCapsule();
}

document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn.dataset.mode));
});

// ==========================================================
// ==========  PANTALLA DE VICTORIA =========================
// ==========================================================

function showLevelUpModal(tierObj, streak) {
    const dict = i18n[currentLang];
    levelupBall.innerText = tierObj.ball;
    levelupExtra.innerText = tierObj.extra;
    levelupTierName.innerText = dict[tierObj.nameKey] || 'Tier ' + tierObj.tier;
    levelupStreakNumber.innerText = (currentLang === 'es' ? 'Racha: ' : 'Streak: ') + streak;

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
    showDailyResultScreen();
});

function showDailyResultScreen() {
    const data = loadData();
    const section = data[currentMode];
    if (!section.lastResult || !section.lastResult.itemName) return;

    const card = document.getElementById('victory-card');
    const heading = document.getElementById('victory-heading');
    const emoji = card.querySelector('.confetti-emoji');
    const message = document.getElementById('victory-message');
    const dict = i18n[currentLang];

    card.classList.remove('defeat');
    const won = section.lastResult.won;

    if (won) {
        heading.innerText = dict.victoryTitle;
        emoji.innerText = '🏆';
        const textBefore = currentMode === 'legends' ? dict.legendsVictoryText : dict.victoryTextBefore;
        message.innerHTML = `
            <span>${textBefore}</span>
            <span id="victory-attempts">${section.lastResult.attempts}</span>
            <span>${dict.victoryTextAfter}</span>
        `;
    } else {
        card.classList.add('defeat');
        heading.innerText = dict.legendsDefeatTitle;
        emoji.innerText = '😢';
        message.innerHTML = `<span>${dict.legendsDefeatText}</span>`;
    }

    const victoryTeamDiv = document.getElementById('victory-team');
    victoryTeamDiv.innerHTML = '';

    if (currentMode === 'teams') {
        const lastTeam = teams.find(t => t.name === section.lastResult.itemName) || {
            name: section.lastResult.itemName,
            wikiFile: section.lastResult.itemWikiFile
        };
        const shield = createShieldImg(lastTeam, 'victory-shield');
        const nameSpan = document.createElement('span');
        nameSpan.id = 'victory-team-name';
        nameSpan.innerText = lastTeam.name;
        victoryTeamDiv.appendChild(shield);
        victoryTeamDiv.appendChild(nameSpan);
    } else {
        const avatar = document.createElement('span');
        avatar.className = 'shield-wrapper victory-shield';
        const initials = document.createElement('span');
        initials.className = 'shield-fallback';
        initials.style.display = 'flex';
        initials.innerText = getInitials(section.lastResult.itemName);
        avatar.appendChild(initials);
        const nameSpan = document.createElement('span');
        nameSpan.id = 'victory-team-name';
        nameSpan.innerText = section.lastResult.itemName;
        victoryTeamDiv.appendChild(avatar);
        victoryTeamDiv.appendChild(nameSpan);
    }

    renderMiniStats(section.stats);
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
    const grid = document.getElementById('stats-grid');

    function renderSection(sectionName, stats) {
        const avg = stats.wins > 0 ? (stats.totalAttempts / stats.wins).toFixed(1) : '—';
        const winRate = stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) + '%' : '—';
        return `
            <div class="stats-section-title">${sectionName}</div>
            <div class="stat-box"><div class="stat-box-value">${stats.played}</div><div class="stat-box-label">${dict.statPlayed}</div></div>
            <div class="stat-box"><div class="stat-box-value">${stats.wins}</div><div class="stat-box-label">${dict.statWins}</div></div>
            <div class="stat-box"><div class="stat-box-value">${winRate}</div><div class="stat-box-label">${dict.statWinRate}</div></div>
            <div class="stat-box"><div class="stat-box-value">${stats.currentStreak}</div><div class="stat-box-label">${dict.statCurrentStreak}</div></div>
            <div class="stat-box"><div class="stat-box-value">${stats.maxStreak}</div><div class="stat-box-label">${dict.statMaxStreak}</div></div>
            <div class="stat-box"><div class="stat-box-value">${avg}</div><div class="stat-box-label">${dict.statAvg}</div></div>
        `;
    }

    grid.innerHTML =
        renderSection(dict.statsTeams, data.teams.stats) +
        renderSection(dict.statsLegends, data.legends.stats) +
        renderSection('Decade', data.decade.stats);
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

function closeVictoryOverlay() {
    victoryOverlay.classList.add('hidden');
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

// Click fuera del card (sobre el overlay) -> cerrar
victoryOverlay.addEventListener('click', (e) => {
    if (e.target === victoryOverlay) closeVictoryOverlay();
});

// Botón X arriba a la derecha -> cerrar
const closeVictoryBtn = document.getElementById('close-victory-btn');
if (closeVictoryBtn) {
    closeVictoryBtn.addEventListener('click', closeVictoryOverlay);
}

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

// ==========================================================
// ==========  COMPARTIR RESULTADO (con Rondo + playrondo.app)
// ==========================================================

function buildShareText() {
    const data = loadData();
    const section = data[currentMode];
    const attempts = section.lastResult ? section.lastResult.attempts : 0;
    const streak = section.stats.currentStreak;
    const won = section.lastResult ? section.lastResult.won : false;

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');

    const emojiMap = { 'correct': '🟩', 'partial': '🟨', 'wrong': '🟥' };

    let txt;
    if (currentMode === 'teams') {
        const grid = guessResults.map(row => row.map(s => emojiMap[s] || '⬜').join('')).join('\n');
        const attemptsWordEs = attempts === 1 ? 'intento' : 'intentos';
        const attemptsWordEn = attempts === 1 ? 'try' : 'tries';

        txt = currentLang === 'es'
            ? `⚽ Rondo · Teams — ${dd}/${mm} ⚽\nAdivinado en ${attempts} ${attemptsWordEs} · Racha: ${streak} 🔥\n\n${grid}\n\nJuega en: playrondo.app`
            : `⚽ Rondo · Teams — ${dd}/${mm} ⚽\nGuessed in ${attempts} ${attemptsWordEn} · Streak: ${streak} 🔥\n\n${grid}\n\nPlay at: playrondo.app`;
    } else if (currentMode === 'legends') {
        let grid = '';
        for (let i = 0; i < LEGEND_MAX_ATTEMPTS; i++) {
            if (i < attempts - 1) grid += '🟥';
            else if (i === attempts - 1 && won) grid += '🟩';
            else if (i === attempts - 1 && !won) grid += '🟥';
            else grid += '⬜';
        }
        txt = currentLang === 'es'
            ? `⭐ Rondo · Legends — ${dd}/${mm} ⭐\n${won ? 'Adivinado' : 'Fallido'} · Racha: ${streak} 🔥\n\n${grid}\n\nJuega en: playrondo.app`
            : `⭐ Rondo · Legends — ${dd}/${mm} ⭐\n${won ? 'Guessed' : 'Failed'} · Streak: ${streak} 🔥\n\n${grid}\n\nPlay at: playrondo.app`;
    } else if (currentMode === 'decade') {
        // Cada intento es una línea de 5 emojis (verde/rojo)
        const grid = decadeAttemptHistory.map(attempt =>
            attempt.map(s => s === 'correct' ? '🟩' : '🟥').join('')
        ).join('\n');

        const attemptsWordEs = attempts === 1 ? 'intento' : 'intentos';
        const attemptsWordEn = attempts === 1 ? 'try' : 'tries';

        txt = currentLang === 'es'
            ? `📅 Rondo · Decade — ${dd}/${mm} 📅\n${won ? `Acertado en ${attempts} ${attemptsWordEs}` : 'Fallido'} · Racha: ${streak} 🔥\n\n${grid}\n\nJuega en: playrondo.app`
            : `📅 Rondo · Decade — ${dd}/${mm} 📅\n${won ? `Solved in ${attempts} ${attemptsWordEn}` : 'Failed'} · Streak: ${streak} 🔥\n\n${grid}\n\nPlay at: playrondo.app`;
    }

    return txt;
}

async function shareResult() {
    const text = buildShareText();
    const shareBtn = document.getElementById('share-result-btn');

    if (navigator.share) {
        try {
            await navigator.share({ title: 'Rondo', text: text });
            return;
        } catch (err) {
            // usuario canceló
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

// ==========================================================
// ==========  FUEGOS ARTIFICIALES ==========================
// ==========================================================

function launchFireworks() {
    if (typeof confetti === 'undefined') return;
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const colors = ['#2ed573', '#ffd700', '#e74c3c', '#ffffff', '#f1c40f'];

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) { clearInterval(interval); return; }
        confetti({
            particleCount: 60, angle: 60, spread: 70,
            origin: { x: Math.random() * 0.3, y: Math.random() * 0.5 + 0.2 },
            colors: colors, startVelocity: 55, gravity: 0.9, scalar: 1.1, ticks: 200
        });
        confetti({
            particleCount: 60, angle: 120, spread: 70,
            origin: { x: 1 - Math.random() * 0.3, y: Math.random() * 0.5 + 0.2 },
            colors: colors, startVelocity: 55, gravity: 0.9, scalar: 1.1, ticks: 200
        });
    }, 350);
}

window.addEventListener('resize', () => {
    refreshColorCells();
});

// ==========================================================
// ==========  ARRANQUE =====================================
// ==========================================================

function init() {
    targetTeam = getDailyTeam();
    targetLegend = getDailyLegend();

    loadLegendPhoto(targetLegend);
    updateLegendBlur();
    updateLegendAttemptsUI();

    applyLanguage('en');

    const data = loadData();
    updateStreakCapsule();

    const totalPlayed = data.teams.stats.played + data.legends.stats.played;
    if (totalPlayed === 0 && !data.teams.lastPlayed && !data.legends.lastPlayed) {
        infoContent.innerHTML = howToPlayContent[currentLang];
        infoOverlay.classList.remove('hidden');
    }

    if (data.teams.lastPlayed === getTodayKey() && data.teams.lastResult) {
        gameOver = true;
        input.disabled = true;
        if (currentMode === 'teams') {
            showDailyResultScreen();
        }
    }

    if (data.legends.lastPlayed === getTodayKey() && data.legends.lastResult) {
        legendGameOver = true;
        legendInput.disabled = true;
        for (let i = 0; i <= 10; i++) legendPhoto.classList.remove(`blur-${i}`);
        legendPhoto.classList.add('blur-0');
    }
}

// ==========================================================
// ==========  DADO SUGIERE PRIMER EQUIPO ===================
// ==========================================================

const diceSuggest = document.getElementById('dice-suggest');

function hideDice() {
    if (diceSuggest) diceSuggest.classList.add('hidden-dice');
}

if (diceSuggest) {
    // Al pulsar el dado: elegir equipo aleatorio y hacer guess
    diceSuggest.addEventListener('click', () => {
        if (gameOver) return;
        const available = teams.filter(t => !guessedTeams.includes(t.name));
        if (available.length === 0) return;
        const randomTeam = available[Math.floor(Math.random() * available.length)];
        hideDice();
        makeGuess(randomTeam);
    });

    // Si el usuario empieza a escribir, ocultar el dado
    input.addEventListener('input', () => {
        if (input.value.length > 0) hideDice();
    });
}

// Si el usuario ya jugó hoy, esconder el dado al arrancar
function checkHideDiceOnLoad() {
    const data = loadData();
    if (data.teams.lastPlayed === getTodayKey() && data.teams.lastResult) {
        hideDice();
    }
}
checkHideDiceOnLoad();

// ==========================================================
// ==========  MODAL ABOUT & CREDITS ========================
// ==========================================================

const aboutBtn = document.getElementById('about-btn');
const aboutOverlay = document.getElementById('about-overlay');
const aboutContentEl = document.getElementById('about-content');
const closeAboutBtn = document.getElementById('close-about-btn');

if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
        aboutContentEl.innerHTML = aboutContent[currentLang];
        aboutOverlay.classList.remove('hidden');
    });
}
if (closeAboutBtn) {
    closeAboutBtn.addEventListener('click', () => {
        aboutOverlay.classList.add('hidden');
    });
}
if (aboutOverlay) {
    aboutOverlay.addEventListener('click', (e) => {
        if (e.target === aboutOverlay) aboutOverlay.classList.add('hidden');
    });
}

// ==========================================================
// ==========  BANNER DE COOKIES ============================
// ==========================================================

const COOKIE_KEY = 'rondo_cookies_accepted';

function checkCookieConsent() {
    const banner = document.getElementById('consent-banner');
    const acceptBtn = document.getElementById('consent-accept');
    if (!banner || !acceptBtn) return;

    // Listener del botón "Got it"
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem(COOKIE_KEY, 'true');
        banner.classList.add('hidden');
    });

    // Si ya aceptó, no mostrar
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (accepted) return;

    // Mostrar tras 2 segundos
    setTimeout(() => {
        banner.classList.remove('hidden');
    }, 2000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkCookieConsent);
} else {
    checkCookieConsent();
}

// ==========================================================
// ==========  MODO DECADE ==================================
// ==========================================================

const DECADE_MAX_ATTEMPTS = 3;
const DECADE_EVENTS_PER_DAY = 5;

const CATEGORY_ICONS = {
    transfer: '💰',
    trophy: '🏆',
    debut: '👶',
    retire: '👋',
    award: '⭐',
    milestone: '🎯',
    record: '📜',
    drama: '💔'
};

let decadeDailyEvents = [];      // Los 5 eventos del día
let decadeAttemptsCount = 0;
let decadeGameOver = false;
let decadePlayerOrder = [null, null, null, null, null]; // Lo que el usuario pone en los slots
let decadeAttemptHistory = [];   // Historial de intentos para compartir

const decadeContainer = document.getElementById('decade-container');
const decadePool = document.getElementById('decade-pool');
const decadeSlotsContainer = document.getElementById('decade-slots');
const decadeAttemptsNumber = document.getElementById('decade-attempts-number');
const decadeSubmitBtn = document.getElementById('decade-submit-btn');

// Selecciona 5 eventos aleatorios del día (mismo seed que Teams/Legends)
function getDailyDecadeEvents() {
    const seed = dateToSeed(getTodayKey()) + 13579;
    // Crear array de índices barajados de forma determinista
    const indices = [...Array(decadeEvents.length).keys()];
    let s = seed;
    for (let i = indices.length - 1; i > 0; i--) {
        s = (s * 9301 + 49297) % 233280;
        const j = Math.floor((s / 233280) * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, DECADE_EVENTS_PER_DAY).map(i => decadeEvents[i]);
}

// Renderiza la pool de eventos disponibles
function renderDecadePool() {
    decadePool.innerHTML = '';
    decadeDailyEvents.forEach(event => {
        // Si el evento ya está en algún slot, no lo mostramos en el pool
        if (decadePlayerOrder.includes(event.id)) return;
        const eventEl = createDecadeEventElement(event);
        decadePool.appendChild(eventEl);
    });
}

// Crea el elemento HTML de un evento (carta arrastrable)
function createDecadeEventElement(event) {
    const el = document.createElement('div');
    el.className = 'decade-event';
    el.draggable = true;
    el.dataset.eventId = event.id;
    el.innerHTML = `
        <span class="decade-event-icon">${CATEGORY_ICONS[event.category] || '📅'}</span>
        <span class="decade-event-text">${event.text}</span>
    `;
    return el;
}

// Renderiza los slots con los eventos colocados
function renderDecadeSlots() {
    const slots = decadeSlotsContainer.querySelectorAll('.decade-slot-drop');
    slots.forEach((slot, idx) => {
        slot.innerHTML = '';
        slot.classList.remove('filled', 'correct', 'incorrect');
        const eventId = decadePlayerOrder[idx];
        if (eventId) {
            const event = decadeDailyEvents.find(e => e.id === eventId);
            if (event) {
                slot.classList.add('filled');
                slot.draggable = true;
                slot.dataset.eventId = event.id;
                slot.innerHTML = `
                    <span class="decade-event-icon">${CATEGORY_ICONS[event.category] || '📅'}</span>
                    <span class="decade-event-text">${event.text}</span>
                `;
            }
        }
    });
    updateDecadeSubmitButton();
}

// Habilitar/deshabilitar el botón Submit
function updateDecadeSubmitButton() {
    const allFilled = decadePlayerOrder.every(id => id !== null);
    decadeSubmitBtn.disabled = !allFilled || decadeGameOver;
}

// ==========================================================
// ===== DRAG & DROP DEL MODO DECADE ========================
// ==========================================================

let decadeDraggedEventId = null;
let decadeDraggedFrom = null; // 'pool' o índice numérico (slot)

// Configurar drag & drop en el pool y los slots
function setupDecadeDragAndDrop() {
    // Eventos del pool (delegación: se aplica a los hijos)
    decadePool.addEventListener('dragstart', handleDragStart);
    decadePool.addEventListener('dragend', handleDragEnd);
    decadePool.addEventListener('dragover', (e) => e.preventDefault());
    decadePool.addEventListener('drop', handleDropOnPool);

    // Eventos en los slots
    const slots = decadeSlotsContainer.querySelectorAll('.decade-slot-drop');
    slots.forEach(slot => {
        slot.addEventListener('dragstart', handleDragStart);
        slot.addEventListener('dragend', handleDragEnd);
        slot.addEventListener('dragover', handleDragOver);
        slot.addEventListener('dragleave', handleDragLeave);
        slot.addEventListener('drop', handleDropOnSlot);
    });

    // Soporte para móvil (touch events)
    setupTouchDragAndDrop();
}

function handleDragStart(e) {
    if (decadeGameOver) { e.preventDefault(); return; }
    const target = e.target.closest('.decade-event, .decade-slot-drop.filled');
    if (!target) { e.preventDefault(); return; }
    decadeDraggedEventId = target.dataset.eventId;
    decadeDraggedFrom = target.classList.contains('decade-event')
        ? 'pool'
        : parseInt(target.dataset.position, 10);
    target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    // Hack para Firefox
    e.dataTransfer.setData('text/plain', decadeDraggedEventId);
}

function handleDragEnd(e) {
    document.querySelectorAll('.dragging').forEach(el => el.classList.remove('dragging'));
    document.querySelectorAll('.drop-hover').forEach(el => el.classList.remove('drop-hover'));
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.classList.add('drop-hover');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drop-hover');
}

function handleDropOnSlot(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drop-hover');
    if (!decadeDraggedEventId || decadeGameOver) return;

    const targetPos = parseInt(e.currentTarget.dataset.position, 10);

    // Si arrastras de un slot a otro slot, intercambia
    if (typeof decadeDraggedFrom === 'number' && decadeDraggedFrom !== targetPos) {
        const tmp = decadePlayerOrder[targetPos];
        decadePlayerOrder[targetPos] = decadePlayerOrder[decadeDraggedFrom];
        decadePlayerOrder[decadeDraggedFrom] = tmp;
    } else if (decadeDraggedFrom === 'pool') {
        // Si arrastras del pool, sustituye lo que haya en el slot (lo devuelve al pool)
        decadePlayerOrder[targetPos] = decadeDraggedEventId;
    }

    decadeDraggedEventId = null;
    decadeDraggedFrom = null;
    renderDecadePool();
    renderDecadeSlots();
}

function handleDropOnPool(e) {
    e.preventDefault();
    if (!decadeDraggedEventId || decadeGameOver) return;

    // Si vino de un slot, lo quitamos del slot
    if (typeof decadeDraggedFrom === 'number') {
        decadePlayerOrder[decadeDraggedFrom] = null;
    }

    decadeDraggedEventId = null;
    decadeDraggedFrom = null;
    renderDecadePool();
    renderDecadeSlots();
}

// ==========================================================
// ===== TOUCH SUPPORT (móvil) ==============================
// ==========================================================

let touchDraggedEl = null;
let touchClone = null;

function setupTouchDragAndDrop() {
    decadeContainer.addEventListener('touchstart', handleTouchStart, { passive: false });
    decadeContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
    decadeContainer.addEventListener('touchend', handleTouchEnd);
    decadeContainer.addEventListener('touchcancel', handleTouchEnd);
}

function handleTouchStart(e) {
    if (decadeGameOver) return;
    const target = e.target.closest('.decade-event, .decade-slot-drop.filled');
    if (!target) return;
    e.preventDefault();

    touchDraggedEl = target;
    decadeDraggedEventId = target.dataset.eventId;
    decadeDraggedFrom = target.classList.contains('decade-event')
        ? 'pool'
        : parseInt(target.dataset.position, 10);

    // Crear clon visual que sigue al dedo
    touchClone = target.cloneNode(true);
    touchClone.style.position = 'fixed';
    touchClone.style.pointerEvents = 'none';
    touchClone.style.opacity = '0.85';
    touchClone.style.zIndex = '9999';
    touchClone.style.width = target.offsetWidth + 'px';
    touchClone.style.transform = 'scale(1.05)';
    document.body.appendChild(touchClone);

    target.classList.add('dragging');
    moveTouchClone(e.touches[0]);
}

function handleTouchMove(e) {
    if (!touchDraggedEl) return;
    e.preventDefault();
    moveTouchClone(e.touches[0]);

    // Detectar el slot bajo el dedo
    const touch = e.touches[0];
    const elBelow = document.elementFromPoint(touch.clientX, touch.clientY);

    document.querySelectorAll('.drop-hover').forEach(el => el.classList.remove('drop-hover'));

    if (elBelow) {
        const slot = elBelow.closest('.decade-slot-drop');
        if (slot) slot.classList.add('drop-hover');
    }
}

function handleTouchEnd(e) {
    if (!touchDraggedEl) return;

    const touch = (e.changedTouches && e.changedTouches[0]) || null;
    if (touch) {
        const elBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        if (elBelow) {
            const slot = elBelow.closest('.decade-slot-drop');
            const pool = elBelow.closest('#decade-pool, #decade-pool-section');

            if (slot) {
                const targetPos = parseInt(slot.dataset.position, 10);
                if (typeof decadeDraggedFrom === 'number' && decadeDraggedFrom !== targetPos) {
                    const tmp = decadePlayerOrder[targetPos];
                    decadePlayerOrder[targetPos] = decadePlayerOrder[decadeDraggedFrom];
                    decadePlayerOrder[decadeDraggedFrom] = tmp;
                } else if (decadeDraggedFrom === 'pool') {
                    decadePlayerOrder[targetPos] = decadeDraggedEventId;
                }
                renderDecadePool();
                renderDecadeSlots();
            } else if (pool) {
                if (typeof decadeDraggedFrom === 'number') {
                    decadePlayerOrder[decadeDraggedFrom] = null;
                    renderDecadePool();
                    renderDecadeSlots();
                }
            }
        }
    }

    // Limpiar
    if (touchClone) {
        touchClone.remove();
        touchClone = null;
    }
    touchDraggedEl.classList.remove('dragging');
    touchDraggedEl = null;
    decadeDraggedEventId = null;
    decadeDraggedFrom = null;
    document.querySelectorAll('.drop-hover').forEach(el => el.classList.remove('drop-hover'));
}

function moveTouchClone(touch) {
    if (!touchClone) return;
    touchClone.style.left = (touch.clientX - touchClone.offsetWidth / 2) + 'px';
    touchClone.style.top = (touch.clientY - touchClone.offsetHeight / 2) + 'px';
}

// Inicializar el modo Decade
function initDecadeMode() {
    decadeDailyEvents = getDailyDecadeEvents();
    decadePlayerOrder = [null, null, null, null, null];
    decadeAttemptsCount = 0;
    decadeGameOver = false;
    decadeAttemptHistory = [];

    decadeAttemptsNumber.innerText = DECADE_MAX_ATTEMPTS;
    renderDecadePool();
    renderDecadeSlots();
    setupDecadeDragAndDrop();
}

// ==========================================================
// ===== LÓGICA DE COMPARACIÓN + FEEDBACK ===================
// ==========================================================

// Calcula el orden correcto (de menor a mayor año)
function getDecadeCorrectOrder() {
    return [...decadeDailyEvents]
        .sort((a, b) => a.year - b.year)
        .map(e => e.id);
}

// Comprueba la respuesta del usuario y aplica feedback
function submitDecadeAnswer() {
    if (decadeGameOver) return;
    if (decadePlayerOrder.some(id => id === null)) return;

    decadeAttemptsCount++;
    const correctOrder = getDecadeCorrectOrder();
    const slots = decadeSlotsContainer.querySelectorAll('.decade-slot-drop');

    // Comparar cada posición y marcar visualmente
    const statuses = []; // 'correct' o 'incorrect' por cada posición
    decadePlayerOrder.forEach((eventId, idx) => {
        const isCorrect = eventId === correctOrder[idx];
        statuses.push(isCorrect ? 'correct' : 'incorrect');
        slots[idx].classList.add(isCorrect ? 'correct' : 'incorrect');
    });

    // Guardar el intento para el share posterior
    decadeAttemptHistory.push(statuses);

    const allCorrect = statuses.every(s => s === 'correct');

    // GANÓ
    if (allCorrect) {
        finishDecadeGame(true);
        return;
    }

    // PERDIÓ (sin intentos)
    if (decadeAttemptsCount >= DECADE_MAX_ATTEMPTS) {
        finishDecadeGame(false);
        return;
    }

    // SIGUE JUGANDO: tras 1.5s, devolver al pool los eventos mal posicionados
    decadeAttemptsNumber.innerText = DECADE_MAX_ATTEMPTS - decadeAttemptsCount;
    decadeSubmitBtn.disabled = true;

    setTimeout(() => {
        // Mantener solo los correctos en sus slots
        decadePlayerOrder = decadePlayerOrder.map((id, idx) => {
            return statuses[idx] === 'correct' ? id : null;
        });
        renderDecadePool();
        renderDecadeSlots();
    }, 1500);
}

// Cierra la partida (ganada o perdida)
function finishDecadeGame(won) {
    decadeGameOver = true;
    decadeSubmitBtn.disabled = true;

    // Guardar resultado en localStorage
    recordGameResult(
        'decade',
        won,
        decadeAttemptsCount,
        'decade-' + getTodayKey(),  // identificador del día
        null
    );
    updateStreakCapsule();

    if (won) launchFireworks();

    // Mostrar pantalla de resultado tras 2 segundos
    setTimeout(() => {
        showDecadeResultScreen();
    }, won ? 2200 : 1500);
}

// Listener del botón Submit
decadeSubmitBtn.addEventListener('click', submitDecadeAnswer);

// ==========================================================
// ===== PANTALLA DE RESULTADO DEL DECADE ===================
// ==========================================================

function showDecadeResultScreen() {
    const data = loadData();
    const section = data.decade;
    if (!section.lastResult) return;

    const card = document.getElementById('victory-card');
    const heading = document.getElementById('victory-heading');
    const emoji = card.querySelector('.confetti-emoji');
    const message = document.getElementById('victory-message');
    const dict = i18n[currentLang];

    card.classList.remove('defeat');
    const won = section.lastResult.won;

    if (won) {
        heading.innerText = dict.decadeVictoryTitle;
        emoji.innerText = '🏆';
        const attemptsWord = section.lastResult.attempts === 1
            ? dict.decadeAttemptWord
            : dict.decadeAttemptsWord;
        message.innerHTML = `
            <span>${dict.decadeVictoryText}</span>
            <span id="victory-attempts">${section.lastResult.attempts}</span>
            <span>${attemptsWord}</span>
        `;
    } else {
        card.classList.add('defeat');
        heading.innerText = dict.decadeDefeatTitle;
        emoji.innerText = '😢';
        message.innerHTML = `<span>${dict.decadeDefeatText}</span>`;
    }

    // Mostrar el orden correcto con descripciones educativas
    const victoryTeamDiv = document.getElementById('victory-team');
    victoryTeamDiv.innerHTML = '';
    victoryTeamDiv.style.flexDirection = 'column';
    victoryTeamDiv.style.alignItems = 'stretch';
    victoryTeamDiv.style.gap = '8px';
    victoryTeamDiv.style.padding = '14px 14px';

    const correctOrder = getDecadeCorrectOrder();
    correctOrder.forEach((eventId, idx) => {
        const event = decadeDailyEvents.find(e => e.id === eventId);
        if (!event) return;

        const item = document.createElement('div');
        item.className = 'decade-result-item';
        item.innerHTML = `
            <div class="decade-result-header">
                <span class="decade-result-icon">${CATEGORY_ICONS[event.category] || '📅'}</span>
                <span class="decade-result-year">${event.year}</span>
                <span class="decade-result-text">${event.text}</span>
            </div>
            <div class="decade-result-desc">${event.description}</div>
        `;
        victoryTeamDiv.appendChild(item);
    });

    renderMiniStats(section.stats);
    startCountdown();

    // Cambiar texto del countdown
    const countdownLabel = document.querySelector('.countdown-label');
    if (countdownLabel) {
        countdownLabel.innerText = currentLang === 'es' ? 'Próximo Decade en' : 'Next Decade in';
    }

    victoryOverlay.classList.remove('hidden');
}

// Restaurar partida del Decade si ya jugó hoy
function checkDecadeDailyState() {
    const data = loadData();
    if (data.decade.lastPlayed === getTodayKey() && data.decade.lastResult) {
        decadeGameOver = true;
        decadeSubmitBtn.disabled = true;
        // Si está en modo Decade actualmente, mostrar la pantalla
        if (currentMode === 'decade') {
            showDecadeResultScreen();
        }
    }
}



// Inicializar al cargar la página
initDecadeMode();
checkDecadeDailyState();
init();