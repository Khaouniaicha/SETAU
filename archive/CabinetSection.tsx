'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CABINET_CONFIG } from '@/lib/config';
import { 
  Building, 
  MapPin, 
  CheckCircle2, 
  Cpu, 
  Phone, 
  Award, 
  Compass, 
  MessageSquare
} from 'lucide-react';

export default function CabinetSection() {
  const { t, language } = useLanguage();

  return (
    <section id="cabinet" className="py-16 sm:py-24 bg-slate-50 dark:bg-[#080d1a] border-b border-orange-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: OFFICIAL BUSINESS CARD & CREDENTIALS (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Business Card Display */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-orange-500 shadow-2xl group bg-white dark:bg-slate-900">
              <div className="relative h-72 sm:h-80 w-full bg-slate-950 p-2">
                <Image
                  src="/projects/carte_visite.jpg"
                  alt="Carte de visite - صالحي كريم مهندس معتمد لدى الدولة"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Verified Badge */}
              <div className="p-4 bg-orange-600 text-white flex items-center justify-between text-xs font-bold">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-white" />
                  <span>{language === 'ar' ? CABINET_CONFIG.qualificationAr : CABINET_CONFIG.qualification}</span>
                </div>
                <span className="font-mono text-orange-100">وادي العثمانية • ميلة</span>
              </div>
            </div>

            {/* Direct Phone Numbers in Orange & White */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-slate-800 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase">
                    {language === 'ar' ? 'الاتصال المباشر بالمهندس' : 'Lignes Directes Ingénieur'}
                  </div>
                  <div className="text-sm font-black font-mono text-slate-900 dark:text-white mt-0.5" dir="ltr">
                    <a href={`tel:${CABINET_CONFIG.phone1Raw}`} className="hover:text-orange-600">
                      {CABINET_CONFIG.phone1}
                    </a>
                    <span className="mx-1 text-slate-400">/</span>
                    <a href={`tel:${CABINET_CONFIG.phone2Raw}`} className="hover:text-orange-600">
                      {CABINET_CONFIG.phone2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block text-xs font-bold text-orange-600 bg-orange-50 dark:bg-orange-950/60 px-3 py-1 rounded-full">
                WhatsApp Direct
              </div>
            </div>

            {/* Equipment Box */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm">
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-600 flex-shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  عتاد وتجهيزات GNSS GEO Survey عالية الدقة
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  أجهزة استقبال GNSS ثنائية التردد RTK، محطات رصد إلكترونية (Total Stations)، أجهزة ليزرية للمناسيب وبرمجيات AutoCAD و Covadis.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT: DETAILS & PILLARS (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/70 border border-orange-300 dark:border-orange-800 text-orange-800 dark:text-orange-300 text-xs font-bold tracking-wide uppercase mb-3">
                <Building className="w-3.5 h-3.5 text-orange-600" />
                <span>{t('aboutTag')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t('aboutTitle')}
              </h2>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {t('aboutLead')}
            </p>

            {/* 4 Check Pillars in Orange */}
            <div className="space-y-3.5 pt-2">
              
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="p-1 rounded-full bg-orange-500/10 text-orange-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t('aboutPill1')}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {t('aboutPill1Desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="p-1 rounded-full bg-orange-500/10 text-orange-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t('aboutPill2')}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {t('aboutPill2Desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="p-1 rounded-full bg-orange-500/10 text-orange-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t('aboutPill3')}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {t('aboutPill3Desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="p-1 rounded-full bg-orange-500/10 text-orange-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t('aboutPill4')}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {t('aboutPill4Desc')}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
