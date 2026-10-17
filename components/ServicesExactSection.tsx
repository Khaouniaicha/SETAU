'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

interface ServicesExactSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesExactSection({ onSelectService }: ServicesExactSectionProps) {
  const { language, isRtl } = useLanguage();

  const handleCardClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const SERVICES = [
    {
      id: 'topo',
      titleAr: 'الرفع الطوبوغرافي',
      titleFr: 'Levés Topographiques',
      descAr: 'أعمال الرفع الطوبوغرافي بتقنيات GNSS و المحطات الشاملة.',
      descFr: 'Travaux de levés topographiques haute précision par technologies GNSS RTK et stations totales.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-9 h-9 text-orange-500">
          <rect x="6" y="6" width="36" height="36" rx="6" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M10 24C15 18 22 18 27 24C32 30 38 28 42 24" strokeLinecap="round" />
          <path d="M10 16C16 11 23 11 28 16C33 21 39 19 42 16" strokeLinecap="round" />
          <path d="M8 32C14 27 21 27 27 32C32 37 38 34 42 32" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'foncier',
      titleAr: 'المسح العقاري',
      titleFr: 'Cadastre & Foncier',
      descAr: 'المسح العقاري، التقسيمات، الحدود والملكية العقارية.',
      descFr: 'Sécurisation foncière, divisions parcellaires, bornage contradictoire et conformité cadastrale.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-9 h-9 text-orange-500">
          <rect x="10" y="6" width="28" height="36" rx="4" stroke="currentColor" strokeWidth="2.2" />
          <line x1="16" y1="14" x2="32" y2="14" strokeLinecap="round" strokeWidth="2" />
          <line x1="16" y1="20" x2="28" y2="20" strokeLinecap="round" strokeWidth="2" />
          <line x1="16" y1="26" x2="25" y2="26" strokeLinecap="round" strokeWidth="2" />
          <circle cx="30" cy="32" r="4.5" stroke="currentColor" strokeWidth="2" />
          <path d="M30 30L30 34" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      id: 'implantation',
      titleAr: 'توقيع المشاريع',
      titleFr: 'Implantation de Projets',
      descAr: 'توقيع مختلف أنواع المشاريع (مباني، طرقات، شبكات VRD ...).',
      descFr: 'Implantation d\'axes et ouvrages d\'art : bâtiments, routes, plateformes et réseaux VRD.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-9 h-9 text-orange-500">
          <rect x="19" y="8" width="10" height="11" rx="2" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="24" cy="13.5" r="2.5" fill="currentColor" />
          <line x1="15" y1="19" x2="33" y2="19" strokeLinecap="round" strokeWidth="2.2" />
          <line x1="24" y1="19" x2="10" y2="42" strokeLinecap="round" strokeWidth="2.2" />
          <line x1="24" y1="19" x2="24" y2="42" strokeLinecap="round" strokeWidth="2.2" />
          <line x1="24" y1="19" x2="38" y2="42" strokeLinecap="round" strokeWidth="2.2" />
        </svg>
      ),
    },
    {
      id: 'terrassement',
      titleAr: 'حساب الحفر والردم',
      titleFr: 'Cubatures & MNT',
      descAr: 'حساب كميات الحفر والردم وإعداد نماذج رقمية للأراضي (MNT).',
      descFr: 'Calculs métrologiques des déblais/remblais et modélisation numérique de terrain 3D.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-9 h-9 text-orange-500">
          <rect x="8" y="32" width="22" height="8" rx="4" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="12" cy="36" r="1.5" fill="currentColor" />
          <circle cx="19" cy="36" r="1.5" fill="currentColor" />
          <circle cx="26" cy="36" r="1.5" fill="currentColor" />
          <path d="M12 32V20H24V32" strokeWidth="2.2" />
          <rect x="15" y="23" width="6" height="5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M24 22L34 14L38 24L42 22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white dark:bg-[#0a0f1d] border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Section Header (Matching Mockup: Eyebrow + Big Title + Subtitle) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Eyebrow: — خدماتنا — */}
          <div className="inline-flex items-center gap-3 text-orange-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
            <span className="w-8 h-0.5 bg-orange-500"></span>
            <span>{language === 'ar' ? 'خدماتنا' : 'NOS SERVICES'}</span>
            <span className="w-8 h-0.5 bg-orange-500"></span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            {language === 'ar' ? 'خدماتنا الطوبوغرافية' : 'Nos Services Topographiques'}
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'ar' 
              ? 'نقدم مجموعة متكاملة من الخدمات في مجال الطوبوغرافيا والمسح العقاري والتهيئة العمرانية، بجودة عالية وخبرة ميدانية.'
              : 'Nous proposons une gamme complète de prestations en topographie, sécurisation foncière et aménagement urbain, avec une haute rigueur métrologique.'}
          </p>

        </div>

        {/* 4 Service Cards Grid (Matching mockup 1:1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => handleCardClick(language === 'ar' ? srv.titleAr : srv.titleFr)}
              className="group bg-white dark:bg-[#0f172a] rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 dark:hover:border-orange-800/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer"
            >
              
              {/* Icon Container in soft orange square */}
              <div className="w-16 h-16 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-900/40 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-orange-100/80 dark:group-hover:bg-orange-950/80 transition-all">
                {srv.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2.5">
                {language === 'ar' ? srv.titleAr : srv.titleFr}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                {language === 'ar' ? srv.descAr : srv.descFr}
              </p>

              {/* Footer link: المزيد من التفاصيل + small circle button */}
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                <span>{language === 'ar' ? 'المزيد من التفاصيل' : 'Plus de détails'}</span>
                <span className="w-7 h-7 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRtl ? '' : 'rotate-180'}`} />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
