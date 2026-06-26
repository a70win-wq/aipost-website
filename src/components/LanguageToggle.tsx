import { cn } from '@/lib/utils';
import type { Language } from '@/types';

interface LanguageToggleProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/80 bg-white/80 p-1 shadow-soft-panel backdrop-blur-xl">
      <button
        type="button"
        aria-label="切換至繁體中文"
        aria-pressed={language === 'zh'}
        onClick={() => setLanguage('zh')}
        className={cn(
          'rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200',
          language === 'zh'
            ? 'bg-brand-gradient text-white shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        繁中
      </button>
      <button
        type="button"
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
        onClick={() => setLanguage('en')}
        className={cn(
          'rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200',
          language === 'en'
            ? 'bg-brand-gradient text-white shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        EN
      </button>
    </div>
  );
}
