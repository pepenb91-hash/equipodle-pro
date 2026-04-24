// ==========================================================
// ============  EVENTOS PARA MODO DECADE  ==================
// ==========================================================
//
// Categorías y sus iconos:
//   transfer  → 💰
//   trophy    → 🏆
//   debut     → 👶
//   retire    → 👋
//   award     → ⭐
//   milestone → 🎯
//   record    → 📜
//   drama     → 💔
//
// Total: 150 eventos (1957-2024)
// ==========================================================

const decadeEvents = [

    // ==================================================
    // ===== TRANSFERENCIAS 💰 (28 eventos) =============
    // ==================================================
    { id: "tr_neymar_psg", year: 2017, text: "Neymar ficha por el PSG por 222M€", category: "transfer", description: "El traspaso más caro de la historia. PSG paga la cláusula del brasileño al Barça." },
    { id: "tr_cr7_united", year: 2003, text: "Cristiano Ronaldo ficha por el Manchester United", category: "transfer", description: "Con 18 años, deja el Sporting de Lisboa por 12M£." },
    { id: "tr_zidane_madrid", year: 2001, text: "Zidane ficha por el Real Madrid", category: "transfer", description: "Récord mundial de transferencia (75M€). Vino desde la Juventus." },
    { id: "tr_mbappe_madrid", year: 2024, text: "Mbappé ficha por el Real Madrid", category: "transfer", description: "Llega libre tras 7 años en el PSG. Cumple su sueño de niño." },
    { id: "tr_messi_psg", year: 2021, text: "Messi ficha por el PSG", category: "transfer", description: "Tras 21 años en el Barça, Messi se va por la imposibilidad de renovar." },
    { id: "tr_beckham_madrid", year: 2003, text: "Beckham ficha por el Real Madrid", category: "transfer", description: "El inglés deja el Manchester United y se une a los 'Galácticos'." },
    { id: "tr_bale_madrid", year: 2013, text: "Bale ficha por el Real Madrid", category: "transfer", description: "100M€ desde el Tottenham, récord mundial en ese momento." },
    { id: "tr_messi_inter_miami", year: 2023, text: "Messi ficha por el Inter Miami", category: "transfer", description: "Tras dos años en PSG, Messi se va a la MLS estadounidense." },
    { id: "tr_figo_madrid", year: 2000, text: "Figo ficha por el Real Madrid desde el Barça", category: "transfer", description: "El traspaso más polémico de la historia. Pérez paga 60M€ y desata la guerra culé-merengue." },
    { id: "tr_ronaldo_madrid", year: 2002, text: "Ronaldo Nazário ficha por el Real Madrid", category: "transfer", description: "El 'Fenómeno' llega desde el Inter para unirse a los Galácticos." },
    { id: "tr_pogba_united", year: 2016, text: "Pogba vuelve al Manchester United desde la Juventus", category: "transfer", description: "105M€, récord mundial. Volvía al club que lo había dejado salir gratis." },
    { id: "tr_suarez_barca", year: 2014, text: "Luis Suárez ficha por el Barcelona", category: "transfer", description: "Llega desde el Liverpool para formar la 'MSN' con Messi y Neymar." },
    { id: "tr_haaland_city", year: 2022, text: "Haaland ficha por el Manchester City", category: "transfer", description: "Llega desde el Borussia Dortmund por 60M€. Goleador histórico de la Premier en su 1ª temporada." },
    { id: "tr_kaka_madrid", year: 2009, text: "Kaká ficha por el Real Madrid", category: "transfer", description: "67M€ desde el AC Milan. Días después llegaría Cristiano Ronaldo." },
    { id: "tr_cruyff_barca", year: 1973, text: "Johan Cruyff ficha por el Barcelona", category: "transfer", description: "Desde el Ajax. Ese año el Barça gana la Liga tras 14 años sin hacerlo." },
    { id: "tr_maradona_napoli", year: 1984, text: "Maradona ficha por el Nápoles", category: "transfer", description: "Récord mundial de la época. Empezaba la era dorada del Nápoles." },
    { id: "tr_ronaldo_inter", year: 1997, text: "Ronaldo Nazário ficha por el Inter de Milán", category: "transfer", description: "Desde el Barça por récord mundial. Estaba en su mejor momento." },
    { id: "tr_ibra_psg", year: 2012, text: "Ibrahimovic ficha por el PSG", category: "transfer", description: "Desde el AC Milan. Lideraría al PSG durante 4 años." },
    { id: "tr_griezmann_barca", year: 2019, text: "Griezmann ficha por el Barcelona", category: "transfer", description: "120M€ desde el Atlético tras un año de polémica con su 'La Decisión'." },
    { id: "tr_lewandowski_barca", year: 2022, text: "Lewandowski ficha por el Barcelona", category: "transfer", description: "Desde el Bayern, tras anunciar que no quería renovar." },
    { id: "tr_di_maria_psg", year: 2015, text: "Di María ficha por el PSG", category: "transfer", description: "63M€ desde el Manchester United. Récord mundial para PSG." },
    { id: "tr_henry_arsenal", year: 1999, text: "Thierry Henry ficha por el Arsenal", category: "transfer", description: "Desde la Juventus. Wenger lo recupera tras una mala época en Italia." },
    { id: "tr_ronaldinho_barca", year: 2003, text: "Ronaldinho ficha por el Barcelona", category: "transfer", description: "Desde el PSG por 30M€. Empezaba una era mágica del Barça." },
    { id: "tr_torres_chelsea", year: 2011, text: "Fernando Torres ficha por el Chelsea", category: "transfer", description: "50M£ desde el Liverpool. Récord para un fichaje en el fútbol inglés." },
    { id: "tr_van_persie_united", year: 2012, text: "Van Persie ficha por el Manchester United", category: "transfer", description: "Desde el Arsenal. Ferguson conseguiría su última Premier con él." },
    { id: "tr_rooney_united", year: 2004, text: "Rooney ficha por el Manchester United", category: "transfer", description: "Con 18 años, desde el Everton por 27M£. Ferguson lo vio como su nueva estrella." },
    { id: "tr_vinicius_madrid", year: 2018, text: "Vinicius ficha por el Real Madrid", category: "transfer", description: "Desde el Flamengo por 45M€. Aún tenía 17 años cuando se firmó la operación." },
    { id: "tr_alexis_arsenal", year: 2014, text: "Alexis Sánchez ficha por el Arsenal", category: "transfer", description: "Desde el Barça por 35M€. El chileno se convertiría en estrella en la Premier." },

    // ==================================================
    // ===== TROFEOS 🏆 (32 eventos) ====================
    // ==================================================
    { id: "tp_argentina_qatar", year: 2022, text: "Argentina gana el Mundial de Catar", category: "trophy", description: "Tercer Mundial para Argentina. Final épica contra Francia (3-3, penaltis)." },
    { id: "tp_spain_2010", year: 2010, text: "España gana su primer Mundial", category: "trophy", description: "Gol de Iniesta en la prórroga ante Holanda. Sudáfrica 2010." },
    { id: "tp_madrid_decima", year: 2014, text: "Real Madrid gana 'La Décima'", category: "trophy", description: "Décima Champions del Madrid, contra el Atlético en Lisboa." },
    { id: "tp_barca_sextete", year: 2009, text: "Barcelona gana el sextete", category: "trophy", description: "Equipo de Guardiola gana las 6 competiciones de la temporada." },
    { id: "tp_germany_brazil", year: 2014, text: "Alemania humilla a Brasil 7-1", category: "trophy", description: "Semifinal del Mundial de Brasil. Alemania ganaría el título días después." },
    { id: "tp_man_city_treble", year: 2023, text: "Manchester City gana el triplete", category: "trophy", description: "Premier League, FA Cup y Champions League en la misma temporada." },
    { id: "tp_italia_eurocopa", year: 2021, text: "Italia gana la Eurocopa en Wembley", category: "trophy", description: "Italia derrota a Inglaterra en penaltis en su propia casa." },
    { id: "tp_madrid_14", year: 2022, text: "Real Madrid gana su 14ª Champions", category: "trophy", description: "Tras remontar a PSG, Chelsea y City, vence al Liverpool en París." },
    { id: "tp_brazil_2002", year: 2002, text: "Brasil gana su 5º Mundial", category: "trophy", description: "Mundial de Corea-Japón. Ronaldo Nazário marca 8 goles, incluidos los 2 de la final." },
    { id: "tp_france_98", year: 1998, text: "Francia gana su primer Mundial en casa", category: "trophy", description: "Final 3-0 ante Brasil. Zidane marca dos goles de cabeza." },
    { id: "tp_milan_estambul", year: 2005, text: "Liverpool remonta al Milan en Estambul", category: "trophy", description: "El 'Milagro de Estambul'. De 0-3 a 3-3 en 6 minutos. Liverpool gana en penaltis." },
    { id: "tp_chelsea_munich", year: 2012, text: "Chelsea gana su primera Champions", category: "trophy", description: "En Múnich contra el Bayern, en su propio estadio. Drogba marca el gol del empate." },
    { id: "tp_spain_eurocopa_2008", year: 2008, text: "España gana la Eurocopa de Austria-Suiza", category: "trophy", description: "Primer título grande de España en 44 años. Empezaba 'La Roja' dorada." },
    { id: "tp_germany_2014", year: 2014, text: "Alemania gana el Mundial de Brasil", category: "trophy", description: "Götze marca en la prórroga de la final ante Argentina." },
    { id: "tp_inter_treble_mou", year: 2010, text: "Inter de Mourinho gana el triplete", category: "trophy", description: "Liga, Copa y Champions con el portugués al mando. Eliminaron al Barça en semis." },
    { id: "tp_argentina_copa_america", year: 2021, text: "Argentina gana la Copa América en Brasil", category: "trophy", description: "Primer título grande para Messi con la albiceleste, 28 años después de la última." },
    { id: "tp_real_madrid_15", year: 2024, text: "Real Madrid gana su 15ª Champions", category: "trophy", description: "Vence al Borussia Dortmund 2-0 en Wembley. Décimo gol de Vinícius en finales." },
    { id: "tp_marseille_92", year: 1993, text: "Marsella gana la primera Champions League", category: "trophy", description: "Primer ganador del torneo con su nuevo formato. Vencieron al Milan 1-0." },
    { id: "tp_italy_2006", year: 2006, text: "Italia gana el Mundial de Alemania", category: "trophy", description: "Vence a Francia en penaltis tras la expulsión de Zidane por su cabezazo." },
    { id: "tp_greece_eurocopa", year: 2004, text: "Grecia gana la Eurocopa de Portugal", category: "trophy", description: "La sorpresa más grande del fútbol europeo. Vence a Portugal 1-0 en la final." },
    { id: "tp_spain_eurocopa_2012", year: 2012, text: "España gana la Eurocopa de Polonia-Ucrania", category: "trophy", description: "4-0 a Italia en la final. Tercer título consecutivo de la Roja. Récord histórico." },
    { id: "tp_barca_wembley_11", year: 2011, text: "Barcelona gana su 4ª Champions en Wembley", category: "trophy", description: "3-1 al Manchester United. Ejemplo del mejor Barça de la historia." },
    { id: "tp_madrid_undecima", year: 2016, text: "Real Madrid gana 'La Undécima'", category: "trophy", description: "Final de Milán contra el Atlético, ganada en penaltis." },
    { id: "tp_madrid_duodecima", year: 2017, text: "Real Madrid gana 'La Duodécima'", category: "trophy", description: "4-1 a la Juventus en Cardiff. Cristiano marca dos goles." },
    { id: "tp_madrid_decimotercera", year: 2018, text: "Real Madrid gana 'La Decimotercera'", category: "trophy", description: "3-1 al Liverpool en Kiev. Bale marca un golazo de chilena." },
    { id: "tp_argentina_finalissima", year: 2022, text: "Argentina gana la Finalissima en Wembley", category: "trophy", description: "3-0 a Italia. Antesala del Mundial de Catar." },
    { id: "tp_germany_1990", year: 1990, text: "Alemania gana el Mundial de Italia", category: "trophy", description: "Vence a Argentina 1-0 con gol de penalti. La 3ª copa para los germanos." },
    { id: "tp_brazil_94", year: 1994, text: "Brasil gana el Mundial de Estados Unidos", category: "trophy", description: "Final ante Italia decidida en penaltis. Romário fue el gran protagonista." },
    { id: "tp_milan_94", year: 1994, text: "Milan goleada al Barcelona en final de Champions", category: "trophy", description: "4-0 contra el 'Dream Team' de Cruyff. Final de Atenas." },
    { id: "tp_pelé_1970", year: 1970, text: "Brasil gana el Mundial de México", category: "trophy", description: "Tercer Mundial para Pelé. Equipo considerado el mejor de la historia." },
    { id: "tp_uruguay_copa_america_2011", year: 2011, text: "Uruguay gana la Copa América", category: "trophy", description: "15ª copa para los charrúas. Récord histórico del torneo." },
    { id: "tp_man_united_treble", year: 1999, text: "Manchester United gana el triplete", category: "trophy", description: "Premier, FA Cup y Champions. Final de Champions épica contra el Bayern." },

    // ==================================================
    // ===== DEBUTS 👶 (18 eventos) =====================
    // ==================================================
    { id: "db_messi_barca", year: 2004, text: "Messi debuta con el Barça en Primera", category: "debut", description: "Con 17 años, en un derbi contra el Espanyol. Ya nunca se iría hasta 2021." },
    { id: "db_yamal_barca", year: 2023, text: "Lamine Yamal debuta con el Barça", category: "debut", description: "Con 15 años. El jugador más joven en debutar con el Barça en Liga." },
    { id: "db_pele_brasil", year: 1957, text: "Pelé debuta con la selección brasileña", category: "debut", description: "Con 16 años. Empezaba la leyenda del Rey del fútbol." },
    { id: "db_maradona_argentinos", year: 1976, text: "Maradona debuta en Primera con Argentinos Juniors", category: "debut", description: "Diego tenía 15 años. Pronto sería figura del fútbol argentino." },
    { id: "db_mbappe_monaco", year: 2015, text: "Mbappé debuta con el Mónaco", category: "debut", description: "Con 16 años. Dos años después ficharía por el PSG." },
    { id: "db_cr7_sporting", year: 2002, text: "Cristiano Ronaldo debuta con el Sporting", category: "debut", description: "Con 17 años. Un año después ficharía por el United." },
    { id: "db_neymar_santos", year: 2009, text: "Neymar debuta con el Santos", category: "debut", description: "Con 17 años. Empezaba la nueva esperanza del fútbol brasileño." },
    { id: "db_zidane_cannes", year: 1989, text: "Zidane debuta como profesional en el Cannes", category: "debut", description: "Con 17 años en el club francés. Pronto destacaría en el Burdeos." },
    { id: "db_iniesta_barca", year: 2002, text: "Iniesta debuta con el Barça en Champions", category: "debut", description: "Con 18 años contra el Brujas. Nadie imaginaba lo que vendría." },
    { id: "db_xavi_barca", year: 1998, text: "Xavi debuta con el primer equipo del Barça", category: "debut", description: "Con 18 años. Empezaría una era dorada del centro del campo culé." },
    { id: "db_haaland_pro", year: 2016, text: "Haaland debuta como profesional en el Bryne", category: "debut", description: "El noruego empezaba en su tierra natal antes de ir al Salzburgo y Dortmund." },
    { id: "db_endrick_madrid", year: 2024, text: "Endrick debuta con el Real Madrid", category: "debut", description: "El joven brasileño llega tras cumplir los 18 años, fichaje cerrado en 2022." },
    { id: "db_buffon_parma", year: 1995, text: "Buffon debuta con el Parma", category: "debut", description: "Con 17 años contra el Milan. Empezaba la carrera del mejor portero italiano." },
    { id: "db_casillas_madrid", year: 1999, text: "Casillas debuta con el Real Madrid", category: "debut", description: "Con 18 años contra el Athletic. Sería el portero del Madrid 16 años." },
    { id: "db_owen_liverpool", year: 1997, text: "Michael Owen debuta con el Liverpool", category: "debut", description: "Con 17 años marca su primer gol en su debut." },
    { id: "db_ronaldinho_gremio", year: 1998, text: "Ronaldinho debuta con el Gremio", category: "debut", description: "Con 17 años. La gran esperanza brasileña empezaba en su tierra." },
    { id: "db_ramos_sevilla", year: 2004, text: "Sergio Ramos debuta con el Sevilla", category: "debut", description: "Con 17 años. Un año después se iría al Real Madrid." },
    { id: "db_pedri_barca", year: 2020, text: "Pedri debuta con el Barça", category: "debut", description: "Con 17 años. Llegaría a ser uno de los mejores centrocampistas del mundo en 2 años." },

    // ==================================================
    // ===== RETIRADAS 👋 (16 eventos) ==================
    // ==================================================
    { id: "rt_iniesta_barca", year: 2018, text: "Iniesta deja el Barcelona", category: "retire", description: "Tras 22 años en el club. Se va al Vissel Kobe de Japón." },
    { id: "rt_zidane_player", year: 2006, text: "Zidane se retira como jugador", category: "retire", description: "Tras la final del Mundial vs Italia, recordada por su cabezazo a Materazzi." },
    { id: "rt_buffon_definitive", year: 2023, text: "Buffon se retira definitivamente", category: "retire", description: "El portero italiano cuelga las botas a los 45 años en el Parma." },
    { id: "rt_xavi_barca", year: 2015, text: "Xavi deja el Barcelona", category: "retire", description: "Tras 17 años en el primer equipo. Se va al Al Sadd de Catar." },
    { id: "rt_pirlo", year: 2017, text: "Andrea Pirlo se retira", category: "retire", description: "Tras pasar por Brescia, Inter, Milan, Juventus y New York City FC." },
    { id: "rt_casillas", year: 2020, text: "Iker Casillas se retira", category: "retire", description: "Tras un infarto en 2019, el portero anuncia oficialmente su retirada." },
    { id: "rt_puyol", year: 2014, text: "Carles Puyol se retira", category: "retire", description: "Capitán del Barça durante una década, deja el fútbol con 36 años." },
    { id: "rt_ronaldinho", year: 2018, text: "Ronaldinho anuncia su retirada", category: "retire", description: "El brasileño confirma su retirada oficial tras varios años inactivo." },
    { id: "rt_maldini", year: 2009, text: "Paolo Maldini se retira del Milan", category: "retire", description: "Tras 25 temporadas vistiendo de rossonero. Una leyenda del calcio." },
    { id: "rt_totti", year: 2017, text: "Francesco Totti se retira de la Roma", category: "retire", description: "Toda su carrera en un solo club. 25 años defendiendo a la Roma." },
    { id: "rt_ronaldo_naz", year: 2011, text: "Ronaldo Nazário se retira", category: "retire", description: "Cuelga las botas en el Corinthians a los 34 años por problemas físicos." },
    { id: "rt_gerrard", year: 2016, text: "Steven Gerrard se retira", category: "retire", description: "Tras pasar por LA Galaxy en sus últimos años. Leyenda del Liverpool." },
    { id: "rt_lampard", year: 2017, text: "Frank Lampard se retira", category: "retire", description: "Tras pasar por Manchester City y New York City FC. Goleador del Chelsea." },
    { id: "rt_pele_retire", year: 1977, text: "Pelé se retira definitivamente", category: "retire", description: "En el Cosmos de Nueva York. El Rey del fútbol cuelga las botas." },
    { id: "rt_maradona_retire", year: 1997, text: "Maradona se retira como jugador", category: "retire", description: "En Boca Juniors, donde había vuelto. Con 37 años deja el fútbol profesional." },
    { id: "rt_cruyff_retire", year: 1984, text: "Johan Cruyff se retira como jugador", category: "retire", description: "En el Feyenoord. Empezaría su carrera como entrenador del Ajax." },

    // ==================================================
    // ===== PREMIOS ⭐ (16 eventos) =====================
    // ==================================================
    { id: "aw_messi_8th", year: 2023, text: "Messi gana su 8º Balón de Oro", category: "award", description: "Récord histórico del argentino tras ganar el Mundial con Argentina." },
    { id: "aw_cr7_first", year: 2008, text: "Cristiano Ronaldo gana su 1er Balón de Oro", category: "award", description: "Tras una temporada brillante con el Manchester United." },
    { id: "aw_messi_first", year: 2009, text: "Messi gana su 1er Balón de Oro", category: "award", description: "Tras el sextete del Barça de Guardiola." },
    { id: "aw_modric_2018", year: 2018, text: "Modric gana el Balón de Oro", category: "award", description: "Rompe la hegemonía Messi-Cristiano tras llevar a Croacia a la final del Mundial." },
    { id: "aw_rodri_2024", year: 2024, text: "Rodri gana el Balón de Oro", category: "award", description: "El centrocampista del City se impone a Vinicius en una votación polémica." },
    { id: "aw_kaka_balon", year: 2007, text: "Kaká gana el Balón de Oro", category: "award", description: "El brasileño rompe el dominio que estaba por venir de Messi y Cristiano." },
    { id: "aw_benzema_balon", year: 2022, text: "Benzema gana el Balón de Oro", category: "award", description: "Tras una Champions épica con el Madrid, marcando 15 goles en el torneo." },
    { id: "aw_zidane_98", year: 1998, text: "Zidane gana su Balón de Oro", category: "award", description: "Tras ganar el Mundial con Francia. Su único Balón de Oro." },
    { id: "aw_ronaldo_97", year: 1997, text: "Ronaldo Nazário gana su 1er Balón de Oro", category: "award", description: "Con tan sólo 21 años. El más joven en ganarlo durante mucho tiempo." },
    { id: "aw_yamal_kopa", year: 2024, text: "Lamine Yamal gana el Trofeo Kopa", category: "award", description: "Premio al mejor jugador joven del año. Con 17 años se convierte en estrella mundial." },
    { id: "aw_figo_balon", year: 2000, text: "Figo gana el Balón de Oro", category: "award", description: "El portugués se llevó el premio en su año del fichaje al Real Madrid." },
    { id: "aw_owen_balon", year: 2001, text: "Michael Owen gana el Balón de Oro", category: "award", description: "Tras un año brillante con el Liverpool. El último inglés en ganarlo." },
    { id: "aw_ronaldinho_balon", year: 2005, text: "Ronaldinho gana el Balón de Oro", category: "award", description: "El segundo Balón de Oro del brasileño. Estaba en su mejor momento." },
    { id: "aw_cannavaro_balon", year: 2006, text: "Cannavaro gana el Balón de Oro", category: "award", description: "El primer defensa puro en ganarlo desde Beckenbauer. Tras ganar el Mundial." },
    { id: "aw_messi_4_seguidos", year: 2012, text: "Messi gana su 4º Balón de Oro consecutivo", category: "award", description: "Récord histórico nunca igualado. 4 títulos seguidos." },
    { id: "aw_ronaldinho_first", year: 2004, text: "Ronaldinho gana su 1er Balón de Oro", category: "award", description: "Tras una temporada mágica con el Barcelona." },

    // ==================================================
    // ===== HITOS PERSONALES 🎯 (15 eventos) ===========
    // ==================================================
    { id: "ml_messi_644", year: 2020, text: "Messi supera el récord de Pelé en un mismo club", category: "milestone", description: "Marca el gol 644 con el Barça, superando los 643 de Pelé en el Santos." },
    { id: "ml_cr7_900", year: 2024, text: "Cristiano Ronaldo marca su gol 900", category: "milestone", description: "Hito histórico en su carrera. Ningún jugador llegó antes a esa cifra." },
    { id: "ml_buffon_176", year: 2017, text: "Buffon marca el récord de partidos con Italia (176)", category: "milestone", description: "Ningún italiano había vestido la 'azzurra' tantas veces." },
    { id: "ml_iniesta_world_cup_goal", year: 2010, text: "Iniesta marca el gol del Mundial", category: "milestone", description: "Minuto 116 de la final ante Holanda. España es campeona por primera vez." },
    { id: "ml_messi_91_goals", year: 2012, text: "Messi marca 91 goles en un año natural", category: "milestone", description: "Récord mundial. Superó los 85 de Gerd Müller de 1972." },
    { id: "ml_xavi_1000_passes", year: 2009, text: "Xavi supera los 1000 pases en una final de Champions", category: "milestone", description: "Final ante el United en Roma. Demostración del 'tiki-taka' del Barça." },
    { id: "ml_haaland_36_goals", year: 2023, text: "Haaland marca 36 goles en una temporada de Premier", category: "milestone", description: "Récord histórico de la Premier League en una temporada." },
    { id: "ml_cr7_uefa_top", year: 2014, text: "Cristiano Ronaldo es máximo goleador histórico de la Champions", category: "milestone", description: "Supera a Messi y a Raúl con su gol 71 en la competición." },
    { id: "ml_messi_500_barca", year: 2017, text: "Messi alcanza los 500 goles con el Barça", category: "milestone", description: "En el clásico contra el Real Madrid en el Bernabéu, ganando 3-2." },
    { id: "ml_drogba_chelsea_top", year: 2014, text: "Drogba se convierte en máximo goleador africano del Chelsea", category: "milestone", description: "Volvió al club tras dos años fuera. Leyenda de Stamford Bridge." },
    { id: "ml_mbappe_4_goals_final", year: 2022, text: "Mbappé marca 3 goles en una final de Mundial", category: "milestone", description: "Hat-trick contra Argentina, primer jugador en lograrlo desde Geoff Hurst en 1966." },
    { id: "ml_pele_1000", year: 1969, text: "Pelé marca su gol número 1000", category: "milestone", description: "En el Maracaná de Río de Janeiro, contra el Vasco da Gama. Hito del fútbol." },
    { id: "ml_ronaldo_45_la_liga", year: 2015, text: "Cristiano Ronaldo marca 5 goles en un partido de Liga", category: "milestone", description: "Contra el Granada en el Bernabéu. Récord personal en LaLiga." },
    { id: "ml_messi_5_champions", year: 2012, text: "Messi marca 5 goles en un partido de Champions", category: "milestone", description: "Contra el Bayer Leverkusen en octavos. Récord histórico de la competición." },
    { id: "ml_klose_world_cup_top", year: 2014, text: "Klose se convierte en máximo goleador histórico de los Mundiales", category: "milestone", description: "Supera a Ronaldo Nazário con su gol 16 en Mundiales." },

    // ==================================================
    // ===== RÉCORDS 📜 (10 eventos) ====================
    // ==================================================
    { id: "rc_invincibles", year: 2004, text: "Arsenal completa la temporada invicta", category: "record", description: "Los 'Invincibles' de Wenger ganan la Premier sin perder un partido." },
    { id: "rc_barca_remontada", year: 2017, text: "Barcelona remonta 6-1 al PSG", category: "record", description: "Mayor remontada de la historia de Champions tras un 4-0 en la ida." },
    { id: "rc_leicester_premier", year: 2016, text: "Leicester gana la Premier League", category: "record", description: "El milagro de Ranieri. Leicester había estado en Championship 2 años antes." },
    { id: "rc_madrid_champions_3_seguidas", year: 2018, text: "Real Madrid gana 3 Champions consecutivas", category: "record", description: "12ª, 13ª en años consecutivos. Récord histórico en la era moderna del torneo." },
    { id: "rc_city_4_premier_seguidas", year: 2024, text: "Manchester City gana 4 Premier consecutivas", category: "record", description: "Récord histórico de la Premier League. Nadie lo había logrado antes." },
    { id: "rc_bayern_11_bundesliga", year: 2023, text: "Bayern gana 11 Bundesligas consecutivas", category: "record", description: "Récord histórico de las grandes ligas europeas. Hegemonía absoluta." },
    { id: "rc_psg_4_champions_seguidas", year: 1976, text: "Bayern gana 3 Copas de Europa consecutivas", category: "record", description: "El equipo de Beckenbauer y Müller en su mejor momento." },
    { id: "rc_real_madrid_5_seguidas", year: 1960, text: "Real Madrid gana 5 Copas de Europa consecutivas", category: "record", description: "Récord histórico nunca superado. La era de Di Stéfano y Puskas." },
    { id: "rc_milan_58_invicto", year: 1992, text: "Milan completa 58 partidos invicto en Serie A", category: "record", description: "Récord absoluto de la Serie A. Los 'inmortales' de Capello." },
    { id: "rc_cr7_5_champions", year: 2018, text: "Cristiano Ronaldo gana su 5ª Champions", category: "record", description: "Récord en la era moderna. La 4ª con el Madrid en 5 años." },

    // ==================================================
    // ===== DRAMA 💔 (15 eventos) ======================
    // ==================================================
    { id: "dr_zidane_headbutt", year: 2006, text: "Zidane le da un cabezazo a Materazzi", category: "drama", description: "Final del Mundial. Italia ganaría a Francia en penaltis tras la roja a Zidane." },
    { id: "dr_maradona_god_hand", year: 1986, text: "Maradona marca con 'la mano de Dios'", category: "drama", description: "Cuartos del Mundial vs Inglaterra. Minutos después marcaría el gol del siglo." },
    { id: "dr_eriksen_collapse", year: 2021, text: "Christian Eriksen sufre un paro cardíaco", category: "drama", description: "En pleno partido de la Eurocopa. Sería reanimado y volvería a jugar al fútbol." },
    { id: "dr_cr7_lesion_eurocopa", year: 2016, text: "Cristiano se lesiona en la final de la Eurocopa", category: "drama", description: "Sale llorando en camilla. Portugal acabaría ganando 1-0 a Francia." },
    { id: "dr_neymar_lesion_brasil", year: 2014, text: "Neymar se lesiona en cuartos del Mundial", category: "drama", description: "Tras patada brutal de Zúñiga. Brasil sería humillado 7-1 por Alemania sin él." },
    { id: "dr_suarez_mordisco", year: 2014, text: "Suárez muerde a Chiellini en el Mundial", category: "drama", description: "Tercer mordisco de su carrera. Suspendido 4 meses por la FIFA." },
    { id: "dr_zidane_red_card", year: 2006, text: "Zidane es expulsado en la final del Mundial", category: "drama", description: "Última jugada de su carrera profesional. Roja directa por el cabezazo." },
    { id: "dr_henry_handball", year: 2009, text: "Mano de Henry contra Irlanda", category: "drama", description: "Permite el gol que clasifica a Francia al Mundial 2010 ante Irlanda." },
    { id: "dr_lampard_no_goal", year: 2010, text: "El gol fantasma de Lampard contra Alemania", category: "drama", description: "El balón cruzó claramente la línea pero no fue dado válido. Inglaterra eliminada." },
    { id: "dr_munich_brawl", year: 1990, text: "Maradona pierde la final del Mundial llorando", category: "drama", description: "Argentina cae 1-0 ante Alemania en Roma. Imagen icónica del 10." },
    { id: "dr_pepe_red", year: 2009, text: "Pepe es sancionado 10 partidos por agresión", category: "drama", description: "Tras patear a un jugador del Getafe en el suelo. Sanción histórica en LaLiga." },
    { id: "dr_di_canio_push_referee", year: 1998, text: "Di Canio empuja al árbitro y es sancionado", category: "drama", description: "Le cae una sanción de 11 partidos en la Premier League. Imagen vergonzante." },
    { id: "dr_keane_haaland_father", year: 2001, text: "Keane lesiona gravemente a Alf-Inge Haaland", category: "drama", description: "Padre de Erling Haaland. Falta brutal premeditada. Reconocida después por Keane." },
    { id: "dr_real_madrid_eliminado_brujas", year: 1991, text: "Real Madrid eliminado por el Brujas", category: "drama", description: "Sorpresa mayúscula. Considerada una de las peores decepciones del Madrid en Europa." },
    { id: "dr_germany_korea_2018", year: 2018, text: "Alemania eliminada en fase de grupos del Mundial", category: "drama", description: "Pierde 2-0 con Corea del Sur. La vigente campeona se va a casa pronto." }
];