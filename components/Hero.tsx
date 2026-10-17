'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CABINET_CONFIG } from '@/lib/config';
import { 
  FileText, 
  Image as ImageIcon, 
  Radio, 
  HardHat, 
  Map,
  X,
  Send,
  MessageCircle,
  CheckCircle2,
  Phone
} from 'lucide-react';

export default function Hero() {
  const { language, isRtl } = useLanguage();
  
  // Interactive Real Quote Modal State
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('الرفع الطوبوغرافي');
  const [wilaya, setWilaya] = useState('ميلة');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handleQuickQuoteSubmit = (channel: 'whatsapp' | 'email') => {
    if (!fullName.trim()) {
      setPhoneError(language === 'ar' ? 'يرجى إدخال الاسم أو اسم المؤسسة' : 'Veuillez saisir votre nom');
      return;
    }
    const cleanPhone = phone.replace(/[\s\-\.]/g, '');
    if (!cleanPhone || cleanPhone.length < 9) {
      setPhoneError(language === 'ar' ? 'يرجى إدخال رقم هاتف جزائري صالح (05 / 06 / 07)' : 'Numéro de téléphone invalide');
      return;
    }
    setPhoneError('');

    const text = language === 'ar'
      ? `طلب عرض سعر رسمي - مكتب الدراسات SETAU
• المعني / المؤسسة: ${fullName}
• رقم الهاتف: ${phone}
• الخدمة المطلوبة: ${serviceType}
• الولاية / الموقع: ${wilaya || 'ميلة'}
${notes ? `• تفاصيل إضافية: ${notes}` : ''}`
      : `DEMANDE DE DEVIS OFFICIEL - BUREAU SETAU
• Demandeur : ${fullName}
• Téléphone : ${phone}
• Prestation : ${serviceType}
• Wilaya / Lieu : ${wilaya || 'Mila'}
${notes ? `• Détails : ${notes}` : ''}`;

    if (channel === 'whatsapp') {
      window.open(`https://wa.me/${CABINET_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    } else {
      window.location.href = `mailto:${CABINET_CONFIG.email}?subject=${encodeURIComponent(language === 'ar' ? `طلب عرض سعر - ${fullName}` : `Demande de Devis - ${fullName}`)}&body=${encodeURIComponent(text)}`;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsQuoteOpen(false);
    }, 3000);
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#080c14] text-white pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10">
        
        {/* ==============================================================
            SURVEYOR ENGINEER AS FULL BACKGROUND ON THE LEFT
            (Exact visual as shown in user target mockup)
            ============================================================== */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[50%] xl:w-[55%] z-0 pointer-events-none select-none overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/hero-surveyor-exact-hd.png"
              alt="Ingénieur Géomètre Topographe SETAU sur chantier"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-left"
            />
            {/* Cinematic Gradient Fade: Seamless blend into dark right side */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/75 to-[#080c14]/40 lg:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#080c14]/40 to-[#080c14] hidden lg:block"></div>
          </div>
        </div>

        {/* Subtle Watermark Contour Lines on Far Right */}
        <div className="absolute top-1/2 -translate-y-1/2 end-0 w-[420px] h-[360px] pointer-events-none opacity-[0.06] z-0 overflow-hidden">
          <svg viewBox="0 0 400 300" fill="none" stroke="#f97316" strokeWidth="1.2" className="w-full h-full">
            <path d="M 50,150 C 100,80 200,80 280,140 C 340,190 390,160 410,130" />
            <path d="M 30,180 C 90,110 190,110 270,170 C 330,220 380,190 420,160" />
            <path d="M 10,210 C 80,140 180,140 260,200 C 320,250 370,220 430,190" />
            <path d="M 0,240 C 70,170 170,170 250,230 C 310,280 360,250 440,220" />
            <circle cx="280" cy="140" r="3" fill="#f97316" />
            <circle cx="270" cy="170" r="3" fill="#f97316" />
            <circle cx="260" cy="200" r="3" fill="#f97316" />
          </svg>
        </div>

        {/* ==============================================================
            MAIN HERO CONTAINER
            ============================================================== */}
        <div className="relative z-10 max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Right Column in RTL: Occupies 54% at the start/right side */}
          <div className="w-full lg:w-[56%] xl:w-[52%] me-auto text-start pt-1 sm:pt-2 lg:pt-2">
            
            {/* Eyebrow Line */}
            <div className="flex items-center gap-2.5 text-orange-400 font-bold text-xs sm:text-sm mb-1 tracking-wide">
              <span className="w-7 h-0.5 bg-orange-500 inline-block shrink-0"></span>
              <span className="truncate">
                {language === 'ar' 
                  ? 'SETAU – مكتب دراسات في الطوبوغرافيا والتهيئة العمرانية' 
                  : "SETAU – Bureau d'Études en Topographie & Aménagement Urbain"}
              </span>
            </div>
            
            {/* Sub-eyebrow Location */}
            <p className="text-slate-400 text-xs sm:text-sm mb-2.5 ps-9">
              {language === 'ar' ? 'وادي العثمانية، ولاية ميلة' : 'Oued Athmania, Wilaya de Mila'}
            </p>

            {/* Massive Bold Headline with Vertical Spacing Between Lines */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] font-extrabold text-white leading-[1.22] sm:leading-[1.2] tracking-tight mb-3">
              {language === 'ar' ? (
                <>
                  <span className="block mb-1 sm:mb-1.5">الدقة الطبوغرافية</span>
                  <span>أساس كل مشروع <span className="text-orange-500">ناجح</span></span>
                </>
              ) : language === 'fr' ? (
                <>
                  <span className="block mb-1 sm:mb-1.5">La Précision Topographique</span>
                  <span>Socle de Tout Projet <span className="text-orange-500">Réussi</span></span>
                </>
              ) : (
                <>
                  <span className="block mb-1 sm:mb-1.5">Topographical Precision</span>
                  <span>Foundation of Every <span className="text-orange-500">Success</span></span>
                </>
              )}
            </h1>

            {/* Description Paragraph */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-5 max-w-xl">
              {language === 'ar' ? (
                <>
                  أعمال الرفع الطوبوغرافي، المسح العقاري، توقيع المشاريع، <br className="hidden sm:inline" />
                  وحساب الحفر والردم بولاية ميلة والشرق الجزائري.
                </>
              ) : (
                <>
                  Levés topographiques, sécurisation foncière, implantation d&apos;ouvrages <br className="hidden sm:inline" />
                  et VRD à Mila, Constantine et dans l&apos;Est algérien.
                </>
              )}
            </p>

            {/* Two Action Buttons side by side */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-7">
              
              {/* Primary Button: OPENS REAL QUOTE MODAL */}
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>{language === 'ar' ? 'طلب تسعيرة فورية' : 'DEMANDER UN DEVIS'}</span>
              </button>

              {/* Secondary Button: EXPLORE PROJECTS */}
              <a 
                href="/galerie" 
                className="bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-orange-500/50 font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <ImageIcon className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{language === 'ar' ? 'استكشاف المشاريع والعتاد' : 'DÉCOUVRIR NOS PROJETS'}</span>
              </a>

            </div>

          </div>

          {/* ==============================================================
              BOTTOM TRUST BADGES: 3 Columns with min-w-0 flex-1
              ============================================================== */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3.5 lg:gap-4 pt-4 sm:pt-5 border-t border-slate-800/80">
            
            {/* Badge 1: معدات GNSS دقيقة */}
            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-orange-500/40 transition-colors backdrop-blur-sm min-w-0">
              <div className="w-10 h-10 min-w-[40px] max-w-[40px] rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center shrink-0">
                <Radio className="w-5 h-5 shrink-0" />
              </div>
              <div className="min-w-0 flex-1 text-start">
                <h4 className="text-white font-bold text-xs sm:text-sm leading-snug break-words">
                  {language === 'ar' ? 'معدات GNSS دقيقة' : 'Équipements GNSS de Précision'}
                </h4>
                <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5 leading-normal break-words">
                  {language === 'ar' ? 'تقنية Leica السويسرية المعتمدة' : 'Instrumentation suisse Leica certifiée'}
                </p>
              </div>
            </div>

            {/* Badge 2: خبرة ميدانية */}
            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-orange-500/40 transition-colors backdrop-blur-sm min-w-0">
              <div className="w-10 h-10 min-w-[40px] max-w-[40px] rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center shrink-0">
                <HardHat className="w-5 h-5 shrink-0" />
              </div>
              <div className="min-w-0 flex-1 text-start">
                <h4 className="text-white font-bold text-xs sm:text-sm leading-snug break-words">
                  {language === 'ar' ? 'مهندس معتمد لدى الدولة' : 'Ingénieur Agréé par l\'État'}
                </h4>
                <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5 leading-normal break-words">
                  {language === 'ar' ? 'مخططات مطابقة للمعايير الرسمية' : 'Dossiers conformes aux normes cadastrales'}
                </p>
              </div>
            </div>

            {/* Badge 3: ميلة والشرق الجزائري */}
            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-orange-500/40 transition-colors backdrop-blur-sm min-w-0">
              <div className="w-10 h-10 min-w-[40px] max-w-[40px] rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center shrink-0">
                <Map className="w-5 h-5 shrink-0" />
              </div>
              <div className="min-w-0 flex-1 text-start">
                <h4 className="text-white font-bold text-xs sm:text-sm leading-snug break-words">
                  {language === 'ar' ? 'ميلة والشرق الجزائري' : 'Mila & Tout l\'Est Algérien'}
                </h4>
                <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5 leading-normal break-words">
                  {language === 'ar' ? 'تدخل سريع والمشاريع الكبرى عبر الوطن' : 'Intervention rapide et mégachantiers'}
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ==============================================================
          REAL INTERACTIVE QUOTE MODAL (Not a dead link!)
          ============================================================== */}
      {isQuoteOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsQuoteOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-[#0c1222] border border-orange-500/30 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] p-6 sm:p-8 text-white animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsQuoteOpen(false)}
              className="absolute top-4 end-4 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-500 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {language === 'ar' ? 'طلب عرض سعر ودراسة تقنية' : 'Demande de Devis & Étude'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {language === 'ar' ? 'مكتب SETAU • الرد السريع خلال ساعات العمل' : 'Bureau SETAU • Réponse rapide certifiée'}
                </p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-3 animate-bounce" />
                <h4 className="text-lg font-bold text-white mb-1">
                  {language === 'ar' ? 'تم تجهيز وإرسال الطلب بنجاح!' : 'Votre demande a été envoyée !'}
                </h4>
                <p className="text-sm text-slate-300">
                  {language === 'ar' ? 'سيتواصل معكم المهندس صالحي كريم في أقرب وقت.' : 'M. Karim Salhi vous recontactera dans les plus brefs délais.'}
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); handleQuickQuoteSubmit('whatsapp'); }} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {language === 'ar' ? 'الاسم واللقب / المؤسسة *' : 'Nom & Prénom / Entreprise *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={language === 'ar' ? 'مثال: محمد بن عيسى / شركة مقاولات' : 'Ex: Société BTPH / M. Benali'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-orange-500 text-white text-sm outline-none transition-all placeholder:text-slate-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {language === 'ar' ? 'رقم الهاتف للتواصل *' : 'Numéro de téléphone *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError('');
                    }}
                    placeholder="06.. .. .. .."
                    dir="ltr"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-white text-sm outline-none transition-all placeholder:text-slate-500 font-mono text-start ${
                      phoneError
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-slate-700 focus:border-orange-500'
                    }`}
                  />
                  {phoneError && (
                    <p className="text-xs text-rose-500 font-semibold mt-1">
                      {phoneError}
                    </p>
                  )}
                </div>

                {/* Service & Wilaya Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {language === 'ar' ? 'الخدمة المطلوبة' : 'Prestation'}
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-orange-500 text-white text-sm outline-none"
                    >
                      <option value="الرفع الطوبوغرافي">{language === 'ar' ? 'الرفع الطوبوغرافي' : 'Levé topographique'}</option>
                      <option value="المسح العقاري وتثبيت الحدود">{language === 'ar' ? 'المسح العقاري والحدود' : 'Bornage & Foncier'}</option>
                      <option value="توقيع المشاريع ومتابعة الورشات">{language === 'ar' ? 'توقيع المشاريع' : 'Implantation d\'ouvrages'}</option>
                      <option value="شبكات الطرق والـ VRD">{language === 'ar' ? 'مخططات شبكات VRD' : 'Réseaux VRD'}</option>
                      <option value="حساب مكعبات الحفر والردم">{language === 'ar' ? 'حساب الحفر والردم' : 'Cubatures terrassement'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {language === 'ar' ? 'الولاية / الموقع' : 'Wilaya / Chantier'}
                    </label>
                    <input
                      type="text"
                      value={wilaya}
                      onChange={(e) => setWilaya(e.target.value)}
                      placeholder={language === 'ar' ? 'ميلة، قسنطينة، جيجل...' : 'Mila, Constantine, etc.'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-orange-500 text-white text-sm outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Message / Details */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {language === 'ar' ? 'ملاحظات أو مواصفات خاصة (اختياري)' : 'Détails du projet (Optionnel)'}
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={language === 'ar' ? 'مساحة القطعة، نوع المنشأة، الموعد المحدد...' : 'Superficie, nature de l\'ouvrage, délais...'}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 focus:border-orange-500 text-white text-sm outline-none transition-all placeholder:text-slate-500 resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{language === 'ar' ? 'إرسال مباشر عبر واتساب' : 'Envoyer par WhatsApp'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickQuoteSubmit('email')}
                    className="py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-950/40 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'ar' ? 'إرسال إيميل' : 'Par Email'}</span>
                  </button>
                </div>

                {/* Direct Phone Assistance */}
                <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5 flex-wrap">
                  <span>{language === 'ar' ? 'أو الاتصال المباشر بالمهندس: ' : 'Ou contactez directement l\'ingénieur : '}</span>
                  <a href={`tel:${CABINET_CONFIG.phone1Raw}`} className="text-orange-400 font-bold font-mono hover:underline inline-flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-orange-400" />
                    <span>{CABINET_CONFIG.phone1}</span>
                  </a>
                </div>

              </form>
            )}

          </div>
        </div>
      )}
    </>
  );
}
