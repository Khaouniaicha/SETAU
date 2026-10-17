'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Compass, 
  Building, 
  ShieldCheck, 
  Layers, 
  Calculator, 
  MapPin, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { SETAU_SERVICES } from '@/lib/types';

interface SectorsSectionProps {
  onSelectService?: (service: string) => void;
}

export default function SectorsSection({ onSelectService }: SectorsSectionProps) {
  const { t, language, isRtl } = useLanguage();
  const [showAllServices, setShowAllServices] = useState(false);

  const SECTORS = [
    {
      id: 'topo',
      titleAr: 'الرفع الطوبوغرافي والمخططات ثلاثية الأبعاد',
      titleFr: 'Levés Topographiques & MNT 3D',
      descAr: 'رفع طبوغرافي عالي الدقة لمختلف التضاريس، إعداد مخططات الارتفاعات وخطوط التسوية (Courbes de niveau)، والمخططات الكاداسترالية بكافة المقاييس.',
      descFr: 'Levés tachéométriques et GNSS RTK de haute précision, modélisation numérique de terrain (MNT), courbes de niveau et plans topographiques à toute échelle.',
      img: '/projects/ferroviaire-tindouf-bechar.jpg',
      icon: <Compass className="w-5 h-5" />,
      tag: 'Précision Millimétrique',
    },
    {
      id: 'implantation',
      titleAr: 'توقيع المشاريع ومتابعة أشغال البناء',
      titleFr: 'Implantation & Suivi de Chantiers',
      descAr: 'توقيع محاور البنايات، القواعد الخرسانية، المنشآت الهندسية، مسارات الطرق، وسكك الحديد مع المراقبة الدورية للاستقامة والاستقرار الإنشائي.',
      descFr: 'Implantation d\'axes de bâtiments, semelles, massifs industriels, tracés routiers et ferroviaires. Contrôle géométrique continu des structures.',
      img: '/projects/dedoublement-rn1-ghardaia.jpg',
      icon: <Building className="w-5 h-5" />,
      tag: 'Génie Civil & BTPH',
    },
    {
      id: 'bornage',
      titleAr: 'القسمة العقارية، التحديد وتثبيت الحدود',
      titleFr: 'Bornage, Division & Sécurisation Foncière',
      descAr: 'تثبيت المعالم والحدود (Bornage & Piquetage)، قسمة التركات والملكيات الشائعة، تحديد القطع الأرضية وإعداد الملفات التقنية للمسح العقاري والمحافظة العقارية.',
      descFr: 'Délimitation contradictoire, piquetage, partage successoral, divisions parcellaires et dossiers techniques conformes à la Conservation Foncière.',
      img: '/projects/foncier-agricole-bornage.jpg',
      icon: <ShieldCheck className="w-5 h-5" />,
      tag: 'Expertise Juridique',
    },
    {
      id: 'vrd',
      titleAr: 'التهيئة الحضرية ومخططات شبكات VRD',
      titleFr: 'VRD & Récollement des Réseaux Divers',
      descAr: 'رفع وإعداد مخططات الإنجاز والمطابقة لشبكات المياه الصالحة للشرب (AEP)، الصرف الصحي، الغاز، الكهرباء، ومسارات الطرقات الحضرية والريفية.',
      descFr: 'Levé et plans de récolement géoréférencés pour réseaux AEP, assainissement, gaz, électricité et voiries. Profils en long et en travers conformes.',
      img: '/projects/aep-reseaux-eau.jpg',
      icon: <Layers className="w-5 h-5" />,
      tag: 'Infrastructures & VRD',
    },
    {
      id: 'terrassement',
      titleAr: 'حساب مكعبات الحفر والردم (Cubatures)',
      titleFr: 'Cubatures & Calcul des Volumes de Terrassement',
      descAr: 'حساب دقيق لكميات الأتربة المحفورة والمردومة، دراسة الميول والمنحدرات، مسح المحاجر، ومتابعة منصات التسوية للمشاريع الصناعية والسكنية.',
      descFr: 'Calculs métrologiques des déblais/remblais par comparaison de MNT (Covadis), nivellement de plateformes industrielles et cubatures de carrières.',
      img: '/projects/terrassement-ibn-badis.jpg',
      icon: <Calculator className="w-5 h-5" />,
      tag: 'Optimisation des Coûts',
    },
    {
      id: 'amenagement',
      titleAr: 'التهيئة العمرانية والتجزئات السكنية',
      titleFr: 'Aménagement Urbain & Lotissements',
      descAr: 'دراسة وتصميم مخططات التجزئة وتقسيم الأراضي السكنية والتجارية، دراسات الملاءمة مع أدوات التعمير (POS / PDAU) ومطابقة دفاتر الشروط.',
      descFr: 'Conception technique de lotissements, morcellement de parcelles privées et industrielles, intégration rigoureuse aux POS et PDAU en vigueur.',
      img: '/projects/genie-civil-bellara.jpg',
      icon: <MapPin className="w-5 h-5" />,
      tag: 'Urbanisme Homologué',
    },
  ];

  const handleSelectPrestation = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="prestations" className="py-20 lg:py-28 bg-slate-50 dark:bg-[#070b14] border-b border-orange-100 dark:border-slate-800 transition-colors">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Section Header Rule */}
        <div className="section-head">
          <div className="rule">
            <span className="eyebrow">
              {language === 'ar' ? 'الخدمات والتخصصات الهندسية' : 'SERVICES & EXPERTISES'}
            </span>
            <span className="tags hidden sm:inline">
              {language === 'ar' 
                ? '14 خدمة معتمدة رسمياً • معدات متطورة' 
                : '14 PRESTATIONS HOMOLOGUÉES • BUREAU D\'ÉTUDES AGRÉÉ'}
            </span>
          </div>
          <h2>
            {language === 'ar' ? (
              <>
                منظومة متكاملة من الخدمات <em>الهندسية والميدانية</em>
              </>
            ) : (
              <>
                L'ensemble des compétences de l'<em>ingénierie topographique</em>
              </>
            )}
          </h2>
        </div>

        {/* Geomexpert Sector Cards Grid (3 Columns) */}
        <div className="sector-grid">
          {SECTORS.map((sector) => (
            <div 
              key={sector.id} 
              className="sector group"
              onClick={() => handleSelectPrestation(language === 'ar' ? sector.titleAr : sector.titleFr)}
            >
              {/* Photo Header (210px) */}
              <div className="illo">
                <Image
                  src={sector.img}
                  alt={language === 'ar' ? sector.titleAr : sector.titleFr}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Sector Category Pill */}
                <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-orange-600 backdrop-blur-sm shadow-sm">
                  {sector.tag}
                </span>

                {/* Floating Round Badge Icon */}
                <div className="absolute -bottom-5 left-5 w-11 h-11 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900 group-hover:scale-110 transition-transform">
                  {sector.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors mb-3 leading-snug">
                  {language === 'ar' ? sector.titleAr : sector.titleFr}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                  {language === 'ar' ? sector.descAr : sector.descFr}
                </p>

                {/* Card Action Link */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-orange-600 group-hover:text-orange-500">
                  <span>{language === 'ar' ? 'طلب تسعيرة لهذه الخدمة' : 'DEMANDER UN DEVIS'}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed 14 Prestations Accordion / Toggle */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <button
            onClick={() => setShowAllServices(!showAllServices)}
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800/80 text-orange-700 dark:text-orange-400 font-bold text-sm hover:bg-orange-100 transition-all shadow-sm"
          >
            <span>
              {showAllServices
                ? (language === 'ar' ? 'إخفاء الدليل التفصيلي للخدمات الـ 14' : 'Masquer le catalogue détaillé des 14 prestations')
                : (language === 'ar' ? 'عرض الدليل الكامل لكافة الخدمات الـ 14 المعتمدة' : 'Consulter le catalogue officiel complet des 14 prestations')}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showAllServices ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Expanded 14 Services Grid */}
        {showAllServices && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {SETAU_SERVICES.map((srv) => (
              <div 
                key={srv.id}
                className="p-5 rounded-2xl bg-[#f8f9fa] dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-orange-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold text-orange-600 uppercase tracking-wider">
                      {srv.category.toUpperCase()}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                    {t(srv.titleKey)}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {t(srv.descKey)}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {language === 'ar' ? 'معتمد رسمياً' : 'Homologué SETAU'}
                  </span>
                  <button
                    onClick={() => handleSelectPrestation(t(srv.titleKey))}
                    className="text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
                  >
                    <span>{language === 'ar' ? 'اختيار' : 'Sélectionner'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
