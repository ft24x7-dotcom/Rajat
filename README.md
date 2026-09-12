# Volt & Home — Vercel deployment

## Fastest method

1. Install Node.js from https://nodejs.org if it is not installed.
2. Extract this ZIP.
3. Open Terminal/PowerShell inside the extracted folder.
4. Run `npx vercel` and sign in when prompted.
5. Accept the default project settings.
6. Run `npx vercel --prod` for the production link.

## Common edits

- `store-data.js`: products, categories, prices and store contact details.
- `styles.css`: colors, spacing and mobile/desktop design.
- `index.html`: headings, store address, opening hours and page sections.
- `order-service.js`: future database, payment, email and WhatsApp integration.
- `app.js`: cart, filtering and checkout interactions.

This version is a front-end sample. The checkout deliberately does not charge customers.
