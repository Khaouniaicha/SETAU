'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Compass, 
  ShieldCheck, 
  Building2, 
  Layers, 
  Calculator, 
  Activity,
  ArrowRight,
  FileCheck2
} from 'lucide-react';

interface ServicesExactSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesExactSection({ onSelectService }: ServicesExactSectionProps) {
  const { language, isRtl } = useLanguage();

  const handleCardClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const CORE_SERVICES = [
    {
      id: 'topo',
      titleAr: 'الرفع الطوبوغرافي والمخططات (MNT)',
      titleFr: 'Levés Topographiques & MNT',
      descAr: 'رفع طبوغرافي عالي الدقة لمختلف التضاريس، إعداد المخططات الكاداسترالية، خطوط التسوية، والنمذجة الرقمية ثلاثية الأبعاد.',
      descFr: 'Levés de précision par technologies GNSS RTK et stations totales, courbes de niveau et plans topographiques à toute échelle.',
      icon: <Compass className="w-6 h-6 text-orange-500" strokeWidth={1.8} />,
      tagAr: 'تقنية Leica GNSS',
      tagFr: 'Technologie Leica GNSS',
    },
    {
      id: 'foncier',
      titleAr: 'المسح وتثبيت الحدود (Bornage)',
      titleFr: 'Sécurisation Foncière & Bornage',
      descAr: 'تثبيت حدود الملكيات العقارية، مخططات التجزئة، قسمة التركات والملكيات الشائعة، وإعداد الملفات المطابقة للمسح والمحافظة العقارية.',
      descFr: 'Délimitation contradictoire, piquetage, partages successoraux et dossiers techniques conformes à la Conservation Foncière.',
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" strokeWidth={1.8} />,
      tagAr: 'مطابقة قانونية معتمدة',
      tagFr: 'Conformité Cadastrale',
    },
    {
      id: 'implantation',
      titleAr: 'توقيع المشاريع ومحاور البناء',
      titleFr: 'Implantation de Chantiers & BTPH',
      descAr: 'توقيع محاور القواعد الخرسانية، البنايات، الهياكل المعدنية، ومسارات الطرقات بدقة ملليمترية مطابقة للمخططات التنفيذية.',
      descFr: 'Implantation d\'axes de bâtiments, semelles, massifs industriels, tracés routiers et ferroviaires au millimètre.',
      icon: <Building2 className="w-6 h-6 text-orange-500" strokeWidth={1.8} />,
      tagAr: 'دقة ملليمترية بالمحطة الشاملة',
      tagFr: 'Précision Station Totale',
    },
    {
      id: 'terrassement',
      titleAr: 'حساب كميات الحفر والردم (Cubatures)',
      titleFr: 'Calcul de Cubatures & MNT',
      descAr: 'حساب دقيق لمكعبات الأتربة المحفورة والمردومة، مقارنة أسطح التضاريس ببرمجيات Covadis، ومتابعة تسوية المنصات والمحاجر.',
      descFr: 'Calculs métrologiques des déblais/remblais par comparaison MNT (Covadis) et cubatures de plateformes et carrières.',
      icon: <Calculator className="w-6 h-6 text-orange-500" strokeWidth={1.8} />,
      tagAr: 'تقارير حجمية Covadis',
      tagFr: 'Rapports Volumétriques',
    },
    {
      id: 'vrd',
      titleAr: 'مخططات شبكات VRD والتهيئة',
      titleFr: 'VRD & Réseaux Divers',
      descAr: 'رفع وإعداد مخططات المطابقة (Plans de récolement) لشبكات المياه الصالحة للشرب، الصرف الصحي، ومقاطع الطرقات الطولية والعرضية.',
      descFr: 'Plans de récolement géoréférencés pour réseaux AEP, assainissement, voirie et profils en long et en travers.',
      icon: <Layers className="w-6 h-6 text-orange-500" strokeWidth={1.8} />,
      tagAr: 'بروفيلات طولية وعرضية',
      tagFr: 'Profils en Long / Travers',
    },
    {
      id: 'auscultation',
      titleAr: 'رصد ومراقبة المنشآت الهندسية',
      titleFr: 'Auscultation & Suivi Géométrique',
      descAr: 'مراقبة شاقولية واستقرار الأبراج والمباني، رصد أي هبوط أو انزياح دوري في المنشآت الهندسية والجسور بأجهزة عالية الدقة.',
      descFr: 'Contrôle métrologique de verticalité, détection de tassements différentiels et auscultation continue d\'ouvrages d\'art.',
      icon: <Activity className="w-6 h-6 text-orange-500" strokeWidth={1.8} />,
      tagAr: 'رصد دوري دقيق',
      tagFr: 'Mesures Périodiques',
    },
  ];

  return (
    <section id="services" className="pt-10 sm:pt-14 pb-16 sm:pb-24 bg-white dark:bg-[#0a0f1d] border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-3 text-orange-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
            <span className="w-8 h-0.5 bg-orange-500"></span>
            <span>{language === 'ar' ? 'الخدمات الأساسية للمكتب' : 'DOMAINES D\'EXPERTISE'}</span>
            <span className="w-8 h-0.5 bg-orange-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            {language === 'ar' ? 'الخدمات الهندسية الطوبوغرافية' : 'Nos Prestations Topographiques'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'ar' 
              ? 'حلول تقنية متكاملة ومطابقة للقوانين الجزائرية بإشراف مهندس معتمد، مع تسخير أحدث التجهيزات السويسرية Leica.'
              : 'Des solutions métrologiques complètes, conformes aux normes cadastrales et aux règles de l\'art du génie civil.'}
          </p>
        </div>

        {/* 6 Balanced Uniform Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => handleCardClick(language === 'ar' ? srv.titleAr : srv.titleFr)}
              className="group bg-[#f8f9fa] dark:bg-[#0f172a] rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-xl hover:border-orange-500/80 hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer h-full"
            >
              {/* Card Top: Icon & Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-orange-500/15 transition-all">
                  {srv.icon}
                </div>
                <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 px-2.5 py-1 rounded-full">
                  {language === 'ar' ? srv.tagAr : srv.tagFr}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2.5 leading-snug">
                {language === 'ar' ? srv.titleAr : srv.titleFr}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                {language === 'ar' ? srv.descAr : srv.descFr}
              </p>

              {/* Bottom Action */}
              <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                <span className="inline-flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-emerald-500" />
                  <span>{language === 'ar' ? 'طلب تسعيرة لهذه الخدمة' : 'Devis pour cette prestation'}</span>
                </span>
                <span className="w-7 h-7 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
