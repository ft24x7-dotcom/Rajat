import { STORE, INTEGRATIONS, CATEGORIES, BRANDS, PRODUCTS } from './store-data.js';

const $ = (s, r = document) => r.querySelector(s);
let state = { category: 'All', brand: 'All', query: '' };
const money = (n) =>
  new Intl.NumberFormat(STORE.locale, {
    style: 'currency',
    currency: STORE.currency,
    maximumFractionDigits: 0,
  }).format(n);
function renderBrands() {
  $('[data-brands]').innerHTML = BRANDS.map(
    (b) =>
      `<button class="${state.brand === b.id ? 'active' : ''} ${b.featured ? 'featured' : ''}" data-brand="${b.id}">${b.featured ? '<em class="brand-pick">Featured</em>' : ''}<span class="brand-logo"><img src="https://www.google.com/s2/favicons?domain=${b.domain}&sz=128" alt="" width="48" height="48" loading="lazy" decoding="async"><b>${b.name}</b></span><small>${b.detail}</small><i>Shop brand →</i></button>`
  ).join('');
}
function renderCategories() {
  $('[data-categories]').innerHTML = CATEGORIES.map(
    (c) =>
      `<button data-category="${c.id}"><span>${c.icon}</span><div><b>${c.label}</b><small>${c.detail}</small></div><i>→</i></button>`
  ).join('');
  $('[data-chips]').innerHTML = [{ id: 'All', label: 'All products' }, ...CATEGORIES]
    .map(
      (c) =>
        `<button class="${state.category === c.id ? 'active' : ''}" data-filter="${c.id}">${c.label}</button>`
    )
    .join('');
}
function renderActiveFilters() {
  const parts = [];
  if (state.brand !== 'All')
    parts.push(
      `<span>Brand: <b>${state.brand}</b><button data-clear-brand aria-label="Clear brand filter">×</button></span>`
    );
  if (state.category !== 'All')
    parts.push(
      `<span>Product: <b>${state.category}</b><button data-clear-category aria-label="Clear product filter">×</button></span>`
    );
  $('[data-active-filters]').innerHTML = parts.join('');
}
function renderProducts() {
  const q = state.query.toLowerCase();
  const items = PRODUCTS.filter(
    (p) =>
      (state.category === 'All' || p.category === state.category) &&
      (state.brand === 'All' || p.brand === state.brand) &&
      `${p.brand} ${p.model || ''} ${p.name} ${p.variant} ${(p.features || []).join(' ')}`
        .toLowerCase()
        .includes(q)
  );
  $('[data-products]').innerHTML = items
    .map(
      (p) =>
        `<article><div class="visual">${p.image ? `<img src="${p.image}" alt="${p.brand} ${p.name}" width="360" height="270" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><small hidden>Photo unavailable</small>` : `<b>${p.icon}</b>`}</div><div class="details"><small>${p.brand}${p.model ? ` · ${p.model}` : ''}</small><h3>${p.name}</h3>${p.features ? `<ul class="product-features">${p.features.map((feature) => `<li>${feature}</li>`).join('')}</ul>` : `<p>${p.variant}</p>`}${p.price ? `<div class="product-price"><b>${money(p.price)}</b>${p.mrp ? `<del>${money(p.mrp)}</del>` : ''}<span>In stock</span></div>` : ''}<a class="btn primary enquire-product" href="${enquiry(p)}" target="_blank" rel="noopener">Enquire on WhatsApp ↗</a></div></article>`
    )
    .join('');
  $('[data-empty]').classList.toggle('hidden', items.length > 0);
  renderActiveFilters();
  if (!items.length) {
    const a = document.createElement('a');
    a.className = 'btn pale';
    a.textContent = 'Ask the store about this range';
    a.href = enquiry();
    a.target = '_blank';
    a.rel = 'noopener';
    $('[data-empty]').replaceChildren(
      document.createTextNode('Ask us for available models in this range. '),
      a
    );
  }
}

function enquiry(p) {
  const subject = p
    ? p.brand + ' ' + p.name + ' (' + (p.model || p.variant) + ')'
    : [
        state.brand === 'All' ? '' : state.brand,
        state.category === 'All' ? 'appliances' : state.category,
      ]
        .filter(Boolean)
        .join(' ');
  return (
    'https://wa.me/' +
    INTEGRATIONS.whatsapp.phone +
    '?text=' +
    encodeURIComponent(
      'Hello DDM Electronics, I am interested in ' +
        subject +
        '. Please share the latest price, availability and product details.'
    )
  );
}
document.addEventListener('click', (e) => {
  const t = e.target.closest('button,a');
  if (!t) return;
  if (t.matches('[data-brand]')) {
    state.brand = t.dataset.brand;
    state.category = 'All';
    renderBrands();
    renderCategories();
    renderProducts();
    $('#shop').scrollIntoView();
  }
  if (t.matches('[data-category],[data-filter]')) {
    state.category = t.dataset.category || t.dataset.filter;
    renderCategories();
    renderProducts();
    if (t.dataset.category) $('#shop').scrollIntoView();
  }
  if (t.matches('[data-clear-brand]')) {
    state.brand = 'All';
    renderBrands();
    renderProducts();
  }
  if (t.matches('[data-clear-category]')) {
    state.category = 'All';
    renderCategories();
    renderProducts();
  }
});
$('[data-search]').addEventListener('input', (e) => {
  state.query = e.target.value;
  renderProducts();
});
renderBrands();
renderCategories();
renderProducts();
