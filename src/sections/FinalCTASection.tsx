import { GradientButton } from '@/components/GradientButton';
import { TrustBadges } from '@/components/TrustBadge';
import { ScrollReveal } from '@/components/ScrollReveal';
import type { Language } from '@/types';
import { t } from '@/i18n';

interface FinalCTASectionProps {
  language: Language;
}

export function FinalCTASection({ language }: FinalCTASectionProps) {
  const lang = t(language);

  return (
    <section className="py-24 cta-glow-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            <span className="text-foreground">{lang.finalCTA.titleLead}</span>
            <br />
            <span className="text-gradient">{lang.finalCTA.titleEmphasis}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {lang.finalCTA.titleRest}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GradientButton variant="gradient" size="xl" to="/pricing">
              {lang.finalCTA.cta}
            </GradientButton>
            <GradientButton variant="outline-black" size="xl" to="/pricing">
              {lang.finalCTA.secondaryCta}
            </GradientButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="mt-4 text-sm text-muted-foreground">
            {lang.finalCTA.fineText}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-8">
            <TrustBadges language={language} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
