'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CABINET_CONFIG } from '@/lib/config';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  MessageCircle
} from 'lucide-react';

export default function Footer() {
  const { language, isRtl } = useLanguage();

  return (
    <footer className="bg-[#090d16] text-slate-400 text-sm border-t border-orange-500/20 relative overflow-hidden">
      
      {/* Background Subtle Contour Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8 pt-16 pb-12">
        
        {/* 4 Columns Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Official Accreditation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  SETAU
                </span>
                <span className="block text-[11px] font-bold text-orange-400 uppercase tracking-widest">
                  TOPOGRAPHIE & AMÉNAGEMENT URBAIN
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {language === 'ar'
                ? 'مكتب دراسات معتمد رسمياً لدى الدولة في الأشغال الطوبوغرافية الكبرى، مسح وقسمة الأراضي، وتصميم شبكات التهيئة الحضرية بكامل التراب الوطني.'
                : 'Bureau d\'études d\'ingénierie topographique et aménagement urbain agréé par l\'État. Expertise métrologique de haute précision pour particuliers et grands donneurs d\'ordre.'}
            </p>

            {/* Official Accreditation Seal */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
              <Award className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span>
                {language === 'ar' ? 'صالحي كريم • مهندس معتمد لدى الدولة' : 'Salhi Karim • Ingénieur d\'État Agréé'}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              {language === 'ar' ? 'تصفح الموقع' : 'NAVIGATION'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#accueil" className="hover:text-orange-400 transition-colors">
                  {language === 'ar' ? 'الرئيسية' : 'Accueil'}
                </a>
              </li>
              <li>
                <a href="#apropos" className="hover:text-orange-400 transition-colors">
                  {language === 'ar' ? 'عن المكتب' : 'À Propos'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  {language === 'ar' ? 'الخدمات الهندسية' : 'Prestations'}
                </a>
              </li>
              <li>
                <a href="/galerie" className="hover:text-orange-400 transition-colors text-orange-400 font-bold">
                  {language === 'ar' ? 'المشاريع والورشات' : 'Réalisations & Chantiers'}
                </a>
              </li>
              <li>
                <a href="#processus" className="hover:text-orange-400 transition-colors">
                  {language === 'ar' ? 'منهجية العمل' : 'Méthode'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  {language === 'ar' ? 'طلب تسعيرة' : 'Demander un devis'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Expertise Sectors (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              {language === 'ar' ? 'المجالات الرئيسية' : 'EXPERTISES CLÉS'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  {language === 'ar' ? 'الرفع الطوبوغرافي والمخططات ثلاثية الأبعاد' : 'Levés Topographiques & MNT 3D'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  {language === 'ar' ? 'توقيع المحاور ومتابعة البناء' : 'Implantation & Suivi Chantiers'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  {language === 'ar' ? 'حساب حجوم الحفر والردم (Cubatures)' : 'Calculs Cubatures Terrassement'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  {language === 'ar' ? 'قسمة وتثبيت حدود الأراضي (Bornage)' : 'Bornage, Délimitation & Foncier'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  {language === 'ar' ? 'شبكات VRD ومخططات المطابقة' : 'VRD & Récollement des Réseaux'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  {language === 'ar' ? 'التهيئة العمرانية والتجزئات السكنية' : 'Aménagement Urbain & POS/PDAU'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Bureau Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              {language === 'ar' ? 'الاتصال والمقر' : 'BUREAU & CONTACT'}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>{language === 'ar' ? CABINET_CONFIG.addressAr : CABINET_CONFIG.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <div className="font-mono text-white" dir="ltr">
                  <a href={`tel:${CABINET_CONFIG.phone1Raw}`} className="hover:text-orange-400">
                    {CABINET_CONFIG.phone1}
                  </a>
                  <span className="mx-1 text-slate-500">/</span>
                  <a href={`tel:${CABINET_CONFIG.phone2Raw}`} className="hover:text-orange-400">
                    {CABINET_CONFIG.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a href={`mailto:${CABINET_CONFIG.email}`} className="font-mono hover:text-orange-400 underline">
                  {CABINET_CONFIG.email}
                </a>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${CABINET_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/30 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp : {CABINET_CONFIG.phone1}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Meta Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SETAU - Bureau d'Études Topographie & Aménagement Urbain. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'Tous droits réservés.'}
          </div>
          <div className="flex items-center gap-6">
            <span className="text-orange-400/80 font-mono">
              Wilaya de Mila • Algérie
            </span>
            <a href="#accueil" className="hover:text-white transition-colors">
              {language === 'ar' ? 'الرجوع للأعلى ↑' : 'Haut de page ↑'}
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
}
