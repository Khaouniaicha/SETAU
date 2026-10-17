'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const { t, language } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { qKey: 'faqQ1', aKey: 'faqA1' },
    { qKey: 'faqQ2', aKey: 'faqA2' },
    { qKey: 'faqQ3', aKey: 'faqA3' },
    { qKey: 'faqQ4', aKey: 'faqA4' },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-[#090d16] border-b border-orange-100 dark:border-slate-800 transition-colors">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-8">
        
        {/* Geomexpert Section Head Rule */}
        <div className="section-head">
          <div className="rule">
            <span className="eyebrow">
              {language === 'ar' ? 'الأسئلة الشائعة والإجابات التقنية' : 'FOIRE AUX QUESTIONS'}
            </span>
            <span className="tags hidden sm:inline">
              {language === 'ar' 
                ? 'إجابات واضحة حول الإجراءات والآجال والقوانين' 
                : 'RÉPONSES TECHNIQUES & PROCÉDURES CADASTRE'}
            </span>
          </div>
          <h2>
            {language === 'ar' ? (
              <>
                كل ما تحتاج معرفته عن <em>المعاملات الطوبوغرافية</em>
              </>
            ) : (
              <>
                Les réponses claires à vos <em>questions foncières</em>
              </>
            )}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-[#f8f9fa] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{t(faq.qKey)}</span>
                  <div className={`p-1.5 rounded-full bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-orange-600' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    {t(faq.aKey)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
