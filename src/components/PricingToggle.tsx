import { cn } from '@/lib/utils';
import type { Language } from '@/types';

interface PricingToggleProps {
  isAnnual: boolean;
  setIsAnnual: (v: boolean) => void;
  language: Language;
}

export function PricingToggle({ isAnnual, setIsAnnual, language }: PricingToggleProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 p-1.5 shadow-soft-panel backdrop-blur-xl">
      <button
        type="button"
        aria-label={language === 'zh' ? '選擇月費方案' : 'Select monthly billing'}
        aria-pressed={!isAnnual}
        onClick={() => setIsAnnual(false)}
        className={cn(
          'rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/60',
          !isAnnual
            ? 'bg-brand-gradient text-white shadow-sm'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
        )}
      >
        {language === 'zh' ? '月費' : 'Monthly'}
      </button>
      <button
        type="button"
        aria-label={language === 'zh' ? '選擇年費方案，買11個月送1個月' : 'Select annual billing, pay 11 months and get 1 month free'}
        aria-pressed={isAnnual}
        onClick={() => setIsAnnual(true)}
        className={cn(
          'rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/60',
          isAnnual
            ? 'bg-brand-gradient text-white shadow-sm'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
        )}
      >
        {language === 'zh' ? '年費' : 'Annual'}
        <span className={cn(
          'ml-1 text-xs',
          isAnnual ? 'text-white/80' : 'text-brand-pink font-medium'
        )}>
          {language === 'zh' ? '買11送1' : '1 mo free'}
        </span>
      </button>
    </div>
  );
}
