import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { GradientButton } from '@/components/GradientButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { getPostSubscriptionWhatsappLink } from '@/config/payment';
import type { Language } from '@/types';

interface SubscribeSuccessPageProps {
  language: Language;
}

const PLAN_NAMES: Record<string, { zh: string; en: string }> = {
  starter: { zh: '入門', en: 'Starter' },
  growth: { zh: '成長', en: 'Growth' },
  pro: { zh: '專業', en: 'Pro' },
};

export function SubscribeSuccessPage({ language }: SubscribeSuccessPageProps) {
  const [searchParams] = useSearchParams();
  const planId = searchParams.get('plan') ?? '';
  const cycle = searchParams.get('cycle') === 'annual' ? 'annual' : 'monthly';

  const planName = useMemo(() => {
    const plan = PLAN_NAMES[planId];
    if (!plan) return language === 'zh' ? '你的方案' : 'your plan';
    return language === 'zh' ? plan.zh : plan.en;
  }, [language, planId]);

  const cycleLabel = language === 'zh'
    ? (cycle === 'annual' ? '年費' : '月費')
    : (cycle === 'annual' ? 'annual' : 'monthly');

  return (
    <main className="page-shell pt-24 pb-16">
      <section className="section-band py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[2rem] border border-brand-pink/20 bg-white/92 p-8 shadow-soft-panel backdrop-blur-xl md:p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-pink-light/70 text-brand-pink">
                <CheckCircle2 className="h-9 w-9" />
              </div>

              <div className="mt-6 text-center">
                <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
                  {language === 'zh' ? '感謝你完成訂閱' : 'Thanks for subscribing'}
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {language === 'zh'
                    ? `我們已收到你的 ${planName}${cycleLabel} 訂閱。請立即透過 WhatsApp 聯絡，我們會跟進你的項目。`
                    : `We received your ${planName} ${cycleLabel} subscription. Please contact us on WhatsApp so we can follow up on your project.`}
                </p>
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-muted/50 px-5 py-4 text-center text-sm text-muted-foreground">
                {language === 'zh'
                  ? '預設 WhatsApp 對話會自動填入：「已訂閱，請跟進我的項目。」'
                  : 'The WhatsApp message is prefilled with: "I have subscribed, please follow up on my project."'}
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={getPostSubscriptionWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 text-base font-semibold text-white shadow-soft-panel sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  {language === 'zh' ? '立即 WhatsApp 聯絡我' : 'Contact me on WhatsApp'}
                </a>
                <GradientButton variant="outline-black" size="lg" to="/pricing" className="w-full sm:w-auto">
                  {language === 'zh' ? '返回價格頁' : 'Back to Pricing'}
                </GradientButton>
              </div>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                {language === 'zh' ? 'WhatsApp：6545 1747' : 'WhatsApp: 6545 1747'}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-brand-pink">
                {language === 'zh' ? '返回首頁' : 'Return home'}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
