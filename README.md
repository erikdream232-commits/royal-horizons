# Royal Horizons

Agencia de viajes de ejemplo construida con Nuxt 4, Vuetify y Pinia.

## Requisitos

- Node.js LTS
- npm

## Desarrollo

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Estructura

- `app/pages`: composición de componentes para catálogo, precios y reservas.
- `app/components`: interfaz y lógica de las secciones reutilizables, como encabezado, pie, catálogo, precios y formulario de reserva.
- `app/layouts`: composición global del sitio y metadatos de página.
- `app/stores`: estado del catálogo con Pinia.
- `server/api`: API de destinos y recepción de solicitudes de reserva.

La API de reservas es una demostración: valida la solicitud y devuelve una referencia, pero no la guarda en una base de datos ni confirma disponibilidad. Para producción, conecta una base de datos y un proveedor de correo.

## Publicación

El código puede alojarse en GitHub. Para que las rutas de `server/api` funcionen, despliega la aplicación en Vercel u otro host compatible con Nuxt/Nitro. GitHub Pages solo sirve la salida estática y no ejecuta el backend.
