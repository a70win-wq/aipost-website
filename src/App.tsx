import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { PricingPage } from '@/pages/PricingPage';
import { TermsPage } from '@/pages/TermsPage';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/i18n';
import type { Language } from '@/types';
import './App.css';

type SeoPage = 'home' | 'pricing' | 'terms';

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(property ? 'property' : 'name', name);
    document.head.appendChild(tag);
  }

  tag.content = content;
}

function AppShell({ language, setLanguage }: { language: Language; setLanguage: (lang: Language) => void }) {
  const location = useLocation();
  const lang = t(language);

  useEffect(() => {
    const pageByPath: Record<string, SeoPage> = {
      '/': 'home',
      '/pricing': 'pricing',
      '/terms': 'terms',
    };
    const seo = lang.global.seo[pageByPath[location.pathname] ?? 'home'];

    document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
    document.title = seo.title;
    setMeta('description', seo.description);
    setMeta('og:title', seo.title, true);
    setMeta('og:description', seo.description, true);
    setMeta('og:type', 'website', true);
  }, [language, lang, location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/pricing" element={<PricingPage language={language} />} />
          <Route path="/terms" element={<TermsPage language={language} />} />
        </Routes>
      </div>
      <Footer language={language} />
    </div>
  );
}

function App() {
  const { language, setLanguage } = useLanguage();

  return (
    <BrowserRouter>
      <AppShell language={language} setLanguage={setLanguage} />
    </BrowserRouter>
  );
}

export default App;
