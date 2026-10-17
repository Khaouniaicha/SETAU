'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CABINET_CONFIG } from '@/lib/config';
import { Home, Layers, FileEdit, MessageCircle, Phone } from 'lucide-react';

export default function MobileBottomNav() {
  const { t, language } = useLanguage();

  const whatsappUrl = `https://wa.me/${CABINET_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour M. Karim Salhi, je souhaite obtenir un devis pour des travaux avec le bureau SETAU."
  )}`;

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-lg border-t border-orange-200/60 dark:border-slate-800 px-3 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-around">
        
        {/* Home */}
        <a 
          href="#accueil"
          className="flex flex-col items-center justify-center py-1 text-slate-600 dark:text-slate-400 hover:text-orange-600 text-[10px] font-medium"
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span>{t('bottomNavHome')}</span>
        </a>

        {/* Services */}
        <a 
          href="#services"
          className="flex flex-col items-center justify-center py-1 text-slate-600 dark:text-slate-400 hover:text-orange-600 text-[10px] font-medium"
        >
          <Layers className="w-5 h-5 mb-0.5" />
          <span>{t('bottomNavServices')}</span>
        </a>

        {/* Floating Devis Express Button in Orange */}
        <a 
          href="#contact"
          className="flex flex-col items-center justify-center -mt-6 group"
        >
          <div className="w-12 h-12 rounded-full bg-orange-600 group-hover:bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-600/40 border-4 border-white dark:border-[#090d16] transition-transform group-hover:scale-105">
            <FileEdit className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 mt-1">
            {t('bottomNavDevis')}
          </span>
        </a>

        {/* WhatsApp */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#25D366] hover:text-[#20ba59] text-[10px] font-medium"
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span>{t('bottomNavWhatsApp')}</span>
        </a>

        {/* Call */}
        <a 
          href={`tel:${CABINET_CONFIG.phone1Raw}`}
          className="flex flex-col items-center justify-center py-1 text-slate-600 dark:text-slate-400 hover:text-orange-600 text-[10px] font-medium"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span>{t('bottomNavCall')}</span>
        </a>

      </div>
    </nav>
  );
}
