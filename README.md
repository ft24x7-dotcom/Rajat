# Volt & Home — portable website

## Hosting

Upload all website files into the host's public website directory. This is usually `public_html` on Hostinger and GoDaddy/cPanel hosting. Keep `index.html` at the top level.

## Common edits

- `store-data.js`: products, categories, prices and store contact details.
- `styles.css`: colors, spacing and mobile/desktop design.
- `index.html`: headings, store address, opening hours and page sections.
- `order-service.js`: future database, payment, email and WhatsApp integration.
- `app.js`: cart, filtering and checkout interactions.

This version is a front-end sample. The checkout deliberately does not charge customers.

## Future integrations

The project includes a host-independent integration service layer. See `ARCHITECTURE.md` and `HOSTING.md`. Keep `useLiveOrderApi` set to `false` until the payment gateway, database and notifications are connected and tested.
