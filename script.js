// ---------- Diccionarios de traducción ----------
const i18n = {
    es: {
        attemptsTitle: "Número de intentos",
        inputPlaceholder: "Escribe el nombre de un equipo...",
        colLeague: "Liga",
        colTitles: "Títulos",
        colColor: "Color",
        colBudget: "Presup.",
        colYears: "1ª Div",
        colBrand: "Marca",
        colStadium: "Estadio",
        victoryTitle: "¡Victoria!",
        victoryTextBefore: "Has adivinado el equipo en",
        victoryTextAfter: "intentos",
        restartBtn: "Jugar de nuevo"
    },
    en: {
        attemptsTitle: "Number of attempts",
        inputPlaceholder: "Type a team name...",
        colLeague: "League",
        colTitles: "Titles",
        colColor: "Color",
        colBudget: "Budget",
        colYears: "Top Flight",
        colBrand: "Brand",
        colStadium: "Stadium",
        victoryTitle: "Victory!",
        victoryTextBefore: "You guessed the team in",
        victoryTextAfter: "attempts",
        restartBtn: "Play again"
    }
};

const colorTranslations = {
    "Blanco": { es: "Blanco", en: "White" },
    "Azulgrana": { es: "Azulgrana", en: "Blue-Red" },
    "Rojiblanco": { es: "Rojiblanco", en: "Red-White" },
    "Txuri-urdin": { es: "Txuri-urdin", en: "White-Blue" },
    "Verdiblanco": { es: "Verdiblanco", en: "Green-White" },
    "Amarillo": { es: "Amarillo", en: "Yellow" },
    "Blanquinegro": { es: "Blanquinegro", en: "Black-White" },
    "Rojo": { es: "Rojo", en: "Red" },
    "Azul": { es: "Azul", en: "Blue" },
    "Celeste": { es: "Celeste", en: "Sky Blue" },
    "Franja Roja": { es: "Franja Roja", en: "Red Sash" },
    "Albiazul": { es: "Albiazul", en: "White-Blue" },
    "Blanquivioleta": { es: "Blanquivioleta", en: "White-Purple" },
    "Blanquiazul": { es: "Blanquiazul", en: "White-Blue" },
    "Villano": { es: "Villano", en: "Claret-Blue" },
    "Granate": { es: "Granate", en: "Maroon" },
    "Oro": { es: "Oro", en: "Gold" },
    "Rojinegro": { es: "Rojinegro", en: "Red-Black" },
    "Azulnegro": { es: "Azulnegro", en: "Blue-Black" },
    "Violeta": { es: "Violeta", en: "Purple" },
    "Giallorossi": { es: "Giallorossi", en: "Yellow-Red" },
    "Azuloro": { es: "Azuloro", en: "Blue-Gold" },
    "Arancioneroverde": { es: "Arancioneroverde", en: "Orange-Black-Green" },
    "Verde": { es: "Verde", en: "Green" },
    "Marron": { es: "Marron", en: "Brown" },
    "Sangreyoro": { es: "Sangreyoro", en: "Blood-Gold" },
    "Azulnaranja": { es: "Azulnaranja", en: "Blue-Orange" },
    "Amarilloverde": { es: "Amarilloverde", en: "Yellow-Green" },
    "Cieloymarino": { es: "Cieloymarino", en: "Sky-Navy" }
};

let currentLang = 'es';

function translateColor(color) {
    const entry = colorTranslations[color];
    return entry ? entry[currentLang] : color;
}

// ---------- Iconos de flecha SVG ----------
// La flecha apunta hacia arriba por defecto; para abajo rotamos 180º con transform
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

const teams = [
    // ESPAÑA (20)
    { name: "Real Madrid", slug: "real-madrid", wikiFile: "Real_Madrid_CF.svg", league: "LaLiga", titles: 101, kitColor: "Blanco", budget: 939, yearsInFirst: 93, brand: "Adidas", capacity: 81044 },
    { name: "FC Barcelona", slug: "fc-barcelona", wikiFile: "FC_Barcelona_(crest).svg", league: "LaLiga", titles: 99, kitColor: "Azulgrana", budget: 859, yearsInFirst: 93, brand: "Nike", capacity: 99354 },
    { name: "Atlético Madrid", slug: "atletico-madrid", wikiFile: "Atletico_Madrid_2017_logo.svg", league: "LaLiga", titles: 33, kitColor: "Rojiblanco", budget: 378, yearsInFirst: 87, brand: "Nike", capacity: 70460 },
    { name: "Sevilla FC", slug: "sevilla", wikiFile: "Sevilla_FC_logo.svg", league: "LaLiga", titles: 15, kitColor: "Blanco", budget: 190, yearsInFirst: 80, brand: "Castore", capacity: 43883 },
    { name: "Real Sociedad", slug: "real-sociedad", wikiFile: "Real_Sociedad_logo.svg", league: "LaLiga", titles: 6, kitColor: "Txuri-urdin", budget: 145, yearsInFirst: 77, brand: "Macron", capacity: 39500 },
    { name: "Athletic Club", slug: "athletic-bilbao", wikiFile: "Club_Athletic_Bilbao_logo.svg", league: "LaLiga", titles: 35, kitColor: "Rojiblanco", budget: 128, yearsInFirst: 93, brand: "Castore", capacity: 53289 },
    { name: "Real Betis", slug: "real-betis", wikiFile: "Real_betis_logo.svg", league: "LaLiga", titles: 4, kitColor: "Verdiblanco", budget: 135, yearsInFirst: 58, brand: "Hummel", capacity: 60721 },
    { name: "Villarreal CF", slug: "villarreal", wikiFile: "Villarreal_CF_logo-en.svg", league: "LaLiga", titles: 1, kitColor: "Amarillo", budget: 110, yearsInFirst: 25, brand: "Joma", capacity: 23500 },
    { name: "Valencia CF", slug: "valencia", wikiFile: "Valenciacf.svg", league: "LaLiga", titles: 23, kitColor: "Blanquinegro", budget: 95, yearsInFirst: 89, brand: "Puma", capacity: 49430 },
    { name: "Girona FC", slug: "girona", wikiFile: "Girona_FC_new_crest.svg", league: "LaLiga", titles: 0, kitColor: "Rojiblanco", budget: 65, yearsInFirst: 4, brand: "Puma", capacity: 14600 },
    { name: "Osasuna", slug: "osasuna", wikiFile: "Osasuna_logo.svg", league: "LaLiga", titles: 0, kitColor: "Rojo", budget: 55, yearsInFirst: 42, brand: "Macron", capacity: 23576 },
    { name: "Getafe CF", slug: "getafe", wikiFile: "Getafe_logo.svg", league: "LaLiga", titles: 0, kitColor: "Azul", budget: 50, yearsInFirst: 19, brand: "Joma", capacity: 16500 },
    { name: "Celta de Vigo", slug: "celta-vigo", wikiFile: "RC_Celta_de_Vigo_logo.svg", league: "LaLiga", titles: 0, kitColor: "Celeste", budget: 60, yearsInFirst: 58, brand: "Hummel", capacity: 24791 },
    { name: "RCD Mallorca", slug: "rcd-mallorca", wikiFile: "Rcd_mallorca.svg", league: "LaLiga", titles: 1, kitColor: "Rojo", budget: 45, yearsInFirst: 31, brand: "Nike", capacity: 23142 },
    { name: "Rayo Vallecano", slug: "rayo-vallecano", wikiFile: "Rayo_Vallecano_logo.svg", league: "LaLiga", titles: 0, kitColor: "Franja Roja", budget: 40, yearsInFirst: 21, brand: "Umbro", capacity: 14708 },
    { name: "Deportivo Alavés", slug: "alaves", wikiFile: "Deportivo_Alaves_logo_(2020).svg", league: "LaLiga", titles: 0, kitColor: "Albiazul", budget: 35, yearsInFirst: 18, brand: "Puma", capacity: 19840 },
    { name: "UD Las Palmas", slug: "las-palmas", wikiFile: "UD_Las_Palmas_logo.svg", league: "LaLiga", titles: 0, kitColor: "Amarillo", budget: 30, yearsInFirst: 35, brand: "Hummel", capacity: 32400 },
    { name: "Real Valladolid", slug: "real-valladolid", wikiFile: "Real_Valladolid_Logo.svg", league: "LaLiga", titles: 1, kitColor: "Blanquivioleta", budget: 32, yearsInFirst: 46, brand: "Kappa", capacity: 27618 },
    { name: "Leganés", slug: "leganes", wikiFile: "CD_Leganés_logo.svg", league: "LaLiga", titles: 0, kitColor: "Blanquiazul", budget: 28, yearsInFirst: 4, brand: "Joma", capacity: 12450 },
    { name: "RCD Espanyol", slug: "espanyol", wikiFile: "RCD_Espanyol_2024_Logo.svg", league: "LaLiga", titles: 4, kitColor: "Blanquiazul", budget: 45, yearsInFirst: 87, brand: "Kelme", capacity: 40000 },

    // INGLATERRA (20)
    { name: "Manchester City", slug: "manchester-city", wikiFile: "Manchester_City_FC_badge.svg", league: "Premier", titles: 34, kitColor: "Celeste", budget: 850, yearsInFirst: 96, brand: "Puma", capacity: 53400 },
    { name: "Liverpool", slug: "liverpool", wikiFile: "Liverpool_FC.svg", league: "Premier", titles: 71, kitColor: "Rojo", budget: 700, yearsInFirst: 110, brand: "Nike", capacity: 61276 },
    { name: "Arsenal", slug: "arsenal", wikiFile: "Arsenal_FC.svg", league: "Premier", titles: 48, kitColor: "Rojiblanco", budget: 650, yearsInFirst: 107, brand: "Adidas", capacity: 60704 },
    { name: "Manchester United", slug: "manchester-united", wikiFile: "Manchester_United_FC_crest.svg", league: "Premier", titles: 67, kitColor: "Rojo", budget: 780, yearsInFirst: 100, brand: "Adidas", capacity: 74310 },
    { name: "Chelsea", slug: "chelsea", wikiFile: "Chelsea_FC.svg", league: "Premier", titles: 34, kitColor: "Azul", budget: 620, yearsInFirst: 90, brand: "Nike", capacity: 40341 },
    { name: "Tottenham", slug: "tottenham", wikiFile: "Tottenham_Hotspur.svg", league: "Premier", titles: 26, kitColor: "Blanco", budget: 550, yearsInFirst: 90, brand: "Nike", capacity: 62850 },
    { name: "Aston Villa", slug: "aston-villa", wikiFile: "Aston_Villa_FC_new_crest.svg", league: "Premier", titles: 25, kitColor: "Villano", budget: 300, yearsInFirst: 111, brand: "Adidas", capacity: 42640 },
    { name: "Newcastle", slug: "newcastle", wikiFile: "Newcastle_United_Logo.svg", league: "Premier", titles: 14, kitColor: "Blanquinegro", budget: 350, yearsInFirst: 93, brand: "Adidas", capacity: 52305 },
    { name: "West Ham", slug: "west-ham", wikiFile: "West_Ham_United_FC_logo.svg", league: "Premier", titles: 6, kitColor: "Granate", budget: 200, yearsInFirst: 67, brand: "Umbro", capacity: 62500 },
    { name: "Everton", slug: "everton", wikiFile: "Everton_FC_logo.svg", league: "Premier", titles: 24, kitColor: "Azul", budget: 140, yearsInFirst: 122, brand: "Castore", capacity: 39572 },
    { name: "Brighton", slug: "brighton", wikiFile: "Brighton_&_Hove_Albion_logo.svg", league: "Premier", titles: 0, kitColor: "Blanquiazul", budget: 150, yearsInFirst: 11, brand: "Nike", capacity: 31800 },
    { name: "Wolves", slug: "wolves", wikiFile: "Wolverhampton_Wanderers.svg", league: "Premier", titles: 13, kitColor: "Oro", budget: 120, yearsInFirst: 69, brand: "Sudu", capacity: 32050 },
    { name: "Fulham", slug: "fulham", wikiFile: "Fulham_FC_(shield).svg", league: "Premier", titles: 0, kitColor: "Blanco", budget: 110, yearsInFirst: 29, brand: "Adidas", capacity: 25700 },
    { name: "Crystal Palace", slug: "crystal-palace", wikiFile: "Crystal_Palace_FC_logo_(2022).svg", league: "Premier", titles: 0, kitColor: "Azulgrana", budget: 100, yearsInFirst: 25, brand: "Macron", capacity: 25486 },
    { name: "Bournemouth", slug: "bournemouth", wikiFile: "AFC_Bournemouth_(2013).svg", league: "Premier", titles: 0, kitColor: "Rojinegro", budget: 85, yearsInFirst: 8, brand: "Umbro", capacity: 11307 },
    { name: "Brentford", slug: "brentford", wikiFile: "Brentford_FC_crest.svg", league: "Premier", titles: 0, kitColor: "Rojiblanco", budget: 80, yearsInFirst: 8, brand: "Umbro", capacity: 17250 },
    { name: "Nottingham Forest", slug: "nottingham-forest", wikiFile: "Nottingham_Forest_F.C._logo.svg", league: "Premier", titles: 13, kitColor: "Rojo", budget: 90, yearsInFirst: 58, brand: "Adidas", capacity: 30445 },
    { name: "Leicester City", slug: "leicester-city", wikiFile: "Leicester_City_crest.svg", league: "Premier", titles: 7, kitColor: "Azul", budget: 110, yearsInFirst: 56, brand: "Adidas", capacity: 32261 },
    { name: "Ipswich Town", slug: "ipswich", wikiFile: "Ipswich_Town.svg", league: "Premier", titles: 3, kitColor: "Azul", budget: 45, yearsInFirst: 27, brand: "Umbro", capacity: 29673 },
    { name: "Southampton", slug: "southampton", wikiFile: "FC_Southampton.svg", league: "Premier", titles: 1, kitColor: "Rojiblanco", budget: 70, yearsInFirst: 46, brand: "Puma", capacity: 32384 },

    // ITALIA (20)
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
    { name: "Lecce", slug: "lecce", wikiFile: "US_Lecce.svg", league: "Serie A", titles: 0, kitColor: "Giallorossi", budget: 35, yearsInFirst: 19, brand: "M908", capacity: 31533 },
    { name: "Verona", slug: "verona", wikiFile: "Hellas_Verona_FC_logo_(2020).svg", league: "Serie A", titles: 1, kitColor: "Azuloro", budget: 40, yearsInFirst: 34, brand: "Joma", capacity: 39211 },
    { name: "Empoli", slug: "empoli", wikiFile: "Empoli_FC_logo.svg", league: "Serie A", titles: 0, kitColor: "Azul", budget: 30, yearsInFirst: 17, brand: "Kappa", capacity: 16284 },
    { name: "Cagliari", slug: "cagliari", wikiFile: "Cagliari_Calcio_1920.svg", league: "Serie A", titles: 1, kitColor: "Rojinegro", budget: 45, yearsInFirst: 43, brand: "EYE", capacity: 16416 },
    { name: "Parma", slug: "parma", wikiFile: "Logo_Parma_Calcio_1913_(adozione_2016).svg", league: "Serie A", titles: 8, kitColor: "Blanco", budget: 55, yearsInFirst: 28, brand: "Puma", capacity: 22352 },
    { name: "Como", slug: "como", wikiFile: "Como_1907_logo.svg", league: "Serie A", titles: 0, kitColor: "Azul", budget: 40, yearsInFirst: 14, brand: "Adidas", capacity: 13602 },
    { name: "Venezia", slug: "venezia", wikiFile: "Venezia_FC_logo_(2015).svg", league: "Serie A", titles: 1, kitColor: "Arancioneroverde", budget: 25, yearsInFirst: 14, brand: "Nocta", capacity: 11150 },

    // ALEMANIA (18)
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
    { name: "St. Pauli", slug: "st-pauli", wikiFile: "FC_St._Pauli_logo_(2018).svg", league: "Bundesliga", titles: 0, kitColor: "Marron", budget: 28, yearsInFirst: 9, brand: "Puma", capacity: 29546 },
    { name: "Holstein Kiel", slug: "holstein-kiel", wikiFile: "Holstein_Kiel_Logo.svg", league: "Bundesliga", titles: 1, kitColor: "Azul", budget: 22, yearsInFirst: 1, brand: "Puma", capacity: 15034 },

    // FRANCIA (18)
    { name: "PSG", slug: "psg", wikiFile: "Paris_Saint-Germain_F.C..svg", league: "Ligue 1", titles: 51, kitColor: "Azul", budget: 750, yearsInFirst: 52, brand: "Nike", capacity: 47929 },
    { name: "Marseille", slug: "marseille", wikiFile: "Olympique_Marseille_logo.svg", league: "Ligue 1", titles: 28, kitColor: "Blanco", budget: 260, yearsInFirst: 75, brand: "Puma", capacity: 67394 },
    { name: "Monaco", slug: "monaco", wikiFile: "AS_Monaco_FC.svg", league: "Ligue 1", titles: 18, kitColor: "Rojiblanco", budget: 220, yearsInFirst: 66, brand: "Kappa", capacity: 18523 },
    { name: "Lyon", slug: "lyon", wikiFile: "Olympique_Lyonnais_logo.svg", league: "Ligue 1", titles: 21, kitColor: "Blanco", budget: 240, yearsInFirst: 66, brand: "Adidas", capacity: 59186 },
    { name: "Lille", slug: "lille", wikiFile: "Lille_OSC_2018_logo.svg", league: "Ligue 1", titles: 14, kitColor: "Rojo", budget: 160, yearsInFirst: 65, brand: "New Balance", capacity: 50186 },
    { name: "Lens", slug: "lens", wikiFile: "Rc-lens-logo.svg", league: "Ligue 1", titles: 4, kitColor: "Sangreyoro", budget: 110, yearsInFirst: 63, brand: "Puma", capacity: 38223 },
    { name: "Rennes", slug: "rennes", wikiFile: "Stade_Rennais_FC.svg", league: "Ligue 1", titles: 3, kitColor: "Rojinegro", budget: 120, yearsInFirst: 67, brand: "Puma", capacity: 29778 },
    { name: "Nice", slug: "nice", wikiFile: "OGC_Nice_logo.svg", league: "Ligue 1", titles: 7, kitColor: "Rojinegro", budget: 100, yearsInFirst: 66, brand: "Le Coq Sportif", capacity: 36178 },
    { name: "Reims", slug: "reims", wikiFile: "Stade_de_Reims_logo.svg", league: "Ligue 1", titles: 11, kitColor: "Rojiblanco", budget: 70, yearsInFirst: 39, brand: "Puma", capacity: 21029 },
    { name: "Toulouse", slug: "toulouse", wikiFile: "Toulouse_FC_2018_logo.svg", league: "Ligue 1", titles: 2, kitColor: "Violeta", budget: 55, yearsInFirst: 34, brand: "Nike", capacity: 33150 },
    { name: "Montpellier", slug: "montpellier", wikiFile: "Montpellier_HSC_(2000).svg", league: "Ligue 1", titles: 4, kitColor: "Azulnaranja", budget: 50, yearsInFirst: 43, brand: "Nike", capacity: 32900 },
    { name: "Strasbourg", slug: "strasbourg", wikiFile: "Racing_Club_de_Strasbourg_logo.svg", league: "Ligue 1", titles: 4, kitColor: "Azul", budget: 65, yearsInFirst: 63, brand: "Adidas", capacity: 26109 },
    { name: "Brest", slug: "brest", wikiFile: "Stade_Brestois_29_logo.svg", league: "Ligue 1", titles: 0, kitColor: "Rojo", budget: 48, yearsInFirst: 19, brand: "Adidas", capacity: 15931 },
    { name: "Nantes", slug: "nantes", wikiFile: "FC_Nantes_logo.svg", league: "Ligue 1", titles: 15, kitColor: "Amarilloverde", budget: 60, yearsInFirst: 57, brand: "Macron", capacity: 35322 },
    { name: "Le Havre", slug: "le-havre", wikiFile: "Le_Havre_AC_logo.svg", league: "Ligue 1", titles: 1, kitColor: "Cieloymarino", budget: 30, yearsInFirst: 25, brand: "Joma", capacity: 25178 },
    { name: "Auxerre", slug: "auxerre", wikiFile: "AJ_Auxerre_Logo.svg", league: "Ligue 1", titles: 5, kitColor: "Blanco", budget: 35, yearsInFirst: 33, brand: "Macron", capacity: 18500 },
    { name: "Angers", slug: "angers", wikiFile: "Angers_SCO_logo_2023.svg", league: "Ligue 1", titles: 0, kitColor: "Blanquinegro", budget: 25, yearsInFirst: 31, brand: "Kappa", capacity: 18752 },
    { name: "Saint-Étienne", slug: "saint-etienne", wikiFile: "AS_Saint-Étienne_logo.svg", league: "Ligue 1", titles: 22, kitColor: "Verde", budget: 40, yearsInFirst: 70, brand: "Hummel", capacity: 41965 }
];

// ---------- Estado del juego ----------
let targetTeam;
let attemptsCount = 0;
let guessedTeams = [];
let gameOver = false;
let activeSuggestionIndex = -1;
let currentSuggestions = [];

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
const restartBtn = document.getElementById('restart-btn');
const headerRow = document.getElementById('header-row');

// ---------- Utilidades de escudos con cascada ----------
function getShieldUrlList(team) {
    const wiki = encodeURIComponent(team.wikiFile);
    return [
        `https://upload.wikimedia.org/wikipedia/commons/thumb/${team.wikiFile.charAt(0).toLowerCase()}/${hashPath(team.wikiFile)}/${team.wikiFile}/150px-${team.wikiFile.replace('.svg', '')}.png`,
        `https://en.wikipedia.org/wiki/Special:FilePath/${wiki}?width=150`,
        `https://commons.wikimedia.org/wiki/Special:FilePath/${wiki}?width=150`,
        `https://cdn.jsdelivr.net/gh/luukhopman/football-logos@master/logos/${team.name}.png`
    ];
}

function hashPath(file) {
    return "0/00";
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
    img.onload = () => {
        if (img.naturalWidth === 0) tryNext();
    };

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
    const map = [
        'rojo', 'roja', 'blanco', 'blanca', 'azul', 'negro', 'negra',
        'amarillo', 'verde', 'violeta', 'celeste', 'naranja', 'oro',
        'granate', 'grana', 'marron', 'marrón', 'sangre', 'cielo',
        'marino', 'urdin', 'txuri', 'giallo', 'rossi', 'arancio', 'nero'
    ];
    const found = [];
    for (const base of map) {
        if (c.includes(base)) found.push(base);
    }
    return found.map(x => x
        .replace('roja', 'rojo')
        .replace('blanca', 'blanco')
        .replace('negra', 'negro')
        .replace('marrón', 'marron')
    );
}

function colorsShareBase(a, b) {
    const sa = splitColor(a);
    const sb = splitColor(b);
    return sa.some(x => sb.includes(x));
}

// ---------- Gestión de idioma ----------
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
}

function refreshColorCells() {
    document.querySelectorAll('.guess-row').forEach(row => {
        const squares = row.querySelectorAll('.square');
        const colorSquare = squares[2];
        if (!colorSquare) return;
        const originalColor = colorSquare.getAttribute('data-original-color');
        if (originalColor) {
            const valueEl = colorSquare.querySelector('.square-value');
            if (valueEl) valueEl.innerText = translateColor(originalColor);
            else colorSquare.innerText = translateColor(originalColor);
        }
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
    });
});

// ---------- Autocomplete ----------
input.addEventListener('input', () => {
    if (gameOver) return;
    renderSuggestions();
});

input.addEventListener('focus', () => {
    if (gameOver) return;
    renderSuggestions();
});

input.addEventListener('click', () => {
    if (gameOver) return;
    renderSuggestions();
});

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
        const picked = activeSuggestionIndex >= 0
            ? currentSuggestions[activeSuggestionIndex]
            : currentSuggestions[0];
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

    if (val) {
        filtered = filtered.filter(t => t.name.toLowerCase().includes(val));
    } else {
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    currentSuggestions = filtered;

    currentSuggestions.forEach((t, idx) => {
        const div = document.createElement('div');
        const shield = createShieldImg(t, 'suggestion-shield');
        const nameSpan = document.createElement('span');
        nameSpan.innerText = t.name;
        div.appendChild(shield);
        div.appendChild(nameSpan);
        div.onclick = () => selectSuggestion(t);
        div.onmouseenter = () => {
            activeSuggestionIndex = idx;
            highlightSuggestion();
        };
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

    if (attemptsCount === 1) {
        headerRow.classList.remove('hidden');
    }

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
        { key: 'league',       val: userTeam.league,       target: targetTeam.league },
        { key: 'titles',       val: userTeam.titles,       target: targetTeam.titles,       isNum: true },
        { key: 'kitColor',     val: userTeam.kitColor,     target: targetTeam.kitColor,     isColor: true },
        { key: 'budget',       val: userTeam.budget,       target: targetTeam.budget,       isNum: true, unit: "M€" },
        { key: 'yearsInFirst', val: userTeam.yearsInFirst, target: targetTeam.yearsInFirst, isNum: true },
        { key: 'brand',        val: userTeam.brand,        target: targetTeam.brand },
        { key: 'capacity',     val: userTeam.capacity,     target: targetTeam.capacity,     isNum: true, isCap: true }
    ];

    for (const m of metrics) {
        const sq = document.createElement('div');
        let status = 'wrong';

        if (m.val === m.target) {
            status = 'correct';
        } else if (m.isNum) {
            const diff = Math.abs(m.val - m.target);
            const threshold = PARTIAL_THRESHOLDS[m.key];
            if (threshold !== undefined && diff <= threshold) status = 'partial';
        } else if (m.isColor) {
            if (colorsShareBase(m.val, m.target)) status = 'partial';
        }

        sq.className = `square ${status}`;

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
        await new Promise(r => setTimeout(r, REVEAL_DELAY));
    }

    if (userTeam.name === targetTeam.name) {
        gameOver = true;
        input.disabled = true;
        setTimeout(showVictory, 800);
    }
}

// ---------- Victoria / Reinicio ----------
function showVictory() {
    document.getElementById('victory-attempts').innerText = attemptsCount;

    const victoryTeamDiv = document.getElementById('victory-team');
    victoryTeamDiv.innerHTML = '';
    const shield = createShieldImg(targetTeam, 'victory-shield');
    const nameSpan = document.createElement('span');
    nameSpan.id = 'victory-team-name';
    nameSpan.innerText = targetTeam.name;
    victoryTeamDiv.appendChild(shield);
    victoryTeamDiv.appendChild(nameSpan);

    victoryOverlay.classList.remove('hidden');
}

function resetGame() {
    targetTeam = teams[Math.floor(Math.random() * teams.length)];
    attemptsCount = 0;
    guessedTeams = [];
    gameOver = false;
    guessesContainer.innerHTML = '';
    input.value = '';
    input.disabled = false;
    clearSuggestions();
    updateAttemptsUI();
    victoryOverlay.classList.add('hidden');
    headerRow.classList.add('hidden');
    input.focus();
}

restartBtn.addEventListener('click', resetGame);

// ---------- Init ----------
applyLanguage('es');
resetGame();