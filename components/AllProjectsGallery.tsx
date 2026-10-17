'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ALL_SETAU_IMAGES } from '@/lib/galleryData';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ArrowRight,
  Maximize2
} from 'lucide-react';

export default function AllProjectsGallery() {
  const { language, isRtl } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [displayCount, setDisplayCount] = useState<number>(18);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeFilter === 'all'
    ? ALL_SETAU_IMAGES
    : ALL_SETAU_IMAGES.filter(img => img.category === activeFilter);

  const displayedImages = filteredImages.slice(0, displayCount);

  const filterTabs = [
    { id: 'all', labelAr: `جميع الأعمال والورشات (${ALL_SETAU_IMAGES.length})`, labelFr: `Tous les travaux (${ALL_SETAU_IMAGES.length})` },
    { id: 'routes_rail', labelAr: 'طرق وسكك حديدية', labelFr: 'Routes & Rail' },
    { id: 'energie_industrie', labelAr: 'طاقة ومصانع وتحلية', labelFr: 'Énergie & Industrie' },
    { id: 'terrassement_vrd', labelAr: 'حفر وشبكات VRD ومياه', labelFr: 'Terrassement & VRD' },
    { id: 'foncier_bornage', labelAr: 'قسمة ومسح وتجزئة', labelFr: 'Foncier & Bornage' },
    { id: 'chantiers_setau', labelAr: 'أجهزة وفرق عمل SETAU', labelFr: 'Équipe & Matériel' },
  ];

  // Featured flagship works for the Geomexpert horizontal carousel
  const FEATURED_CAROUSEL_PROJECTS = ALL_SETAU_IMAGES.slice(0, 8);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const activePhoto = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <section id="realisations" className="py-20 lg:py-28 bg-[#f8f9fa] dark:bg-[#0c1222] border-b border-orange-100 dark:border-slate-800 transition-colors">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Geomexpert Section Head Rule */}
        <div className="section-head">
          <div className="rule">
            <span className="eyebrow">
              {language === 'ar' ? 'سجل الأعمال والمشاريع الميدانية' : 'RÉALISATIONS SUR LE TERRAIN'}
            </span>
            <span className="tags hidden sm:inline">
              {language === 'ar' 
                ? 'معرض الخدمات' 
                : 'GALERIE DES PRESTATIONS & SERVICES'}
            </span>
          </div>
          <h2>
            {language === 'ar' ? (
              <>
                دقة الإنجاز الميداني في كبرى <em>المشاريع الوطنية والخاصة</em>
              </>
            ) : (
              <>
                L'exigence du terrain sur les plus grands <em>chantiers d'Algérie</em>
              </>
            )}
          </h2>
        </div>

        {/* ========================================================
            PART 1: GEOMEXPERT HORIZONTAL CAROUSEL (MAJOR PROJECTS)
            ======================================================== */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                {language === 'ar' ? 'أبرز المشاريع الإستراتيجية' : 'PROJETS EMBLÉMATIQUES'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {language === 'ar' ? 'معرض المشاريع الكبرى المختارة' : 'Aperçu des mégachantiers nationaux'}
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span>{language === 'ar' ? 'اسحب للتصفح ←' : 'Faire défiler →'}</span>
            </div>
          </div>

          {/* Carousel Track */}
          <div className="real-carousel-track">
            {FEATURED_CAROUSEL_PROJECTS.map((proj, idx) => (
              <div 
                key={proj.id}
                className="real-card group cursor-pointer"
                onClick={() => {
                  const targetIdx = filteredImages.findIndex(img => img.id === proj.id);
                  setLightboxIndex(targetIdx !== -1 ? targetIdx : 0);
                }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={proj.src}
                    alt={language === 'ar' ? proj.titleAr : proj.titleFr}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Tag */}
                  <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-orange-600 text-white shadow-md">
                    {language === 'ar' ? proj.categoryAr : proj.categoryFr}
                  </span>
                </div>

                {/* Card Text Content (Geomexpert dark banner) */}
                <div className="p-5 bg-[#090d16] text-white flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold text-orange-400 uppercase tracking-wider mb-1.5 gap-2">
                    <span className="truncate">{language === 'ar' ? proj.categoryAr : proj.categoryFr}</span>
                    <span className="text-slate-400 font-sans font-medium text-[11px] shrink-0 bg-white/5 px-2 py-0.5 rounded-full">{proj.wilaya}</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors leading-snug line-clamp-2">
                    {language === 'ar' ? proj.titleAr : proj.titleFr}
                  </h4>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span className="text-[11px]">SETAU • Topo</span>
                    <span className="inline-flex items-center gap-1 font-bold text-orange-400">
                      <span>{language === 'ar' ? 'عرض التفاصيل' : 'DÉTAILS'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 2: COMPLETE 66 REAL FIELD PHOTOS GALLERY
            ======================================================== */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                {language === 'ar' ? 'التوثيق الشامل' : 'CATALOGUE COMPLET'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {language === 'ar' 
                  ? `أرشيف الصور الميدانية الحقيقية (${ALL_SETAU_IMAGES.length} صورة)`
                  : `Galerie intégrale des travaux réels (${ALL_SETAU_IMAGES.length} photos)`}
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              {filterTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveFilter(tab.id);
                    setDisplayCount(18);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === tab.id
                      ? 'bg-orange-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {language === 'ar' ? tab.labelAr : tab.labelFr}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of 66 Real Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedImages.map((img, index) => (
              <div
                key={img.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all cursor-pointer aspect-[4/3]"
              >
                <Image
                  src={img.src}
                  alt={language === 'ar' ? img.titleAr : img.titleFr}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 text-white">
                  <div className="flex items-center justify-between gap-1.5 mb-1">
                    <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest truncate">
                      {language === 'ar' ? img.categoryAr : img.categoryFr}
                    </span>
                    <span className="text-[9px] font-semibold text-slate-300 bg-white/15 px-2 py-0.5 rounded-full shrink-0">
                      {img.wilaya}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-tight">
                    {language === 'ar' ? img.titleAr : img.titleFr}
                  </h4>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="text-[10px] font-mono text-slate-400">SETAU • #{img.id.replace('img-', '')}</span>
                    <span className="p-1 rounded-full bg-orange-600 text-white shadow-sm">
                      <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Permanent subtle tag for mobile */}
                <div className="absolute bottom-2 left-2 group-hover:opacity-0 transition-opacity px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-mono">
                  #{img.id}
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {displayCount < filteredImages.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setDisplayCount(prev => Math.min(prev + 18, filteredImages.length))}
                className="pill pill--orange"
              >
                <span className="dot">
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </span>
                <span className="uppercase text-xs sm:text-sm tracking-wider">
                  {language === 'ar' 
                    ? `عرض المزيد من صور المشاريع (${filteredImages.length - displayCount} متبقية)` 
                    : `Afficher plus de réalisations (${filteredImages.length - displayCount} restantes)`}
                </span>
              </button>
            </div>
          )}

        </div>

      </div>

      {/* ========================================================
          FULLSCREEN LIGHTBOX MODAL WITH ZOOM & DETAILS
          ======================================================== */}
      {activePhoto && lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-orange-600 text-xs font-bold font-mono">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
              <span className="text-sm font-semibold text-slate-300">
                {language === 'ar' ? activePhoto.categoryAr : activePhoto.categoryFr}
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Image Container */}
          <div 
            className="relative flex-1 w-full max-w-5xl mx-auto my-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt={language === 'ar' ? activePhoto.titleAr : activePhoto.titleFr}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />

            {/* Prev / Next Buttons */}
            <button
              onClick={() => setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-orange-600 text-white transition-all shadow-lg"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredImages.length)}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-orange-600 text-white transition-all shadow-lg"
              aria-label="Suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div 
            className="max-w-3xl mx-auto text-center text-white bg-slate-900/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 z-10 shadow-2xl space-y-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-600/30 border border-orange-500/40 text-orange-400 text-xs font-bold font-mono">
                {language === 'ar' ? activePhoto.categoryAr : activePhoto.categoryFr}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                📍 {activePhoto.wilaya}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-400 text-xs font-mono">
                #{activePhoto.id}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-extrabold text-white">
              {language === 'ar' ? activePhoto.titleAr : activePhoto.titleFr}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {language === 'ar' ? activePhoto.descAr : activePhoto.descFr}
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
