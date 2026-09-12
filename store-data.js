// EDIT THIS FILE to update store details, categories, products and prices.
export const STORE={name:'DDM Electronics',shortName:'DDM',phone:'917617202212',displayPhone:'+91 76172 02212',email:'ddmelectronics@rediffmail.com',address:'Near Beti Bachao Chauraha, Ater Road, Bhind, Madhya Pradesh',currency:'INR',locale:'en-IN'};
// Public integration settings only. Never place secret API keys in this file.
export const INTEGRATIONS={apiBaseUrl:'',ordersEndpoint:'/orders',useLiveOrderApi:false,whatsapp:{enabled:true,phone:'917617202212'},email:{enabled:true,address:'ddmelectronics@rediffmail.com'},instagram:{enabled:false,url:''},googleMaps:{enabled:true,url:'https://maps.app.goo.gl/aU2oA7ytdBoM9DJo7?g_st=aw'},payment:{enabled:false,provider:'razorpay'}};
export const CATEGORIES=[{id:'TV',label:'Televisions',detail:'Smart, QLED & 4K',icon:'📺'},{id:'Cooling',label:'Air & Cooling',detail:'ACs, coolers & fans',icon:'❄️'},{id:'Kitchen',label:'Kitchen',detail:'Fridges & microwaves',icon:'🧊'},{id:'Laundry',label:'Laundry',detail:'Washers & dryers',icon:'🫧'}];
export const PRODUCTS=[
{id:1,category:'TV',icon:'📺',brand:'Samsung',name:'Crystal 4K Smart TV',variant:'55 inch · UHD · HDR',price:46990,mrp:57990,badge:'Bestseller'},
{id:2,category:'Cooling',icon:'❄️',brand:'LG',name:'Dual Inverter Split AC',variant:'1.5 Ton · 5 Star · Wi-Fi',price:38990,mrp:45990,badge:'15% off'},
{id:3,category:'Kitchen',icon:'🧊',brand:'Whirlpool',name:'Frost Free Refrigerator',variant:'265 L · 3 Star · Convertible',price:28990,mrp:34990,badge:'New'},
{id:4,category:'Laundry',icon:'🫧',brand:'Bosch',name:'Front Load Washing Machine',variant:'8 kg · Inverter · 1200 RPM',price:34990,mrp:42990,badge:'Hot deal'},
{id:5,category:'TV',icon:'📺',brand:'Sony',name:'Bravia Google TV',variant:'43 inch · 4K · Dolby Audio',price:42990,mrp:51990,badge:'Popular'},
{id:6,category:'Cooling',icon:'🌬️',brand:'Daikin',name:'Inverter Split AC',variant:'1 Ton · 3 Star · PM 2.5',price:31990,mrp:37990,badge:'Sale'},
{id:7,category:'Kitchen',icon:'♨️',brand:'Panasonic',name:'Convection Microwave',variant:'27 L · Auto Cook · Grill',price:14990,mrp:17990,badge:'Value'},
{id:8,category:'Laundry',icon:'🧺',brand:'LG',name:'Top Load Washing Machine',variant:'7 kg · Smart Inverter',price:18990,mrp:22990,badge:'12% off'}];
