# AGENTS.md

## Descripción
Portafolio personal de Mathew Alejandro Gómez Torrez (nombre visible: Mathew Gómez), estudiante de Ingeniería de Sistemas en UNIFRANZ, Cochabamba, Bolivia. Sitio académico de una sola página, en español, sin backend.

## Tecnologías
- Angular 22 y Angular CLI local.
- TypeScript en modo estricto.
- Componentes standalone.
- SCSS.
- Signals y `computed` para estado derivado.
- Angular control flow: `@if`, `@for` y `@switch`.
- Reactive Forms para validar contacto.
- Pruebas con el builder de Angular y Vitest.
- No añadir dependencias sin una necesidad concreta.

## Arquitectura
- `src/app/app.ts`: estado de UI, Signals, escritura animada, filtros, galería, navegación por teclado, disponibilidad del CV, fallbacks de imagen, vídeo local y validación de formulario.
- `src/app/app.html`: navegación y composición de las secciones.
- `src/app/portfolio.data.ts`: modelos, proyectos, experiencia, estudios, competencias y galería tipados, separados de la presentación.
- `src/styles.scss`: sistema visual global, responsive y movimiento.
- `src/index.html`: idioma y metadatos SEO.
- Una página con anclas; no introducir routing si el sitio sigue siendo una sola página.

## Convenciones
- Mantener TypeScript strict; tipar los datos nuevos y evitar `any`.
- Preferir componentes standalone y APIs Angular actuales.
- Usar Signals para estado reactivo; no mutar estado fuera de las APIs reactivas.
- Usar `@if` y `@for` en plantillas, con `track` estable.
- Mantener contenido editable en `portfolio.data.ts` cuando no dependa de interacción.
- Validar accesibilidad: etiquetas y nombres accesibles, navegación por teclado, estados visibles de foco, contraste, textos alternativos y `prefers-reduced-motion`.
- No inventar títulos, certificados, empleos, empresas, tecnologías por proyecto, enlaces ni datos personales.
- El formulario no debe afirmar que envía información; no hay backend.
- Mantener placeholders identificados como temporales y no crear fotografías personales ficticias.
- Publicar únicamente las fotos personales y el CV expresamente seleccionados; revisar su contenido antes de versionarlos.
- Mantener fuera del repositorio cualquier documento personal, credencial o medio no aprobado.

## Comandos
- `npm ci`: instalar dependencias del lockfile.
- `npm start`: servidor local en `http://localhost:4200`.
- `npm test`: pruebas unitarias.
- `npm run build`: build de producción.
- Angular 22 requiere Node compatible con `^22.22.3`, `^24.15.0` o `^26.0.0`; consultar la matriz oficial al cambiar de versión.

## Estructura multimedia
- Perfil: `public/images/perfil.jpg`.
- Hero: `public/images/portada.jpg`.
- Sobre mí: `public/images/sobre-mi.jpg`.
- Galería personal compartida desde las siete fotografías reales: `public/images/perfil.jpg`, `portada.jpg`, `sobre-mi.jpg`, `galeria/traje-gris.jpg`, `galeria/playa-selfie.jpg`, `galeria/entrenamiento.jpg` y `galeria/playa-deporte.jpg`.
- Currículum: `public/documentos/CV_Mathew_Gomez_2026.pdf`; la interfaz activa ver/descarga solo si existe.
- Proyectos: `public/images/projects/petcare.jpg`, `nexoaprende.jpg`, `creceactivo.jpg`, `braille.jpg`, `fiestapass.jpg`, `hidroponia.jpg`.
- Vídeos: `public/videos/`.
- Si falta alguna foto personal se muestra un placeholder SVG neutral, nunca una fotografía genérica o un rostro generado. Mantener `object-fit` y `object-position`; el modal presenta imágenes completas con `contain`.
- `.gitignore` permite las fotos reales seleccionadas y el PDF indicado, excluyendo los demás documentos/medios personales.
- Los MP4 elegidos en la galería se reproducen con una URL temporal local; no se transmiten ni se almacenan en servidor.

## Reglas responsive
- Verificar móvil (320–540 px), tablet (541–1050 px) y escritorio (desde 1051 px).
- Sidebar fija en escritorio y menú desplegable accesible en móvil.
- No permitir desbordamiento horizontal, contenido solapado ni controles difíciles de tocar.
- Respetar movimiento reducido, foco visible, escalado de imágenes y contraste.

## Criterios de aceptación
- Las siete secciones se muestran y los enlaces de navegación llevan a sus destinos.
- Nombre, formación e intereses coinciden con los datos proporcionados.
- Los seis proyectos aparecen, sus filtros funcionan y solo PetCare tiene el enlace confirmado.
- La galería incluye categorías Profesional, Personal, Deporte y Tecnología; admite flechas, Escape, cierre por botón/fondo y presentación completa en modal.
- La cronología incluye solo cargos, empleadores y periodos proporcionados; las competencias profesionales se mantienen separadas de las habilidades técnicas.
- Los controles de CV funcionan si el PDF está presente y no generan rutas rotas si falta.
- Fotos reales en sus ubicaciones asignadas, placeholders visibles si falta algún medio y vídeo MP4 reproducible en el navegador.
- Modal de galería cerrable por botón, fondo y tecla Escape.
- Formulario Reactivo valida los campos y comunica claramente que no envía datos.
- Navegación responsive, accesibilidad básica, metadatos SEO y ausencia de errores en `npm test` y `npm run build`.
