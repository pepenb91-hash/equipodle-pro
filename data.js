// ==========================================================
// ==========  DATOS DEL JUEGO Y RETO DIARIO  ===============
// ==========================================================
// Compartido por el juego (index.html) y la página de soluciones.
// Se carga después de decade_events.js y antes de script.js.
// ¡Ojo! Cambiar el algoritmo o el orden/número de elementos cambia los retos.

// ---------- EQUIPOS ----------
const teams = [
    // ESPAÑA
    { name: "Real Madrid", slug: "real-madrid", wikiFile: "Real_Madrid_CF.svg", league: "LaLiga", titles: 101, kitColor: "Blanco", budget: 1460, yearsInFirst: 95, brand: "Adidas", capacity: 83186 },
    { name: "FC Barcelona", slug: "fc-barcelona", wikiFile: "FC_Barcelona_(crest).svg", league: "LaLiga", titles: 99, kitColor: "Azulgrana", budget: 1260, yearsInFirst: 95, brand: "Nike", capacity: 62652 },
    { name: "Atlético Madrid", slug: "atletico-madrid", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/13.png", league: "LaLiga", titles: 33, kitColor: "Rojiblanco", budget: 680, yearsInFirst: 89, brand: "Nike", capacity: 70460 },
    { name: "Sevilla FC", slug: "sevilla", wikiFile: "Sevilla_FC_logo.svg", league: "LaLiga", titles: 15, kitColor: "Blanco", budget: 169, yearsInFirst: 82, brand: "Adidas", capacity: 43883 },
    { name: "Real Sociedad", slug: "real-sociedad", wikiFile: "Real_Sociedad_logo.svg", league: "LaLiga", titles: 7, kitColor: "Blanquiazul", budget: 278, yearsInFirst: 79, brand: "Joma", capacity: 39500 },
    { name: "Athletic Club", slug: "athletic-bilbao", wikiFile: "Club_Athletic_Bilbao_logo.svg", league: "LaLiga", titles: 35, kitColor: "Rojiblanco", budget: 233, yearsInFirst: 95, brand: "Castore", capacity: 53289 },
    { name: "Real Betis", slug: "real-betis", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/150.png", league: "LaLiga", titles: 4, kitColor: "Verdiblanco", budget: 255, yearsInFirst: 60, brand: "Hummel", capacity: 70000 },
    { name: "Villarreal CF", slug: "villarreal", wikiFile: "Villarreal_CF_logo-en.svg", league: "LaLiga", titles: 1, kitColor: "Amarillo", budget: 332, yearsInFirst: 27, brand: "Joma", capacity: 23500 },
    { name: "Valencia CF", slug: "valencia", wikiFile: "Valenciacf.svg", league: "LaLiga", titles: 23, kitColor: "Blanquinegro", budget: 149, yearsInFirst: 91, brand: "Puma", capacity: 49430 },
    { name: "Osasuna", slug: "osasuna", wikiFile: "Osasuna_logo.svg", league: "LaLiga", titles: 0, kitColor: "Rojo", budget: 78, yearsInFirst: 44, brand: "Macron", capacity: 23576 },
    { name: "Getafe CF", slug: "getafe", wikiFile: "Getafe_logo.svg", league: "LaLiga", titles: 0, kitColor: "Azul", budget: 92, yearsInFirst: 21, brand: "Joma", capacity: 16500 },
    { name: "Celta de Vigo", slug: "celta-vigo", wikiFile: "RC_Celta_de_Vigo_logo.svg", league: "LaLiga", titles: 0, kitColor: "Celeste", budget: 173, yearsInFirst: 60, brand: "Hummel", capacity: 24791 },
    { name: "Rayo Vallecano", slug: "rayo-vallecano", wikiFile: "Rayo_Vallecano_logo.svg", league: "LaLiga", titles: 0, kitColor: "Blanco", budget: 87, yearsInFirst: 23, brand: "Umbro", capacity: 14708 },
    { name: "Deportivo Alavés", slug: "alaves", wikiFile: "Deportivo_Alaves_logo_(2020).svg", league: "LaLiga", titles: 0, kitColor: "Blanquiazul", budget: 67, yearsInFirst: 20, brand: "Macron", capacity: 19840 },
    { name: "RCD Espanyol", slug: "espanyol", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/714.png", league: "LaLiga", titles: 4, kitColor: "Blanquiazul", budget: 128, yearsInFirst: 89, brand: "Kelme", capacity: 40000 },
    { name: "Levante UD", slug: "levante", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/3368.png", league: "LaLiga", titles: 1, kitColor: "Azulgrana", budget: 87, yearsInFirst: 18, brand: "Macron", capacity: 26354 },
    { name: "Elche CF", slug: "elche", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/1531.png", league: "LaLiga", titles: 0, kitColor: "Verdiblanco", budget: 74, yearsInFirst: 26, brand: "Nike", capacity: 31388 },
    { name: "Racing de Santander", slug: "racing-santander", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/630.png", league: "LaLiga", titles: 0, kitColor: "Verdiblanco", budget: 108, yearsInFirst: 45, brand: "Austral", capacity: 22308 },
    { name: "Deportivo de La Coruña", slug: "deportivo", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/897.png", league: "LaLiga", titles: 6, kitColor: "Blanquiazul", budget: 115, yearsInFirst: 47, brand: "Nike", capacity: 32660 },
    { name: "Málaga CF", slug: "malaga", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/1084.png", league: "LaLiga", titles: 0, kitColor: "Blanquiazul", budget: 55, yearsInFirst: 18, brand: "Hummel", capacity: 30044 },

    // INGLATERRA
    { name: "Manchester City", slug: "manchester-city", wikiFile: "Manchester_City_FC_badge.svg", league: "Premier", titles: 36, kitColor: "Celeste", budget: 1430, yearsInFirst: 98, brand: "Puma", capacity: 61038 },
    { name: "Liverpool", slug: "liverpool", wikiFile: "Liverpool_FC.svg", league: "Premier", titles: 71, kitColor: "Rojo", budget: 1030, yearsInFirst: 112, brand: "Adidas", capacity: 61276 },
    { name: "Arsenal", slug: "arsenal", wikiFile: "Arsenal_FC.svg", league: "Premier", titles: 48, kitColor: "Rojo", budget: 1330, yearsInFirst: 109, brand: "Adidas", capacity: 60704 },
    { name: "Manchester United", slug: "manchester-united", wikiFile: "Manchester_United_FC_crest.svg", league: "Premier", titles: 67, kitColor: "Rojo", budget: 923, yearsInFirst: 102, brand: "Adidas", capacity: 74310 },
    { name: "Chelsea", slug: "chelsea", wikiFile: "Chelsea_FC.svg", league: "Premier", titles: 34, kitColor: "Azul", budget: 1080, yearsInFirst: 92, brand: "Nike", capacity: 40341 },
    { name: "Tottenham", slug: "tottenham", wikiFile: "Tottenham_Hotspur.svg", league: "Premier", titles: 26, kitColor: "Blanco", budget: 824, yearsInFirst: 92, brand: "Nike", capacity: 62850 },
    { name: "Aston Villa", slug: "aston-villa", wikiFile: "Aston_Villa_FC_new_crest.svg", league: "Premier", titles: 25, kitColor: "Granate", budget: 572, yearsInFirst: 113, brand: "Adidas", capacity: 36887 },
    { name: "Newcastle", slug: "newcastle", wikiFile: "Newcastle_United_Logo.svg", league: "Premier", titles: 14, kitColor: "Blanquinegro", budget: 606, yearsInFirst: 95, brand: "Adidas", capacity: 52305 },
    { name: "Everton", slug: "everton", wikiFile: "Everton_FC_logo.svg", league: "Premier", titles: 24, kitColor: "Azul", budget: 394, yearsInFirst: 124, brand: "Castore", capacity: 52769 },
    { name: "Brighton", slug: "brighton", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/1237.png", league: "Premier", titles: 0, kitColor: "Blanquiazul", budget: 604, yearsInFirst: 13, brand: "Nike", capacity: 31800 },
    { name: "Fulham", slug: "fulham", wikiFile: "Fulham_FC_(shield).svg", league: "Premier", titles: 0, kitColor: "Blanco", budget: 397, yearsInFirst: 31, brand: "Adidas", capacity: 28107 },
    { name: "Crystal Palace", slug: "crystal-palace", wikiFile: "Crystal_Palace_FC_logo_(2022).svg", league: "Premier", titles: 0, kitColor: "Azulgrana", budget: 579, yearsInFirst: 27, brand: "Macron", capacity: 25486 },
    { name: "Bournemouth", slug: "bournemouth", wikiFile: "AFC_Bournemouth_(2013).svg", league: "Premier", titles: 0, kitColor: "Rojinegro", budget: 575, yearsInFirst: 10, brand: "Hummel", capacity: 11307 },
    { name: "Brentford", slug: "brentford", wikiFile: "Brentford_FC_crest.svg", league: "Premier", titles: 0, kitColor: "Rojiblanco", budget: 585, yearsInFirst: 10, brand: "Joma", capacity: 17250 },
    { name: "Nottingham Forest", slug: "nottingham-forest", wikiFile: "Nottingham_Forest_F.C._logo.svg", league: "Premier", titles: 13, kitColor: "Rojo", budget: 521, yearsInFirst: 60, brand: "Adidas", capacity: 30445 },
    { name: "Ipswich Town", slug: "ipswich", wikiFile: "Ipswich_Town.svg", league: "Premier", titles: 3, kitColor: "Azul", budget: 331, yearsInFirst: 28, brand: "Umbro", capacity: 29673 },
    { name: "Leeds United", slug: "leeds-united", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/399.png", league: "Premier", titles: 9, kitColor: "Blanco", budget: 408, yearsInFirst: 55, brand: "Adidas", capacity: 37633 },
    { name: "Sunderland", slug: "sunderland", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/289.png", league: "Premier", titles: 9, kitColor: "Rojiblanco", budget: 421, yearsInFirst: 88, brand: "Hummel", capacity: 48095 },
    { name: "Coventry City", slug: "coventry-city", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/990.png", league: "Premier", titles: 1, kitColor: "Celeste", budget: 297, yearsInFirst: 35, brand: "Hummel", capacity: 32609 },
    { name: "Hull City", slug: "hull-city", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/3008.png", league: "Premier", titles: 0, kitColor: "Naranja", budget: 252, yearsInFirst: 6, brand: "Oxen", capacity: 24983 },

    // ITALIA
    { name: "Inter Milan", slug: "inter", wikiFile: "FC_Internazionale_Milano_2021.svg", league: "Serie A", titles: 47, kitColor: "Azulnegro", budget: 738, yearsInFirst: 95, brand: "Nike", capacity: 75817 },
    { name: "AC Milan", slug: "ac-milan", wikiFile: "Logo_of_AC_Milan.svg", league: "Serie A", titles: 49, kitColor: "Rojinegro", budget: 503, yearsInFirst: 93, brand: "Puma", capacity: 75817 },
    { name: "Juventus", slug: "juventus", wikiFile: "Juventus_FC_2017_logo.svg", league: "Serie A", titles: 71, kitColor: "Blanquinegro", budget: 614, yearsInFirst: 94, brand: "Adidas", capacity: 41507 },
    { name: "Napoli", slug: "napoli", wikiFile: "SSC_Neapel.svg", league: "Serie A", titles: 13, kitColor: "Celeste", budget: 425, yearsInFirst: 81, brand: "EA7", capacity: 54726 },
    { name: "AS Roma", slug: "roma", wikiFile: "AS_Roma_logo_(2017).svg", league: "Serie A", titles: 16, kitColor: "Granate", budget: 498, yearsInFirst: 94, brand: "Adidas", capacity: 70634 },
    { name: "Lazio", slug: "lazio", wikiFile: "S.S._Lazio_badge.svg", league: "Serie A", titles: 16, kitColor: "Celeste", budget: 262, yearsInFirst: 84, brand: "Mizuno", capacity: 70634 },
    { name: "Atalanta", slug: "atalanta", wikiFile: "AtalantaBC.svg", league: "Serie A", titles: 2, kitColor: "Azulnegro", budget: 449, yearsInFirst: 66, brand: "New Balance", capacity: 23439 },
    { name: "Fiorentina", slug: "fiorentina", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ACF_Fiorentina_-_logo_%28Italy%2C_2022%29.svg/250px-ACF_Fiorentina_-_logo_%28Italy%2C_2022%29.svg.png", league: "Serie A", titles: 10, kitColor: "Violeta", budget: 353, yearsInFirst: 89, brand: "Joma", capacity: 43147 },
    { name: "Bologna", slug: "bologna", wikiFile: "Bologna_F.C._1909_logo.svg", league: "Serie A", titles: 10, kitColor: "Azulgrana", budget: 228, yearsInFirst: 80, brand: "Macron", capacity: 38279 },
    { name: "Torino", slug: "torino", wikiFile: "Torino_FC_Logo.svg", league: "Serie A", titles: 12, kitColor: "Granate", budget: 171, yearsInFirst: 83, brand: "Joma", capacity: 28177 },
    { name: "Udinese", slug: "udinese", wikiFile: "Udinese_Calcio_logo.svg", league: "Serie A", titles: 1, kitColor: "Blanquinegro", budget: 162, yearsInFirst: 54, brand: "Macron", capacity: 25144 },
    { name: "Monza", slug: "monza", wikiFile: "AC_Monza_logo_(2021).svg", league: "Serie A", titles: 0, kitColor: "Rojo", budget: 113, yearsInFirst: 4, brand: "Nike", capacity: 16917 },
    { name: "Genoa", slug: "genoa", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/252.png", league: "Serie A", titles: 10, kitColor: "Rojinegro", budget: 166, yearsInFirst: 87, brand: "Kappa", capacity: 33205 },
    { name: "Lecce", slug: "lecce", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/1005.png", league: "Serie A", titles: 0, kitColor: "Amarillo", budget: 83, yearsInFirst: 21, brand: "Adidas", capacity: 31533 },
    { name: "Cagliari", slug: "cagliari", wikiFile: "Cagliari_Calcio_1920.svg", league: "Serie A", titles: 1, kitColor: "Rojinegro", budget: 142, yearsInFirst: 45, brand: "EYE", capacity: 16416 },
    { name: "Parma", slug: "parma", wikiFile: "Logo_Parma_Calcio_1913_(adozione_2016).svg", league: "Serie A", titles: 8, kitColor: "Blanco", budget: 156, yearsInFirst: 30, brand: "Puma", capacity: 22352 },
    { name: "Como", slug: "como", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Calcio_Como_-_logo_%28Italy%2C_2019-%29.svg/250px-Calcio_Como_-_logo_%28Italy%2C_2019-%29.svg.png", league: "Serie A", titles: 0, kitColor: "Azul", budget: 568, yearsInFirst: 16, brand: "Adidas", capacity: 13602 },
    { name: "Venezia", slug: "venezia", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/607.png", league: "Serie A", titles: 1, kitColor: "Naranja", budget: 120, yearsInFirst: 15, brand: "Nocta", capacity: 11150 },
    { name: "Sassuolo", slug: "sassuolo", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/6574.png", league: "Serie A", titles: 0, kitColor: "Verde", budget: 219, yearsInFirst: 13, brand: "Puma", capacity: 21515 },
    { name: "Frosinone", slug: "frosinone", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/8970.png", league: "Serie A", titles: 0, kitColor: "Amarillo", budget: 114, yearsInFirst: 4, brand: "Zeus", capacity: 16227 },

    // ALEMANIA
    { name: "Bayern Munich", slug: "bayern-munich", wikiFile: "FC_Bayern_München_logo_(2017).svg", league: "Bundesliga", titles: 85, kitColor: "Rojo", budget: 1040, yearsInFirst: 62, brand: "Adidas", capacity: 75000 },
    { name: "Leverkusen", slug: "bayer-leverkusen", wikiFile: "Bayer_04_Leverkusen_logo.svg", league: "Bundesliga", titles: 4, kitColor: "Rojinegro", budget: 481, yearsInFirst: 48, brand: "New Balance", capacity: 30210 },
    { name: "Borussia Dortmund", slug: "borussia-dortmund", wikiFile: "Borussia_Dortmund_logo.svg", league: "Bundesliga", titles: 22, kitColor: "Amarillo", budget: 564, yearsInFirst: 60, brand: "Puma", capacity: 81365 },
    { name: "RB Leipzig", slug: "rb-leipzig", wikiFile: "RB_Leipzig_2014_logo.svg", league: "Bundesliga", titles: 4, kitColor: "Blanco", budget: 488, yearsInFirst: 11, brand: "Puma", capacity: 47069 },
    { name: "Stuttgart", slug: "stuttgart", wikiFile: "VfB_Stuttgart_1893_Logo.svg", league: "Bundesliga", titles: 8, kitColor: "Blanco", budget: 380, yearsInFirst: 60, brand: "Jako", capacity: 60449 },
    { name: "Frankfurt", slug: "eintracht-frankfurt", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/24.png", league: "Bundesliga", titles: 7, kitColor: "Rojinegro", budget: 289, yearsInFirst: 58, brand: "Adidas", capacity: 58000 },
    { name: "Hoffenheim", slug: "hoffenheim", wikiFile: "Logo_TSG_Hoffenheim.svg", league: "Bundesliga", titles: 0, kitColor: "Azul", budget: 281, yearsInFirst: 19, brand: "Macron", capacity: 30150 },
    { name: "Werder Bremen", slug: "werder-bremen", wikiFile: "SV-Werder-Bremen-Logo.svg", league: "Bundesliga", titles: 16, kitColor: "Verdiblanco", budget: 121, yearsInFirst: 61, brand: "Hummel", capacity: 42100 },
    { name: "Freiburg", slug: "freiburg", wikiFile: "SC_Freiburg_logo.svg", league: "Bundesliga", titles: 0, kitColor: "Rojinegro", budget: 212, yearsInFirst: 27, brand: "Nike", capacity: 34700 },
    { name: "Gladbach", slug: "borussia-monchengladbach", wikiFile: "Borussia_Mönchengladbach_logo.svg", league: "Bundesliga", titles: 10, kitColor: "Blanco", budget: 139, yearsInFirst: 59, brand: "Puma", capacity: 54022 },
    { name: "Union Berlin", slug: "union-berlin", wikiFile: "1._FC_Union_Berlin_Logo.svg", league: "Bundesliga", titles: 0, kitColor: "Rojo", budget: 116, yearsInFirst: 8, brand: "Adidas", capacity: 22012 },
    { name: "Mainz 05", slug: "mainz", wikiFile: "FSV_Mainz_05_Logo.svg", league: "Bundesliga", titles: 0, kitColor: "Rojo", budget: 165, yearsInFirst: 21, brand: "Jako", capacity: 33305 },
    { name: "Augsburg", slug: "augsburg", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/167.png", league: "Bundesliga", titles: 0, kitColor: "Blanco", budget: 172, yearsInFirst: 16, brand: "Mizuno", capacity: 30660 },
    { name: "Hamburger SV", slug: "hamburger-sv", wikiFile: "Hamburger_SV_logo.svg", league: "Bundesliga", titles: 13, kitColor: "Blanco", budget: 153, yearsInFirst: 57, brand: "Adidas", capacity: 57000 },
    { name: "1. FC Köln", slug: "koln", wikiFile: "1._FC_Koeln_Logo_2014–.svg", league: "Bundesliga", titles: 7, kitColor: "Blanco", budget: 156, yearsInFirst: 54, brand: "Adidas", capacity: 49698 },
    { name: "Schalke 04", slug: "schalke-04", wikiFile: "FC_Schalke_04_Logo.svg", league: "Bundesliga", titles: 15, kitColor: "Azul", budget: 71, yearsInFirst: 55, brand: "Adidas", capacity: 62271 },
    { name: "SV Elversberg", slug: "elversberg", wikiFile: "SV_Elversberg_Logo_2021.svg", league: "Bundesliga", titles: 0, kitColor: "Blanquinegro", budget: 58, yearsInFirst: 1, brand: "Nike", capacity: 10000 },
    { name: "SC Paderborn", slug: "paderborn", wikiFile: "SC_Paderborn_07_Logo_new.svg", league: "Bundesliga", titles: 0, kitColor: "Azulnegro", budget: 48, yearsInFirst: 3, brand: "Hummel", capacity: 15000 },

    // FRANCIA
    { name: "PSG", slug: "psg", wikiFile: "Paris_Saint-Germain_F.C..svg", league: "Ligue 1", titles: 51, kitColor: "Azul", budget: 1360, yearsInFirst: 54, brand: "Nike", capacity: 47929 },
    { name: "Marseille", slug: "marseille", wikiFile: "Olympique_Marseille_logo.svg", league: "Ligue 1", titles: 28, kitColor: "Blanco", budget: 189, yearsInFirst: 77, brand: "Puma", capacity: 67394 },
    { name: "Monaco", slug: "monaco", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/162.png", league: "Ligue 1", titles: 18, kitColor: "Rojiblanco", budget: 378, yearsInFirst: 68, brand: "Mizuno", capacity: 16360 },
    { name: "Lyon", slug: "lyon", wikiFile: "Olympique_Lyonnais_logo.svg", league: "Ligue 1", titles: 21, kitColor: "Blanco", budget: 264, yearsInFirst: 68, brand: "Adidas", capacity: 59186 },
    { name: "Lille", slug: "lille", wikiFile: "Lille_OSC_2018_logo.svg", league: "Ligue 1", titles: 14, kitColor: "Rojo", budget: 253, yearsInFirst: 67, brand: "New Balance", capacity: 50186 },
    { name: "Lens", slug: "lens", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/826.png", league: "Ligue 1", titles: 5, kitColor: "Amarillo", budget: 243, yearsInFirst: 65, brand: "Adidas", capacity: 38223 },
    { name: "Rennes", slug: "rennes", wikiFile: "Stade_Rennais_FC.svg", league: "Ligue 1", titles: 3, kitColor: "Rojinegro", budget: 253, yearsInFirst: 69, brand: "Puma", capacity: 29778 },
    { name: "Nice", slug: "nice", wikiFile: "OGC_Nice_logo.svg", league: "Ligue 1", titles: 7, kitColor: "Rojinegro", budget: 150, yearsInFirst: 68, brand: "Kappa", capacity: 36178 },
    { name: "Toulouse", slug: "toulouse", wikiFile: "Toulouse_FC_2018_logo.svg", league: "Ligue 1", titles: 2, kitColor: "Violeta", budget: 124, yearsInFirst: 36, brand: "Nike", capacity: 33150 },
    { name: "Strasbourg", slug: "strasbourg", wikiFile: "Racing_Club_de_Strasbourg_logo.svg", league: "Ligue 1", titles: 4, kitColor: "Azul", budget: 320, yearsInFirst: 65, brand: "Adidas", capacity: 32000 },
    { name: "Brest", slug: "brest", wikiFile: "Stade_Brestois_29_logo.svg", league: "Ligue 1", titles: 0, kitColor: "Rojo", budget: 88, yearsInFirst: 21, brand: "Adidas", capacity: 15931 },
    { name: "Le Havre", slug: "le-havre", wikiFile: "Le_Havre_AC_logo.svg", league: "Ligue 1", titles: 1, kitColor: "Celeste", budget: 62, yearsInFirst: 27, brand: "Hummel", capacity: 25178 },
    { name: "Auxerre", slug: "auxerre", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/290.png", league: "Ligue 1", titles: 5, kitColor: "Blanco", budget: 96, yearsInFirst: 35, brand: "Macron", capacity: 18500 },
    { name: "Angers", slug: "angers", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Angers_Sporting_Club_de_l%27Ouest_logo.svg/250px-Angers_Sporting_Club_de_l%27Ouest_logo.svg.png", league: "Ligue 1", titles: 0, kitColor: "Blanquinegro", budget: 66, yearsInFirst: 33, brand: "Nike", capacity: 18752 },
    { name: "Lorient", slug: "lorient", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/1158.png", league: "Ligue 1", titles: 1, kitColor: "Naranja", budget: 99, yearsInFirst: 19, brand: "Joma", capacity: 18110 },
    { name: "Paris FC", slug: "paris-fc", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/10004.png", league: "Ligue 1", titles: 0, kitColor: "Azul", budget: 192, yearsInFirst: 4, brand: "Adidas", capacity: 20000 },
    { name: "Troyes", slug: "troyes", wikiFile: "ESTAC_Troyes_Logo.svg", league: "Ligue 1", titles: 0, kitColor: "Azul", budget: 43, yearsInFirst: 12, brand: "Puma", capacity: 21877 },
    { name: "Le Mans", slug: "le-mans", logoUrl: "https://tmssl.akamaized.net/images/wappen/head/1164.png", league: "Ligue 1", titles: 0, kitColor: "Rojo", budget: 34, yearsInFirst: 7, brand: "Adidas", capacity: 25064 }
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
    { name: "Lothar Matthäus", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/2019_Lothar_Matth%C3%A4us.jpg/500px-2019_Lothar_Matth%C3%A4us.jpg", birthYear: 1961, country: "Alemania", countryEn: "Germany" },
    { name: "Raúl González", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Raul_Gonzalez_2012_2.jpg/500px-Raul_Gonzalez_2012_2.jpg", birthYear: 1977, country: "España", countryEn: "Spain" },
    { name: "Fernando Torres", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/Fernando_Torres_2017.jpg", birthYear: 1984, country: "España", countryEn: "Spain" },
    { name: "David Villa", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Spain-Tahiti%2C_Confederations_Cup_2013_%2802%29_%28Villa_crop%29.jpg", birthYear: 1981, country: "España", countryEn: "Spain" },
    { name: "Xabi Alonso", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Los_Caminos_del_f%C3%BAtbol._Xabi_Alonso_%2839666778464%29_%28cropped%29.jpg", birthYear: 1981, country: "España", countryEn: "Spain" },
    { name: "Emilio Butragueño", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Emilio_Butrague%C3%B1o_-_240422_191751-2_%28cropped%29.jpg/500px-25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Emilio_Butrague%C3%B1o_-_240422_191751-2_%28cropped%29.jpg", birthYear: 1963, country: "España", countryEn: "Spain" },
    { name: "Kaká", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ricardo_Izecson_dos_Santos_Leite_%28Kak%C3%A1%29_01.jpg", birthYear: 1982, country: "Brasil", countryEn: "Brazil" },
    { name: "Rivaldo", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Rivaldo.jpg", birthYear: 1972, country: "Brasil", countryEn: "Brazil" },
    { name: "Cafu", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cafu_-_26.02.2026_-_Cerim%C3%B4nia_de_apresenta%C3%A7%C3%A3o_das_ta%C3%A7as_da_Copa_do_Mundo_de_2026.jpg/500px-Cafu_-_26.02.2026_-_Cerim%C3%B4nia_de_apresenta%C3%A7%C3%A3o_das_ta%C3%A7as_da_Copa_do_Mundo_de_2026.jpg", birthYear: 1970, country: "Brasil", countryEn: "Brazil" },
    { name: "Zico", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Zico_2012.jpg/500px-Zico_2012.jpg", birthYear: 1953, country: "Brasil", countryEn: "Brazil" },
    { name: "Sócrates", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Socrates_%28futebolista%29_Diretas_J%C3%A1_cropped.jpg", birthYear: 1954, country: "Brasil", countryEn: "Brazil" },
    { name: "Garrincha", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Manoel_Francisco_dos_Santos-Garrincha.jpg/500px-Manoel_Francisco_dos_Santos-Garrincha.jpg", birthYear: 1933, country: "Brasil", countryEn: "Brazil" },
    { name: "Gabriel Batistuta", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Gabriel_batistuta.jpg", birthYear: 1969, country: "Argentina", countryEn: "Argentina" },
    { name: "Juan Román Riquelme", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Juan_Rom%C3%A1n_Riquelme_-_2019.jpg", birthYear: 1978, country: "Argentina", countryEn: "Argentina" },
    { name: "Javier Zanetti", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Metalist-Inter_%282%29.jpg/500px-Metalist-Inter_%282%29.jpg", birthYear: 1973, country: "Argentina", countryEn: "Argentina" },
    { name: "Mario Kempes", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Mario_Kempes_Argentina_v_Spain_19_July_2026-036_%28cropped%29.jpg/500px-Mario_Kempes_Argentina_v_Spain_19_July_2026-036_%28cropped%29.jpg", birthYear: 1954, country: "Argentina", countryEn: "Argentina" },
    { name: "Steven Gerrard", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Steven_Gerrard_2018.jpg", birthYear: 1980, country: "Inglaterra", countryEn: "England" },
    { name: "Wayne Rooney", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Wayne-Rooney-2015-10-21.jpg", birthYear: 1985, country: "Inglaterra", countryEn: "England" },
    { name: "Alan Shearer", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Alan_Shearer_2008.jpg", birthYear: 1970, country: "Inglaterra", countryEn: "England" },
    { name: "Bobby Moore", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Bobby_moore_elgrafico_1970.jpg/500px-Bobby_moore_elgrafico_1970.jpg", birthYear: 1941, country: "Inglaterra", countryEn: "England" },
    { name: "George Best", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/George_best_1976.jpg/500px-George_best_1976.jpg", birthYear: 1946, country: "Irlanda del Norte", countryEn: "Northern Ireland" },
    { name: "Francesco Totti", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Francesco_Totti_-_2013_-_AS_Roma.jpg", birthYear: 1976, country: "Italia", countryEn: "Italy" },
    { name: "Fabio Cannavaro", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Fabio_Cannavaro_2011.jpg/500px-Fabio_Cannavaro_2011.jpg", birthYear: 1973, country: "Italia", countryEn: "Italy" },
    { name: "Franco Baresi", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Franco_Baresi_2012.jpg/500px-Franco_Baresi_2012.jpg", birthYear: 1960, country: "Italia", countryEn: "Italy" },
    { name: "Alessandro Nesta", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Alessandro_Nesta_as_Miami_FC_Manager.jpg/500px-Alessandro_Nesta_as_Miami_FC_Manager.jpg", birthYear: 1976, country: "Italia", countryEn: "Italy" },
    { name: "Eric Cantona", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Eric_Cantona_Cannes_2009.jpg", birthYear: 1966, country: "Francia", countryEn: "France" },
    { name: "Karim Benzema", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg/500px-Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg", birthYear: 1987, country: "Francia", countryEn: "France" },
    { name: "Raymond Kopa", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Raymond_Kopa_1963b.jpg/500px-Raymond_Kopa_1963b.jpg", birthYear: 1931, country: "Francia", countryEn: "France" },
    { name: "Oliver Kahn", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2022-07-30_Fu%C3%9Fball%2C_M%C3%A4nner%2C_DFL-Supercup%2C_RB_Leipzig_-_FC_Bayern_M%C3%BCnchen_1DX_3179_by_Stepro.jpg/500px-2022-07-30_Fu%C3%9Fball%2C_M%C3%A4nner%2C_DFL-Supercup%2C_RB_Leipzig_-_FC_Bayern_M%C3%BCnchen_1DX_3179_by_Stepro.jpg", birthYear: 1969, country: "Alemania", countryEn: "Germany" },
    { name: "Philipp Lahm", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Philipp_Lahm_auf_der_Berlinale_2024%2C_Ausschnitt.jpg/500px-Philipp_Lahm_auf_der_Berlinale_2024%2C_Ausschnitt.jpg", birthYear: 1983, country: "Alemania", countryEn: "Germany" },
    { name: "Miroslav Klose", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2016209185719_2016-07-27_Champions_for_Charity_-_Sven_-_1D_X_-_0149_-_DV3P4742_mod.jpg/500px-2016209185719_2016-07-27_Champions_for_Charity_-_Sven_-_1D_X_-_0149_-_DV3P4742_mod.jpg", birthYear: 1978, country: "Alemania", countryEn: "Germany" },
    { name: "Toni Kroos", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Toni_Kroos_Real_Madrid_2021.jpg/500px-Toni_Kroos_Real_Madrid_2021.jpg", birthYear: 1990, country: "Alemania", countryEn: "Germany" },
    { name: "Dennis Bergkamp", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Dennis_Bergkamp_2014_%28cropped%29.jpg", birthYear: 1969, country: "Países Bajos", countryEn: "Netherlands" },
    { name: "Arjen Robben", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Arjen_Robben_2013.jpg", birthYear: 1984, country: "Países Bajos", countryEn: "Netherlands" },
    { name: "Luís Figo", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/L._Figo_2017_%28cropped%29.jpg/500px-L._Figo_2017_%28cropped%29.jpg", birthYear: 1972, country: "Portugal", countryEn: "Portugal" },
    { name: "Didier Drogba", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Didier_Drogba_%282019%29_%28cropped2%29.jpg/500px-Didier_Drogba_%282019%29_%28cropped2%29.jpg", birthYear: 1978, country: "Costa de Marfil", countryEn: "Ivory Coast" },
    { name: "Samuel Eto'o", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Samuel_2011.jpg/500px-Samuel_2011.jpg", birthYear: 1981, country: "Camerún", countryEn: "Cameroon" },
    { name: "Andriy Shevchenko", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Andriy_Shevchenko_Dynamo.jpg/500px-Andriy_Shevchenko_Dynamo.jpg", birthYear: 1976, country: "Ucrania", countryEn: "Ukraine" },
    { name: "Zlatan Ibrahimović", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Zlatan_Ibrahimovi%C4%87_nyc.jpg/500px-Zlatan_Ibrahimovi%C4%87_nyc.jpg", birthYear: 1981, country: "Suecia", countryEn: "Sweden" },
    { name: "Robert Lewandowski", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2019147183134_2019-05-27_Fussball_1.FC_Kaiserslautern_vs_FC_Bayern_M%C3%BCnchen_-_Sven_-_1D_X_MK_II_-_0228_-_B70I8527_%28cropped%29.jpg/500px-2019147183134_2019-05-27_Fussball_1.FC_Kaiserslautern_vs_FC_Bayern_M%C3%BCnchen_-_Sven_-_1D_X_MK_II_-_0228_-_B70I8527_%28cropped%29.jpg", birthYear: 1988, country: "Polonia", countryEn: "Poland" },
    { name: "Luis Suárez", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Luis_Su%C3%A1rez_2026_%28cropped%29.jpg/500px-Luis_Su%C3%A1rez_2026_%28cropped%29.jpg", birthYear: 1987, country: "Uruguay", countryEn: "Uruguay" },
    { name: "Gheorghe Hagi", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lansarea_candidaturii_Gabrielei_Szabo_pentru_Camera_Deputatilor%2C_Voluntari_-_04.05_%2848%29_%2814270956179%29_%28cropped%29.jpg/500px-Lansarea_candidaturii_Gabrielei_Szabo_pentru_Camera_Deputatilor%2C_Voluntari_-_04.05_%2848%29_%2814270956179%29_%28cropped%29.jpg", birthYear: 1965, country: "Rumania", countryEn: "Romania" },
    { name: "Pavel Nedvěd", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Pavel_Nedv%C4%9Bd_%28cropped%29.jpg", birthYear: 1972, country: "República Checa", countryEn: "Czech Republic" },
    { name: "Peter Schmeichel", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Peter_Schmeichel_2012-01-25_001.jpg/500px-Peter_Schmeichel_2012-01-25_001.jpg", birthYear: 1963, country: "Dinamarca", countryEn: "Denmark" },
    { name: "Michael Laudrup", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Michael_Laudrup_2016c_%28cropped%29.jpg/500px-Michael_Laudrup_2016c_%28cropped%29.jpg", birthYear: 1964, country: "Dinamarca", countryEn: "Denmark" },
    { name: "Carlos Valderrama", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Pibe_Valderrama_2022.jpg", birthYear: 1961, country: "Colombia", countryEn: "Colombia" },
    { name: "Jay-Jay Okocha", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Jj_okocha.jpg/500px-Jj_okocha.jpg", birthYear: 1973, country: "Nigeria", countryEn: "Nigeria" }
];

// ---------- RETO DIARIO (determinista según la fecha) ----------

const DECADE_EVENTS_PER_DAY = 5;

function dateToSeed(dateStr) {
    let h = parseInt(dateStr.replaceAll('-', ''), 10);
    // Mezcla de bits para distribución uniforme entre todas las ligas
    h = (h * 2654435761) >>> 0;
    h = h ^ (h >>> 16);
    h = (h * 2246822519) >>> 0;
    h = h ^ (h >>> 13);
    return h >>> 0;
}

// dateKey: "AAAA-MM-DD"
function getTeamForDate(dateKey) {
    return teams[dateToSeed(dateKey) % teams.length];
}

function getLegendForDate(dateKey) {
    return legends[(dateToSeed(dateKey) + 7777) % legends.length];
}

function getDecadeEventsForDate(dateKey) {
    const seed = dateToSeed(dateKey) + 13579;
    // Barajado determinista de índices
    const indices = [...Array(decadeEvents.length).keys()];
    let s = seed;
    for (let i = indices.length - 1; i > 0; i--) {
        s = (s * 9301 + 49297) % 233280;
        const j = Math.floor((s / 233280) * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, DECADE_EVENTS_PER_DAY).map(i => decadeEvents[i]);
}
