import { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { PricingCard } from '@/components/PricingCard';
import { PricingToggle } from '@/components/PricingToggle';
import { ScrollReveal } from '@/components/ScrollReveal';
import type { Language, PricingPlan } from '@/types';
import { t } from '@/i18n';

interface PricingPreviewSectionProps {
  language: Language;
}

export function PricingPreviewSection({ language }: PricingPreviewSectionProps) {
  const lang = t(language);
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="section-band py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
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

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {lang.pricingPlans.map((plan: PricingPlan, i: number) => (
            <ScrollReveal key={plan.id} delay={i * 100 + 200}>
              <PricingCard
                plan={plan}
                isAnnual={isAnnual}
                language={language}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Task definition */}
        <ScrollReveal delay={500}>
          <p className="text-center text-sm text-muted-foreground mt-6">
            {lang.global.pricing.taskDefinition}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
