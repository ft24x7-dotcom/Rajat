# Integration-ready structure

- `store-data.js` — products, pricing, contact details and public integration switches.
- `app.js` — storefront interactions only.
- `order-service.js` — browser-to-backend communication that can connect to any future API, regardless of host.
- `.env.example` — names of future secrets; real values go in the chosen host's environment settings.

## Adding integrations later

1. Payment: create and verify payment orders only on a private backend; never expose secret keys in browser JavaScript.
2. WhatsApp: use the configured public number for customer-initiated chats and a server-side provider token for automatic confirmations.
3. Google Maps: a normal directions link needs no secret. Interactive maps should load their key from a controlled integration.
4. Instagram: public profile links can be configured directly; private API tokens stay server-side.
5. Database: validate every product price on the server before saving or charging an order.

The live-order switch remains off, so the current sample checkout continues to work without charging customers.

The storefront is plain HTML, CSS and JavaScript and has no hosting-platform dependency. The future backend may use PHP, Node.js, Laravel, WordPress/WooCommerce or a separate hosted API.
