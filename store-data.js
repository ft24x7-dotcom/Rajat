// EDIT THIS FILE to update store details, categories, products and prices.
export const STORE={name:'DDM Electronics',shortName:'DDM',phone:'917617202212',displayPhone:'+91 76172 02212',email:'ddmelectronics@rediffmail.com',address:'HQCM+5F, Bhind, Madhya Pradesh',latitude:26.570557859198875,longitude:78.78421004180777,currency:'INR',locale:'en-IN'};
// Public integration settings only. Never place secret API keys in this file.
export const INTEGRATIONS={apiBaseUrl:'',ordersEndpoint:'/orders',useLiveOrderApi:false,whatsapp:{enabled:true,phone:'917617202212'},email:{enabled:true,address:'ddmelectronics@rediffmail.com'},instagram:{enabled:false,url:''},googleMaps:{enabled:true,url:'https://www.google.com/maps/dir/?api=1&destination=26.570557859198875%2C78.78421004180777'},payment:{enabled:false,provider:'razorpay'}};
// Assisted-order policy. Change these values here if the store policy changes later.
export const ORDER_POLICY={advancePercent:20,cashOnDelivery:true,returnsAllowed:false,replacementOnly:true};
export const CATEGORIES=[
{id:'Washing Machine',label:'Washing Machines',detail:'Top load & front load',icon:'🫧'},
{id:'AC',label:'Air Conditioners',detail:'Split & window ACs',icon:'❄️'},
{id:'Refrigerator',label:'Refrigerators',detail:'Single & double door',icon:'🧊'},
{id:'LED',label:'LED TVs',detail:'Smart, UHD & 4K',icon:'📺'},
{id:'Atta Chakki',label:'Atta Chakki',detail:'Domestic flour mills',icon:'🌾'},
{id:'Microwave Oven',label:'Microwave Ovens',detail:'Solo, grill & convection',icon:'♨️'},
{id:'Iron',label:'Irons',detail:'Dry & steam irons',icon:'♨'},
{id:'Mixer Grinder',label:'Mixer Grinders',detail:'Everyday kitchen essentials',icon:'⚙️'}
];
export const PRODUCTS=[
{id:1,category:'Washing Machine',icon:'🫧',brand:'LG',name:'Top Load Washing Machine',variant:'7 kg · Smart Inverter',price:18990,mrp:22990,badge:'Popular'},
{id:2,category:'AC',icon:'❄️',brand:'LG',name:'Dual Inverter Split AC',variant:'1.5 Ton · 5 Star · Wi-Fi',price:38990,mrp:45990,badge:'15% off'},
{id:3,category:'Refrigerator',icon:'🧊',brand:'Whirlpool',name:'Frost Free Refrigerator',variant:'265 L · 3 Star · Convertible',price:28990,mrp:34990,badge:'New'},
{id:4,category:'LED',icon:'📺',brand:'Samsung',name:'Crystal 4K LED Smart TV',variant:'55 inch · UHD · HDR',price:46990,mrp:57990,badge:'Bestseller'},
{id:5,category:'Atta Chakki',icon:'🌾',brand:'DDM Select',name:'Domestic Atta Chakki',variant:'Automatic · Stainless steel',price:16990,mrp:19990,badge:'Value'},
{id:6,category:'Microwave Oven',icon:'♨️',brand:'Panasonic',name:'Convection Microwave Oven',variant:'27 L · Auto Cook · Grill',price:14990,mrp:17990,badge:'Popular'},
{id:7,category:'Iron',icon:'♨',brand:'Philips',name:'Steam Iron',variant:'Non-stick soleplate · Steam spray',price:1990,mrp:2490,badge:'Everyday'},
{id:8,category:'Mixer Grinder',icon:'⚙️',brand:'Bajaj',name:'Mixer Grinder',variant:'750 W · 3 jars',price:3990,mrp:4990,badge:'Hot deal'}];
