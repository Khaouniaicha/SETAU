'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SETAU_PROJECTS, ProjectItem } from '@/lib/types';
import { Layers, Eye, CheckCircle2, Building, MapPin, X, ArrowRight } from 'lucide-react';

export default function ProjectsGallery() {
  const { t, language, isRtl } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? SETAU_PROJECTS
    : SETAU_PROJECTS.filter(p => p.category === activeFilter);

  const filters = [
    { id: 'all', labelAr: `جميع المشاريع (${SETAU_PROJECTS.length})`, labelFr: `Tous les projets (${SETAU_PROJECTS.length})` },
    { id: 'vrd', labelAr: 'طرق، شبكات وسكك حديدية', labelFr: 'Routes, VRD & Rail' },
    { id: 'batiment', labelAr: 'بناء وهندسة مدنية وصناعية', labelFr: 'Bâtiment & Industrie' },
    { id: 'terrassement', labelAr: 'حفر وردم ومكعبات', labelFr: 'Terrassement & Cubatures' },
    { id: 'bornage', labelAr: 'قسمة وتحديد أراضٍ', labelFr: 'Bornage & Partage' },
    { id: 'amenagement', labelAr: 'تهيئة وتجزئات عمرانية', labelFr: 'Aménagement Urbain' },
  ];

  return (
    <section id="realisations" className="py-16 sm:py-24 bg-white dark:bg-[#080d1a] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-400 text-xs font-bold tracking-wide uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('galleryTag')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('galleryTitle')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {language === 'ar' 
              ? 'مجموعة من أبرز المشاريع الميدانية الكبرى والصغرى المنجزة بنجاح من طرف فريق مكتب SETAU عبر مختلف ولايات الوطن.'
              : 'Sélection de nos interventions majeures et chantiers réalisés avec succès par l’équipe SETAU à travers l’Algérie.'}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === f.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-105'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {language === 'ar' ? f.labelAr : f.labelFr}
            </button>
          ))}
        </div>

        {/* 14 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const title = language === 'ar' ? project.titleAr : project.titleFr;
            const desc = language === 'ar' ? project.descAr : project.descFr;
            const stats = language === 'ar' ? project.statsAr : project.statsFr;
            const client = language === 'ar' ? project.clientAr : project.clientFr;

            return (
              <div
                key={project.id}
                className="flex flex-col rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl hover:border-emerald-500/60 transition-all duration-300 hover:-translate-y-1.5 group"
              >
                {/* Image Container with Zoom trigger */}
                <div 
                  className="relative h-60 sm:h-64 w-full bg-slate-950 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                  
                  {/* Overlay Stats Badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/80 text-[11px] font-mono text-emerald-400">
                    {stats}
                  </div>

                  {/* Zoom Icon indicator */}
                  <div className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-emerald-600 text-white shadow-md opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="line-clamp-1">{client}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-emerald-500 transition-colors">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {desc}
                    </p>
                  </div>

                  {/* Card Action footer */}
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <span>{language === 'ar' ? 'عرض الصور والتفاصيل' : 'Voir les détails & photo'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <span className="text-[11px] text-slate-400 font-mono">SETAU GEO Survey</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Project Full-View Details */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950 mb-6">
                <Image
                  src={selectedProject.image}
                  alt={language === 'ar' ? selectedProject.titleAr : selectedProject.titleFr}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title & Badges */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? selectedProject.statsAr : selectedProject.statsFr}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  {language === 'ar' ? selectedProject.titleAr : selectedProject.titleFr}
                </h3>

                <div className="text-xs sm:text-sm text-slate-500 flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-500" />
                  <span>{language === 'ar' ? selectedProject.clientAr : selectedProject.clientFr}</span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed pt-2">
                  {language === 'ar' ? selectedProject.descAr : selectedProject.descFr}
                </p>

                {/* Direct Action */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
                  >
                    <span>{language === 'ar' ? 'طلب دراسة أو إنجاز مماثل' : 'Demander une étude similaire'}</span>
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {language === 'ar' ? 'إغلاق' : 'Fermer'}
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
