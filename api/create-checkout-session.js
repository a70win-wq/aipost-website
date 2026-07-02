const PRICE_IDS = {
  starter: {
    monthly: 'price_1Tog5NDoNRBJSwWNZ2Ka9M10',
    annual: 'price_1TogczDoNRBJSwWNpyxgAy7D',
  },
  growth: {
    monthly: 'price_1Tog5PDoNRBJSwWNOEtyNXmS',
    annual: 'price_1Togd1DoNRBJSwWNaUkHiJ43',
  },
  pro: {
    monthly: 'price_1Tog5SDoNRBJSwWN1becozNO',
    annual: 'price_1Togd2DoNRBJSwWNkWcipB8r',
  },
};

const STRIPE_API_VERSION = '2026-02-25.clover';

function sendJson(response, statusCode, payload) {
  response.status(statusCode).setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(payload));
}

async function parseJsonBody(request) {
  if (request.body && typeof request.body === 'object') {
    return request.body;
  }

  if (typeof request.body === 'string') {
    return JSON.parse(request.body);
  }

  const chunks = [];
  for await (const chunk of request) {
    chunks.push(Buffer.from(chunk));
  }

  if (chunks.length === 0) {
    return {};
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function getBaseUrl(request) {
  const configuredUrl = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (configuredUrl) {
    return configuredUrl.startsWith('http') ? configuredUrl : `https://${configuredUrl}`;
  }

  const protocol = request.headers['x-forwarded-proto'] || 'https';
  const host = request.headers['x-forwarded-host'] || request.headers.host;
  return `${protocol}://${host}`;
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return sendJson(response, 405, { error: 'Method not allowed.' });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return sendJson(response, 500, { error: 'Stripe secret key is not configured.' });
  }

  let body;
  try {
    body = await parseJsonBody(request);
  } catch {
    return sendJson(response, 400, { error: 'Invalid JSON body.' });
  }

  const planId = typeof body.planId === 'string' ? body.planId.toLowerCase() : '';
  const cycle = body.cycle === 'annual' ? 'annual' : 'monthly';
  const priceId = PRICE_IDS[planId]?.[cycle];

  if (!priceId) {
    return sendJson(response, 400, { error: 'Invalid subscription plan.' });
  }

  const baseUrl = getBaseUrl(request);
  const sessionParams = new URLSearchParams({
    mode: 'subscription',
    'line_items[0][price]': priceId,
    'line_items[0][quantity]': '1',
    'adaptive_pricing[enabled]': 'false',
    'automatic_tax[enabled]': 'false',
    allow_promotion_codes: 'false',
    'payment_method_types[0]': 'card',
    success_url: `${baseUrl}/pricing?checkout=success&plan=${encodeURIComponent(planId)}&cycle=${cycle}`,
    cancel_url: `${baseUrl}/pricing?checkout=cancelled&plan=${encodeURIComponent(planId)}&cycle=${cycle}`,
    client_reference_id: `aipost_${planId}_${cycle}`,
    'metadata[app]': 'aipost',
    'metadata[plan]': planId,
    'metadata[cycle]': cycle,
    'subscription_data[metadata][app]': 'aipost',
    'subscription_data[metadata][plan]': planId,
    'subscription_data[metadata][cycle]': cycle,
  });

  const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Stripe-Version': STRIPE_API_VERSION,
    },
    body: sessionParams,
  });

  const stripePayload = await stripeResponse.json();

  if (!stripeResponse.ok || !stripePayload.url) {
    const message = stripePayload.error?.message || 'Unable to create Stripe Checkout session.';
    return sendJson(response, stripeResponse.status || 500, { error: message });
  }

  return sendJson(response, 200, { url: stripePayload.url });
}
