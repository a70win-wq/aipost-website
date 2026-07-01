// Stripe Payment Links — 每個方案 × 計費週期對應一條 Payment Link URL
//
// 建立方式：Stripe Dashboard → Payment Links → Create new payment link
// 選擇對應的 recurring product/price，建立後複製 URL 貼到下方對應欄位。
//
// 方案定價（HK$）：
//   starter  月費 99 / 年費 79 per month (即 948/年)
//   growth   月費 199 / 年費 159 per month (即 1908/年)
//   pro      月費 299 / 年費 239 per month (即 2868/年)
//
// 留空字串 ('') 時，按鈕會 fallback 到 /pricing 頁，方便先部署再補 URL。

export const PAYMENT_LINKS: Record<string, { monthly: string; annual: string }> = {
  starter: {
    monthly: '',
    annual: '',
  },
  growth: {
    monthly: '',
    annual: '',
  },
  pro: {
    monthly: '',
    annual: '',
  },
};

// 當對應 Payment Link 未設定時的 fallback 連結
export const FALLBACK_LINK = '/pricing';

// 取得指定方案 + 計費週期的 Payment Link；未設定則回傳 fallback
export function getPaymentLink(planId: string, isAnnual: boolean): string {
  const links = PAYMENT_LINKS[planId];
  if (!links) return FALLBACK_LINK;
  const link = isAnnual ? links.annual : links.monthly;
  return link || FALLBACK_LINK;
}

// 判斷是否為外部連結（http 開頭）
export function isExternalLink(url: string): boolean {
  return /^https?:\/\//i.test(url);
}
