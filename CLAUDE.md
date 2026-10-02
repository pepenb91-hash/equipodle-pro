# Rondo (playrondo.com)

Juego diario de fútbol estilo Wordle. Bilingüe ES/EN. Vanilla JS + HTML + CSS, sin build ni dependencias (salvo canvas-confetti por CDN y Google Analytics).

## Archivos

- `index.html`: estructura de los 3 modos, modales (victoria, stats, level-up, about, info) y banner de cookies
- `script.js`: toda la lógica (traducciones, datos de equipos y legends, los 3 modos, stats, rachas)
- `style.css`: estilos. Verde Rondo = `#2ed573`
- `decade_events.js`: 216 eventos del modo Decade (1950-2026), con `text` y `description` como `{ es, en }`
- `.claude/serve.ps1` + `.claude/launch.json`: servidor estático local en PowerShell (puerto 8080) para la vista previa, sin instalar nada

## Datos

- Equipos: temporada 2026-27 (96). `budget` = valor de plantilla Transfermarkt en M€; `yearsInFirst` incluye la temporada actual. Al cambiar de temporada, actualizar ascensos/descensos, marcas, estadios, títulos y sumar temporadas.
- Legends: 88. Fotos solo de Wikimedia Commons, sin el nombre visible en la imagen.
- Cambiar el número de equipos/leyendas/eventos cambia el reto del día en que se publica.

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
- Probar en local antes de subir. Reset completo: `localStorage.clear(); location.reload();`

## TODO pendiente

1. Logo + favicon + imagen Open Graph (1200x630) + apple-touch-icon + manifest.json
2. SEO: meta tags, Open Graph / Twitter Card, schema.org, sitemap.xml, robots.txt
3. Analíticas: eventos custom en GA (modo jugado, victorias, shares)
4. Revisar y optimizar el texto del botón de compartir (que incluya siempre el link)
5. Difusión: directorios de Wordle-likes, AlternativeTo, SaaSHub, Indie Hackers, r/SideProject, r/InternetIsBeautiful, Product Hunt (tras tener Open Graph), Show HN, streamers de Twitch, Discord
