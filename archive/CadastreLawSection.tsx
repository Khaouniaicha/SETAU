'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Scale, BookOpen, AlertCircle, FileSpreadsheet, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function CadastreLawSection() {
  const { t, isRtl } = useLanguage();

  const lawItems = [
    {
      title: "Régularisation des Constructions (Loi 08-15 & Loi 22-55)",
      titleAr: "مطابقة وتسوية البنايات (القانون 08-15 و 22-55)",
      desc: "Constitution du dossier technique complet comprenant les plans de récolement et l'état descriptif pour la délivrance du certificat de conformité et l'achèvement de la construction.",
      descAr: "إعداد الملف التقني الطبوغرافي الشامل لمخططات الوضعية الحالية والكشف الوصفي للحصول على شهادة المطابقة واستكمال البناء.",
      badge: "Conformité Urbaine",
      icon: Scale,
    },
    {
      title: "Acte de Propriété & Régularisation Foncière (Loi 02-07)",
      titleAr: "عقد الملكية والتسوية العقارية (القانون 02-07)",
      desc: "Établissement des plans réguliers et des dossiers techniques requis pour l'immatriculation et l'octroi de l'acte de propriété authentique sur les terrains occupés.",
      descAr: "إعداد المخططات والملفات التقنية اللازمة للمصادقة والحصول على عقد الملكية المشهر على الأراضي المشغولة بدون سندات.",
      badge: "Livre Foncier",
      icon: BookOpen,
    },
    {
      title: "Document d'Arpentage Officiel (وثيقة القياس)",
      titleAr: "وثيقة القياس الرسمية المعتمدة",
      desc: "Opération obligatoire prescrite par le décret cadastral pour toute transaction notariée (vente, donation, succession, division) et mise à jour auprès de la Conservation Foncière.",
      descAr: "وثيقة إلزامية قانوناً لإتمام أي معاملة توثيقية (بيع، هبة، قسمة تركة) والتحيين الإلزامي لدى المحافظة العقارية ومسح الأراضي.",
      badge: "Cadastre & Notariat",
      icon: FileSpreadsheet,
    },
    {
      title: "Biens Non Réclamés & Compte Inconnu (حساب المجهول)",
      titleAr: "تسوية حساب المجهول والعقار غير المطالب به",
      desc: "Enquêtes cadastrales, relevés d'identification des limites et constitution des requêtes de régularisation pour sortir un bien du compte d'attente de la conservation foncière.",
      descAr: "تحقيقات مسحية دقيقة وإعداد ملفات التحيين لإخراج العقارات المقيدة في حساب المجهول أو غير المطالب به وإثبات أصحاب الحقوق.",
      badge: "Enquêtes & Conservation",
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="lois-foncieres" className="py-16 sm:py-24 bg-white dark:bg-[#080d1a] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-400 text-xs font-bold tracking-wide uppercase mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Cadre Juridique & Cadastre Algérien</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Maîtrise approfondie des lois foncières en Algérie
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Tous nos dossiers techniques sont dressés en stricte conformité avec la réglementation foncière, le Cadastre, la Conservation Foncière et les services de l&apos;Urbanisme.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {lawItems.map((law, idx) => {
            const Icon = law.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 transition-all hover:shadow-lg relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                    {law.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                  {law.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {law.desc}
                </p>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Dossier complet agréé OGEF recevable auprès de la Conservation</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
