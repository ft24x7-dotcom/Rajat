# DDM Electronics storefront

This repository contains the production source for the DDM Electronics catalogue website. It is a
static HTML, CSS, and JavaScript project, so the storefront does not need a framework, database, or
build step.

## Quick start

1. Install the formatting tool with `npm install`.
2. Serve the repository root with any static web server.
3. Open `index.html` through that server. ES modules do not work reliably from a `file://` URL.
4. Before committing a change, run `npm run format` and then `npm run check`.

No compilation is required. Vercel serves the files directly from the repository root.

## Project structure

```text
.
├── index.html                     # Page content and semantic structure
├── assets/
│   ├── branding/                  # DDM logo and future brand assets
│   └── products/                  # Optimized local catalogue images
├── src/
│   ├── scripts/
│   │   ├── app.js                 # Search, filters, catalogue rendering, enquiries
│   │   ├── data/
│   │   │   ├── products.js        # Product catalogue only
│   │   │   └── store-config.js    # Store, category, brand, and integration settings
│   │   └── services/
│   │       └── order-service.js   # Future server-order integration boundary
│   └── styles/
│       ├── main.css               # Base layout, components, and responsive rules
│       └── theme.css              # DDM brand overrides and catalogue refinements
├── scripts/
│   └── validate-project.mjs       # Checks product data and local file references
├── docs/
│   ├── ARCHITECTURE.md            # Application boundaries and future integrations
│   ├── HOSTING.md                 # Hosting and deployment notes
│   └── PRODUCT-CATALOG.md         # Safe product-editing guide
├── vercel.json                    # Vercel cache headers
└── package.json                   # Developer formatting and validation commands
```

## Common changes

| Change                                           | File                               |
| ------------------------------------------------ | ---------------------------------- |
| Add, remove, or update a product                 | `src/scripts/data/products.js`     |
| Change store contact information                 | `src/scripts/data/store-config.js` |
| Change categories or featured brands             | `src/scripts/data/store-config.js` |
| Change headings, sections, or store address text | `index.html`                       |
| Change the base layout or responsive styling     | `src/styles/main.css`              |
| Change DDM colours or catalogue-specific styling | `src/styles/theme.css`             |
| Change search, filtering, or enquiry behaviour   | `src/scripts/app.js`               |

## Important rules

- Product IDs must be unique numbers.
- A product category must exactly match a category ID in `store-config.js`.
- Product paths are relative to `index.html`, for example
  `./assets/products/catalog-2026/product-01.webp`.
- Do not place API keys, payment secrets, access tokens, or passwords in browser files.
- Keep `INTEGRATIONS.useLiveOrderApi` set to `false` until a private backend is connected and tested.

See [the catalogue guide](docs/PRODUCT-CATALOG.md) for product examples and
[the architecture guide](docs/ARCHITECTURE.md) before adding payments or a database.
