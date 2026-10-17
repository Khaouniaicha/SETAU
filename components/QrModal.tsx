'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CABINET_CONFIG } from '@/lib/config';
import { X, QrCode, Download, Phone, MessageCircle, ExternalLink, MapPin } from 'lucide-react';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QrModal({ isOpen, onClose }: QrModalProps) {
  const { t } = useLanguage();
  const [tab, setTab] = useState<'vcard' | 'whatsapp'>('vcard');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadVcard = () => {
    const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:${CABINET_CONFIG.leadName} - Bureau SETAU Topographie
ORG:${CABINET_CONFIG.name}
TITLE:${CABINET_CONFIG.title}
TEL;TYPE=WORK,VOICE:${CABINET_CONFIG.phoneRaw}
TEL;TYPE=CELL,VOICE:${CABINET_CONFIG.phoneRaw}
EMAIL:${CABINET_CONFIG.email}
ADR;TYPE=WORK:;;${CABINET_CONFIG.addressFull};${CABINET_CONFIG.city};${CABINET_CONFIG.wilaya};;${CABINET_CONFIG.country}
NOTE:Bureau d'études techniques travaux topographie et aménagement urbain SETAU Mila
URL:${CABINET_CONFIG.mapsSearchQuery}
END:VCARD`;

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Karim_Salhi_SETAU_Topographie_Mila.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:bg-slate-800 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 mb-2">
            <QrCode className="w-7 h-7" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            {t('qrModalTitle')}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {t('qrModalSubtitle')}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800/80 p-1 mb-6 text-xs font-semibold">
          <button
            onClick={() => setTab('vcard')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all ${
              tab === 'vcard'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{t('qrTabVcard')}</span>
          </button>
          <button
            onClick={() => setTab('whatsapp')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all ${
              tab === 'whatsapp'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{t('qrTabWhatsapp')}</span>
          </button>
        </div>

        {/* QR Image Display */}
        <div className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 mb-6">
          <div className="relative w-48 h-48 bg-white p-2 rounded-xl shadow-inner flex items-center justify-center">
            <Image
              src="/qr-vcard.png"
              alt="QR Code Contact SETAU"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-3 max-w-xs">
            {tab === 'vcard' ? t('qrVcardHelp') : t('qrWhatsappHelp')}
          </p>
        </div>

        {/* Download VCard / Action */}
        <button
          onClick={handleDownloadVcard}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all mb-4"
        >
          <Download className="w-4 h-4" />
          <span>{t('btnDownloadVcard')}</span>
        </button>

        {/* Direct Links */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-around text-xs text-slate-600 dark:text-slate-400">
          <a
            href={CABINET_CONFIG.mapsSearchQuery}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>Google Maps</span>
          </a>
          <span>•</span>
          <a
            href={`tel:${CABINET_CONFIG.phoneRaw}`}
            className="flex items-center gap-1 hover:text-emerald-500 transition-colors font-mono"
            dir="ltr"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-500" />
            <span>{CABINET_CONFIG.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
