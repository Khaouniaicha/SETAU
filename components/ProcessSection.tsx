'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  FileSearch, 
  Compass, 
  Cpu, 
  FileCheck2
} from 'lucide-react';

export default function ProcessSection() {
  const { language, isRtl } = useLanguage();

  const STEPS = [
    {
      num: '01',
      titleAr: 'الاستشارة ودراسة الوثائق العقارية',
      titleFr: 'Consultation & Diagnostic Juridique',
      descAr: 'استلام العقود، الدفتر العقاري، ومخططات المسح لدراسة الوضعية القانونية وتحديد طبيعة التدخل الطوبوغرافي المطلوب.',
      descFr: 'Examen des titres de propriété, livrets fonciers et plans cadastraux pour définir le protocole métrologique et juridique adéquat.',
      icon: <FileSearch className="w-5 h-5 text-orange-600" />,
    },
    {
      num: '02',
      titleAr: 'الخروج الميداني والرفع بالأجهزة',
      titleFr: 'Mission Terrain & Mesures GNSS RTK',
      descAr: 'تنقل فريق SETAU إلى الورشة باستخدام أجهزة GPS GNSS RTK ومحطات الرصد الشاملة (Station Totale) لالتقاط النقاط بدقة مليمترية.',
      descFr: 'Déploiement de notre brigade sur site équipée de récepteurs GNSS bi-fréquence et stations robotisées pour acquérir les coordonnées millimétriques.',
      icon: <Compass className="w-5 h-5 text-orange-600" />,
    },
    {
      num: '03',
      titleAr: 'المعالجة الرقمية وحساب الكميات',
      titleFr: 'Traitement Numérique & Calculs DAO',
      descAr: 'تفريغ البيانات في برمجيات Covadis و AutoCAD، بناء النماذج ثلاثية الأبعاد (MNT)، وحساب حجوم الحفر والردم والارتفاعات.',
      descFr: 'Calculs géodésiques, modélisation 3D (MNT), calculs de cubatures différentielles et dessin assisté par ordinateur sous Covadis et AutoCAD.',
      icon: <Cpu className="w-5 h-5 text-orange-600" />,
    },
    {
      num: '04',
      titleAr: 'تسليم المخططات والمحاضر المعتمدة',
      titleFr: 'Livraison des Plans & PV Homologué',
      descAr: 'تسليم المخططات الورقية والرقمية (DWG/PDF)، ومحاضر التحديد والقسمة الموقعة والمختومة رسمياً من المهندس المعتمد.',
      descFr: 'Remise des dossiers techniques complets, plans topographiques géoréférencés (DWG/PDF) et PV de bornage revêtus du cachet de l\'ingénieur d\'État.',
      icon: <FileCheck2 className="w-5 h-5 text-orange-600" />,
    },
  ];

  return (
    <section id="processus" className="py-20 lg:py-28 bg-white dark:bg-[#090d16] border-b border-orange-100 dark:border-slate-800 transition-colors">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Section Head Rule */}
        <div className="section-head">
          <div className="rule">
            <span className="eyebrow">
              {language === 'ar' ? 'منهجية العمل والبروتوكول الهندسي' : 'MÉTHODOLOGIE D\'INTERVENTION'}
            </span>
            <span className="tags hidden sm:inline">
              {language === 'ar' 
                ? '4 مراحل نموذجية من الاستشارة إلى التسليم' 
                : 'PROTOCOLE TECHNIQUE EN 4 ÉTAPES VALIDÉES'}
            </span>
          </div>
          <h2>
            {language === 'ar' ? (
              <>
                من أول استشارة ميدانية حتى <em>تسليم المخططات المعتمدة</em>
              </>
            ) : (
              <>
                De la première consultation à la <em>livraison des plans homologués</em>
              </>
            )}
          </h2>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#f8f9fa] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif italic text-3xl font-bold text-orange-600 group-hover:scale-110 transition-transform">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-orange-600 transition-colors">
                  {language === 'ar' ? step.titleAr : step.titleFr}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language === 'ar' ? step.descAr : step.descFr}
                </p>
              </div>

              {/* Progress Connector Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-orange-600">
                <span>{language === 'ar' ? `المرحلة ${step.num}` : `Étape ${step.num}`}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 group-hover:scale-150 transition-transform"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
