import{INTEGRATIONS}from'./store-data.js';
// All order traffic passes through this service. Enable the live API only after
// /api/orders is connected to a database, notifications and payments.
export async function submitOrder(order){if(!order.customer.name||!order.customer.phone||!order.items.length)throw new Error('Missing required details');if(!INTEGRATIONS.useLiveOrderApi){await new Promise(r=>setTimeout(r,450));return{ok:true,orderId:`VH${String(Date.now()).slice(-6)}`,mode:'demo'}}const response=await fetch(`${INTEGRATIONS.apiBaseUrl}${INTEGRATIONS.ordersEndpoint}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(order)});if(!response.ok)throw new Error('We could not place your order. Please try again.');return response.json()}
