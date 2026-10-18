'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CABINET_CONFIG } from '@/lib/config';
import QrModal from '@/components/QrModal';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowUpRight, 
  MessageCircle,
  Compass,
  Building2,
  TreePine,
  Layers,
  Activity,
  ShieldCheck,
  Search,
  FileText,
  QrCode
} from 'lucide-react';

export default function Header() {
  const { language, setLanguage, isRtl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Services exactly matching the user's uploaded Geomexpert screenshot
  const GEOMEXPERT_SERVICES = [
    {
      id: 'foncier',
      titleFr: 'Foncier',
      titleAr: 'المسح العقاري والحدود',
      subFr: 'la garantie de vos limites',
      subAr: 'حماية وتثبيت حدود الملكيات العقارية',
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      bg: 'bg-emerald-600',
    },
    {
      id: 'domaine-public',
      titleFr: 'Domaine public',
      titleAr: 'المرافق والملك العام',
      subFr: 'au service des collectivités',
      subAr: 'في خدمة الجماعات المحلية والولايات',
      icon: <Building2 className="w-5 h-5 text-white" />,
      bg: 'bg-emerald-700',
    },
    {
      id: 'amenagement-foncier',
      titleFr: 'Aménagement foncier',
      titleAr: 'التهيئة وتقسيم الأراضي',
      subFr: 'au cœur du territoire rural',
      subAr: 'في قلب الأراضي الفلاحية والريفية',
      icon: <TreePine className="w-5 h-5 text-white" />,
      bg: 'bg-teal-600',
    },
    {
      id: 'copropriete',
      titleFr: 'Copropriété & division en volumes',
      titleAr: 'الملكية المشتركة والتقسيم الحجمي',
      subFr: 'gestion rigoureuse de votre immeuble',
      subAr: 'تسيير وتجزئة حجمية دقيقة للعقارات',
      icon: <Layers className="w-5 h-5 text-white" />,
      bg: 'bg-slate-800',
    },
    {
      id: 'topo',
      titleFr: 'Topographie',
      titleAr: 'الرفع الطوبوغرافي  ',
      subFr: 'sous toutes ses formes',
      subAr: 'رفع دقيق بمختلف المقاييس والتقنيات',
      icon: <Compass className="w-5 h-5 text-white" />,
      bg: 'bg-orange-600',
      active: true, // As shown highlighted in the user's screenshot
    },
    {
      id: 'releves-architecturaux',
      titleFr: 'Relevés architecturaux',
      titleAr: 'المسوحات المعمارية والتراث',
      subFr: 'au service du patrimoine',
      subAr: 'توثيق المباني والحفاظ على التراث',
      icon: <Activity className="w-5 h-5 text-white" />,
      bg: 'bg-emerald-600',
    },
    {
      id: 'detection-reseaux',
      titleFr: 'Détection de réseaux',
      titleAr: 'كشف ومطابقة الشبكات (VRD)',
      subFr: 'savoir ce qui se trame sous vos pieds',
      subAr: 'مخططات المطابقة لشبكات المياه والغاز',
      icon: <Search className="w-5 h-5 text-white" />,
      bg: 'bg-cyan-700',
    },
  ];

  const handleServiceClick = (targetId: string) => {
    setServicesMenuOpen(false);
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Sticky Navbar (Exact Dark Modern Mockup Style) */}
      <header 
        className={`sticky top-0 z-50 text-white border-b border-slate-800/80 py-2 sm:py-2.5 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#090d16]/95 backdrop-blur-md shadow-xl shadow-black/40' 
            : 'bg-[#090d16]'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-6">
          
          {/* Brand Lockup with Reticle Icon */}
          <a href="/#accueil" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center shadow-lg shadow-orange-600/30 group-hover:scale-105 transition-transform flex-shrink-0">
              <Compass className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-2xl tracking-tight text-white uppercase font-sans">
                  SETAU
                </span>
              </div>
              <p className="text-[10px] font-medium text-slate-400 leading-none mt-1">
                {language === 'ar' ? 'مكتب دراسات في الطوبوغرافيا والتهيئة العمرانية' : "Bureau d'Études en Topographie & Aménagement Urbain"}
              </p>
            </div>
          </a>

          {/* Desktop Nav Grid matching exact mockup order */}
          <nav className="hidden lg:flex items-center gap-7 relative">
            
            <a 
              href="/#accueil"
              className="relative text-sm font-bold text-white hover:text-orange-400 py-1 transition-colors group"
            >
              <span>{language === 'ar' ? 'الرئيسية' : 'Accueil'}</span>
              <span className="absolute -bottom-1.5 inset-x-0 h-0.5 bg-orange-500 rounded-full"></span>
            </a>

            <a 
              href="/#apropos"
              className="text-sm font-medium text-slate-300 hover:text-orange-400 py-1 transition-colors"
            >
              <span>{language === 'ar' ? 'عن المكتب' : 'À propos'}</span>
            </a>

            {/* SERVICES DROPDOWN */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <button 
                onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                className="text-sm font-medium text-slate-300 hover:text-orange-400 py-1 flex items-center gap-1.5 transition-colors"
                aria-expanded={servicesMenuOpen}
              >
                <span>{language === 'ar' ? 'الخدمات الطوبوغرافية' : 'Services'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesMenuOpen ? 'rotate-180 text-orange-400' : 'text-slate-400'}`} />
              </button>

              {/* FLOATING DROPDOWN MENU */}
              {servicesMenuOpen && (
                <div 
                  className={`absolute top-full mt-3 w-[370px] bg-[#0c1222] rounded-2xl p-3 shadow-[0_24px_60px_rgba(0,0,0,0.6)] border border-slate-800 z-50 animate-in fade-in zoom-in-95 duration-200 ${
                    isRtl ? 'right-0' : 'left-0'
                  }`}
                >
                  <div className="space-y-1">
                    {GEOMEXPERT_SERVICES.map((srv) => (
                      <div
                        key={srv.id}
                        onClick={() => handleServiceClick(srv.id)}
                        className="flex items-center gap-3.5 p-2.5 rounded-xl cursor-pointer hover:bg-slate-800/80 transition-colors group"
                      >
                        <div className={`w-9 h-9 rounded-full ${srv.bg} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                          {srv.icon}
                        </div>
                        <div className="flex flex-col text-start">
                          <strong className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                            {language === 'ar' ? srv.titleAr : srv.titleFr}
                          </strong>
                          <span className="text-[11px] text-slate-400 font-medium leading-none mt-1">
                            {language === 'ar' ? srv.subAr : srv.subFr}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dropdown Bottom Link */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between px-2 text-xs">
                    <span className="text-slate-400 font-medium text-[11px]">
                      {language === 'ar' ? '14 خدمة معتمدة لدى SETAU' : '14 prestations homologuées'}
                    </span>
                    <a 
                      href="/#services" 
                      onClick={() => setServicesMenuOpen(false)}
                      className="font-bold text-orange-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>{language === 'ar' ? 'عرض الكل' : 'Voir tout'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="/galerie"
              className="text-sm font-medium text-slate-300 hover:text-orange-400 py-1 transition-colors"
            >
              <span>{language === 'ar' ? 'المشاريع والعتاد' : 'Projets & Matériel'}</span>
            </a>

            <a 
              href="/#contact"
              className="text-sm font-medium text-slate-300 hover:text-orange-400 py-1 transition-colors"
            >
              <span>{language === 'ar' ? 'اتصل بنا' : 'Contact'}</span>
            </a>
          </nav>

          {/* Clean Action Cluster: Compact Language Switcher + Primary Quote Button */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            
            {/* Quick Hotline: Clean & Subtle on Very Large Screens Only */}
            <a
              href={`tel:${CABINET_CONFIG.phone1Raw}`}
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-orange-400 hover:border-orange-500/40 text-xs font-mono transition-all"
              dir="ltr"
              title={language === 'ar' ? 'اتصال مباشر بالمكتب' : 'Appeler directement'}
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>0670 20 58 47</span>
            </a>

            {/* Compact 2-Option Language Switcher (AR / FR) */}
            <div className="inline-flex items-center bg-slate-900/90 rounded-full p-0.5 text-[11px] font-bold border border-slate-800">
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 rounded-full transition-all ${
                  language === 'ar'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label="النسخة العربية"
              >
                العربية
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'fr'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Version Française"
              >
                FR
              </button>
            </div>

            {/* Primary Action Button: Prominent & High-Contrast */}
            <a 
              href="/#contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 group shrink-0"
              aria-label={language === 'ar' ? 'طلب تسعيرة' : 'Demander un devis'}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>{language === 'ar' ? 'طلب تسعيرة' : 'DEMANDER UN DEVIS'}</span>
            </a>

            {/* Mobile Hamburger Toggle with Accessible Touch Target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-slate-800 text-slate-300 hover:text-orange-400 hover:border-orange-500 transition-colors flex items-center justify-center min-w-[38px] min-h-[38px]"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[64px] bottom-0 z-40 bg-[#090d16]/98 backdrop-blur-xl border-t border-slate-800 p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-3">
            
            <a 
              href="/#accueil" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-base font-bold border-b border-slate-800/80 text-white hover:text-orange-400 transition-colors"
            >
              {language === 'ar' ? 'الرئيسية' : 'Accueil'}
            </a>

            <a 
              href="/#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-base font-bold border-b border-slate-800/80 text-white hover:text-orange-400 transition-colors"
            >
              {language === 'ar' ? 'الخدمات الطوبوغرافية' : 'Services Topographiques'}
            </a>

            <a 
              href="/#apropos" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-base font-bold border-b border-slate-800/80 text-white hover:text-orange-400 transition-colors"
            >
              {language === 'ar' ? 'عن المكتب ومعداتنا' : 'À Propos de SETAU'}
            </a>

            <a 
              href="/#materiel" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-base font-bold border-b border-slate-800/80 text-white hover:text-orange-400 transition-colors"
            >
              {language === 'ar' ? 'العتاد والتجهيزات (Leica)' : 'Matériel & Équipements Leica'}
            </a>

            <a 
              href="/galerie" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-base font-bold border-b border-slate-800/80 text-orange-400 flex items-center justify-between"
            >
              <span>{language === 'ar' ? 'معرض الورشات والمشاريع الميدانية' : 'Galerie & Chantiers'}</span>
            </a>

            <a 
              href="/#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-base font-bold border-b border-slate-800/80 text-white hover:text-orange-400 transition-colors"
            >
              {language === 'ar' ? 'اتصل بنا' : 'Contact'}
            </a>

            {/* Mobile Actions */}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
              >
                <FileText className="w-5 h-5" />
                <span>{language === 'ar' ? 'طلب تسعيرة رسمية' : 'Demander un devis'}</span>
              </a>

              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); setQrModalOpen(true); }}
                className="w-full py-3 px-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white font-bold text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <QrCode className="w-4 h-4 text-orange-400" />
                <span>{language === 'ar' ? 'بطاقة الاتصال الذكية (QR vCard)' : 'Carte de contact vCard (QR)'}</span>
              </button>

              <a
                href={`tel:${CABINET_CONFIG.phone1Raw}`}
                className="w-full py-3 px-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white font-bold text-center flex items-center justify-center gap-2 font-mono"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>{CABINET_CONFIG.phone1}</span>
              </a>

              <a
                href={`https://wa.me/${CABINET_CONFIG.whatsappNumber}?text=${encodeURIComponent('Bonjour M. Karim Salhi, je souhaite une étude topographique / devis.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Interactive QR Contact Modal */}
      <QrModal isOpen={qrModalOpen} onClose={() => setQrModalOpen(false)} />
    </>
  );
}
