import { INTEGRATIONS } from './store-data.js';
// All order traffic passes through this service. Enable the live API only after
// the configured API is connected to a database, notifications and payments.
export async function submitOrder(order) {
  if (
    !order.customer.name ||
    !order.customer.phone ||
    !order.customer.address ||
    !order.items.length
  )
    throw new Error('Please complete all delivery details');
  if (!INTEGRATIONS.useLiveOrderApi) {
    await new Promise((r) => setTimeout(r, 300));
    return { ok: true, orderId: `DDM${String(Date.now()).slice(-6)}`, mode: 'assisted' };
  }
  if (!INTEGRATIONS.apiBaseUrl) throw new Error('Order API is not configured');
  const base = INTEGRATIONS.apiBaseUrl.replace(/\/$/, '');
  const response = await fetch(`${base}${INTEGRATIONS.ordersEndpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  if (!response.ok) throw new Error('We could not place your order. Please try again.');
  return response.json();
}
