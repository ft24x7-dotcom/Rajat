// Vercel serverless endpoint reserved for live order processing.
// Secret keys belong in Vercel Environment Variables, never in browser files.
export default async function handler(request,response){
  if(request.method!=='POST')return response.status(405).json({error:'Method not allowed'});
  const order=request.body;
  if(!order?.customer?.name||!order?.customer?.phone||!Array.isArray(order?.items)||!order.items.length)return response.status(400).json({error:'Invalid order'});
  // Future integrations: verify prices server-side, create payment order,
  // save to database, then trigger email and WhatsApp notifications.
  return response.status(501).json({error:'Live ordering is not enabled yet'});
}
