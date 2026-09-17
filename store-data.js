// EDIT THIS FILE to update store details, categories, brands, products and prices.
export const STORE={name:'DDM Electronics',shortName:'DDM',phone:'917617202212',displayPhone:'+91 76172 02212',email:'ddmelectronics@rediffmail.com',address:'HQCM+5F, Bhind, Madhya Pradesh',latitude:26.570557859198875,longitude:78.78421004180777,currency:'INR',locale:'en-IN'};
export const INTEGRATIONS={apiBaseUrl:'',ordersEndpoint:'/orders',useLiveOrderApi:false,whatsapp:{enabled:true,phone:'917617202212'},email:{enabled:true,address:'ddmelectronics@rediffmail.com'},instagram:{enabled:false,url:''},googleMaps:{enabled:true,url:'https://www.google.com/maps/dir/?api=1&destination=26.570557859198875%2C78.78421004180777'},payment:{enabled:false,provider:'razorpay'}};
export const ORDER_POLICY={advancePercent:20,cashOnDelivery:true,returnsAllowed:false,replacementOnly:true};
export const CATEGORIES=[
{id:'Washing Machine',label:'Washing Machines',detail:'Top load & front load',icon:'🫧'},{id:'AC',label:'Air Conditioners',detail:'Split & window ACs',icon:'❄️'},{id:'Refrigerator',label:'Refrigerators',detail:'Single & double door',icon:'🧊'},{id:'LED',label:'LED TVs',detail:'Smart, UHD & 4K',icon:'📺'},{id:'Atta Chakki',label:'Atta Chakki',detail:'Domestic flour mills',icon:'🌾'},{id:'Microwave Oven',label:'Microwave Ovens',detail:'Solo, grill & convection',icon:'♨️'},{id:'Iron',label:'Irons',detail:'Dry & steam irons',icon:'♨'},{id:'Mixer Grinder',label:'Mixer Grinders',detail:'Everyday kitchen essentials',icon:'⚙️'},{id:'Water Heater',label:'Water Heaters',detail:'Instant & storage geysers',icon:'💧'}];
export const BRANDS=[
{id:'Panasonic',name:'Panasonic',domain:'panasonic.com',detail:'Home & kitchen'},{id:'IFB',name:'IFB',domain:'ifbappliances.com',detail:'Laundry & kitchen'},{id:'Samsung',name:'Samsung',domain:'samsung.com',detail:'Smart home appliances'},{id:'Mitsubishi',name:'Mitsubishi',domain:'mitsubishielectric.com',detail:'Air conditioning'},{id:'AO Smith',name:'AO Smith',domain:'aosmithindia.com',detail:'Water heating'},{id:'Havells',name:'Havells',domain:'havells.com',detail:'Electrical appliances'},{id:'Voltas',name:'Voltas',domain:'voltas.com',detail:'Cooling solutions'},{id:'Lloyd',name:'Lloyd',domain:'mylloyd.com',detail:'Home appliances'}];
// Official brand imagery; store confirms model availability. Prices intentionally omitted.
export const PRODUCTS=[
  {
    "brand": "Mitsubishi",
    "category": "AC",
    "id": 102,
    "image": "https://www.mitsubishielectric.in/uploads/fileData/1564565947-121806577-grt.jpg",
    "name": "Split Air Conditioners",
    "source": "https://www.mitsubishielectric.in/products/air-conditioning-systems",
    "variant": "Mitsubishi Electric range"
  },
  {
    "brand": "Panasonic",
    "category": "Microwave Oven",
    "id": 103,
    "image": "https://store.in.panasonic.com/media/catalog/product/cache/7fc2a3fe77c40f27b75b2c9e63d22798/n/n/nn-st310qbfg_info_1.jpg",
    "name": "NN-ST310QBFG Microwave",
    "source": "https://store.in.panasonic.com/",
    "variant": "Ask about availability"
  },
  {
    "brand": "Havells",
    "category": "Iron",
    "id": 104,
    "image": "https://havells.com/media/catalog/product//g/h/ghgsiccu220-desktop_1.jpg",
    "name": "Husky Steam Iron",
    "source": "https://havells.com/",
    "variant": "Explore steam ironing"
  },
  {
    "brand": "Havells",
    "category": "Mixer Grinder",
    "id": 105,
    "image": "https://havells.com/media/catalog/product//h/e/hexo_plus_1100w_mg_4_jar_desktop_1.jpg",
    "name": "Hexo Plus Mixer Grinder",
    "source": "https://havells.com/",
    "variant": "1100 W · 4 jars"
  },
  {
    "brand": "Lloyd",
    "category": "Washing Machine",
    "id": 106,
    "image": "https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/l/glwt855n12cb_base.jpg",
    "name": "Novante IOT Top Load",
    "source": "https://www.mylloyd.com/",
    "variant": "8.5 kg · Fully automatic"
  },
  {
    "brand": "Lloyd",
    "category": "LED",
    "id": 107,
    "image": "https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/g/l/gl55u4p3cp_base.jpg",
    "name": "QLED Vision Pro+ TV",
    "source": "https://www.mylloyd.com/",
    "variant": "55PS850G · 1.39 m"
  },
  {
    "brand": "Lloyd",
    "category": "AC",
    "id": 108,
    "image": "https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/s/t/stunnair_base_2.jpg",
    "name": "Stunnair Split AC",
    "source": "https://www.mylloyd.com/",
    "variant": "1.5 Ton · 5 Star"
  },
  {
    "brand": "Lloyd",
    "category": "Refrigerator",
    "id": 109,
    "image": "https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/p/a/pastel_yellow_base.jpg",
    "name": "Kolor Series Refrigerator",
    "source": "https://www.mylloyd.com/",
    "variant": "195 L · Pastel Yellow"
  },
  {
    "id": 111,
    "category": "AC",
    "brand": "Voltas",
    "name": "183INV Pearl Window AC",
    "variant": "1.5 Ton · 3 Star",
    "image": "https://cdn.shopify.com/s/files/1/0578/6845/2026/files/1_1f88cb2b-e33e-42b7-ac3c-2033826d74b0.jpg?v=1778499856",
    "source": "https://www.voltas.com/"
  }
];
