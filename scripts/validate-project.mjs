import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import { CATEGORIES } from '../src/scripts/data/store-config.js';
import { PRODUCTS } from '../src/scripts/data/products.js';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];

const requiredProductFields = ['id', 'category', 'brand', 'name', 'variant'];
const categoryIds = new Set(CATEGORIES.map(({ id }) => id));
const productIds = new Set();

for (const [index, product] of PRODUCTS.entries()) {
  const label = `Product ${product.id ?? `at index ${index}`}`;

  for (const field of requiredProductFields) {
    if (product[field] === undefined || product[field] === '') {
      errors.push(`${label} is missing required field: ${field}`);
    }
  }

  if (productIds.has(product.id)) {
    errors.push(`${label} uses a duplicate id`);
  }
  productIds.add(product.id);

  if (!categoryIds.has(product.category)) {
    errors.push(`${label} uses an unknown category: ${product.category}`);
  }

  if (product.image?.startsWith('./')) {
    const imagePath = path.join(projectRoot, product.image.slice(2));
    try {
      await access(imagePath);
    } catch {
      errors.push(`${label} references a missing local image: ${product.image}`);
    }
  }
}

const indexHtml = await readFile(path.join(projectRoot, 'index.html'), 'utf8');
const localReferences = [...indexHtml.matchAll(/(?:href|src)="(\.\/[^"?#]+)(?:[?#][^"]*)?"/g)].map(
  (match) => match[1]
);

for (const reference of localReferences) {
  const referencedPath = path.join(projectRoot, reference.slice(2));
  try {
    await access(referencedPath);
  } catch {
    errors.push(`index.html references a missing file: ${reference}`);
  }
}

if (errors.length) {
  console.error(`Project validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    `Project validation passed: ${PRODUCTS.length} products, ${CATEGORIES.length} categories, and ${localReferences.length} local page references checked.`
  );
}
