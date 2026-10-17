'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    const saved = localStorage.getItem('cabinet_lang') as Language;
    if (saved && (saved === 'fr' || saved === 'ar' || saved === 'en')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('cabinet_lang', lang);
  };

  const isRtl = language === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
    }
  }, [language, dir]);

  const t = (key: string): string => {
    const currentDict = translations[language];
    if (currentDict && currentDict[key]) {
      return currentDict[key];
    }
    // Fallback to French
    if (translations.fr && translations.fr[key]) {
      return translations.fr[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
