import { FileText, Hash, CalendarDays, Palette } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { FeatureCard } from '@/components/FeatureCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import type { Language } from '@/types';
import { t } from '@/i18n';

interface FeaturesSectionProps {
  language: Language;
}

const iconMap = {
  'dual-platform': <FileText className="w-5 h-5" />,
  'hashtag': <Hash className="w-5 h-5" />,
  'calendar': <CalendarDays className="w-5 h-5" />,
  'tone': <Palette className="w-5 h-5" />,
};

export function FeaturesSection({ language }: FeaturesSectionProps) {
  const lang = t(language);
  const items = lang.features.items;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label={lang.features.label}
            title={lang.features.title}
          />
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item: typeof items[number], i: number) => (
            <ScrollReveal key={item.id} delay={i * 100}>
              <FeatureCard
                icon={iconMap[item.id as keyof typeof iconMap]}
                title={item.title}
                description={item.description}
                color={item.color as 'pink' | 'orange' | 'purple'}
                size={item.size as 'default' | 'large'}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
