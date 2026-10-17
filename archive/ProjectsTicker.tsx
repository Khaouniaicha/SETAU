'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectsTicker() {
  const { language } = useLanguage();

  const projects = [
    { ar: 'السكة الحديدية تندوف - بشار', fr: 'Ligne Ferroviaire Tindouf - Béchar' },
    { ar: 'محطة تحلية مياه البحر الطارف', fr: 'Dessalement d\'Eau de Mer El Tarf' },
    { ar: 'ازدواجية الطريق الوطني رقم 1 غرداية', fr: 'Dédoublement RN 1 Ghardaïa' },
    { ar: 'مركب الحديد والصلب بلارة جيجل', fr: 'Complexe Sidérurgique Bellara' },
    { ar: 'محطة البوستينڨ حاسي الرمل', fr: 'Station Boosting Hassi R\'Mel' },
    { ar: 'ازدواجية الطريق الوطني رقم 49', fr: 'Dédoublement RN 49' },
    { ar: 'حفر ومكعبات ابن باديس قسنطينة', fr: 'Terrassement & Cubatures Ibn Badis' },
    { ar: 'أشغال الطريق الولائي CW106', fr: 'Travaux Routiers CW106' },
    { ar: 'قسمة أراضٍ مسعود بوجريو قسنطينة', fr: 'Division Parcellaire Constantine' },
  ];

  return (
    <div className="bg-orange-600 text-white py-3 overflow-hidden border-y border-orange-700 select-none">
      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
        {/* Double the list for seamless loop */}
        {[...projects, ...projects].map((p, i) => (
          <div key={i} className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold">
            <CheckCircle2 className="w-4 h-4 text-white/90 flex-shrink-0" />
            <span>{language === 'ar' ? p.ar : p.fr}</span>
            <span className="text-orange-300 mx-2">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
