import { BRANDS, CATEGORIES, INTEGRATIONS, STORE } from './data/store-config.js';
import { PRODUCTS } from './data/products.js';

const ALL_FILTER = 'All';
const PRELOADER_MINIMUM_MS = 2200;

const elements = {
  activeFilters: document.querySelector('[data-active-filters]'),
  brands: document.querySelector('[data-brands]'),
  categories: document.querySelector('[data-categories]'),
  chips: document.querySelector('[data-chips]'),
  emptyState: document.querySelector('[data-empty]'),
  productControls: document.querySelector('[data-product-controls]'),
  products: document.querySelector('[data-products]'),
  search: document.querySelector('[data-search]'),
  shop: document.querySelector('#shop'),
};

const state = {
  brand: ALL_FILTER,
  category: ALL_FILTER,
  expanded: false,
  query: '',
};

const getInitialProductLimit = () => (window.matchMedia('(max-width: 600px)').matches ? 6 : 8);

const formatMoney = (amount) =>
  new Intl.NumberFormat(STORE.locale, {
    style: 'currency',
    currency: STORE.currency,
    maximumFractionDigits: 0,
  }).format(amount);

function hidePreloader() {
  const remainingTime = Math.max(0, PRELOADER_MINIMUM_MS - performance.now());
  window.setTimeout(
    () => document.getElementById('ddm-preloader')?.classList.add('ddm-loaded'),
    remainingTime
  );
}

function createBrandCard(brand) {
  const classes = [state.brand === brand.id ? 'active' : '', brand.featured ? 'featured' : '']
    .filter(Boolean)
    .join(' ');
  const featuredLabel = brand.featured ? '<em class="brand-pick">Featured</em>' : '';

  return `
    <button class="${classes}" data-brand="${brand.id}">
      ${featuredLabel}
      <span class="brand-logo">
        <img
          src="https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128"
          alt=""
          width="48"
          height="48"
          loading="lazy"
          decoding="async"
        >
        <b>${brand.name}</b>
      </span>
      <small>${brand.detail}</small>
      <i>Shop brand →</i>
    </button>`;
}

function createCategoryCard(category) {
  return `
    <button data-category="${category.id}">
      <span>${category.icon}</span>
      <div>
        <b>${category.label}</b>
        <small>${category.detail}</small>
      </div>
      <i>→</i>
    </button>`;
}

function createFilterChip(category) {
  const activeClass = state.category === category.id ? 'active' : '';
  return `<button class="${activeClass}" data-filter="${category.id}">${category.label}</button>`;
}

function createProductImage(product) {
  if (!product.image) return `<b>${product.icon ?? ''}</b>`;

  return `
    <img
      src="${product.image}"
      alt="${product.brand} ${product.name}"
      width="360"
      height="270"
      loading="lazy"
      decoding="async"
      onerror="this.hidden=true;this.nextElementSibling.hidden=false"
    >
    <small hidden>Photo unavailable</small>`;
}

function createProductDetails(product) {
  if (product.features?.length) {
    const features = product.features.map((feature) => `<li>${feature}</li>`).join('');
    return `<ul class="product-features">${features}</ul>`;
  }

  return `<p>${product.variant}</p>`;
}

function createProductPrice(product) {
  if (!product.price) return '';

  const originalPrice = product.mrp ? `<del>${formatMoney(product.mrp)}</del>` : '';
  return `
    <div class="product-price">
      <b>${formatMoney(product.price)}</b>
      ${originalPrice}
      <span>In stock</span>
    </div>`;
}

function createProductCard(product) {
  const model = product.model ? ` · ${product.model}` : '';

  return `
    <article>
      <div class="visual">${createProductImage(product)}</div>
      <div class="details">
        <small>${product.brand}${model}</small>
        <h3>${product.name}</h3>
        ${createProductDetails(product)}
        ${createProductPrice(product)}
        <a
          class="btn primary enquire-product"
          href="${createEnquiryUrl(product)}"
          target="_blank"
          rel="noopener"
        >Enquire on WhatsApp ↗</a>
      </div>
    </article>`;
}

function getFilteredProducts() {
  const query = state.query.trim().toLowerCase();

  return PRODUCTS.filter((product) => {
    const matchesCategory = state.category === ALL_FILTER || product.category === state.category;
    const matchesBrand = state.brand === ALL_FILTER || product.brand === state.brand;
    const searchableText = [
      product.brand,
      product.model,
      product.name,
      product.variant,
      ...(product.features ?? []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return matchesCategory && matchesBrand && searchableText.includes(query);
  });
}

function createEnquiryUrl(product) {
  const selectedFilters = [
    state.brand === ALL_FILTER ? '' : state.brand,
    state.category === ALL_FILTER ? 'appliances' : state.category,
  ]
    .filter(Boolean)
    .join(' ');
  const subject = product
    ? `${product.brand} ${product.name} (${product.model || product.variant})`
    : selectedFilters;
  const message =
    `Hello DDM Electronics, I am interested in ${subject}. ` +
    'Please share the latest price, availability and product details.';

  return `https://wa.me/${INTEGRATIONS.whatsapp.phone}?text=${encodeURIComponent(message)}`;
}

function renderBrands() {
  elements.brands.innerHTML = BRANDS.map(createBrandCard).join('');
}

function renderCategories() {
  const allProducts = { id: ALL_FILTER, label: 'All products' };
  elements.categories.innerHTML = CATEGORIES.map(createCategoryCard).join('');
  elements.chips.innerHTML = [allProducts, ...CATEGORIES].map(createFilterChip).join('');
}

function renderActiveFilters() {
  const filters = [];

  if (state.brand !== ALL_FILTER) {
    filters.push(`
      <span>
        Brand: <b>${state.brand}</b>
        <button data-clear-brand aria-label="Clear brand filter">×</button>
      </span>`);
  }

  if (state.category !== ALL_FILTER) {
    filters.push(`
      <span>
        Product: <b>${state.category}</b>
        <button data-clear-category aria-label="Clear product filter">×</button>
      </span>`);
  }

  elements.activeFilters.innerHTML = filters.join('');
}

function renderEmptyState(hasProducts) {
  elements.emptyState.classList.toggle('hidden', hasProducts);
  if (hasProducts) return;

  const enquiryLink = document.createElement('a');
  enquiryLink.className = 'btn pale';
  enquiryLink.textContent = 'Ask the store about this range';
  enquiryLink.href = createEnquiryUrl();
  enquiryLink.target = '_blank';
  enquiryLink.rel = 'noopener';

  elements.emptyState.replaceChildren(
    document.createTextNode('Ask us for available models in this range. '),
    enquiryLink
  );
}

function renderProductControls(productCount) {
  const initialLimit = getInitialProductLimit();
  const hiddenCount = Math.max(0, productCount - initialLimit);

  if (productCount <= initialLimit) {
    elements.productControls.replaceChildren();
    elements.productControls.classList.add('hidden');
    return;
  }

  elements.productControls.innerHTML = `
    <button
      class="product-toggle"
      type="button"
      data-toggle-products
      aria-expanded="${state.expanded}"
    >
      <span>${state.expanded ? 'Show less' : `View ${hiddenCount} more products`}</span>
      <b aria-hidden="true">${state.expanded ? '↑' : '↓'}</b>
    </button>`;
  elements.productControls.classList.remove('hidden');
}

function renderProducts() {
  const products = getFilteredProducts();
  const visibleProducts = state.expanded ? products : products.slice(0, getInitialProductLimit());

  elements.products.innerHTML = visibleProducts.map(createProductCard).join('');
  renderProductControls(products.length);
  renderEmptyState(products.length > 0);
  renderActiveFilters();
}

function resetCategory() {
  state.category = ALL_FILTER;
  state.expanded = false;
  renderCategories();
}

function handlePageClick(event) {
  const target = event.target.closest('button,a');
  if (!target) return;

  if (target.matches('[data-brand]')) {
    state.brand = target.dataset.brand;
    resetCategory();
    renderBrands();
    renderProducts();
    elements.shop.scrollIntoView();
    return;
  }

  if (target.matches('[data-category],[data-filter]')) {
    state.category = target.dataset.category || target.dataset.filter;
    state.expanded = false;
    renderCategories();
    renderProducts();
    if (target.dataset.category) elements.shop.scrollIntoView();
    return;
  }

  if (target.matches('[data-clear-brand]')) {
    state.brand = ALL_FILTER;
    state.expanded = false;
    renderBrands();
    renderProducts();
    return;
  }

  if (target.matches('[data-clear-category]')) {
    resetCategory();
    renderProducts();
    return;
  }

  if (target.matches('[data-toggle-products]')) {
    state.expanded = !state.expanded;
    renderProducts();

    if (!state.expanded) {
      elements.shop.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function initializeStorefront() {
  document.addEventListener('click', handlePageClick);
  elements.search.addEventListener('input', (event) => {
    state.query = event.target.value;
    state.expanded = false;
    renderProducts();
  });

  renderBrands();
  renderCategories();
  renderProducts();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hidePreloader, { once: true });
} else {
  hidePreloader();
}

initializeStorefront();
