'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CABINET_CONFIG } from '@/lib/config';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Copy, 
  ExternalLink,
  MessageCircle,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

interface ContactSectionProps {
  selectedService: string;
}

export default function ContactSection({ selectedService }: ContactSectionProps) {
  const { t, language, isRtl } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [prestation, setPrestation] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    if (selectedService) {
      setPrestation(selectedService);
    }
  }, [selectedService]);

  const formattedQuoteText = language === 'ar'
    ? `طلب عرض سعر ودراسة تقنية - مكتب SETAU
• الاسم / المؤسسة: ${fullName}
• رقم الهاتف: ${phone}
• البريد الإلكتروني: ${email || 'غير محدد'}
• الخدمة المطلوبة: ${prestation || 'الرفع الطوبوغرافي'}
• الولاية / الموقع: ${location || 'وادي العثمانية، ميلة'}
• تفاصيل المشروع: ${message || 'لا توجد ملاحظات إضافية'}`
    : `DEMANDE DE DEVIS / ÉTUDE TECHNIQUE - BUREAU SETAU :
• Client / Entreprise : ${fullName}
• Téléphone : ${phone}
• Email : ${email || 'Non renseigné'}
• Prestation souhaitée : ${prestation || 'Levé topographique'}
• Lieu du projet : ${location || 'Oued Athmania / Mila'}
• Description / Détails : ${message || 'Aucun détail supplémentaire'}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/[\s\-\.]/g, '');
    if (!cleanPhone || cleanPhone.length < 9) {
      setPhoneError(language === 'ar' ? 'يرجى إدخال رقم هاتف جزائري صالح (05 / 06 / 07)' : 'Veuillez saisir un numéro de téléphone valide');
      return;
    }
    setPhoneError('');
    setSubmitted(true);
    
    // Automatically open WhatsApp with pre-filled message
    const url = `https://wa.me/${CABINET_CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedQuoteText)}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppSend = () => {
    const url = `https://wa.me/${CABINET_CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedQuoteText)}`;
    window.open(url, '_blank');
  };

  const handleMessengerSend = () => {
    window.open(CABINET_CONFIG.messengerUrl, '_blank');
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(language === 'ar' ? `طلب عرض سعر طبوغرافي - ${fullName}` : `Demande de Devis Topographie - ${fullName}`);
    const body = encodeURIComponent(formattedQuoteText);
    window.location.href = `mailto:${CABINET_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyQuote = async () => {
    try {
      await navigator.clipboard.writeText(formattedQuoteText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#f8f9fa] dark:bg-[#0c1222] border-b border-orange-100 dark:border-slate-800 transition-colors">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Geomexpert Section Head Rule */}
        <div className="section-head">
          <div className="rule">
            <span className="eyebrow">
              {language === 'ar' ? 'التواصل وطلب عرض الأسعار' : 'CONTACT & DEVIS ÉTUDE'}
            </span>
            <span className="tags hidden sm:inline">
              {language === 'ar' 
                ? 'استجابة سريعة • دراسة تقنية مجانية في 48 ساعة' 
                : 'RÉPONSE SOUS 48H • ÉTUDE PERSONNALISÉE SANS ENGAGEMENT'}
            </span>
          </div>
          <h2>
            {language === 'ar' ? (
              <>
                طلب استشارة أو تسعيرة <em>لمشروعك الطوبوغرافي</em>
              </>
            ) : (
              <>
                Un projet à concrétiser ? <em>Demandez une étude & un devis</em>
              </>
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: INTERACTIVE QUOTE SIMULATOR FORM */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-orange-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xl">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      {language === 'ar' ? 'الاسم واللقب / اسم الشركة' : 'Nom & Prénom / Entreprise'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={language === 'ar' ? 'مثال: محمد بن علي' : 'Ex: Karim Benali'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      {language === 'ar' ? 'رقم الهاتف المباشر' : 'Numéro de Téléphone'} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (phoneError) setPhoneError('');
                      }}
                      placeholder="06 XX XX XX XX"
                      dir="ltr"
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 font-mono transition-all ${
                        phoneError 
                          ? 'border-rose-500 focus:ring-rose-500' 
                          : 'border-slate-300 dark:border-slate-700 focus:ring-orange-500'
                      }`}
                    />
                    {phoneError && (
                      <p className="text-xs text-rose-500 font-semibold mt-1">
                        {phoneError}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Service Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Adresse E-mail'}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="exemple@gmail.com"
                      dir="ltr"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      {language === 'ar' ? 'الخدمة المطلوبة' : 'Prestation Souhaitée'}
                    </label>
                    <select
                      value={prestation}
                      onChange={(e) => setPrestation(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    >
                      <option value="">{language === 'ar' ? '-- اختر الخدمة --' : '-- Choisissez la prestation --'}</option>
                      <option value="Levé & Implantation">{language === 'ar' ? 'رفع وتوقيع طبوغرافي (Levé & Implantation)' : 'Levé & Implantation'}</option>
                      <option value="Calcul des volumes">{language === 'ar' ? 'حساب كميات الحفر والردم (Cubatures)' : 'Calcul des volumes de terrassement'}</option>
                      <option value="Bornage & Partage">{language === 'ar' ? 'قسمة وتثبيت حدود (Bornage & Partage)' : 'Bornage, piquetage & partage'}</option>
                      <option value="VRD & Récollement">{language === 'ar' ? 'مخططات شبكات VRD والمطابقة' : 'VRD & Récollement des réseaux'}</option>
                      <option value="Aménagement Urbain">{language === 'ar' ? 'تهيئة عمرانية وتجزئة (Lotissements)' : 'Aménagement urbain & lotissements'}</option>
                      <option value="Autre étude">{language === 'ar' ? 'دراسة تقنية خاصة أخرى' : 'Autre étude sur mesure'}</option>
                    </select>
                  </div>
                </div>

                {/* Location / Wilaya */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    {language === 'ar' ? 'موقع المشروع / الولاية والبلدية' : 'Localisation du Projet (Wilaya, Commune)'}
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={language === 'ar' ? 'مثال: وادي العثمانية، ميلة أو ولاية أخرى' : 'Ex: Oued Athmania, Mila ou autre wilaya'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    {language === 'ar' ? 'تفاصيل إضافية عن المشروع أو المساحة' : 'Détails & Spécifications du Projet'}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={language === 'ar' ? 'أذكر المساحة التقريبية، طبيعة الأرض، الآجال المطلوبة...' : 'Surface approximative, contraintes du terrain, délais souhaités...'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  ></textarea>
                </div>

                {/* Submit Pill Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-orange-600/30 flex items-center justify-center gap-3"
                  >
                    <span>{language === 'ar' ? 'تأكيد وإرسال طلب التسعيرة' : 'VALIDER & GÉNÉRER LA DEMANDE'}</span>
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>

              </form>
            ) : (
              /* Success & Multi-channel Dispatch Card */
              <div className="space-y-6 text-center py-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {language === 'ar' ? 'تم تجهيز وتوجيه طلبك بنجاح!' : 'Demande transmise avec succès !'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-md mx-auto">
                    {language === 'ar'
                      ? 'تم تجهيز نص طلبك لإرساله مباشرة للمهندس صالحي كريم (+213670205847). يمكنك تأكيد الإرسال عبر أي من القنوات التالية:'
                      : 'Votre demande est prête à être transmise à M. Karim Salhi (+213670205847). Choisissez votre canal de transmission préféré :'}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto pt-2">
                  <button
                    onClick={handleWhatsAppSend}
                    className="py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-600/25 transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>WhatsApp (مباشر)</span>
                  </button>

                  <button
                    onClick={handleEmailSend}
                    className="py-3.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-600/25 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{language === 'ar' ? 'إرسال عبر الإيميل' : 'Par E-mail'}</span>
                  </button>

                  <a
                    href={`tel:${CABINET_CONFIG.phone1Raw}`}
                    className="py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all font-mono"
                  >
                    <Phone className="w-4 h-4 text-orange-400" />
                    <span>{CABINET_CONFIG.phone1}</span>
                  </a>

                  <button
                    onClick={handleCopyQuote}
                    className="py-3.5 px-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copied ? (language === 'ar' ? 'تم النسخ!' : 'Copié !') : (language === 'ar' ? 'نسخ نص الطلب' : 'Copier le résumé')}</span>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-500 hover:text-orange-600 underline font-semibold"
                  >
                    {language === 'ar' ? 'تعديل البيانات أو إنشاء طلب آخر' : 'Modifier les informations ou faire une autre demande'}
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT: OFFICIAL CABINET CONTACT & LOCATION INFO */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Engineer Profile Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-orange-200/80 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-orange-600 text-white flex items-center justify-center text-xl font-bold font-serif shadow-lg">
                  SK
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900 dark:text-white">
                    {language === 'ar' ? CABINET_CONFIG.leadNameAr : CABINET_CONFIG.leadName}
                  </h4>
                  <div className="text-xs font-bold text-orange-600 mt-0.5">
                    {language === 'ar' ? CABINET_CONFIG.qualificationAr : CABINET_CONFIG.qualification}
                  </div>
                </div>
              </div>

              {/* Bureau Location */}
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">
                      {language === 'ar' ? 'مقر المكتب:' : 'Adresse du bureau :'}
                    </strong>
                    <span>{language === 'ar' ? CABINET_CONFIG.addressAr : CABINET_CONFIG.address}</span>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">
                      {language === 'ar' ? 'الهواتف المباشرة:' : 'Lignes téléphoniques :'}
                    </strong>
                    <div className="font-mono font-bold text-slate-900 dark:text-white" dir="ltr">
                      <a href={`tel:${CABINET_CONFIG.phone1Raw}`} className="hover:text-orange-600">
                        {CABINET_CONFIG.phone1}
                      </a>
                      <span className="mx-2 text-slate-400">/</span>
                      <a href={`tel:${CABINET_CONFIG.phone2Raw}`} className="hover:text-orange-600">
                        {CABINET_CONFIG.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">
                      {language === 'ar' ? 'البريد الإلكتروني:' : 'Courriel officiel :'}
                    </strong>
                    <a href={`mailto:${CABINET_CONFIG.email}`} className="font-mono hover:text-orange-600 underline">
                      {CABINET_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">
                      {language === 'ar' ? 'أوقات العمل:' : 'Horaires d\'ouverture :'}
                    </strong>
                    <span>{language === 'ar' ? 'من السبت إلى الخميس: 08:00 - 17:00' : 'Samedi au Jeudi : 08h00 - 17h00'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Messenger Button Card */}
            <a
              href={CABINET_CONFIG.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 text-white flex items-center justify-between shadow-lg shadow-orange-600/20 group hover:opacity-95 transition-opacity"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-orange-100 uppercase tracking-wider">
                    Facebook Messenger
                  </div>
                  <div className="text-sm font-bold text-white">
                    {language === 'ar' ? 'مراسلة الصفحة الرسمية مباشرة' : 'Échanger via notre page officielle'}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
