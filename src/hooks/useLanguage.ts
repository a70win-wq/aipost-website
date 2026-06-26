import { useState, useEffect, useCallback } from 'react';
import type { Language } from '@/types';

const STORAGE_KEY = 'aipost-language';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored === 'zh' || stored === 'en') ? stored as Language : 'zh';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return { language, setLanguage };
}
