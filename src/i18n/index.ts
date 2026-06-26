import zh from './zh';
import en from './en';
import type { Language } from '@/types';

const translations: Record<Language, typeof zh> = { zh, en };

export function t(lang: Language): typeof zh {
  return translations[lang];
}
