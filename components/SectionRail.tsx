'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface SectionItem {
  id: string;
  labelAr: string;
  labelFr: string;
}

const SECTIONS: SectionItem[] = [
  { id: 'accueil', labelAr: 'الرئيسية', labelFr: 'Accueil' },
  { id: 'services', labelAr: 'الخدمات', labelFr: 'Services' },
  { id: 'apropos', labelAr: 'عن المكتب', labelFr: 'À propos' },
  { id: 'materiel', labelAr: 'العتاد', labelFr: 'Matériel' },
  { id: 'realisations', labelAr: 'المشاريع', labelFr: 'Réalisations' },
  { id: 'processus', labelAr: 'المنهجية', labelFr: 'Méthode' },
  { id: 'contact', labelAr: 'اتصل بنا', labelFr: 'Contact' },
];

export default function SectionRail() {
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState<string>('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveId(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3.5 p-2 pointer-events-auto"
      role="navigation"
      aria-label="Navigation par section"
    >
      {SECTIONS.map((sec) => {
        const isActive = activeId === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
            title={language === 'ar' ? sec.labelAr : sec.labelFr}
            aria-label={language === 'ar' ? sec.labelAr : sec.labelFr}
          >
            {/* Tooltip Label on Hover (left side of dot) */}
            <span className="absolute right-8 px-2.5 py-1 rounded-md bg-slate-900/90 text-white text-[11px] font-bold font-sans tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
              {language === 'ar' ? sec.labelAr : sec.labelFr}
            </span>

            {/* Dot / Pill indicator */}
            <span
              className={`block rounded-full transition-all duration-300 ease-out shadow-sm ${
                isActive
                  ? 'w-7 h-2.5 bg-orange-600 shadow-orange-600/50 scale-100'
                  : 'w-2.5 h-2.5 bg-white/70 dark:bg-white/50 border border-black/20 hover:bg-white hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
