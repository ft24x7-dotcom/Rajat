// EDIT THIS FILE to update store details, categories, brands, products and prices.
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
// Official brand imagery; store confirms model availability. Featured products may include supplied prices.
export const PRODUCTS = [
  {
    id: 2200,
    category: 'Washing Machine',
    brand: 'IFB',
    model: 'TL801MG1',
    name: 'IFB DeepClean® 8 kg Top Load Washing Machine with ActivMix',
    variant: 'Powered by AI · Soft Close Door · 360° Bi-Axial Rotation',
    features: ['Powered by AI', 'Soft Close Door', '360° Bi-Axial Rotation'],
    price: 19990,
    mrp: 25890,
    image: './assets/ifb-tl801mg1.jpg',
    source: 'https://www.ifbappliances.com/products/laundry/washing-machine',
  },
  {
    id: 2201,
    category: 'Washing Machine',
    brand: 'IFB',
    model: 'TL-901AG1ID',
    name: 'IFB DeepClean® 9 Kg Top Load Washing Machine with Eco Inverter Motor',
    variant: 'Powered by AI · ActivMix · Eco Inverter Motor',
    features: ['Powered by AI', 'ActivMix', 'Eco Inverter Motor'],
    price: 25990,
    mrp: 33690,
    image: './assets/ifb-tl-901ag1id.jpg',
    source: 'https://www.ifbappliances.com/products/laundry/washing-machine',
  },
  {
    id: 2202,
    category: 'Washing Machine',
    brand: 'IFB',
    model: 'TL701AG1SID',
    name: 'IFB DeepClean® 7 kg Top Load Washing Machine with Eco Inverter Motor and Power Steam®',
    variant: 'Powered by AI · ActivMix · Eco Inverter Motor',
    features: ['Powered by AI', 'ActivMix', 'Eco Inverter Motor'],
    price: 22290,
    mrp: 28890,
    image: './assets/ifb-tl701ag1sid.jpg',
    source: 'https://www.ifbappliances.com/products/laundry/washing-machine',
  },
  {
    id: 2203,
    category: 'Washing Machine',
    brand: 'IFB',
    model: 'TL701AG1ID',
    name: 'IFB DeepClean® 7 kg Top Load Washing Machine with Eco Inverter Motor',
    variant: 'Powered by AI · ActivMix · Aqua Energie',
    features: ['Powered by AI', 'ActivMix', 'Aqua Energie'],
    price: 19990,
    mrp: 25890,
    image: './assets/ifb-tl701ag1id.jpg',
    source: 'https://www.ifbappliances.com/products/laundry/washing-machine',
  },
  {
    id: 2204,
    category: 'Washing Machine',
    brand: 'IFB',
    model: 'TL-900NB2SID',
    name: 'IFB DeepClean® 9 Kg Top Load Washing Machine with Eco Inverter Motor and Power Steam®',
    variant: 'Powered by AI · ActivMix · Eco Inverter Motor',
    features: ['Powered by AI', 'ActivMix', 'Eco Inverter Motor'],
    price: 27490,
    image: './assets/ifb-tl-900nb2sid.jpg',
    source: 'https://www.ifbappliances.com/products/laundry/washing-machine',
  },
  {
    id: 2000,
    category: 'Washing Machine',
    brand: 'Samsung',
    name: '9.0 kg Front Load Washing Machine with AI Control & Superspeed, WW90DG6U24AS',
    variant: 'SmartThings AI.AI EcoBubble.Super Speed',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ww90dg6u24astl/gallery/in-ww6000d-529739-529739-ww90dg6u24astl-544511169?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/washers-and-dryers/washing-machines/ww6000d-front-loading-smartthings-ai-energy-mode-a-10-percent-extra-energy-efficiency-9kg-navy-ww90dg6u24astl/',
  },
  {
    id: 2001,
    category: 'Washing Machine',
    brand: 'Samsung',
    name: 'WW90DG5U24AX, Front Load Washing Machine with Hygiene Steam AI Ecobubble 9.0 kg',
    variant: 'Superspeed.AI EcoBubble.SmartThings',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ww90dg5u24axtl/gallery/in-washing-machines-ww90dg5u24axtl-l-perspective-refined-inox-545549783?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/washers-and-dryers/washing-machines/ww5000d-ww6000d-front-loading-smartthings-ai-energy-mode-9kg-refined-inox-9kg-refined-inox-ww90dg5u24axtl/',
  },
  {
    id: 2002,
    category: 'Washing Machine',
    brand: 'Samsung',
    name: '8.0 kg AI Ecobubble™ Front Load Washing Machine with SmartThings & Wi-Fi, WW80T504DAX1',
    variant:
      'AI Ecobubble™ & Hygiene Steam.Digital Inverter Motor motor with 20 years warranty.5 Star energy rating',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-ww80t504dax1tl-553084208?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/washers-and-dryers/washing-machines/ww5300t-front-loading-eco-bubble-ai-energy-mode-ai-control-16kg-gray-ww80t504dax1tl/',
  },
  {
    id: 2003,
    category: 'Washing Machine',
    brand: 'Samsung',
    name: '9.0 kg Front Load Washing Machine, Hygiene Steam, WW90FG4U04AS',
    variant: 'Hygiene Steam.Quick Wash.Stay Clean Drwaer',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ww90fg4u04astl/gallery/in-ww4000f-ww90fg4u04abtl-ww90fg4u04astl-548036462?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/washers-and-dryers/washing-machines/ww4000f-front-loading-quick-wash-hygiene-steam-drum-clean-9kg-navy-ww90fg4u04astl/',
  },
  {
    id: 2004,
    category: 'Washing Machine',
    brand: 'Samsung',
    name: '8.0 kg Ecobubble™ Top Load Washing Machine, WA80BG4441BG',
    variant: 'Washing Capacity : 8.0 kg.Energy Efficiency Class : 5 Star.Drum type : Diamond',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/wa80bg4441bgtl/gallery/in-wa4000b-433542-wa80bg4441bgtl-533454821?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/washers-and-dryers/washing-machines/wa4000b-top-loading-ecobubble-digital-inverter-large-capacity-8kg-lightgray-wa80bg4441bgtl/',
  },
  {
    id: 2005,
    category: 'Washing Machine',
    brand: 'Samsung',
    name: '8.0 kg Top Load Washing Machine with AI Wash and Super Speed, WA80F08S2L',
    variant: 'AI WASH.Super speed.Ecobubble',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/wa80f08s2ltl/gallery/in-wa80f21-544053-wa80f08s2ltl-545824131?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/washers-and-dryers/washing-machines/wa80f-21-top-load-washer-ai-wash-ecobubble-ai-energy-mode-8kg-gray-wa80f08s2ltl/',
  },
  {
    id: 2010,
    category: 'Washing Machine',
    brand: 'IFB',
    name: 'IFB DeepClean® 10 kg Front Load Washing Machine with WiFi and Voice Enabled',
    variant: 'IFB Executive Plus MBN 1014K CMS',
    image:
      'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:11eff8bb-e5ca-4ca3-8af0-c8daa9dc8ced/as/8903287033896-executive-plus-mbn-1014k-cms.webp?quality=60',
    source: 'https://www.ifbappliances.com/products/laundry/washing-machine',
  },
  {
    id: 2011,
    category: 'Washing Machine',
    brand: 'IFB',
    name: 'IFB DeepClean® 11 kg Front Load Washing Machine with Ai Dos',
    variant: 'IFB Executive Plus VSG 1114',
    image:
      'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:2e771731-04fc-4a57-b6de-5d7063d0d349/as/8903287033780-executive-plus-vsg-1114.webp?quality=60',
    source: 'https://www.ifbappliances.com/products/laundry/washing-machine',
  },
  {
    id: 2012,
    category: 'Washing Machine',
    brand: 'IFB',
    name: 'IFB DeepClean® 10 kg Top Load Washing Machine with Eco Inverter Motor and Power Steam® with In-Built Heater',
    variant: 'IFB TL100NB2SID',
    image:
      'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:01a12109-f917-46c9-89ae-d222da5a32b8/as/8903287034114-tl100nb2sid.webp?quality=60',
    source: 'https://www.ifbappliances.com/products/laundry/washing-machine',
  },
  {
    id: 2013,
    category: 'Washing Machine',
    brand: 'IFB',
    name: 'IFB DeepClean® 9 Kg  Top Load Washing Machine with Eco Inverter Motor and Power Steam® with In-Built Heater',
    variant: 'IFB TL-900OG2SWID',
    image:
      'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:ec040bc1-722b-4486-a834-bc18d7f466fd/as/8903287034435-tl-900og2swid.webp?quality=60',
    source: 'https://www.ifbappliances.com/products/laundry/washing-machine',
  },
  {
    id: 2080,
    category: 'AC',
    brand: 'Samsung',
    name: 'Bespoke AI WindFree Pro Inverter Split AC, 3 Star (2026) AR70H18D13W 4.75 kW (1.35)',
    variant: 'Motion Wind.AI Energy Mode (30% Energy Savings).AI Fast & Comfort Cooling',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ar70h18d13wnna/gallery/in-ar70h-ar70h-ar70h18d13wnna-551923914?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/air-conditioners/split-ac/ar70-bespoke-ai-windfree-inverter-split-ac-ar70h18d13w-4-75-kw-3-star-2026-ar70h18d13wnna/',
  },
  {
    id: 2081,
    category: 'AC',
    brand: 'Samsung',
    name: 'Bespoke AI Inverter Split Hot & Cold AC, 3 Star (2026) AR50H19C1XH 5.00 kW (1.42)',
    variant: 'Hot & Cold.AI Energy Mode (30% Energy Savings).AI Fast & Comfort Cooling',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ar50h19c1xhnna/gallery/in-ar50h-ar50h12d1chnst-ar50h19c1xhnna-551773585?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/air-conditioners/split-ac/ar50h-bespoke-ai-inverter-split-hot-cold-ac-ar50h19c1xh-5-00-kw-3-star-2026-ar50h19c1xhnna/',
  },
  {
    id: 2090,
    category: 'AC',
    brand: 'Voltas',
    name: 'Voltas Split Air Conditioner, 2 Ton, 5 Star - 245INV Vectra Plush',
    variant: 'Contact DDM to confirm model availability',
    image:
      'https://cdn.shopify.com/s/files/1/0578/6845/2026/files/B0GXYG3V41-4504069.jpg?v=1781609812',
    source:
      'https://www.voltas.com/products/voltas-split-air-conditioner-2-ton-5-star-245inv-vectra-plush',
  },
  {
    id: 2091,
    category: 'AC',
    brand: 'Voltas',
    name: 'Voltas Window Air Conditioner, 1.5 Ton, 3 Star - 183INV Pearl',
    variant: 'Contact DDM to confirm model availability',
    image:
      'https://cdn.shopify.com/s/files/1/0578/6845/2026/files/1_1f88cb2b-e33e-42b7-ac3c-2033826d74b0.jpg?v=1778499856',
    source:
      'https://www.voltas.com/products/voltas-window-air-conditioner-1-5-ton-3-star-183inv-pearl',
  },
  {
    id: 2092,
    category: 'AC',
    brand: 'Voltas',
    name: 'Voltas Window Air Conditioner, 1.5 Ton, 5 Star - 185INV Topaz',
    variant: 'Contact DDM to confirm model availability',
    image:
      'https://cdn.shopify.com/s/files/1/0578/6845/2026/files/B0GS99ZH7F-4011551.jpg?v=1781609347',
    source:
      'https://www.voltas.com/products/voltas-window-air-conditioner-1-5-ton-5-star-185inv-topaz',
  },
  {
    id: 2093,
    category: 'AC',
    brand: 'Voltas',
    name: 'Voltas Split Air Conditioner, 1 Ton, 3 Star - 123INV Vertis Elite RG',
    variant: 'Contact DDM to confirm model availability',
    image: 'https://cdn.shopify.com/s/files/1/0578/6845/2026/files/4504155-1.jpg?v=1782809697',
    source:
      'https://www.voltas.com/products/voltas-split-air-conditioner-1-ton-3-star-123inv-vertis-elite-rg',
  },
  {
    id: 2094,
    category: 'AC',
    brand: 'Voltas',
    name: 'Voltas Split Air Conditioner, 1 Ton, 2 Star - 122FS Emerald',
    variant: 'Contact DDM to confirm model availability',
    image:
      'https://cdn.shopify.com/s/files/1/0578/6845/2026/files/1_228710e0-61ca-4903-a888-3a5bf13c783f.jpg?v=1776332357',
    source:
      'https://www.voltas.com/products/voltas-split-air-conditioner-1-ton-2-star-122fs-emerald',
  },
  {
    id: 2095,
    category: 'AC',
    brand: 'Mitsubishi',
    name: 'MSY-GZ Inverter Split AC',
    variant: 'Eco Inverter · Premium split AC',
    image:
      'https://mitsubishielectric.in/uploads/productimage/1782903464-1959370980-GZ-18Image.webp',
    source:
      'https://mitsubishielectric.in/products/air-conditioning-systems/split-air-conditioners/inverter-series/msy-gz13vf',
  },
  {
    id: 2096,
    category: 'AC',
    brand: 'Mitsubishi',
    name: 'MSY-GR-T Inverter Split AC',
    variant: '4 Star · Inverter split AC',
    image:
      'https://mitsubishielectric.in/uploads/productimage/1782903876-237066414-GRT_big_0694.webp',
    source:
      'https://mitsubishielectric.in/products/air-conditioning-systems/split-air-conditioners/inverter-series/msy-gr18vft',
  },
  {
    id: 2097,
    category: 'AC',
    brand: 'Lloyd',
    name: 'Stunnair Split AC',
    variant: '1.5 Ton · 5 Star',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/s/t/stunnair_base_2.jpg',
    source: 'https://havells.com/stunnair-split-ac-15-5-star-gls19v5asoqz.html',
  },
  {
    id: 2020,
    category: 'Refrigerator',
    brand: 'Samsung',
    name: '653 L Side By Side Refrigerator with Bespoke AI, 3★ RS76CG8003S9',
    variant:
      'Convertible 5in1.Twin Cooling plus & Precise cooling.10% energy savings with AI Energy mode',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/rs76cg8003s9hl/gallery/in-side-by-side-smart-conversion-rs76cg8003s9hl-534630747?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/refrigerators/side-by-side/rs8000cch-side-by-side-smart-conversion-696l-silver-rs76cg8003s9hl/',
  },
  {
    id: 2021,
    category: 'Refrigerator',
    brand: 'Samsung',
    name: '633 L Side by Side Refrigerator with Water & Ice Dispenser, 3★ RS78CG8543S9',
    variant:
      'Convertible 5-in-1.Twin Cooling Plus & Precise Cooling.Non Plumbing Ice & Water Dispenser',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/rs78cg8543s9hl/gallery/in-side-by-side-smart-conversion-449598-rs78cg8543s9hl-535107878?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/refrigerators/side-by-side/rs8000cch-side-by-side-smart-conversion-633l-silver-rs78cg8543s9hl/',
  },
  {
    id: 2022,
    category: 'Refrigerator',
    brand: 'Samsung',
    name: '653 L Side By Side Refrigerator with Bespoke AI, 3★ RS76CG8113B1',
    variant:
      'Convertible 5in1.Twin Cooling plus & Precise cooling.10% energy savings with AI Energy mode',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/rs76cg8113b1hl/gallery/in-side-by-side-smart-conversion-444565-rs76cg8113b1hl-534630950?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/refrigerators/side-by-side/rs8000cch-side-by-side-smart-conversion-696l-black-rs76cg8113b1hl/',
  },
  {
    id: 2023,
    category: 'Refrigerator',
    brand: 'Samsung',
    name: '467 L Double Door Refrigerator with Bespoke AI, 3★ RT80H51C3K',
    variant:
      'Twin Cooling Plus™.Net Total(Liter) : 467 L.Net Dimension (WxHxD) : 70.00 cm x 1.82 m x 79.40 cm',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/rt80h51c3khl/gallery/in-bespoke-ai-refrigerator-tmf-convertible-5in1-580174-rt80h51c3khl-551070949?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/refrigerators/double-door/refrigerator-tmf-convertible-5in1-double-door-refrigerator-with-bespoke-ai-467l-black-rt80h51c3khl/',
  },
  {
    id: 2024,
    category: 'Refrigerator',
    brand: 'Samsung',
    name: '550 L French Door Refrigerator with Twin Cooling Plus™, Convertible Freezer RF57A5032S9',
    variant: 'Convertible freezer.Twin Cooling Plus™.Digital inverter Compressor',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/rf57a5032s9-tl/gallery/in-ref-convertible-freezer-rf57a5032s9-tl-436322271?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/refrigerators/french-door/rf5000a-580l-silver-rf57a5032s9-tl/',
  },
  {
    id: 2025,
    category: 'Refrigerator',
    brand: 'Samsung',
    name: '650 L Bespoke AI 4 - Door French Door Refrigerator | Triple Cooling | FlexZone™ | RF65DG90BDSG',
    variant:
      'Flex Zone with 5 Convertible Modes.Precise Cooling | Triple Cooling.Smart ThingsApp Integration',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/rf65dg90bdsgtl/gallery/in-t-style-french-door-beverage-center-rf65dg90bdsgtl-550960481?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/refrigerators/french-door/rf9000d-rf9000dc-t-style-french-door-beverage-center-650l-black-rf65dg90bdsgtl/',
  },
  {
    id: 2026,
    category: 'Refrigerator',
    brand: 'Samsung',
    name: '653 L Bespoke AI Side by Side Refrigerator with Twin Cooling Plus™ | Convertible 5in1 | 3★ | RS76CB81A312',
    variant:
      'Convertible 5-in-1.Twin Cooling Plus & Precise Cooling.BESPOKE Design with Auto Open Door',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/rs76cb81a312hl/gallery/in-653l-bespoke-convertible-5in1-side-by-side-refrigerator-rs76cb81a3-503212-rs76cb81a312hl-540881559?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/refrigerators/bespoke-refrigerators/bespoke-convertible-5in1-side-by-side-refrigerator-653l-clean-white-rs76cb81a312hl/',
  },
  {
    id: 2030,
    category: 'Refrigerator',
    brand: 'IFB',
    name: 'IFB 331 L 3 Star Frost Free Refrigerator with Smart Camera',
    variant: 'Ai-Magic IFBFF-Smart383CIKSTU',
    image:
      'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:bd5a07f8-fc53-4c3d-a7cb-2452d83c9812',
    source: 'https://www.ifbappliances.com/products/kitchen/refrigerators',
  },
  {
    id: 2031,
    category: 'Refrigerator',
    brand: 'IFB',
    name: 'IFB 331 L 3 Star Frost Free Refrigerator with 12 in 1 Convertible',
    variant: 'Expert-Cool IFBFF-383CIBSTU',
    image:
      'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:c2986db5-455b-4fcb-8fc0-904ab073da6d/as/8905799220054-ifbff-383cibstu.webp?quality=60',
    source: 'https://www.ifbappliances.com/products/kitchen/refrigerators',
  },
  {
    id: 2032,
    category: 'Refrigerator',
    brand: 'IFB',
    name: 'IFB 331 L 2 Star Frost Free Refrigerator with Glass Finish',
    variant: 'Eco-Cool IFBFF-383BIKGTM',
    image:
      'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:242b8350-b4f5-418b-8768-7e1255909f2f',
    source: 'https://www.ifbappliances.com/products/kitchen/refrigerators',
  },
  {
    id: 2040,
    category: 'LED',
    brand: 'Samsung',
    name: '1.63 m (65) Micro RGB R95H 4K Smart TV (2026)',
    variant: 'Micro RGB Technology.Micro RGB AI Engine Pro.Micro RGB Precision Color 100',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/mra65r95hxuxxl/gallery/in-microrgb-r95h-mra65r95hxuxxl-551486653?$624_468_PNG$',
    source: 'https://www.samsung.com/in/tvs/micro-rgb/r95h-65-inch-4k-smart-tv-mra65r95hxuxxl/',
  },
  {
    id: 2041,
    category: 'LED',
    brand: 'Samsung',
    name: '1.38 m (55) Micro RGB R85H 4K Smart TV (2026)',
    variant: 'Micro RGB Technology.Micro RGB AI Engine.Micro RGB Precision Color 100',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/mra55r85haulxl/gallery/in-microrgb-r85h-mra55r85haulxl-551487707?$624_468_PNG$',
    source: 'https://www.samsung.com/in/tvs/micro-rgb/r85h-55-inch-4k-smart-tv-mra55r85haulxl/',
  },
  {
    id: 2042,
    category: 'LED',
    brand: 'Samsung',
    name: '1.38 m (55) S95H OLED 4K Smart TV (2026)',
    variant: 'Glare Free with Real Black & Real Color.FloatLayer Design.Ultimate Gaming Pack',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/qa55s95hxulxl/gallery/in-oled-s95h-qa55s95hxulxl-551462212?$624_468_PNG$',
    source: 'https://www.samsung.com/in/tvs/oled-tv/s95h-55-inch-oled-4k-smart-tv-qa55s95hxulxl/',
  },
  {
    id: 2043,
    category: 'LED',
    brand: 'Samsung',
    name: '1.38 m (55) Neo QLED QN80H 4K Samsung Vision AI Smart TV (2026)',
    variant: 'Samsung Vision AI Companion.Quantum Mini LED.Motion Xcelerator 144Hz',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/qa55qn80haulxl/gallery/in-qled-qn80h-qa55qn80haulxl-551410114?$624_468_PNG$',
    source:
      'https://www.samsung.com/in/tvs/qled-tv/qn80h-55-inch-neo-qled-4k-mini-led-smart-tv-qa55qn80haulxl/',
  },
  {
    id: 2044,
    category: 'LED',
    brand: 'Samsung',
    name: '1.08 (43) HD TV F5600F FHD Smart TV (2026)',
    variant: 'HDR.Samsung Knox Security.Samsung Tizen OS',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ua43f5600fuxxl/gallery/in-1-08-m-43-hd-tv-f6000f-fhd-smart-tv-2026-ua43f5600fuxxl-554200440?$624_468_PNG$',
    source: 'https://www.samsung.com/in/tvs/full-hd-tv/f6000f-43-inch-ua43f5600fuxxl/',
  },
  {
    id: 2045,
    category: 'LED',
    brand: 'Samsung',
    name: '1.08 m (43) Full HD F5650F Smart TV (2026)',
    variant: 'HDR.Knox Security.Tizen OS',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ua43f5650fuxxl/gallery/in-fhd-f5500-603494-ua43f5650fuxxl-554191493?$624_468_PNG$',
    source: 'https://www.samsung.com/in/tvs/full-hd-tv/f5500-43-inch-ua43f5650fuxxl/',
  },
  {
    id: 2046,
    category: 'LED',
    brand: 'Samsung',
    name: '80 cm (32) HD TV H4680F HD Smart TV (2026)',
    variant: 'HDR.Samsung Knox Security.OTS Lite',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ua32h4680fuxxl/gallery/in-hd-h5000-603492-ua32h4680fuxxl-554191262?$624_468_PNG$',
    source: 'https://www.samsung.com/in/tvs/hd-tv/h5000-32-inch-ua32h4680fuxxl/',
  },
  {
    id: 2047,
    category: 'LED',
    brand: 'Samsung',
    name: '80 cm (32) HD TV H4660F HD Smart TV (2026)',
    variant: 'HDR.Samsung Knox Security.OTS Lite',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ua32h4660fuxxl/gallery/in-hd-h5000-603491-ua32h4660fuxxl-554190942?$624_468_PNG$',
    source: 'https://www.samsung.com/in/tvs/hd-tv/h5000-32-inch-ua32h4660fuxxl/',
  },
  {
    id: 2048,
    category: 'LED',
    brand: 'Samsung',
    name: '80 cm (32) HD TV H4610F HD Smart TV (2026)',
    variant: 'HDR.Samsung Knox Security.OTS Lite',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ua32h4610fuxxl/gallery/in-hd-h5000-603489-ua32h4610fuxxl-554190644?$624_468_PNG$',
    source: 'https://www.samsung.com/in/tvs/hd-tv/h5000-32-inch-ua32h4610fuxxl/',
  },
  {
    id: 2049,
    category: 'LED',
    brand: 'Samsung',
    name: '80 cm (32) HD TV H4600F HD Smart TV (2026)',
    variant: 'HDR.Samsung Knox Security.OTS Lite',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ua32h4600fuxxl/gallery/in-hd-h5000-ua32h4600fuxxl-554189998?$624_468_PNG$',
    source: 'https://www.samsung.com/in/tvs/hd-tv/h5000-32-inch-ua32h4600fuxxl/',
  },
  {
    id: 2140,
    category: 'Atta Chakki',
    name: '1 HP Domestic Atta Chakki',
    brand: 'NE',
    variant: '10 kg/hr · Automatic · Single phase',
    image:
      'https://5.imimg.com/data5/ANDROID/Default/2023/7/326118673/YJ/WK/GZ/9797613/product-jpeg-500x500.jpeg',
    source: 'https://www.nilkanthflourmill.com/atta-chakki.html',
  },
  {
    id: 2141,
    category: 'Atta Chakki',
    name: 'Atta Chakki Flour Mill',
    brand: 'NE',
    variant: 'Single phase · Domestic use',
    image:
      'https://5.imimg.com/data5/ANDROID/Default/2023/7/326118673/YJ/WK/GZ/9797613/product-jpeg-500x500.jpeg',
    source: 'https://www.nilkanthflourmill.com/atta-chakki.html',
  },
  {
    id: 2142,
    category: 'Atta Chakki',
    name: 'Box Type Domestic Atta Chakki',
    brand: 'Mahadev',
    variant: '1 HP · Automatic · 5–10 kg/hr',
    image: 'https://mahadevflourmill.com/wp-content/uploads/2022/12/MDF-Flour-Mill.jpg',
    source: 'https://mahadevflourmill.com/box-type-domestic-atta-chakki/',
  },
  {
    id: 2143,
    category: 'Atta Chakki',
    name: '1 HP Domestic Atta Chakki',
    brand: 'Mahadev',
    variant: 'Automatic · Stainless steel · Home use',
    image: 'https://mahadevflourmill.com/wp-content/uploads/2022/12/13.jpg',
    source: 'https://mahadevflourmill.com/1-hp-domestic-atta-chakki/',
  },
  {
    id: 2144,
    category: 'Atta Chakki',
    name: '1 HP SS Domestic Atta Chakki',
    brand: 'Mahadev',
    variant: 'Single phase · Stainless steel',
    image: 'https://mahadevflourmill.com/wp-content/uploads/2022/12/12.jpg',
    source: 'https://mahadevflourmill.com/1-hp-ss-domestic-atta-chakki/',
  },
  {
    id: 2145,
    category: 'Atta Chakki',
    name: 'Domestic Wheat Atta Chakki',
    brand: 'Mahadev',
    variant: 'Automatic · 1 HP · Home flour mill',
    image: 'https://mahadevflourmill.com/wp-content/uploads/2022/12/1.5-HP-Flour-Mill.jpg',
    source: 'https://mahadevflourmill.com/domestic-wheat-atta-chakki/',
  },
  {
    id: 2146,
    category: 'Atta Chakki',
    name: '2-in-1 Domestic Atta Chakki',
    brand: 'Mahadev',
    variant: 'Automatic · 1 HP · 10 kg/hr',
    image: 'https://mahadevflourmill.com/wp-content/uploads/2022/12/2-in-1-Flour-Mill.jpg',
    source: 'https://mahadevflourmill.com/2-in-1-domestic-atta-chakki/',
  },
  {
    id: 2147,
    category: 'Atta Chakki',
    name: '1 HP Wooden Gharghanti Atta Chakki',
    brand: 'Mahadev',
    variant: 'Automatic · Wooden cabinet · Home use',
    image: 'https://mahadevflourmill.com/wp-content/uploads/2022/12/PLB-Flour-Mill.jpg',
    source: 'https://mahadevflourmill.com/1-hp-wooden-gharghanti-atta-chakki/',
  },
  {
    id: 2148,
    category: 'Atta Chakki',
    name: 'Modular Domestic Flour Mill',
    brand: 'Mahadev',
    variant: '1 HP · Automatic · 5–10 kg/hr',
    image: 'https://mahadevflourmill.com/wp-content/uploads/2022/12/MDF-Flour-Mill.jpg',
    source: 'https://mahadevflourmill.com/modular-gharghanti-atta-chakki/',
  },
  {
    id: 2149,
    category: 'Atta Chakki',
    name: '1 HP Gharghanti Atta Chakki',
    brand: 'Mahadev',
    variant: 'Automatic · Single phase · Domestic use',
    image: 'https://mahadevflourmill.com/wp-content/uploads/2022/12/1.25-HP-Flour-Mill.jpg',
    source: 'https://mahadevflourmill.com/1-hp-gharghanti-atta-chakki/',
  },
  {
    id: 2060,
    category: 'Microwave Oven',
    brand: 'IFB',
    name: 'IFB 28 L Convection Microwave Oven with Air Fry and Dual Heaters',
    variant: 'IFB 28SC5',
    image:
      'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:c3dbb69e-dda9-4367-9c75-b63d2537e4c1/as/8903287005763-28sc5.webp?quality=60',
    source: 'https://www.ifbappliances.com/products/kitchen/microwave/convection',
  },
  {
    id: 2061,
    category: 'Microwave Oven',
    brand: 'IFB',
    name: 'IFB 34 L Convection Microwave Oven with Air Fry and Dual Heaters',
    variant: 'IFB 34BC2',
    image:
      'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:bc5657d7-bf1d-4e97-8e9d-ea2b6cb23ce9/as/8903287005657-34bc2.webp?quality=60',
    source: 'https://www.ifbappliances.com/products/kitchen/microwave/convection',
  },
  {
    id: 2062,
    category: 'Microwave Oven',
    brand: 'IFB',
    name: 'IFB 30 L Rotisserie Convection Microwave Oven with Air Fry and Dual Heaters',
    variant: 'IFB 30BRC4',
    image:
      'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:3bd8d57e-ab11-436c-a70d-c01dfb738bfa/as/8903287005749-30brc4.webp?quality=60',
    source: 'https://www.ifbappliances.com/products/kitchen/microwave/convection',
  },
  {
    id: 2063,
    category: 'Microwave Oven',
    brand: 'IFB',
    name: 'IFB 23 L Convection Microwave Oven with Air Fry and Dual Heaters',
    variant: 'IFB 23SC3',
    image:
      'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:1427d693-a956-4a10-b5c7-704107ca7479/as/8903287005213-23sc3.webp?quality=60',
    source: 'https://www.ifbappliances.com/products/kitchen/microwave/convection',
  },
  {
    id: 2064,
    category: 'Microwave Oven',
    brand: 'IFB',
    name: 'IFB 25 L Convection Microwave Oven with Dual Heaters and 360° Convection',
    variant: 'IFB 25BC3',
    image:
      'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:4009953b-ab90-461f-853a-e1ef345f0c6e/as/8903287005268-25bc3.webp?quality=60',
    source: 'https://www.ifbappliances.com/products/kitchen/microwave/convection',
  },
  {
    name: '25L Solo Microwave Oven (NN-ST310QBFG, Black, 85 Auto Cook Menus)',
    image:
      'https://store.in.panasonic.com/media/catalog/product/cache/7fc2a3fe77c40f27b75b2c9e63d22798/n/n/nn-st310qbfg_info_1.jpg',
    source:
      'https://store.in.panasonic.com/microwave-oven/solo/25l-solo-microwave-oven-nn-st310qbfg-black-85-auto-cook-menus.html',
    brand: 'Panasonic',
    category: 'Microwave Oven',
    variant: 'Contact DDM to confirm model availability',
    id: 2070,
  },
  {
    name: '23L Convection Microwave Oven (NN-CT35MBFDG, Black Floral, 360° Heat Wrap, Magic Grill, 121 Auto Cook Menus)',
    image:
      'https://store.in.panasonic.com/media/catalog/product/cache/7fc2a3fe77c40f27b75b2c9e63d22798/a/r/artboard-1_51.jpg',
    source:
      'https://store.in.panasonic.com/microwave-oven/convection/23l-convection-microwave-oven.html',
    brand: 'Panasonic',
    category: 'Microwave Oven',
    variant: 'Contact DDM to confirm model availability',
    id: 2071,
  },
  {
    name: '23L Convection Microwave Oven (NN-CT353BFDG, Black Mirror, 360° Heat Wrap, Magic Grill, 61 Auto Cook Menus)',
    image:
      'https://store.in.panasonic.com/media/catalog/product/cache/7fc2a3fe77c40f27b75b2c9e63d22798/a/r/artboard-2new.jpg',
    source:
      'https://store.in.panasonic.com/microwave-oven/convection/23l-convection-microwave-oven-nn-ct353bfdg.html',
    brand: 'Panasonic',
    category: 'Microwave Oven',
    variant: 'Contact DDM to confirm model availability',
    id: 2072,
  },
  {
    name: '27L Convection Microwave Oven (NN-CT64HBFDG, Black Mirror + Golden, Zero Oil, 137 Auto Cook Menus)',
    image:
      'https://store.in.panasonic.com/media/catalog/product/cache/7fc2a3fe77c40f27b75b2c9e63d22798/a/r/artboard-1_52.jpg',
    source:
      'https://store.in.panasonic.com/microwave-oven/convection/27l-convection-microwave-oven-nn-ct64hbfdg.html',
    brand: 'Panasonic',
    category: 'Microwave Oven',
    variant: 'Contact DDM to confirm model availability',
    id: 2073,
  },
  {
    name: '27L Convection Microwave Oven (NN-CD674MFDG, Silver, Rotisserie, Crispy tawa, Magic Grill, Zero Oil Recipes)',
    image:
      'https://store.in.panasonic.com/media/catalog/product/cache/7fc2a3fe77c40f27b75b2c9e63d22798/a/r/artboard-1_50.jpg',
    source:
      'https://store.in.panasonic.com/microwave-oven/convection/27l-convection-microwave-oven.html',
    brand: 'Panasonic',
    category: 'Microwave Oven',
    variant: 'Contact DDM to confirm model availability',
    id: 2074,
  },
  {
    name: 'Adore Plus Dry Iron',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/a/d/adore_plus_base_1.jpg',
    source:
      'https://havells.com/home-appliances/appliances/irons/adore-plus-dry-iron-ghgdienk110.html',
    brand: 'Havells',
    category: 'Iron',
    variant: 'Contact DDM to confirm model availability',
    id: 2100,
  },
  {
    name: 'Ventura Steam Iron',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/h/ghgsiejb200_1__1.jpg',
    source:
      'https://havells.com/home-appliances/appliances/irons/ventura-steam-iron-ghgsiejb200.html',
    brand: 'Havells',
    category: 'Iron',
    variant: 'Contact DDM to confirm model availability',
    id: 2101,
  },
  {
    name: 'TRU-Steam Iron',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/h/ghgsiehu160_2__1.jpg',
    source: 'https://havells.com/home-appliances/appliances/irons/tru-steam-iron-ghgsiehu160.html',
    brand: 'Havells',
    category: 'Iron',
    variant: 'Contact DDM to confirm model availability',
    id: 2102,
  },
  {
    name: 'Alpha Black Dry Iron',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/h/ghgdiemk125_1.jpg',
    source:
      'https://havells.com/home-appliances/appliances/irons/alpha-black-dry-iron-ghgdiemk125.html',
    brand: 'Havells',
    category: 'Iron',
    variant: 'Contact DDM to confirm model availability',
    id: 2103,
  },
  {
    name: 'Stella Steam Iron',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/s/t/stella_steam_iron_base.jpg',
    source:
      'https://havells.com/home-appliances/appliances/irons/stella-steam-iron-ghgsieiu200.html',
    brand: 'Havells',
    category: 'Iron',
    variant: 'Contact DDM to confirm model availability',
    id: 2104,
  },
  {
    name: 'ZEN Dry Iron',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/i/r/iron_base.jpg',
    source: 'https://havells.com/home-appliances/appliances/irons/zen-dry-iron-ghgdiekb110.html',
    brand: 'Havells',
    category: 'Iron',
    variant: 'Contact DDM to confirm model availability',
    id: 2105,
  },
  {
    name: 'Stufo Dry Iron',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/s/t/stufo_dry_iron_base.jpg',
    source: 'https://havells.com/home-appliances/appliances/irons/stufo-dry-iron-ghgdiefe100.html',
    brand: 'Havells',
    category: 'Iron',
    variant: 'Contact DDM to confirm model availability',
    id: 2106,
  },
  {
    name: 'Ez-Press Steam Iron',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/e/z/ez-press_steam_iron_base.jpg',
    source:
      'https://havells.com/home-appliances/appliances/irons/ez-press-steam-iron-ghgsieeu125.html',
    brand: 'Havells',
    category: 'Iron',
    variant: 'Contact DDM to confirm model availability',
    id: 2107,
  },
  {
    name: 'Inox Steam Iron',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/i/n/inox_steam_iron_base_1.jpg',
    source: 'https://havells.com/home-appliances/appliances/irons/inox-steam-iron-ghgsiegg160.html',
    brand: 'Havells',
    category: 'Iron',
    variant: 'Contact DDM to confirm model availability',
    id: 2108,
  },
  {
    name: 'Glaze Steam Iron',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/l/glaze_iron_base_1.jpg',
    source:
      'https://havells.com/home-appliances/appliances/irons/glaze-steam-iron-ghgsiedg125.html',
    brand: 'Havells',
    category: 'Iron',
    variant: 'Contact DDM to confirm model availability',
    id: 2109,
  },
  {
    name: 'Hexo Punch 900 W Mixer Grinder',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/h/ghfjmgfb090le_base.jpg',
    source:
      'https://havells.com/home-appliances/appliances/grinders/hexo-punch-900-w-mixer-grinder-ghfjmgfb090le.html',
    brand: 'Havells',
    category: 'Mixer Grinder',
    variant: 'Contact DDM to confirm model availability',
    id: 2110,
  },
  {
    name: 'Hydro Plus 1000 W Mixer Grinder',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/4/_/4_jar_base_1.jpg',
    source:
      'https://havells.com/home-appliances/appliances/grinders/hydro-plus-1000-w-mixer-grinder.html',
    brand: 'Havells',
    category: 'Mixer Grinder',
    variant: 'Contact DDM to confirm model availability',
    id: 2111,
  },
  {
    name: 'Nutri Power Blender 350 W Mixer Grinder',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/n/u/nutri_power_blender_1__1_1.jpg',
    source:
      'https://havells.com/home-appliances/appliances/grinders/nutri-power-blender-350-w-mixer-grinder.html',
    brand: 'Havells',
    category: 'Mixer Grinder',
    variant: 'Contact DDM to confirm model availability',
    id: 2112,
  },
  {
    name: 'ESO 750 W Mixer Grinder',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/h/ghfmgelk075_2__1.jpg',
    source: 'https://havells.com/home-appliances/appliances/grinders/eso-750-w-mixer-grinder.html',
    brand: 'Havells',
    category: 'Mixer Grinder',
    variant: 'Contact DDM to confirm model availability',
    id: 2113,
  },
  {
    name: 'Capture 500 W Mixer Grinder',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/h/ghfmgdek050_2__1.jpg',
    source:
      'https://havells.com/home-appliances/appliances/grinders/capture-500-w-mixer-grinder-ghfmgdek050.html',
    brand: 'Havells',
    category: 'Mixer Grinder',
    variant: 'Contact DDM to confirm model availability',
    id: 2114,
  },
  {
    name: 'Mixwell N 500 W Mixer Grinder',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/h/ghfmgcie050_2__1.jpg',
    source:
      'https://havells.com/home-appliances/appliances/grinders/mixwell-n-500-w-mixer-grinder-ghfmgcie050.html',
    brand: 'Havells',
    category: 'Mixer Grinder',
    variant: 'Contact DDM to confirm model availability',
    id: 2115,
  },
  {
    name: 'Unity 750 W Mixer Grinder',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/u/n/unity.jpg',
    source:
      'https://havells.com/home-appliances/appliances/grinders/unity-750-w-mixer-grinder-ghffpgak075.html',
    brand: 'Havells',
    category: 'Mixer Grinder',
    variant: 'Contact DDM to confirm model availability',
    id: 2116,
  },
  {
    name: 'Stone 500 W Mixer Grinder',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/h/ghfmgbgr050_2__1.jpg',
    source:
      'https://havells.com/home-appliances/appliances/grinders/stone-500-w-mixer-grinder-ghfmgbgr050.html',
    brand: 'Havells',
    category: 'Mixer Grinder',
    variant: 'Contact DDM to confirm model availability',
    id: 2117,
  },
  {
    name: 'Rigo 500 W Mixer Grinder',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/h/ghfjmbub050le_base_1.jpg',
    source: 'https://havells.com/home-appliances/appliances/grinders/rigo-500-w-mixer-grinder.html',
    brand: 'Havells',
    category: 'Mixer Grinder',
    variant: 'Contact DDM to confirm model availability',
    id: 2118,
  },
  {
    name: 'Prisma 750 W Mixer Grinder',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/p/r/prisma_4_jar_front_new_1__1.jpg',
    source:
      'https://havells.com/home-appliances/appliances/grinders/prisma-750-w-mixer-grinder-ghfmggek075.html',
    brand: 'Havells',
    category: 'Mixer Grinder',
    variant: 'Contact DDM to confirm model availability',
    id: 2119,
  },
  {
    name: 'Magnatron Prime Storage Water Heater (Geyser)',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/m/a/magnatron_prime-base_1_1__2.jpg',
    source:
      'https://havells.com/home-appliances/water-heaters/magnatron-prime-storage-water-heaters-geyser.html',
    brand: 'Havells',
    category: 'Water Heater',
    variant: 'Contact DDM to confirm model availability',
    id: 2120,
  },
  {
    name: 'Monza Nu Storage Water Heater (Geyser)',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/h/ghwamuswg35_base_1_1__3.jpg',
    source:
      'https://havells.com/home-appliances/water-heaters/monza-nu-storage-water-heater-geyser.html',
    brand: 'Havells',
    category: 'Water Heater',
    variant: 'Contact DDM to confirm model availability',
    id: 2121,
  },
  {
    name: 'Fabia Slim Horizontal Left Side Storage Water Heater (Geyser)',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/f/a/fabia_slim_horizontal_left_side_storage_water_heater_geyser_1__1_1_1.jpg',
    source:
      'https://havells.com/home-appliances/water-heaters/fabia-slim-horizontal-left-side-storage-water-heater-geyser.html',
    brand: 'Havells',
    category: 'Water Heater',
    variant: 'Contact DDM to confirm model availability',
    id: 2122,
  },
  {
    name: 'Fabia Slim Horizontal Right Side Storage Water Heater (Geyser)',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/f/a/fabia_slim_horizontal_left_side_storage_water_heater_geyser_1__1_1__1_1.jpg',
    source:
      'https://havells.com/home-appliances/water-heaters/fabia-slim-horizontal-right-side-storage-water-heater-geyser.html',
    brand: 'Havells',
    category: 'Water Heater',
    variant: 'Contact DDM to confirm model availability',
    id: 2123,
  },
  {
    name: 'Monza DX CF Storage Water Heater (Geyser) Horizontal',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/h/ghwbmkswh050_base_1.jpg',
    source:
      'https://havells.com/home-appliances/water-heaters/monza-dx-cf-storage-water-heater-geyser-horizontal-ghwhmdumdg50.html',
    brand: 'Havells',
    category: 'Water Heater',
    variant: 'Contact DDM to confirm model availability',
    id: 2124,
  },
  {
    name: 'Monza Prime CF Storage Water Heater (Geyser)',
    image:
      'https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/h/ghwhmpumdw35_1_1.jpg',
    source:
      'https://havells.com/home-appliances/water-heaters/monza-prime-cf-35l-fp-white-grey-swh-ghwhmpumdg35.html',
    brand: 'Havells',
    category: 'Water Heater',
    variant: 'Contact DDM to confirm model availability',
    id: 2125,
  },
  {
    id: 2130,
    category: 'Water Heater',
    brand: 'AO Smith',
    name: 'Elegance Prime Storage Water Heater',
    variant: 'Storage geyser · Contact DDM for capacity',
    image:
      'https://cdn-jmlld.nitrocdn.com/qydppaFNcKMRjVLinmLFvQMpPBYfFFCk/assets/images/optimized/rev-fee3abb/www.aosmithindia.com/wp-content/uploads/2022/10/Elegance-prime2-200x222.png',
    source: 'https://www.aosmithindia.com/product-category/water-heater/',
  },
  {
    id: 2131,
    category: 'Water Heater',
    brand: 'AO Smith',
    name: 'Finesse Storage Water Heater',
    variant: 'Smart storage geyser · Contact DDM for capacity',
    image:
      'https://cdn-jmlld.nitrocdn.com/qydppaFNcKMRjVLinmLFvQMpPBYfFFCk/assets/images/optimized/rev-fee3abb/www.aosmithindia.com/wp-content/uploads/2021/09/Finesse_Front_View-1.png',
    source: 'https://www.aosmithindia.com/product-category/water-heater/',
  },
  {
    id: 2132,
    category: 'Water Heater',
    brand: 'AO Smith',
    name: 'Urbane Storage Water Heater',
    variant: 'Storage geyser · Contact DDM for capacity',
    image:
      'https://cdn-jmlld.nitrocdn.com/qydppaFNcKMRjVLinmLFvQMpPBYfFFCk/assets/images/optimized/rev-fee3abb/www.aosmithindia.com/wp-content/uploads/2021/09/Urbane_Front_View-200x222.png',
    source: 'https://www.aosmithindia.com/product-category/water-heater/',
  },
  {
    id: 2133,
    category: 'Water Heater',
    brand: 'AO Smith',
    name: 'MiniBot Instant Water Heater',
    variant: '3 kW · Instant water heater',
    image:
      'https://cdn-jmlld.nitrocdn.com/qydppaFNcKMRjVLinmLFvQMpPBYfFFCk/assets/images/optimized/rev-fee3abb/www.aosmithindia.com/wp-content/uploads/2020/10/MiniBot-SZS-3-3KW-200x222.png',
    source: 'https://www.aosmithindia.com/product-category/water-heater/',
  },
];
