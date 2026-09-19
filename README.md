# DDM Electronics website

This is the source code for the DDM Electronics catalogue website. It is a lightweight static site: no framework, build step, database, or payment gateway is required for the current version.

## Project layout

- `index.html` — page structure and store information shown outside the catalogue.
- `styles.css` — main storefront styling.
- `theme.css` — DDM-specific visual theme and preloader styling.
- `app.js` — product display, search, filters, cart, and enquiry interactions.
- `store-data.js` — all products, categories, brands, prices, and public store settings.
- `order-service.js` — placeholder service layer for a later backend or payment integration.
- `assets/` — locally supplied brand and product images.
- `HOSTING.md` — deployment notes.
- `ARCHITECTURE.md` — guidance for a future developer adding a backend.

## Hosting

Upload all website files into the host's public website directory. This is usually `public_html` on Hostinger and GoDaddy/cPanel hosting. Keep `index.html` at the top level.

## Safe common edits

- `store-data.js`: products, categories, prices and store contact details.
- `styles.css`: colors, spacing and mobile/desktop design.
- `index.html`: headings, store address, opening hours and page sections.
- `order-service.js`: future database, payment, email and WhatsApp integration.
- `app.js`: cart, filtering and checkout interactions.

This version is a front-end catalogue. The checkout deliberately does not charge customers.

## Code style

The project uses Prettier-compatible formatting with two spaces, single quotes, semicolons, and a 100-character line limit. Keep public keys and secret credentials out of this repository.

## Future integrations

The project includes a host-independent integration service layer. See `ARCHITECTURE.md` and `HOSTING.md`. Keep `useLiveOrderApi` set to `false` until the payment gateway, database and notifications are connected and tested.
