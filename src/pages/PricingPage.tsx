import { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { PricingCard } from '@/components/PricingCard';
import { PricingToggle } from '@/components/PricingToggle';
import { TrustBadges } from '@/components/TrustBadge';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ScrollReveal } from '@/components/ScrollReveal';
import type { Language, PricingPlan, FAQItem } from '@/types';
import { t } from '@/i18n';

interface PricingPageProps {
  language: Language;
}

export function PricingPage({ language }: PricingPageProps) {
  const lang = t(language);
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingFAQ: FAQItem[] = [
    {
      questionZh: '可以隨時取消嗎？',
      questionEn: 'Can I cancel anytime?',
      answerZh: '可以隨時取消，下月停止扣款。當前計費周期內仍可使用。',
      answerEn: 'Cancel anytime, billing stops next period. You can continue using until the current period ends.',
    },
    {
      questionZh: '年費有優惠嗎？',
      questionEn: 'Is there an annual discount?',
      answerZh: '年費方案是買 11 個月送 1 個月，全年一次過收費。例如 HK$99/月的入門方案，年費為 HK$1089。',
      answerEn: 'Annual billing is pay 11 months, get 1 month free. For example, the HK$99/mo Starter plan is billed at HK$1089/year.',
    },
    {
      questionZh: '可以升級/降級方案嗎？',
      questionEn: 'Can I upgrade or downgrade?',
      answerZh: '可以隨時升級或降級，下個計費周期生效。',
      answerEn: 'Upgrade or downgrade anytime, changes take effect next billing period.',
    },
    {
      questionZh: '支援什麼付款方式？',
      questionEn: 'What payment methods are supported?',
      answerZh: '目前支援信用卡付款（Visa / Mastercard），使用 Stripe 安全付款處理。',
      answerEn: 'We support credit card payments (Visa / Mastercard) via Stripe secure payment processing.',
    },
  ];

  return (
    <main className="page-shell pt-24 pb-16">
      {/* Header */}
      <section className="section-band py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              level="h1"
              label={lang.pricingPage.label}
              title={lang.pricingPage.title}
              subtitle={lang.pricingPage.subtitle}
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex justify-center mt-6">
              <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} language={language} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {lang.pricingPlans.map((plan: PricingPlan, i: number) => (
              <ScrollReveal key={plan.id} delay={i * 100}>
                <PricingCard
                  plan={plan}
                  isAnnual={isAnnual}
                  language={language}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <p className="text-center text-sm text-muted-foreground mt-6">
              {lang.global.pricing.taskDefinition}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="mt-8">
              <TrustBadges language={language} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="soft-band py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label={lang.pricingPage.faqLabel}
              title={lang.pricingPage.faqTitle}
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <FAQAccordion items={pricingFAQ} language={language} />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
