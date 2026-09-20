# Hosting and GoDaddy domain guide

## Portable storefront

The current website is static HTML, CSS and JavaScript. It works on Hostinger, GoDaddy hosting, cPanel, Netlify, Cloudflare Pages, GitHub Pages, Vercel, or any conventional web server.

Upload the repository contents to the host's website root, normally `public_html`. Keep
`index.html`, `assets/`, and `src/` in their existing relative locations. The `docs/`, `scripts/`,
`node_modules/`, and package files are for developers and are not required by a basic static host.

## GoDaddy as domain provider

The domain can stay registered at GoDaddy while hosting is changed at any time. When a host is selected, copy the DNS records supplied by that host into GoDaddy DNS Management. Usually this means an A record for `@` and a CNAME for `www`; use the exact values provided by the hosting company.

## Future backend

Set `INTEGRATIONS.apiBaseUrl` in `src/scripts/data/store-config.js` to the HTTPS address of the
chosen backend. The backend can live on the same host or a different provider. Store payment,
WhatsApp, Instagram, email, and database secrets only in the backend environment—not in these
public files.
