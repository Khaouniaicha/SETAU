'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  ALL_SETAU_IMAGES, 
  SETAU_PROJECTS, 
  ProjectItem, 
  GalleryImage 
} from '@/lib/galleryData';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ArrowRight,
  Maximize2,
  MapPin,
  Layers,
  ShieldCheck,
  Camera,
  FolderKanban,
  Grid,
  Sparkles
} from 'lucide-react';

interface AllProjectsGalleryProps {
  isFullPage?: boolean;
}

export default function AllProjectsGallery({ isFullPage = false }: AllProjectsGalleryProps) {
  const { language, isRtl } = useLanguage();
  const [viewMode, setViewMode] = useState<'projects' | 'photos'>('projects');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [displayCount, setDisplayCount] = useState<number>(18);
  
  // Lightbox state
  const [activePhotoPool, setActivePhotoPool] = useState<GalleryImage[]>(ALL_SETAU_IMAGES);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Top 6 flagship projects for the home page (Rail, Highways, Energy, Water, Steel, Land division)
  const FEATURED_HOME_PROJECTS: ProjectItem[] = [
    SETAU_PROJECTS[0], // Tindouf - Béchar Mining Railway (950 km)
    SETAU_PROJECTS[1], // RN 1 Highway Doubling - Ghardaïa (12 photos)
    SETAU_PROJECTS[2], // Sonatrach Gas Boosting Station - Hassi R'Mel (7 photos)
    SETAU_PROJECTS[3], // Seawater Desalination Mega-Plant - El Tarf (8 photos)
    SETAU_PROJECTS[4], // Complexe Sidérurgique de Bellara - El Milia (5 photos)
    SETAU_PROJECTS[5], // Division parcellaire & calcul de contenance - Messaoud Boudjriou Constantine (4 photos)
  ];

  // Filtering for projects
  const filteredProjects = activeCategory === 'all'
    ? SETAU_PROJECTS
    : SETAU_PROJECTS.filter(p => p.category === activeCategory);

  // Filtering for raw photos
  const filteredPhotos = activeCategory === 'all'
    ? ALL_SETAU_IMAGES
    : ALL_SETAU_IMAGES.filter(img => img.category === activeCategory);

  const displayedPhotos = isFullPage 
    ? filteredPhotos.slice(0, displayCount)
    : ALL_SETAU_IMAGES.slice(0, 6);

  const categoryFilterTabs = [
    { id: 'all', labelAr: 'جميع المشاريع والورشات', labelFr: 'Tous les projets' },
    { id: 'routes_rail', labelAr: 'طرق وسكك حديدية', labelFr: 'Routes & Rail' },
    { id: 'energie_industrie', labelAr: 'طاقة ومنشآت صناعية', labelFr: 'Énergie & Industrie' },
    { id: 'foncier_bornage', labelAr: 'مسح وقسمة عقارية', labelFr: 'Foncier & Bornage' },
    { id: 'terrassement_vrd', labelAr: 'حفر وشبكات VRD ومياه', labelFr: 'Terrassement & VRD' },
    { id: 'chantiers_setau', labelAr: 'أجهزة وميدان SETAU', labelFr: 'Équipe & Matériel' },
  ];

  // Helper to open project photos in lightbox
  const openProjectPhotos = (project: ProjectItem) => {
    setActivePhotoPool(project.photos);
    setLightboxIndex(0);
  };

  // Helper to open single photo in lightbox
  const openSinglePhoto = (pool: GalleryImage[], index: number) => {
    setActivePhotoPool(pool);
    setLightboxIndex(index);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % activePhotoPool.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + activePhotoPool.length) % activePhotoPool.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, activePhotoPool]);

  const activePhoto = lightboxIndex !== null ? activePhotoPool[lightboxIndex] : null;

  return (
    <section id="realisations" className="py-16 md:py-24 bg-[#f8f9fa] dark:bg-[#0c1222] border-b border-orange-100 dark:border-slate-800 transition-colors">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Section Head Rule */}
        <div className="section-head mb-10 sm:mb-12">
          <div className="rule">
            <span className="eyebrow">
              {language === 'ar' ? 'سجل المشاريع والأعمال الميدانية' : 'PROJETS & RÉALISATIONS SUR LE TERRAIN'}
            </span>
            <span className="tags hidden sm:inline">
              {language === 'ar' 
                ? 'توثيق ميداني حقيقي • مشاريع وطنية وجهوية كبرى' 
                : 'MÉGAPROJETS NATIONAUX • WILAYA DE MILA & SUD/EST'}
            </span>
          </div>
          <h2>
            {language === 'ar' ? (
              <>
                المشاريع <em>الميدانية</em>
              </>
            ) : (
              <>
                Nos Projets <em>sur le Terrain</em>
              </>
            )}
          </h2>
        </div>

        {/* FULL PAGE CONTROLS: View Switcher (By Project vs By Photos) + Category Filters */}
        {isFullPage && (
          <div className="space-y-4 mb-10">
            {/* View Mode Toggle Pill */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('projects')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    viewMode === 'projects'
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <FolderKanban className="w-4 h-4" />
                  <span>
                    {language === 'ar' 
                      ? 'عرض حسب المشاريع' 
                      : 'Par Projets'}
                  </span>
                </button>

                <button
                  onClick={() => setViewMode('photos')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    viewMode === 'photos'
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  <span>
                    {language === 'ar' 
                      ? 'عرض كافة الصور' 
                      : 'Toutes les photos'}
                  </span>
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm">
              {categoryFilterTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setDisplayCount(18);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === tab.id
                      ? 'bg-slate-900 dark:bg-orange-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-orange-600 hover:bg-white dark:hover:bg-slate-800'
                  }`}
                >
                  {language === 'ar' ? tab.labelAr : tab.labelFr}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW MODE 1: BY PROJECT (Default & Homepage)
            ========================================================================= */}
        {(!isFullPage || viewMode === 'projects') && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(isFullPage ? filteredProjects : FEATURED_HOME_PROJECTS).map((project) => (
              <div
                key={project.id}
                onClick={() => openProjectPhotos(project)}
                className="group bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer h-full"
              >
                {/* Project Cover Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.coverImage}
                    alt={`${language === 'ar' ? project.nameAr : project.nameFr} - ${project.wilaya}`}
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient bottom overlay on cover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* Top Badges: Wilaya + Category */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-900 bg-white/95 dark:bg-slate-900/90 dark:text-white px-2.5 py-1 rounded-full shadow-md backdrop-blur-sm">
                      <MapPin className="w-3 h-3 text-orange-600 shrink-0" />
                      <span>{project.wilaya}</span>
                    </span>

                    <span className="text-[10px] font-bold text-orange-700 dark:text-orange-300 bg-orange-100/95 dark:bg-orange-950/90 px-2.5 py-1 rounded-full border border-orange-200 dark:border-orange-800/60 shadow-sm backdrop-blur-sm">
                      {language === 'ar' ? project.categoryAr : project.categoryFr}
                    </span>
                  </div>

                  {/* Bottom Photo Count Badge on Image */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600 text-white font-extrabold text-xs shadow-lg shadow-black/40 backdrop-blur-md">
                      <Camera className="w-3.5 h-3.5" />
                      <span>
                        {language === 'ar' 
                          ? `${project.photoCount} ${project.photoCount === 1 ? 'صورة موثقة' : 'صور موثقة'}`
                          : `${project.photoCount} ${project.photoCount === 1 ? 'photo' : 'photos'}`}
                      </span>
                    </span>

                    {project.isMajorProject && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white font-bold text-[10px] shadow-md backdrop-blur-md">
                        <Sparkles className="w-3 h-3" />
                        <span>{language === 'ar' ? 'مشروع رئيسي' : 'Mégaprojet'}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug mb-2">
                    {language === 'ar' ? project.nameAr : project.nameFr}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4 flex-1">
                    {language === 'ar' ? project.descAr : project.descFr}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-orange-600 dark:text-orange-400 font-bold">
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>{language === 'ar' ? 'إشراف مكتب SETAU' : 'Réalisé par SETAU'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs group-hover:underline">
                      <span>
                        {language === 'ar'
                          ? `فتح الألبوم (${project.photoCount})`
                          : `Ouvrir l'album (${project.photoCount})`}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =========================================================================
            VIEW MODE 2: BY INDIVIDUAL PHOTOS (Only in Full Gallery Page)
            ========================================================================= */}
        {isFullPage && viewMode === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedPhotos.map((img, index) => (
              <div
                key={img.id}
                onClick={() => openSinglePhoto(filteredPhotos, index)}
                className="group bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer h-full"
              >
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

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-900 bg-white/95 dark:bg-slate-900/90 dark:text-white px-2.5 py-1 rounded-full shadow-md backdrop-blur-sm">
                      <MapPin className="w-3 h-3 text-orange-600 shrink-0" />
                      <span>{img.wilaya}</span>
                    </span>

                    <span className="text-[10px] font-bold text-orange-700 dark:text-orange-300 bg-orange-100/95 dark:bg-orange-950/90 px-2 py-0.5 rounded-full border border-orange-200 dark:border-orange-800/60 shadow-sm backdrop-blur-sm">
                      {language === 'ar' ? img.categoryAr : img.categoryFr}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 rounded-full bg-orange-600 text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>

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
        )}

        {/* HOME PAGE CALL TO ACTION: Open Full Gallery */}
        {!isFullPage && (
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 dark:bg-orange-600 text-white hover:bg-orange-600 dark:hover:bg-orange-500 font-extrabold text-sm sm:text-base shadow-xl shadow-slate-950/20 hover:scale-105 active:scale-95 transition-all group"
            >
              <span>
                {language === 'ar' 
                  ? 'عرض جميع مشاريع المكتب وأرشيف الصور'
                  : 'Explorer l\'ensemble des projets & photographies'}
              </span>
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-medium">
              {language === 'ar' 
                ? 'تصفح ألبومات الطرق، السكك الحديدية، منشآت الطاقة، التطهير، وقسمة العقارات الفلاحية بالتفصيل' 
                : 'Accédez à tous les reportages classés par chantier : Tindouf, Ghardaïa, Hassi R\'Mel, El Tarf, Constantine, Mila'}
            </p>
          </div>
        )}

        {/* FULL PAGE LOAD MORE BUTTON (Photos View) */}
        {isFullPage && viewMode === 'photos' && displayCount < filteredPhotos.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setDisplayCount(prev => Math.min(prev + 18, filteredPhotos.length))}
              className="pill pill--orange"
            >
              <span className="dot">
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </span>
              <span className="uppercase text-xs sm:text-sm tracking-wider">
                {language === 'ar' 
                  ? `عرض المزيد من الصور (${filteredPhotos.length - displayCount} متبقية)` 
                  : `Afficher plus de photos (${filteredPhotos.length - displayCount} restantes)`}
              </span>
            </button>
          </div>
        )}

      </div>

      {/* ========================================================
          FULLSCREEN LIGHTBOX MODAL WITH ALBUM NAVIGATION
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
            {/* Top Bar with Project Title, Photo Title and Close Button */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-[#070b14] text-white">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="p-2 rounded-xl bg-orange-600 text-white shrink-0">
                  <Layers className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  {activePhoto.projectNameAr && (
                    <div className="text-xs font-extrabold text-orange-400 truncate mb-0.5">
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
              {activePhotoPool.length > 1 && (
                <>
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
                </>
              )}
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
