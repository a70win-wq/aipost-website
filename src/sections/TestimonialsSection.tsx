import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { ScrollReveal } from '@/components/ScrollReveal';
import { cn } from '@/lib/utils';
import type { Language } from '@/types';
import { t } from '@/i18n';

interface TestimonialsSectionProps {
  language: Language;
}

export function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const lang = t(language);
  const items = lang.testimonials.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  const goToPrevious = () => setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  const goToNext = () => setActiveIndex((current) => (current + 1) % items.length);

  return (
    <section className="soft-band py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <ScrollReveal>
            <SectionHeading
              align="left"
              label={lang.testimonials.label}
              title={lang.testimonials.title}
              subtitle={lang.testimonials.subtitle}
            />
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label={language === 'zh' ? '上一個客戶案例' : 'Previous customer story'}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white text-foreground shadow-soft-panel transition hover:-translate-y-0.5 hover:text-brand-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/60"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label={language === 'zh' ? '下一個客戶案例' : 'Next customer story'}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-white shadow-soft-panel transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/60"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <div className="relative">
              <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-brand-gradient-soft blur-2xl" />
              <div className="glass-panel overflow-hidden rounded-[1.75rem]" aria-live="polite" aria-atomic="true">
                <div className="grid md:grid-cols-[0.88fr_1fr]">
                  <div className="relative min-h-[340px] overflow-hidden">
                    <img
                      src={active.image}
                      alt={active.alt}
                      className="h-full min-h-[340px] w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/80 to-transparent p-5 text-white">
                      <p className="text-sm font-semibold">{active.name}</p>
                      <p className="text-xs text-white/75">{active.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-6 md:p-8">
                    <Quote className="h-8 w-8 text-brand-pink" />
                    <p className="mt-5 text-xl font-semibold leading-relaxed text-foreground">
                      “{active.quote}”
                    </p>
                    <div className="mt-8">
                      <div className="inline-flex rounded-full bg-brand-orange-light px-3 py-1 text-xs font-bold text-brand-orange">
                        {active.metric}
                      </div>
                      <p className="mt-4 text-sm font-semibold text-foreground">{active.company}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex justify-center gap-2">
                {items.map((item: { name: string }, index: number) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`${language === 'zh' ? '查看客戶案例' : 'View customer story'} ${index + 1}`}
                    aria-pressed={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      'h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/60',
                      index === activeIndex ? 'w-8 bg-brand-gradient' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                    )}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
