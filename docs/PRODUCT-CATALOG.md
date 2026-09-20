# Product catalogue guide

All catalogue entries live in `src/scripts/data/products.js`. Keeping the catalogue separate from
store settings makes routine product updates safer and easier to review.

## Product shape

```js
{
  id: 4001,
  category: 'Refrigerator',
  brand: 'Samsung',
  model: 'Optional model number',
  name: 'Customer-facing product name',
  variant: 'Short fallback description',
  features: ['Feature one', 'Feature two'],
  image: './assets/products/catalog-2026/product-45.webp',
  price: 24999,
  mrp: 27999,
  source: 'Internal reference or official product URL',
}
```

`model`, `features`, `price`, `mrp`, `image`, and `source` are optional. If both `features` and
`variant` are present, the storefront displays the feature list. Prices are formatted as Indian
rupees using the locale in `store-config.js`.

## Add a product safely

1. Put a properly cropped and optimized image under `assets/products/`.
2. Add one object to the `PRODUCTS` array.
3. Use a new numeric ID and an existing category ID.
4. Run `npm run format`.
5. Run `npm run check` to catch duplicate IDs, invalid categories, broken local image paths, and
   formatting errors.

## Image guidance

- Prefer WebP for catalogue images and keep the original product fully inside the frame.
- Use a consistent background and aspect ratio when preparing a batch.
- Do not replace local images with temporary or permission-restricted URLs.
- The page intentionally uses `object-fit: contain` so appliances are not cropped.
