'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Eye, FileCheck, Layers, Sparkles } from 'lucide-react';

export default function DeliverablesSection() {
  const { t } = useLanguage();

  return (
    <section id="realisations" className="py-16 sm:py-24 bg-slate-50 dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-400 text-xs font-bold tracking-wide uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('livrablesTag')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('livrablesTitle')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t('livrablesSubtitle')}
          </p>
        </div>

        {/* Deliverables Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Architectural & EDD Plan */}
          <div className="flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg group hover:border-emerald-500/50 transition-all">
            <div className="relative h-72 sm:h-80 w-full bg-slate-950 overflow-hidden">
              <Image
                src="/plan-architectural.jpg"
                alt="Plan architectural & État Descriptif de Division"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 text-xs font-mono text-emerald-400">
                DAO / Autocad • Relevé Coté
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {t('livrable1Title')}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('livrable1Desc')}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Normes Cadastre & Conservation</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Conforme OGEF</span>
              </div>
            </div>
          </div>

          {/* Card 2: Catalogue Officiel des Compétences Foncières */}
          <div className="flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg group hover:border-emerald-500/50 transition-all">
            <div className="relative h-72 sm:h-80 w-full bg-slate-950 overflow-hidden">
              <Image
                src="/prestations-cadastrales.png"
                alt="Catalogue officiel des compétences foncières"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 text-xs font-mono text-emerald-400">
                Pôle Juridique & Cadastral
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {t('livrable2Title')}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('livrable2Desc')}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Dossiers Notaires, APC & DUAC</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Agrément N° 865</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
