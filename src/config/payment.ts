// Legacy Stripe Payment Links — kept only as a record of the links created in Stripe.
// Do not use these for checkout: Stripe always enables Adaptive Pricing on Payment Links,
// which can show local currencies such as TWD.
//
// 建立方式：Stripe Dashboard → Payment Links → Create new payment link
// 選擇對應的 recurring product/price，建立後複製 URL 貼到下方對應欄位。
//
// 舊年費 Payment Links 已停用；網站現在使用 Checkout Sessions。
//
// 現行方案定價（HK$）：
//   starter  月費 99 / 年費 1089（買 11 個月送 1 個月）
//   growth   月費 199 / 年費 2189（買 11 個月送 1 個月）
//   pro      月費 299 / 年費 3289（買 11 個月送 1 個月）
//
export const LEGACY_PAYMENT_LINKS: Record<string, { monthly: string; annual: string }> = {
  starter: {
    monthly: 'https://buy.stripe.com/aFaaEXg2e7dsfk95WHgQE00',
    annual: 'https://buy.stripe.com/9B6bJ1cQ2gO24FvfxhgQE01',
  },
  growth: {
    monthly: 'https://buy.stripe.com/5kQdR99DQ7dsb3T3OzgQE02',
    annual: 'https://buy.stripe.com/00w00j03g2Xcfk95WHgQE03',
  },
  pro: {
    monthly: 'https://buy.stripe.com/7sY7sL8zM7ds9ZPbh1gQE04',
    annual: 'https://buy.stripe.com/bJe9ATg2efJY0pf70LgQE05',
  },
};

export const CHECKOUT_SESSION_ENDPOINT = '/api/create-checkout-session';

// Stripe Customer Portal no-code login link.
// Stripe Dashboard → Billing → Customer portal → Activate link.
// 留空字串 ('') 時，網站不顯示「管理訂閱」連結。
export const CUSTOMER_PORTAL_LINK = '';

const WHATSAPP_NUMBER = '85265451747';
const POST_SUBSCRIPTION_MESSAGE = '已訂閱，請跟進我的項目。';

const PLAN_LABELS: Record<string, string> = {
  starter: 'Starter',
  growth: 'Growth',
  pro: 'Pro',
};

// 當對應 Payment Link 未設定時的 fallback 連結
export const FALLBACK_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('你好，我想訂閱 AIPOST。')}`;

export function getSubscriptionFallbackLink(planId: string, isAnnual: boolean): string {
  const plan = PLAN_LABELS[planId] ?? planId;
  const cycle = isAnnual ? '年費' : '月費';
  const message = `你好，我想訂閱 AIPOST ${plan} ${cycle}方案。`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getPostSubscriptionWhatsappLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(POST_SUBSCRIPTION_MESSAGE)}`;
}

export async function createCheckoutSession(planId: string, isAnnual: boolean): Promise<string> {
  const response = await fetch(CHECKOUT_SESSION_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      planId,
      cycle: isAnnual ? 'annual' : 'monthly',
    }),
  });

  const payload = await response.json().catch(() => null) as { url?: string; error?: string } | null;

  if (!response.ok || !payload?.url) {
    throw new Error(payload?.error || 'Unable to create Stripe Checkout session.');
  }

  return payload.url;
}
