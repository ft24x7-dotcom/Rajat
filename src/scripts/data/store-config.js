/**
 * Public storefront settings.
 *
 * Keep private API keys, payment secrets, and access tokens on a server. Everything in this file
 * is downloaded by the customer's browser and must be safe to expose publicly.
 */
export const STORE = {
  name: 'DDM Electronics',
  shortName: 'DDM',
  phone: '917617202212',
  displayPhone: '+91 76172 02212',
  email: 'ddmelectronics@rediffmail.com',
  address: 'HQCM+5F, Bhind, Madhya Pradesh',
  latitude: 26.570557859198875,
  longitude: 78.78421004180777,
  currency: 'INR',
  locale: 'en-IN',
};

export const INTEGRATIONS = {
  apiBaseUrl: '',
  ordersEndpoint: '/orders',
  useLiveOrderApi: false,
  whatsapp: { enabled: true, phone: '917617202212' },
  email: { enabled: true, address: 'ddmelectronics@rediffmail.com' },
  instagram: { enabled: false, url: '' },
  googleMaps: {
    enabled: true,
    url: 'https://www.google.com/maps/dir/?api=1&destination=26.570557859198875%2C78.78421004180777',
  },
  payment: { enabled: false, provider: 'razorpay' },
};

export const ORDER_POLICY = {
  advancePercent: 20,
  cashOnDelivery: true,
  returnsAllowed: false,
  replacementOnly: true,
};

export const CATEGORIES = [
  { id: 'Washing Machine', label: 'Washing Machines', detail: 'Top load & front load', icon: '🫧' },
  { id: 'AC', label: 'Air Conditioners', detail: 'Split & window ACs', icon: '❄️' },
  { id: 'Refrigerator', label: 'Refrigerators', detail: 'Single & double door', icon: '🧊' },
  { id: 'LED', label: 'LED TVs', detail: 'Smart, UHD & 4K', icon: '📺' },
  { id: 'Atta Chakki', label: 'Atta Chakki', detail: 'Domestic flour mills', icon: '🌾' },
  {
    id: 'Microwave Oven',
    label: 'Microwave Ovens',
    detail: 'Solo, grill & convection',
    icon: '♨️',
  },
  { id: 'Iron', label: 'Irons', detail: 'Dry & steam irons', icon: '♨' },
  {
    id: 'Mixer Grinder',
    label: 'Mixer Grinders',
    detail: 'Everyday kitchen essentials',
    icon: '⚙️',
  },
  { id: 'Water Heater', label: 'Water Heaters', detail: 'Instant & storage geysers', icon: '💧' },
];

export const BRANDS = [
  {
    id: 'Samsung',
    name: 'Samsung',
    domain: 'samsung.com',
    detail: 'TVs, laundry & refrigerators',
    featured: true,
  },
  {
    id: 'Havells',
    name: 'Havells',
    domain: 'havells.com',
    detail: 'Trusted home essentials',
    featured: true,
  },
  { id: 'Panasonic', name: 'Panasonic', domain: 'panasonic.com', detail: 'Home & kitchen' },
  { id: 'IFB', name: 'IFB', domain: 'ifbappliances.com', detail: 'Laundry, cooling & kitchen' },
  { id: 'Voltas', name: 'Voltas', domain: 'voltas.com', detail: 'Cooling solutions' },
  {
    id: 'Mitsubishi',
    name: 'Mitsubishi',
    domain: 'mitsubishielectric.com',
    detail: 'Premium air conditioning',
  },
  { id: 'AO Smith', name: 'AO Smith', domain: 'aosmithindia.com', detail: 'Water heating' },
  { id: 'Lloyd', name: 'Lloyd', domain: 'mylloyd.com', detail: 'Selected air conditioners only' },
];
