'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SETAU_MATERIEL } from '@/lib/materielData';
import { 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Maximize2,
  Info
} from 'lucide-react';

export default function MaterielSection() {
  const { language, isRtl } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section id="materiel" className="py-20 lg:py-28 bg-white dark:bg-[#090d16] border-b border-orange-100 dark:border-slate-800 transition-colors">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Geomexpert Section Head Rule */}
        <div className="section-head">
          <div className="rule">
            <span className="eyebrow">
              {language === 'ar' ? 'التجهيزات والأجهزة الطوبوغرافية' : 'ÉQUIPEMENTS & INSTRUMENTATION DE POINTE'}
            </span>
            <span className="tags hidden sm:inline">
              {language === 'ar' 
                ? 'تكنولوجيا LEICA السويسرية • دقة مليمترية معتمدة' 
                : 'LEICA GEOSYSTEMS SUISSE • CALIBRATION CONFORME'}
            </span>
          </div>
          <h2>
            {language === 'ar' ? (
              <>
                الدقة الهندسية المضمونة بأحدث <em>تجهيزات الرصد والقياس</em>
              </>
            ) : (
              <>
                L'excellence métrologique garantie par notre <em>parc de matériel</em>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            {language === 'ar'
              ? 'يستثمر مكتب SETAU في أحدث حلول المسح الطوبوغرافي من الشركة الرائدة عالمياً Leica Geosystems لضمان موثوقية النتائج وسرعة استخراج المخططات.'
              : 'Pour garantir une conformité sans faille aux exigences du cadastre et des maîtres d’œuvre, le bureau SETAU s’appuie sur les technologies les plus avancées de Leica Geosystems.'}
          </p>
        </div>

        {/* Equipment Items List (Image + Specs + Detailed Description Right After Image) */}
        <div className="space-y-16 lg:space-y-20">
          {SETAU_MATERIEL.map((item, idx) => (
            <div 
              key={item.id}
              className="rounded-3xl bg-[#f8f9fa] dark:bg-slate-900/80 border-2 border-orange-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* 1. Large Equipment Photo & Badges (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div 
                    className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner aspect-[4/3] group cursor-pointer"
                    onClick={() => setSelectedPhoto(item.src)}
                  >
                    <Image
                      src={item.src}
                      alt={language === 'ar' ? item.nameAr : item.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Brand Watermark Overlay */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 text-white text-[11px] font-mono font-bold tracking-wider uppercase backdrop-blur-md">
                      {item.brand}
                    </div>

                    {/* Expand Button */}
                    <div className="absolute bottom-3 right-3 p-2 rounded-full bg-orange-600 text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Certified Accuracy Jewel Banner */}
                  <div className="p-4 rounded-xl bg-orange-600 text-white flex items-center justify-between shadow-md">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-orange-200 font-bold">
                          {language === 'ar' ? 'معيار الدقة المعتمد' : 'Précision Certifiée'}
                        </div>
                        <div className="text-xs sm:text-sm font-black font-mono mt-0.5">
                          {language === 'ar' ? item.precisionAr : item.precision}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Operational Status Pill */}
                  <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      {language === 'ar' ? 'حالة الجهاز :' : 'État opérationnel :'}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>{language === 'ar' ? 'معاير وجاهز للتدخل الفوري' : 'Calibré & Opérationnel 100%'}</span>
                    </span>
                  </div>
                </div>

                {/* 2. Specs & Full Detailed Description (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Category & Title */}
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-2">
                      <Cpu className="w-4 h-4" />
                      <span>{language === 'ar' ? item.categoryAr : item.category}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {language === 'ar' ? item.nameAr : item.name}
                    </h3>
                  </div>

                  {/* Quick Technical Specs Table */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.specs.map((sp, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200/90 dark:border-slate-800 text-xs flex flex-col justify-between"
                      >
                        <span className="text-slate-500 dark:text-slate-400 font-medium">
                          {language === 'ar' ? sp.labelAr : sp.labelFr}
                        </span>
                        <strong className="text-slate-900 dark:text-white font-medium text-xs mt-1">
                          {language === 'ar' ? sp.valueAr : sp.valueFr}
                        </strong>
                      </div>
                    ))}
                  </div>

                  {/* FULL TECHNICAL DESCRIPTION (Directly after the image & specs as requested) */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border-l-4 border-orange-500 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                      <Info className="w-4 h-4" />
                      <span>{language === 'ar' ? 'الوصف الهندسي والميداني للجهاز :' : 'Description & Fonctionnement Métrologique :'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                      {language === 'ar' ? item.descriptionAr : item.descriptionFr}
                    </p>
                  </div>

                  {/* Field Applications Bullets */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                      {language === 'ar' ? 'الاستخدامات الميدانية بمكتب SETAU :' : 'Domaines d\'application sur chantier :'}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(language === 'ar' ? item.applicationsAr : item.applicationsFr).map((app, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Link */}
                  <div className="pt-2">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-600 hover:text-orange-500 transition-colors group"
                    >
                      <span>{language === 'ar' ? 'طلب تدخل ميداني بهذا العتاد' : 'DEMANDER UNE ÉTUDE AVEC CET ÉQUIPEMENT'}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-[70vh]">
            <Image
              src={selectedPhoto}
              alt="Équipement Leica SETAU"
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
