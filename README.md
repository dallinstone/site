# Dallin “Danny” Stone — personal website

A responsive professional portfolio and printable résumé built with React,
TypeScript, React Router, and Vite.

## Local development

1. Run `npm install`.
2. Copy `.env.example` to `.env.local` and add the EmailJS values used by the
   contact form.
3. Run `npm run dev`.

The local site is served at `http://localhost:5173` by default.

## Production build

Run `npm run build`. Vite writes the deployable static site to `dist/`.

Google App Engine uses `app.yaml` to serve fingerprinted assets with long-lived
caching, route all application URLs to `index.html`, enforce HTTPS, and attach
baseline security headers.

## Site configuration

- `VITE_SITE_URL` supplies the canonical production origin used by route metadata.
- `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
  `VITE_EMAILJS_PUBLIC_KEY` configure the contact form.

The public EmailJS key is intentionally compiled into the browser application;
account-side restrictions and templates should be maintained in EmailJS.
