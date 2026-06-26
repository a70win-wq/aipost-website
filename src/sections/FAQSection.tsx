import { SectionHeading } from '@/components/SectionHeading';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ScrollReveal } from '@/components/ScrollReveal';
import type { Language } from '@/types';
import { t } from '@/i18n';

interface FAQSectionProps {
  language: Language;
}

export function FAQSection({ language }: FAQSectionProps) {
  const lang = t(language);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label={language === 'zh' ? '常見問題' : 'FAQ'}
            title={language === 'zh' ? '你可能想問嘅問題' : 'Questions you might have'}
          />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <FAQAccordion
            items={lang.faqItems}
            language={language}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
