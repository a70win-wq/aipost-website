import { Lightbulb, Clock, TrendingDown } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { ScrollReveal } from '@/components/ScrollReveal';
import { cn } from '@/lib/utils';
import type { Language } from '@/types';
import { t } from '@/i18n';

interface PainPointsSectionProps {
  language: Language;
}

const iconMap = {
  Lightbulb: Lightbulb,
  Clock: Clock,
  TrendingDown: TrendingDown,
};

export function PainPointsSection({ language }: PainPointsSectionProps) {
  const lang = t(language);
  const items = lang.painPoints.items;

  const colorMap = {
    Lightbulb: { bg: 'bg-brand-pink-light', icon: 'text-brand-pink' },
    Clock: { bg: 'bg-brand-orange-light', icon: 'text-brand-orange' },
    TrendingDown: { bg: 'bg-brand-purple-light', icon: 'text-brand-purple' },
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label={lang.painPoints.label}
            title={lang.painPoints.title}
          />
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item: typeof items[number], i: number) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const colors = colorMap[item.icon as keyof typeof colorMap];
            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="h-full rounded-[1.5rem] border border-border/70 bg-white/90 p-6 shadow-soft-panel backdrop-blur-xl card-lift">
                  <div className={cn('flex h-11 w-11 items-center justify-center rounded-2xl', colors.bg)}>
                    <Icon className={cn('h-5 w-5', colors.icon)} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
