import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FAQItem, Language } from '@/types';

interface FAQAccordionProps {
  items: FAQItem[];
  language: Language;
}

export function FAQAccordion({ items, language }: FAQAccordionProps) {
  const suffix = language === 'zh' ? 'Zh' : 'En';

  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`faq-${i}`}
          className="mb-3 rounded-2xl border border-border/70 bg-white/[0.82] px-6 shadow-soft-panel backdrop-blur-xl data-[state=open]:bg-white"
        >
          <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-4 h-4 text-brand-purple" />
              <span>{item[`question${suffix}`]}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
            {item[`answer${suffix}`]}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
