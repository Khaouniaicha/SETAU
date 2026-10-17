'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FileText, Users, Building2, Compass } from 'lucide-react';

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="py-6 bg-slate-100/80 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center md:text-start">
          {t('trustBarLabel')}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-sm">
            <FileText className="w-4 h-4 text-emerald-500" />
            <span>{t('partnerNotaires')}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-sm">
            <Users className="w-4 h-4 text-blue-500" />
            <span>{t('partnerParticuliers')}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-sm">
            <Building2 className="w-4 h-4 text-amber-500" />
            <span>{t('partnerPromoteurs')}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-sm">
            <Compass className="w-4 h-4 text-purple-500" />
            <span>{t('partnerArchitectes')}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
