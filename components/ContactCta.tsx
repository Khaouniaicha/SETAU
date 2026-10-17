'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CABINET_CONFIG } from '@/lib/config';
import { ArrowUpRight, Phone } from 'lucide-react';

export default function ContactCta() {
  const { language, isRtl } = useLanguage();

  return (
    <section className="contact-cta py-20 sm:py-28 relative overflow-hidden flex items-center justify-center">
      
      {/* Background Topo Lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]"></div>
      
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8 flex items-center justify-center w-full">
        
        {/* Signature Circular Orbit Disc Container */}
        <div className="disc bg-white/10 backdrop-blur-xl border border-white/25 shadow-2xl shadow-orange-950/40 p-8 sm:p-12 rounded-3xl max-w-3xl w-full text-center">
          
          {/* Eyebrow */}
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-orange-200 mb-3">
            {language === 'ar' ? 'استشارة هندسية سريعة' : 'PRENEZ CONTACT AVEC NOTRE BUREAU'}
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            {language === 'ar' ? (
              <>
                هل لديك مشروع عقاري أو طبوغرافي؟ <br />
                <span className="font-serif italic font-normal text-orange-200">فلنتشاور معاً الآن</span>
              </>
            ) : (
              <>
                Un projet de mesure ou de VRD ? <br />
                <span className="font-serif italic font-normal text-orange-200">Échangeons dès aujourd'hui</span>
              </>
            )}
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed mb-8">
            {language === 'ar'
              ? 'مكتب SETAU بوادي العثمانية يضمن لك دراسة فنية دقيقة وتسليم المخططات في أقرب الآجال مع مرافقة تقنية شاملة.'
              : 'Notre équipe d\'ingénieurs et techniciens géomètres répond à vos besoins sous 48h à Mila et dans tout l\'Est algérien.'}
          </p>

          {/* Action Row: CTA Button + Direct Hotline */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-white text-orange-600 hover:bg-orange-50 font-extrabold text-sm sm:text-base shadow-xl shadow-orange-950/20 hover:scale-105 active:scale-95 transition-all group"
            >
              <span>{language === 'ar' ? 'طلب تسعيرة فورية' : 'Demander un devis'}</span>
              <div className="w-7 h-7 rounded-full bg-orange-600 text-white flex items-center justify-center group-hover:bg-orange-700 transition-colors">
                <ArrowUpRight className={`w-4 h-4 ${isRtl ? '-scale-x-100' : ''}`} />
              </div>
            </a>

            <div className="flex items-center gap-3 text-white bg-black/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/15">
              <Phone className="w-4 h-4 text-orange-300" />
              <div className="text-start">
                <span className="text-[10px] uppercase font-bold text-orange-200 tracking-wider block">
                  {language === 'ar' ? 'اتصال مباشر بالمهندس' : 'Ligne directe'}
                </span>
                <a 
                  href={`tel:${CABINET_CONFIG.phone1Raw}`}
                  className="text-sm sm:text-base font-mono font-bold hover:underline"
                  dir="ltr"
                >
                  {CABINET_CONFIG.phone1}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
