import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { LanguageToggle } from '@/components/LanguageToggle';
import { GradientButton } from '@/components/GradientButton';
import { cn } from '@/lib/utils';
import type { Language } from '@/types';
import { t } from '@/i18n';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function Navbar({ language, setLanguage }: NavbarProps) {
  const lang = t(language);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: lang.global.nav.home },
    { to: '/pricing', label: lang.global.nav.pricing },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={cn(
      'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/95 shadow-sm backdrop-blur-xl'
        : 'bg-white/75 backdrop-blur-lg'
    )}>
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/60">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white shadow-soft-panel">
            AI
          </span>
          <span className="text-xl font-bold text-gradient">AIPOST</span>
        </Link>

        {/* Desktop nav — centered between logo & CTA */}
        <div className="pill-surface absolute left-1/2 -translate-x-1/2 hidden items-center gap-1 rounded-full p-1 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
                isActive(link.to)
                  ? 'bg-brand-gradient text-white shadow-sm'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <GradientButton variant="gradient" size="sm" to="/pricing">
            {lang.global.nav.cta}
          </GradientButton>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={language === 'zh' ? '開啟選單' : 'Open menu'}
                className="rounded-full border border-white/80 bg-white/80 p-2 text-foreground shadow-soft-panel backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/60"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-border/70 bg-white/95 p-6 backdrop-blur-xl">
              <div className="mb-8">
                <SheetTitle className="text-xl font-bold text-gradient">AIPOST</SheetTitle>
                <SheetDescription className="mt-2">
                  {language === 'zh' ? '選擇頁面或開始查看方案。' : 'Choose a page or view plans.'}
                </SheetDescription>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'rounded-2xl px-4 py-3 text-base font-semibold transition-colors',
                      isActive(link.to) ? 'bg-brand-pink-light text-brand-pink' : 'text-foreground hover:bg-muted hover:text-brand-pink'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <GradientButton variant="gradient" size="default" to="/pricing" className="mt-4 w-full">
                  {lang.global.nav.cta}
                </GradientButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
