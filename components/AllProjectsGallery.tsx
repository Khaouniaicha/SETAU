'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ALL_SETAU_IMAGES, GalleryImage } from '@/lib/galleryData';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ArrowRight,
  Maximize2,
  MapPin,
  Layers,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface AllProjectsGalleryProps {
  isFullPage?: boolean;
}

export default function AllProjectsGallery({ isFullPage = false }: AllProjectsGalleryProps) {
  const { language, isRtl } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [displayCount, setDisplayCount] = useState<number>(18);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Selected 6 featured flagship projects matching authentic folder names (Rail, Highways, Energy, Water, Industry, Land)
  const FEATURED_HOME_PROJECTS = [
    ALL_SETAU_IMAGES[65], // Tindouf - Béchar Mining Railway (950 km)
    ALL_SETAU_IMAGES[46], // RN 1 Highway Doubling - Ghardaïa
    ALL_SETAU_IMAGES[58], // Sonatrach Gas Boosting Station - Hassi R'Mel
    ALL_SETAU_IMAGES[31], // Seawater Desalination Mega-Plant - El Tarf
    ALL_SETAU_IMAGES[26], // Complexe Sidérurgique de Bellara - El Milia
    ALL_SETAU_IMAGES[39], // Division parcellaire & calcul de contenance - Messaoud Boudjriou Constantine
  ];

  const filteredImages = activeFilter === 'all'
    ? ALL_SETAU_IMAGES
    : ALL_SETAU_IMAGES.filter(img => img.category === activeFilter);

  const displayedImages = isFullPage 
    ? filteredImages.slice(0, displayCount)
    : FEATURED_HOME_PROJECTS;

  const filterTabs = [
    { id: 'all', labelAr: `جميع الأعمال والورشات (${ALL_SETAU_IMAGES.length})`, labelFr: `Tous les travaux (${ALL_SETAU_IMAGES.length})` },
    { id: 'terrassement_vrd', labelAr: 'حفر وشبكات VRD ومياه', labelFr: 'Terrassement & VRD' },
    { id: 'foncier_bornage', labelAr: 'قسمة ومسح وتجزئة عقارية', labelFr: 'Foncier & Bornage' },
    { id: 'routes_rail', labelAr: 'طرق ومنشآت كبرى', labelFr: 'Routes & Rail' },
    { id: 'energie_industrie', labelAr: 'طاقة ومصانع', labelFr: 'Énergie & Industrie' },
    { id: 'chantiers_setau', labelAr: 'أجهزة وميدان SETAU', labelFr: 'Équipe & Matériel' },
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        const pool = isFullPage ? filteredImages : FEATURED_HOME_PROJECTS;
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % pool.length : null));
      }
      if (e.key === 'ArrowLeft') {
        const pool = isFullPage ? filteredImages : FEATURED_HOME_PROJECTS;
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + pool.length) % pool.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, isFullPage, filteredImages]);

  const activePhotoPool = isFullPage ? filteredImages : FEATURED_HOME_PROJECTS;
  const activePhoto = lightboxIndex !== null ? activePhotoPool[lightboxIndex] : null;

  return (
    <section id="realisations" className="py-16 md:py-24 bg-[#f8f9fa] dark:bg-[#0c1222] border-b border-orange-100 dark:border-slate-800 transition-colors">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Section Head Rule */}
        <div className="section-head mb-12">
          <div className="rule">
            <span className="eyebrow">
              {language === 'ar' ? 'سجل الأعمال والمشاريع الميدانية' : 'RÉALISATIONS SUR LE TERRAIN'}
            </span>
            <span className="tags hidden sm:inline">
              {language === 'ar' 
                ? 'توثيق ميداني حقيقي • ولاية ميلة والشرق الجزائري' 
                : 'DOCUMENTATION TERRAIN • WILAYA DE MILA & EST'}
            </span>
          </div>
          <h2>
            {language === 'ar' ? (
              <>
                نماذج من أعمالنا الميدانية في <em>مختلف الورشات والمشاريع</em>
              </>
            ) : (
              <>
                Aperçu de nos interventions sur le terrain et <em>chantiers réels</em>
              </>
            )}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            {language === 'ar'
              ? 'مكتب SETAU يوثق تدخلاته الميدانية بشفافية كاملة: أعمال التوقيع، الرفع الطوبوغرافي، مسح الأراضي، وحساب كميات الحفر والردم.'
              : 'Découvrez une sélection de nos interventions métrologiques : levés parcellaires, implantations d\'ouvrages, calculs MNT et suivi de chantiers.'}
          </p>
        </div>

        {/* Filter Tabs only shown on Full Page */}
        {isFullPage && (
          <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mb-10">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id);
                  setDisplayCount(18);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-slate-800'
                }`}
              >
                {language === 'ar' ? tab.labelAr : tab.labelFr}
              </button>
            ))}
          </div>
        )}

        {/* Selected Featured Projects Grid (3 cols on desktop, uniform card heights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(index)}
              className="group bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer h-full"
            >
              {/* Photo Container with Fixed Aspect Ratio & Lazy Loading */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <Image
                  src={img.src}
                  alt={`${language === 'ar' ? img.titleAr : img.titleFr} - ${img.wilaya} | مكتب SETAU`}
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Badges: Wilaya + Category */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-900 bg-white/95 dark:bg-slate-900/90 dark:text-white px-2.5 py-1 rounded-full shadow-md backdrop-blur-sm">
                    <MapPin className="w-3 h-3 text-orange-600 shrink-0" />
                    <span>{img.wilaya}</span>
                  </span>

                  <span className="text-[10px] font-bold text-orange-700 dark:text-orange-300 bg-orange-100/95 dark:bg-orange-950/90 px-2 py-0.5 rounded-full border border-orange-200 dark:border-orange-800/60 shadow-sm backdrop-blur-sm">
                    {language === 'ar' ? img.categoryAr : img.categoryFr}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-orange-600 text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                {img.projectNameAr && (
                  <div className="text-[11px] font-bold text-orange-600 dark:text-orange-400 mb-1.5 flex items-center gap-1.5 line-clamp-1">
                    <Layers className="w-3.5 h-3.5 shrink-0" />
                    <span>{language === 'ar' ? img.projectNameAr : img.projectNameFr}</span>
                  </div>
                )}

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug mb-2">
                  {language === 'ar' ? img.titleAr : img.titleFr}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4 flex-1">
                  {language === 'ar' ? img.descAr : img.descFr}
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-orange-600 dark:text-orange-400 font-bold">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>{language === 'ar' ? 'إشراف مكتب SETAU' : 'Réalisé par SETAU'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] group-hover:underline">
                    <span>{language === 'ar' ? 'معاينة مكبرة' : 'Agrandir'}</span>
                    <Maximize2 className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HOME PAGE CALL TO ACTION: Open Full Gallery */}
        {!isFullPage && (
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 dark:bg-orange-600 text-white hover:bg-orange-600 dark:hover:bg-orange-500 font-extrabold text-sm sm:text-base shadow-xl shadow-slate-950/20 hover:scale-105 active:scale-95 transition-all group"
            >
              <span>
                {language === 'ar' 
                  ? `عرض جميع المشاريع الميدانية والعتاد (${ALL_SETAU_IMAGES.length} صورة موثقة)`
                  : `Explorer la galerie complète des ${ALL_SETAU_IMAGES.length} chantiers & matériel`}
              </span>
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-medium">
              {language === 'ar' 
                ? 'تصفح كافة أعمال الرفع، الحفر، الطرق، والمسح العقاري حسب التصنيف والولاية' 
                : 'Accédez à l\'ensemble des reportages photographiques classés par catégorie et région'}
            </p>
          </div>
        )}

        {/* FULL PAGE LOAD MORE BUTTON */}
        {isFullPage && displayCount < filteredImages.length && (
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

      {/* ========================================================
          FULLSCREEN LIGHTBOX MODAL WITH TECHNICAL DETAILS
          ======================================================== */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#0a0f1d] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {/* Top Bar with Title and Close Button */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-[#070b14] text-white">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="p-1.5 rounded-lg bg-orange-600 text-white shrink-0">
                  <Layers className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  {activePhoto.projectNameAr && (
                    <div className="text-[11px] font-bold text-orange-400 truncate">
                      {language === 'ar' ? activePhoto.projectNameAr : activePhoto.projectNameFr}
                    </div>
                  )}
                  <h4 className="text-sm sm:text-base font-bold text-white truncate">
                    {language === 'ar' ? activePhoto.titleAr : activePhoto.titleFr}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                    <span className="text-orange-400 font-semibold">{activePhoto.wilaya}</span>
                    <span>•</span>
                    <span>{language === 'ar' ? activePhoto.categoryAr : activePhoto.categoryFr}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Viewport */}
            <div className="relative flex-1 min-h-[50vh] sm:min-h-[60vh] bg-black">
              <Image
                src={activePhoto.src}
                alt={`${language === 'ar' ? activePhoto.titleAr : activePhoto.titleFr} - ${activePhoto.wilaya}`}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
                priority
              />

              {/* Prev / Next Nav Buttons */}
              <button
                onClick={() => {
                  setLightboxIndex((prev) => (prev !== null ? (prev - 1 + activePhotoPool.length) % activePhotoPool.length : 0));
                }}
                className={`absolute top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-orange-600 text-white transition-all shadow-lg ${
                  isRtl ? 'right-4' : 'left-4'
                }`}
                aria-label="Précédent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => {
                  setLightboxIndex((prev) => (prev !== null ? (prev + 1) % activePhotoPool.length : 0));
                }}
                className={`absolute top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-orange-600 text-white transition-all shadow-lg ${
                  isRtl ? 'left-4' : 'right-4'
                }`}
                aria-label="Suivant"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption & Description */}
            <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#070b14] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="text-slate-300 max-w-2xl leading-relaxed">
                {language === 'ar' ? activePhoto.descAr : activePhoto.descFr}
              </div>
              <div className="shrink-0 font-mono text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                {lightboxIndex !== null ? lightboxIndex + 1 : 1} / {activePhotoPool.length}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
