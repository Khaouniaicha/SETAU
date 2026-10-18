'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import MaterielSection from '@/components/MaterielSection';
import AllProjectsGallery from '@/components/AllProjectsGallery';
import ContactCta from '@/components/ContactCta';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import SectionRail from '@/components/SectionRail';
import { useLanguage } from '@/context/LanguageContext';
import { Compass, Cpu, Layers, ArrowUpRight, ArrowLeft } from 'lucide-react';

export default function GaleriePage() {
  const { language, isRtl } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] dark:bg-[#090d16] selection:bg-orange-500 selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* Floating Section Navigation Dots Rail */}
      <SectionRail />

      <main className="flex-1">
        
        {/* Gallery Dedicated Editorial Hero */}
        <section className="relative py-20 lg:py-28 bg-[#090d16] text-white overflow-hidden border-b border-orange-500/20">
          {/* Subtle Topo Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
            <span className="text-[25vw] font-black tracking-tighter">GALERIE</span>
          </div>

          <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8">
            
            {/* Return link */}
            <div className="mb-6">
              <a 
                href="/" 
                className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                <span>{language === 'ar' ? 'الرجوع إلى الصفحة الرئيسية' : 'Retour à l\'accueil'}</span>
              </a>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 text-orange-400 font-bold uppercase tracking-[0.22em] text-xs sm:text-sm mb-4">
              <span className="w-8 h-0.5 bg-orange-500"></span>
              <span>
                {language === 'ar' 
                  ? 'المعرض المتخصص للأشغال والعتاد الطوبوغرافي' 
                  : 'ESPACE MÉDIAS & DOCUMENTATION MÉTROLOGIQUE'}
              </span>
            </div>

            {/* Editorial Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl mb-6">
              {language === 'ar' ? (
                <>
                  أرشيف المشاريع الميدانية <br />
                  والتجهيزات الهندسية <em className="font-serif italic font-normal text-orange-400">عالية الدقة</em>
                </>
              ) : (
                <>
                  Galerie Intégrale des Chantiers & <br />
                  du Matériel de Pointe d'<em className="font-serif italic font-normal text-orange-400">Exception</em>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {language === 'ar'
                ? 'توثيق بصري شامل لكافة الورشات الميدانية الكبرى والصغرى المنجزة من طرف مكتب SETAU ,  العتاد  Leica Geosystems المستخدم في القياسات الدقيقة.'
                : 'Documentation visuelle complète des chantiers réalisés par le bureau SETAU et du matériel Leica Geosystems utilisé pour les mesures de haute précision.'}
            </p>

            {/* Quick Filter Jumps */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="#materiel" 
                className="pill pill--orange text-xs"
              >
                <span className="dot">
                  <Cpu className="w-4 h-4" />
                </span>
                <span>{language === 'ar' ? 'العتاد والتجهيزات (Leica)' : 'MATÉRIEL & ÉQUIPEMENTS'}</span>
              </a>

              <a 
                href="#realisations" 
                className="pill pill--ghost text-xs"
              >
                <span className="dot">
                  <Layers className="w-4 h-4 text-orange-400" />
                </span>
                <span>{language === 'ar' ? 'أرشيف كافة المشاريع الميدانية' : 'TOUTES LES RÉALISATIONS'}</span>
              </a>
            </div>

          </div>
        </section>

        {/* 1. Équipements & Matériel Leica Section (Images + Specs + Descriptions) */}
        <MaterielSection />

        {/* 2. Full 66 Field Projects & Real Photos Archive with Lightbox */}
        <AllProjectsGallery isFullPage={true} />

        {/* 3. Circular Orbit CTA Section */}
        <ContactCta />

      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}
