// Clean backend boundary: replace this demo with fetch('/api/orders', {...}) later.
// Payment, email, WhatsApp and database code can be added here without changing the UI.
export async function submitOrder(order){if(!order.customer.name||!order.customer.phone||!order.items.length)throw new Error('Missing required details');await new Promise(r=>setTimeout(r,450));return{ok:true,orderId:`VH${String(Date.now()).slice(-6)}`}}
