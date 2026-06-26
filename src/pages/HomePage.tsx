import { HeroSection } from '@/sections/HeroSection';
import { PainPointsSection } from '@/sections/PainPointsSection';
import { FeaturesSection } from '@/sections/FeaturesSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { PricingPreviewSection } from '@/sections/PricingPreviewSection';
import { FAQSection } from '@/sections/FAQSection';
import { FinalCTASection } from '@/sections/FinalCTASection';
import type { Language } from '@/types';

interface HomePageProps {
  language: Language;
}

export function HomePage({ language }: HomePageProps) {
  return (
    <main className="page-shell">
      <HeroSection language={language} />
      <PainPointsSection language={language} />
      <FeaturesSection language={language} />
      <TestimonialsSection language={language} />
      <PricingPreviewSection language={language} />
      <FAQSection language={language} />
      <FinalCTASection language={language} />
    </main>
  );
}
