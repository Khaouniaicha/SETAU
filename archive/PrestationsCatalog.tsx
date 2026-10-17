'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SETAU_SERVICES, PrestationItem } from '@/lib/types';
import { 
  ArrowRight, 
  Compass, 
  Layers, 
  Calculator, 
  MapPin, 
  Building2, 
  Sparkles,
  CheckCircle2,
  HardHat
} from 'lucide-react';

interface PrestationsCatalogProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function PrestationsCatalog({ onSelectService }: PrestationsCatalogProps) {
  const { t, language, isRtl } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredList = activeFilter === 'all' 
    ? SETAU_SERVICES 
    : SETAU_SERVICES.filter(item => item.category === activeFilter);

  const filterTabs = [
    { id: 'all', label: t('catAll') },
    { id: 'topo', label: t('catTopo') },
    { id: 'vrd', label: t('catVrd') },
    { id: 'terrassement', label: t('catTerrassement') },
    { id: 'bornage', label: t('catBornage') },
    { id: 'amenagement', label: t('catAmenagement') },
    { id: 'batiment', label: t('catBatiment') },
  ];

  const handleQuoteClick = (serviceKey: string) => {
    const title = t(serviceKey);
    onSelectService(title);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'terrassement':
        return <Calculator className="w-5 h-5 text-orange-600" />;
      case 'vrd':
        return <Layers className="w-5 h-5 text-orange-600" />;
      case 'bornage':
        return <MapPin className="w-5 h-5 text-orange-600" />;
      case 'batiment':
        return <Building2 className="w-5 h-5 text-orange-600" />;
      default:
        return <Compass className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section id="prestations" className="py-16 sm:py-24 bg-white dark:bg-[#0a0f1d] border-b border-orange-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/70 border border-orange-300 dark:border-orange-800 text-orange-800 dark:text-orange-300 text-xs font-bold tracking-wide uppercase mb-3">
            <HardHat className="w-3.5 h-3.5 text-orange-600" />
            <span>{t('servicesTag')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('servicesTitle')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Filter Pills in Orange & White */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === tab.id
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30 scale-105'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-orange-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 14 Services Grid in Orange & White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/70 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900">
                    {language === 'ar' ? item.badgeAr : item.badge}
                  </span>
                  
                  <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(item.category)}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2.5 group-hover:text-orange-600 transition-colors">
                  {t(item.titleKey)}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>

              {/* Card Footer with CTA */}
              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => handleQuoteClick(item.titleKey)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-orange-300 dark:border-orange-900/60 bg-orange-50/60 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 hover:bg-orange-600 hover:text-white text-xs sm:text-sm font-bold transition-all group"
                >
                  <span>{language === 'ar' ? 'طلب تسعيرة لهذه الخدمة' : 'Demander un devis pour cette prestation'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
