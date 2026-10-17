'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CABINET_CONFIG } from '@/lib/config';
import { 
  Award, 
  Phone, 
  Compass, 
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers
} from 'lucide-react';

export default function AboutSection() {
  const { language, isRtl } = useLanguage();

  return (
    <section id="apropos" className="py-20 lg:py-28 bg-[#f8f9fa] dark:bg-[#0c1222] border-b border-orange-100 dark:border-slate-800 transition-colors">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Geomexpert Section Head Rule */}
        <div className="section-head">
          <div className="rule">
            <span className="eyebrow">
              {language === 'ar' ? 'عن مكتب الدراسات SETAU' : 'À PROPOS DE SETAU'}
            </span>
            <span className="tags hidden sm:inline">
              {language === 'ar' 
                ? 'مهندس معتمد لدى الدولة • دقة هندسية عالية • تغطية وطنية' 
                : 'INGÉNIEUR GÉOMÈTRE AGRÉÉ • HAUTE PRÉCISION • COUVERTURE NATIONALE'}
            </span>
          </div>
          <h2>
            {language === 'ar' ? (
              <>
                رؤية متكاملة في الهندسة الطوبوغرافية <br />
                وتأمين العقار <em>والتهيئة الحضرية</em>
              </>
            ) : (
              <>
                Un savoir-faire de géomètre-expert <br />
                au service des grands <em>chantiers d'Algérie</em>
              </>
            )}
          </h2>
        </div>

        {/* Geomexpert About Grid (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official Accreditation & Carte de Visite */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Card Display */}
            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-orange-500 shadow-xl group">
              <div className="relative h-72 sm:h-80 w-full bg-[#090d16] p-3 flex items-center justify-center">
                <Image
                  src="/projects/carte_visite.jpg"
                  alt="Carte de Visite Salhi Karim - SETAU"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Accreditation Badge below card */}
              <div className="p-4 bg-orange-600 text-white flex items-center justify-between text-xs font-bold">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-white" />
                  <span>{language === 'ar' ? CABINET_CONFIG.qualificationAr : CABINET_CONFIG.qualification}</span>
                </div>
                <span className="font-mono text-orange-100">وادي العثمانية • ميلة</span>
              </div>
            </div>

            {/* Direct Hotlines Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-orange-200/80 dark:border-slate-800 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {language === 'ar' ? 'الاتصال المباشر بالمهندس' : 'Lignes Directes Ingénieur'}
                  </div>
                  <div className="text-sm sm:text-base font-extrabold font-mono text-slate-900 dark:text-white mt-0.5" dir="ltr">
                    <a href={`tel:${CABINET_CONFIG.phone1Raw}`} className="hover:text-orange-600 transition-colors">
                      {CABINET_CONFIG.phone1}
                    </a>
                    <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
                    <a href={`tel:${CABINET_CONFIG.phone2Raw}`} className="hover:text-orange-600 transition-colors">
                      {CABINET_CONFIG.phone2}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              {language === 'ar' ? (
                <>
                  تأسس <strong className="text-orange-600">مكتب الدراسات التقنية SETAU</strong> بوادي العثمانية (ولاية ميلة) بإدارة <strong className="text-slate-900 dark:text-white">المهندس صالحي كريم</strong>، ليجسد أعلى معايير الدقة الرياضية والميدانية في أعمال الطوبوغرافيا، الهندسة المدنية وتأمين الملكيات العقارية في الجزائر.
                </>
              ) : (
                <>
                  Fondé sur les principes d'exactitude métrologique et de rigueur légale, le <strong className="text-orange-600">bureau d'études SETAU</strong> dirigé par <strong className="text-slate-900 dark:text-white">M. Karim Salhi</strong>, ingénieur géomètre topographe agréé, accompagne les particuliers, les maîtres d'œuvre, les entreprises de BTPH et les institutions publiques dans leurs projets d'aménagement et de construction.
                </>
              )}
            </p>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
              {language === 'ar' ? (
                <>
                  يمتلك مكتبنا خبرة واسعة مستمدة من المشاركة المباشرة في كبرى المشاريع الوطنية الإستراتيجية (خط السكة الحديدية المنجمي تندوف - بشار، ازدواجية الطريق الوطني رقم 1 بغرداية، محطة تحلية مياه البحر بالطارف، مركب بلارة للصلب، ومحطة بوستينڨ حاسي الرمل)، إضافة إلى مئات الدراسات العقارية والتقسيمات الحضرية والريفية.
                </>
              ) : (
                <>
                  Fort de son déploiement sur les plus grandes infrastructures d'Algérie (Ligne Ferroviaire Tindouf-Béchar, Dédoublement RN1 Ghardaïa, Station de dessalement d'El Tarf, Complexe sidérurgique de Bellara, Station Boosting Hassi R'Mel), SETAU allie technologie de pointe (GNSS RTK bi-fréquence, stations totales motorisées) et parfaite maîtrise du cadastre algérien.
                </>
              )}
            </p>

            {/* 4 Pillars of Excellence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-orange-600 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {language === 'ar' ? 'مهندس معتمد لدى الدولة' : 'Agrément Officiel d\'État'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {language === 'ar' ? 'مخططات ومحاضر تقنية مطابقة للإجراءات المعمول بها' : 'Dossiers techniques conformes aux normes cadastrales en vigueur'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-orange-600 flex-shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {language === 'ar' ? 'تجهيزات GNSS ومحطة شاملة' : 'Équipement GNSS & Station Totale'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {language === 'ar' ? 'دقة قياس عالية مطابقة لمواصفات Leica السويسرية' : 'Haute précision selon spécifications Leica Geosystems'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-orange-600 flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {language === 'ar' ? 'معالجة رقمية DAO / SIG' : 'Calculs DAO & SIG'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {language === 'ar' ? 'مخططات Covadis و AutoCAD ثلاثية الأبعاد' : 'Modèles MNT 3D & cubatures précises'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-orange-600 flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {language === 'ar' ? 'تدخل عبر كل الولايات' : 'Déploiement National'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {language === 'ar' ? 'من ميلة إلى تندوف وحاسي الرمل' : 'Mobilité immédiate sur tout le pays'}
                  </p>
                </div>
              </div>
            </div>

            {/* Pill CTA Button */}
            <div className="pt-4">
              <a href="#services" className="pill pill--orange">
                <span className="dot">
                  <ArrowUpRight className={`w-4 h-4 ${isRtl ? '-scale-x-100' : ''}`} />
                </span>
                <span className="uppercase text-xs sm:text-sm tracking-wider">
                  {language === 'ar' ? 'استكشف كافة خدماتنا الهندسية' : 'DÉCOUVRIR NOS EXPERTISES'}
                </span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
