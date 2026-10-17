'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CABINET_CONFIG } from '@/lib/config';
import { ArrowUpRight, Phone } from 'lucide-react';

export default function ContactCta() {
  const { language, isRtl } = useLanguage();

  return (
    <section className="contact-cta py-24 sm:py-32 relative overflow-hidden flex items-center justify-center">
      
      {/* Background Topo Lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]"></div>
      
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8 flex items-center justify-center">
        
        {/* Geomexpert Signature Circular Orbit Disc Container */}
        <div className="disc bg-white/10 backdrop-blur-xl border border-white/25 shadow-2xl shadow-orange-950/40">
          
          {/* Eyebrow */}
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange-200 mb-4">
            {language === 'ar' ? 'استشارة هندسية سريعة' : 'PRENEZ CONTACT AVEC NOTRE BUREAU'}
          </span>

          {/* Heading with Serif Italic Em */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            {language === 'ar' ? (
              <>
                هل لديك مشروع عقاري أو طبوغرافي؟ <br />
                <em className="font-serif italic font-normal text-white drop-shadow">فلنتشاور معاً الآن.</em>
              </>
            ) : (
              <>
                Un projet de mesure ou de VRD ? <br />
                <em className="font-serif italic font-normal text-white drop-shadow">Échangeons dès aujourd'hui.</em>
              </>
            )}
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-white/90 max-w-md leading-relaxed mb-8">
            {language === 'ar'
              ? 'مكتب SETAU يضمن لك دراسة فنية دقيقة وتسليم المخططات في أقرب الآجال عبر كامل التراب الوطني.'
              : 'Notre équipe d\'ingénieurs et techniciens géomètres répond à vos besoins sous 48h partout en Algérie.'}
          </p>

          {/* Action Row: Bouncing Arrow Button + Hotline */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            
            <a 
              href="#contact"
              className="arrow-circle-bouncing group"
              title={language === 'ar' ? 'طلب تسعيرة' : 'Demander un devis'}
            >
              <ArrowUpRight className={`w-8 h-8 text-orange-600 group-hover:scale-125 transition-transform ${isRtl ? '-scale-x-100' : ''}`} />
            </a>

            <div className="text-center sm:text-start text-white">
              <div className="text-xs uppercase font-bold text-orange-200 tracking-wider">
                {language === 'ar' ? 'اتصال مباشر بالسيد صالحي كريم' : 'Ligne directe M. Karim Salhi'}
              </div>
              <a 
                href={`tel:${CABINET_CONFIG.phone1Raw}`}
                className="text-lg sm:text-xl font-mono font-black hover:underline"
                dir="ltr"
              >
                {CABINET_CONFIG.phone1}
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
