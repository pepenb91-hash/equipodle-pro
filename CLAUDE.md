# Rondo (playrondo.app)

Juego diario de fútbol estilo Wordle. Bilingüe ES/EN. Vanilla JS + HTML + CSS, sin build ni dependencias (salvo canvas-confetti por CDN y Google Analytics).

## Archivos

- `index.html`: estructura de los 3 modos, modales (victoria, stats, level-up, about, info) y banner de cookies
- `data.js`: datos de equipos y legends + elección del reto diario (`dateToSeed`, `getTeamForDate`, `getLegendForDate`, `getDecadeEventsForDate`). Lo comparten el juego y las páginas de soluciones. Orden de carga: decade_events.js → data.js → script.js
- `script.js`: toda la lógica del juego (traducciones, los 3 modos, stats, rachas, compartir, retos)
- Páginas de contenido (SEO), con estilos en `pages/pages.css`: `/wordle-de-futbol/` (ES) y `/football-wordle/` (EN) explican el juego; `/soluciones/` (ES) y `/answers/` (EN) muestran las respuestas de ayer y los 6 días anteriores con `pages/answers.js` (nunca el día de hoy). `robots.txt` y `sitemap.xml` en la raíz
- `style.css`: estilos. Verde Rondo = `#2ed573`. Variables de tema en `:root` al principio del archivo
- `api/news.js`: función serverless de Vercel (`/api/news`). Lee titulares RSS (ES: Marca, AS, Mundo Deportivo; EN: BBC, Guardian, ESPN), descarta los de más de 3 días y cachea 30 min. Solo titular + medio + enlace
- `decade_events.js`: 216 eventos del modo Decade (1950-2026), con `text` y `description` como `{ es, en }`
- `.claude/serve.ps1` + `.claude/launch.json`: servidor estático local en PowerShell (puerto 8080) para la vista previa, sin instalar nada

## Datos

- Equipos: temporada 2026-27 (96). `budget` = valor de plantilla Transfermarkt en M€; `yearsInFirst` incluye la temporada actual. Al cambiar de temporada, actualizar ascensos/descensos, marcas, estadios, títulos y sumar temporadas.
- Legends: 88. Fotos solo de Wikimedia Commons, sin el nombre visible en la imagen.
- Cambiar el número de equipos/leyendas/eventos cambia el reto del día en que se publica.

## Diseño "Verde Rondo TV"

Estilo de retransmisión deportiva: fondo verde oscuro con franjas, tipografías Teko (marcador, títulos, números) e Inter (texto), rótulos en paralelogramo (`clip-path: var(--para)`).

- Cabecera `#app-header`: banderas de idioma, racha, ❔ y 📊; pestañas de modo con icono por CSS y ✓ (`.played-today`) si ya se jugó hoy
- Cada modo: logo `.brand` (RONDO + rótulo del modo) y `.score-row` (🔴 EN DIRECTO + marcador de intentos/vidas; balones en `.lives-row`)
- Teams: casillas cuadradas que entran deslizándose; verde = acierto, amarillo = cerca, rojo = no coincide. En móvil el nombre del equipo va encima de las casillas
- Legends: foto como "REPETICIÓN" con esquinas de cámara; la pista del año es un rótulo inferior dentro de la foto; fallos como etiquetas rojas
- Decade: línea de tiempo numerada 1-5; huecos 1 y 5 muestran "más antiguo/más reciente"
- Resultado: rótulo "FINAL | MODO · FECHA", "¡GOLAZO!" (victoria) / "¡AL PALO!" (derrota)
- Barra `#news-ticker` fija abajo: titulares de `/api/news` + mensajes fijos `TICKER_MESSAGES`. En local (servidor PowerShell) no hay `/api`, así que solo salen los fijos
- Maquetas de diseño en `mockups/` (no se sube a GitHub)

## Rondo Studio (vídeos para redes)

- `/studio/` (noindex, excluido en robots.txt): genera vídeos verticales 1080x1920 (~19 s, MP4 si el navegador lo permite) con canvas + MediaRecorder: "¿Adivinas el equipo?" (7 pistas, cuenta atrás, escudo) y "¿Quién es esta leyenda?" (foto pixelada que se aclara). Usa el reto de ayer o uno al azar, **nunca el de hoy**. En el móvil, botón Compartir (Web Share con archivo) directo a TikTok/Instagram/YouTube
- Escudos para canvas: hacen falta URLs con CORS (`crestUrls` en studio.js: miniatura directa de upload.wikimedia.org de 500px, primero /en/ y luego /commons/, o logoUrl de Transfermarkt). Special:FilePath no sirve en canvas

## Compartir, retos, idioma y analíticas

- `buildShareText()`: "⚽ RONDO · Teams dd/mm", resultado, racha, cuadrícula y enlace de reto. La cuadrícula se guarda en `lastResult.grid` (`recordGameResult(..., grid)`) para poder compartir tras recargar
- Enlace de reto `https://playrondo.app/?c=<modo>&s=<intentos|x>`: abre ese modo, muestra `.challenge-banner` y, al terminar, la comparación (`challengeResultHtml`). Se guarda en `sessionStorage` (`rondo_challenge`) y se limpia la URL
- Idioma: el elegido por el jugador (`localStorage` `rondo_lang`) o el del navegador (`getInitialLang()`)
- `trackEvent()` → eventos GA4: `game_complete` (mode, won, attempts), `share` (mode, method), `challenge_open` (mode), `news_click` (source)

## Modos

- **Teams**: adivinar el equipo misterioso del día (96 equipos, 5 grandes ligas) con 7 pistas por categoría. Sin límite de intentos. Los balones del contador aparecen según intentas.
- **Legends**: jugador legendario con foto que se desenfoca progresivamente. `LEGEND_MAX_ATTEMPTS = 10`. Pista de año de nacimiento tras 5 fallos.
- **Decade**: ordenar 5 eventos cronológicamente con drag & drop. `DECADE_MAX_ATTEMPTS = 3`.

Cada modo tiene racha independiente con evolución del balón en 3, 5, 10, 20, 50, 100 y 200 victorias.

## Funciones y variables clave

- `getTodayKey()`, `dateToSeed()`: selección diaria determinista. `dateToSeed` usa hash multiplicativo con mezcla de bits (no volver a la versión lineal: provocaba rachas de 14+ días de la misma liga). Legends usa seed + 7777 y Decade seed + 13579.
- `loadData()`, `recordGameResult()`: persistencia en localStorage (clave `equipodle_data_v2`)
- `currentMode`, `currentLang`, `switchMode()`, `applyLanguage()`
- `showDailyResultScreen()`: resultado de Teams y Legends
- `showDecadeResultScreen()`: resultado de Decade. Cualquier sitio que muestre el modal de resultado debe comprobar `currentMode === 'decade'` y llamar a esta.
- `renderDecadePool()`, `renderDecadeSlots()`: se llaman también desde `applyLanguage()` para refrescar el idioma de los eventos
- `updateLegendAttemptsUI()`, `updateDecadeAttemptsUI()`: balones-vidas con animación `ball-lose`
- `hideDice()`: oculta el dado de sugerencia en Teams (tras el primer intento o si ya se jugó hoy)
- `#teams-intro`: banner verde guía en Teams, se oculta con `.hidden-fade` tras el primer intento
- `howToPlayContent`: normas en ES/EN (3 modos)

## Convenciones

- Todo texto visible debe existir en ES y EN (diccionario de traducciones en `script.js` + atributos `data-i18n` en el HTML)
- Terminología: "equipo misterioso" / "mystery team" (no "secreto")
- Commits en `main` con mensajes descriptivos, desde PowerShell
- Publicación: Vercel despliega automáticamente cada push a `main` en https://playrondo.app (en 1-2 min). Ojo: playrondo.com NO es nuestro, es otra web.
- Dominio en Namecheap (Advanced DNS). Registros necesarios: **A `@` → 216.198.79.1** (Vercel) y TXT `@` → google-site-verification (Search Console, propiedad de dominio). Si se borra el A, la web deja de cargar (pasó el 2026-10-02). Activar la renovación automática del dominio (caduca 2027-04-22)
- Google Search Console verificado (propiedad de dominio). Al enviar el sitemap hay que poner la URL completa: https://playrondo.app/sitemap.xml
- Probar en local antes de subir. Reset completo: `localStorage.clear(); location.reload();`
- Al publicar cambios de `style.css`, `script.js` o `decade_events.js`, actualizar el `?v=AAAAMMDD` de sus enlaces en `index.html` para que los navegadores no usen la versión vieja

## TODO pendiente

1. ~~Logo, favicon, iconos, manifest e imagen Open Graph~~ Hecho: logo (R en rótulo verde + punto rojo "en directo"), favicon.ico, `icons/` (16, 32, 180, 192, 512, maskable), manifest.json e `icons/og-image.jpg` (1200x630, con meta og:/twitter: en index.html). Los dibujos están en `icons/logo.html` (`drawChosen` y `drawOG`) por si hay que regenerarlos
2. ~~SEO básico~~ Hecho: schema.org, sitemap, robots, canonical, landings ES/EN y páginas de soluciones. Pendiente: Bing Webmaster Tools, revisar en Search Console qué búsquedas traen visitas
3. ~~Analíticas~~ Hecho (ver `trackEvent`). Pendiente: marcar los eventos como "clave" en GA4 si se quieren ver como conversiones
4. ~~Botón de compartir~~ Hecho: texto nuevo con enlace de reto
5. Difusión: directorios de Wordle-likes, AlternativeTo, SaaSHub, Indie Hackers, r/SideProject, r/InternetIsBeautiful, Product Hunt (tras tener Open Graph), Show HN, streamers de Twitch, Discord
