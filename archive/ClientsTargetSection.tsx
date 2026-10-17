'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Users, HardHat, Compass, Building, CheckCircle2 } from 'lucide-react';

export default function ClientsTargetSection() {
  const { t } = useLanguage();

  const clients = [
    {
      titleKey: 'client1Title',
      descKey: 'client1Desc',
      icon: Users,
      badge: 'الخواص • Particuliers',
    },
    {
      titleKey: 'client2Title',
      descKey: 'client2Desc',
      icon: HardHat,
      badge: 'المقاولون • Entreprises BTP',
    },
    {
      titleKey: 'client3Title',
      descKey: 'client3Desc',
      icon: Compass,
      badge: 'المهندسون • Architectes',
    },
    {
      titleKey: 'client4Title',
      descKey: 'client4Desc',
      icon: Building,
      badge: 'الأشغال العمومية • TP & Hydraulique',
    },
  ];

  return (
    <section id="partenaires" className="py-16 sm:py-24 bg-white dark:bg-[#0a0f1d] border-b border-orange-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/70 border border-orange-300 dark:border-orange-800 text-orange-800 dark:text-orange-300 text-xs font-bold tracking-wide uppercase mb-3">
            <Users className="w-3.5 h-3.5 text-orange-600" />
            <span>{t('clientsTag')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('clientsTitle')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t('clientsSubtitle')}
          </p>
        </div>

        {/* 4 Cards Grid in Orange & White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-orange-500/10 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-full bg-orange-100/70 dark:bg-orange-950/60 text-orange-800 dark:text-orange-400 mb-2.5">
                    {c.badge}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 transition-colors">
                    {t(c.titleKey)}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(c.descKey)}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-xs text-orange-600 dark:text-orange-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>حلول هندسية ميدانية دقيقة</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
