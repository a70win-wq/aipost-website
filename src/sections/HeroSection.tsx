import { GradientButton } from '@/components/GradientButton';
import { InstagramShowcase } from '@/components/InstagramShowcase';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Badge } from '@/components/ui/badge';
import type { Language } from '@/types';
import { t } from '@/i18n';

interface HeroSectionProps {
  language: Language;
}

export function HeroSection({ language }: HeroSectionProps) {
  const lang = t(language);

  return (
    <section className="relative overflow-hidden hero-glow-bg pt-28 pb-16 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-brand-pink/20 bg-white/75 px-4 py-2 text-sm font-semibold text-brand-pink shadow-soft-panel backdrop-blur-xl">
              {lang.hero.eyebrow}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {lang.hero.badges.map((badge: string, i: number) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="rounded-full border-brand-pink/25 bg-white/70 px-3 py-1 text-xs font-semibold text-brand-pink shadow-sm"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.06] text-foreground md:text-6xl lg:text-7xl">
              <span>{lang.hero.titleLead}</span>
              {language === 'en' ? ' ' : ''}
              <br />
              <span className="text-gradient">{lang.hero.titleEmphasis}</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {lang.hero.titleRest}
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 rounded-[2rem] border border-white/80 bg-white/[0.82] p-2 shadow-glass backdrop-blur-xl sm:flex-row">
              <div className="px-4 text-sm font-semibold text-muted-foreground">{lang.hero.fineText}</div>
              <div className="flex gap-2">
                <GradientButton variant="gradient" size="lg" to="/pricing">
                  {lang.hero.ctaPrimary}
                </GradientButton>
                <GradientButton variant="outline-black" size="lg" to="/pricing">
                  {lang.hero.ctaSecondary}
                </GradientButton>
              </div>
            </div>

            {lang.hero.proof.length > 0 && (
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {lang.hero.proof.map((proof: string) => (
                  <span key={proof} className="rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                    {proof}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 grid w-full max-w-2xl grid-cols-3 gap-3">
              {lang.hero.stats.map((stat: { value: string; label: string }) => (
                <div key={stat.label} className="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-soft-panel backdrop-blur-xl">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <div className="mt-14">
            <InstagramShowcase language={language} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
