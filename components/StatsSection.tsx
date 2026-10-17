'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function StatsSection() {
  const { language } = useLanguage();

  const STATS = [
    {
      num: '66+',
      labelAr: 'ورشة موثقة وأشغال منجزة في مختلف الولايات',
      labelFr: 'Chantiers et interventions de terrain documentés',
    },
    {
      num: 'Leica',
      labelAr: 'دقة قياس عالية بأجهزة المحطة الشاملة وGNSS RTK',
      labelFr: 'Haute précision métrologique Leica Geosystems',
    },
    {
      num: '48h',
      labelAr: 'استجابة سريعة وتحديد مواعيد المعاينة الميدانية',
      labelFr: 'Délai moyen d\'intervention et réactivité terrain',
    },
    {
      num: '100%',
      labelAr: 'مطابقة تامة للمواصفات التقنية والمعايير المعتمدة',
      labelFr: 'Rigueur technique & conformité aux normes',
    },
  ];

  return (
    <section className="stats py-24 sm:py-28 relative overflow-hidden text-white">
      
      {/* Topographic Landscape Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
      
      {/* Subtle Contour Rings in White */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border border-white/20 pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border border-white/20 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Eyebrow Label */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-200">
            {language === 'ar' ? 'مؤشرات الأداء والدقة الهندسية' : 'INDICATEURS DE PERFORMANCE & RIGUEUR'}
          </span>
        </div>

        {/* 4 Stat Jewels Grid (Geomexpert signature) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-start group">
              <span className="stat-jewel mb-3 drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                {stat.num}
              </span>
              <p className="text-sm sm:text-base font-semibold text-white/90 max-w-[220px] leading-snug">
                {language === 'ar' ? stat.labelAr : stat.labelFr}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
