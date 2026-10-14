# Mathew Gómez · Portafolio personal

Portafolio de Mathew Alejandro Gómez Torrez, estudiante de Ingeniería de Sistemas en UNIFRANZ, Cochabamba, Bolivia. Presenta su formación, experiencia en ventas y eventos, habilidades técnicas, proyectos académicos y fotografías personales. Se conserva el diseño original de una sola página.

## Requisitos y ejecución

- Node.js `^22.22.3`, `^24.15.0` o `^26.0.0` (verificado con Node `24.20.0`).
- npm 11 compatible.

Angular CLI 22 está instalado como dependencia local.

```bash
npm ci
npm start
```

Abre [http://localhost:4200](http://localhost:4200).

## Comprobaciones

```bash
npm test -- --watch=false
npm run build
```

El build de producción se genera en `dist/portafolio-personal-matt/`.

## Fotografías detectadas

Se inspeccionaron visualmente y se organizaron los siete JPG existentes, sin editar sus píxeles:

- `public/images/perfil.jpg`: retrato en blanco y negro para el perfil circular.
- `public/images/portada.jpg`: traje negro con lentes, usado en Inicio y en la galería Profesional.
- `public/images/sobre-mi.jpg`: camisa blanca, usada en Sobre mí y en la galería Personal.
- `public/images/galeria/traje-gris.jpg`: retrato de Currículum y galería Profesional.
- `public/images/galeria/playa-selfie.jpg`: galería Personal.
- `public/images/galeria/entrenamiento.jpg`: galería Deporte.
- `public/images/galeria/playa-deporte.jpg`: handstand en la playa, galería Deporte.

En la comprobación actual no queda un archivo llamado `retrato-casual.jpg` en `public/images/`; el retrato de camisa blanca que ya está disponible se sirve como `sobre-mi.jpg`.

La portada y los retratos se reutilizan desde una sola copia. Si falta una imagen, se muestra un placeholder neutral. Las miniaturas respetan las proporciones y el visor modal presenta la fotografía completa. La galería incluye filtros Profesional, Personal, Deporte y Tecnología. Consulta `public/images/galeria/README.md`.

## Currículum PDF

`public/documentos/CV_Mathew_Gomez_2026.pdf` está presente y tiene una firma PDF válida. La aplicación comprueba su disponibilidad: **Ver mi CV** abre el documento en otra pestaña y **Descargar CV** descarga el archivo. Antes de publicarlo, revisa que esta copia sea la versión que quieres hacer pública.

## Contenido y privacidad

Edita `src/app/portfolio.data.ts` para actualizar proyectos, experiencia, formación, competencias y galería. PetCare es el único proyecto con enlace de repositorio confirmado. Los enlaces de GitHub y WhatsApp están en `src/app/app.html`. El formulario valida localmente y no envía datos: no hay backend.

`.gitignore` excluye `node_modules`, `dist`, secretos y medios/documentos adicionales; permite las fotos seleccionadas de este portafolio y el CV solicitado. Revisa el contenido del PDF y las imágenes antes de hacerlos públicos.

## Publicación en GitHub

No se ha inicializado un repositorio Git ni se ha creado o publicado un remoto. Cuando decidas publicarlo, revisa primero los archivos y ejecuta:

```bash
git init
git status --short
npm ci
npm test -- --watch=false
npm run build
```

Después, crea el repositorio remoto desde GitHub y sigue las instrucciones que GitHub muestre para conectarlo. No añadas credenciales, claves ni otros documentos personales.

El workflow `.github/workflows/deploy-pages.yml` publica automáticamente cada push a `main` y también se puede ejecutar manualmente desde la pestaña **Actions**. El build de producción usa el base href `/portafolio-personal-matt/`; las fotografías y el PDF tienen rutas relativas a ese base href, y la navegación entre secciones conserva sus anchors `#...`. Tras crear el repositorio `MATTUPAPI-art/portafolio-personal-matt` y subir la rama `main`, comprueba en **Settings → Pages** que la fuente de despliegue sea **GitHub Actions**. La URL esperada es `https://MATTUPAPI-art.github.io/portafolio-personal-matt/`.

## Estructura

```text
public/images/                 # fotos reales y fallbacks SVG
public/images/galeria/         # cuatro fotos, inventario y notas
public/images/projects/        # placeholders gráficos de proyectos
public/documentos/             # CV aprobado y notas
public/videos/                 # preparado para multimedia
src/app/app.ts                 # estado, formulario, galería y CV
src/app/app.html               # navegación y secciones
src/app/portfolio.data.ts      # contenido tipado
src/styles.scss                # diseño responsive
AGENTS.md                      # convenciones y criterios
```
