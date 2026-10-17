import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Cairo, Playfair_Display } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif-display',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#ea580c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://setau-topographie.dz'),
  title: {
    default: "Bureau d'Études Topographie et Aménagement Urbain SETAU | Oued Athmania Mila",
    template: "%s | SETAU Topographie",
  },
  description: "Bureau d'études techniques travaux topographie et aménagement urbain SETAU à Oued Athmania, Wilaya de Mila. Levé & implantation, calcul de cubatures de terrassement, VRD, bornage et division de terrain. Ingénieur Karim Salhi. Tél: 0670 20 58 47.",
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/ogef-logo.png',
  },
  alternates: {
    canonical: 'https://setau-topographie.dz',
    languages: {
      'ar': 'https://setau-topographie.dz',
      'fr': 'https://setau-topographie.dz',
      'x-default': 'https://setau-topographie.dz',
    },
  },
  keywords: [
    "bureau d'études topographie et aménagement urbain",
    "topographie mila",
    "topographe oued athmania",
    "SETAU topographie",
    "bureau d'études mila",
    "calcul cubatures terrassement algerie",
    "levé et implantation mila",
    "VRD voirie algerie",
    "bornage et piquetage mila",
    "تقسيم وتجزئة الأراضي ميلة",
    "رفع طبوغرافي وادي العثمانية",
    "مكتب طبوغرافيا ميلة",
    "حساب كميات الحفر والردم والركام",
    "أشغال البناء والهندسة المدنية",
    "Karim Salhi",
  ],
  authors: [{ name: 'Karim Salhi' }],
  creator: 'Bureau SETAU',
  openGraph: {
    title: "Bureau d'Études Topographie et Aménagement Urbain SETAU - Mila",
    description: "Travaux topographiques, génie civil, calculs de cubatures, voirie et réseaux divers (VRD) à Oued Athmania, Mila et dans tout l'Est algérien.",
    images: ['/plan-architectural.jpg'],
    type: 'website',
    locale: 'fr_DZ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': "Bureau d'études techniques travaux topographie et aménagement urbain SETAU",
    'alternateName': [
      "SETAU Topographie",
      "مكتب دراسات في الطوبوغرافيا والتهيئة العمرانية SETAU"
    ],
    'url': 'https://setau-topographie.dz',
    'description': "Bureau d'études techniques et travaux topographiques, calculs de cubatures de terrassement, VRD, bornage et aménagement urbain à Oued Athmania, Wilaya de Mila.",
    'telephone': '+213670205847',
    'email': 'karimsalhitopo1@gmail.com',
    'founder': {
      '@type': 'Person',
      'name': 'Karim Salhi',
      'jobTitle': 'Ingénieur Géomètre Topographe',
      'telephone': '+213670205847'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Centre Ville',
      'addressLocality': 'Oued Athmania',
      'addressRegion': 'Wilaya de Mila',
      'postalCode': '43003',
      'addressCountry': 'DZ',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 36.2467,
      'longitude': 6.2867,
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Mila' },
      { '@type': 'AdministrativeArea', 'name': 'Oued Athmania' },
      { '@type': 'AdministrativeArea', 'name': 'Constantine' },
      { '@type': 'AdministrativeArea', 'name': 'Sétif' },
      { '@type': 'AdministrativeArea', 'name': 'Jijel' },
      { '@type': 'AdministrativeArea', 'name': 'El Tarf' },
      { '@type': 'AdministrativeArea', 'name': 'Ghardaïa' },
      { '@type': 'AdministrativeArea', 'name': 'Ouargla' },
      { '@type': 'Country', 'name': 'Algérie' }
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Services Topographiques et Aménagement Urbain',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Levé & Implantation Topographique (الرفع والتوقيع الميداني)',
            'description': 'Levés de détails, polygonation rattachée et implantation de haute précision.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Calcul de Cubatures de Terrassement (حساب كميات الحفر والردم)',
            'description': 'Modélisation numérique de terrain (MNT), calcul de volumes déblais/remblais et suivi de carrières.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Voirie & Réseaux Divers - VRD (الطرق والشبكات المختلفة)',
            'description': 'Études topographiques, profils en long et en travers pour routes, assainissement et AEP.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Bornage & Division Parcellaire (تحديد وتقسيم الأراضي)',
            'description': 'Délimitation de propriété, plans de partage, morcellement et dossiers conformes aux normes cadastrales.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Auscultation & Suivi Géométrique d\'Ouvrages (متابعة ورصد المنشآت)',
            'description': 'Contrôle métrologique de verticalité et auscultation millimétrique de structures de génie civil.'
          }
        }
      ]
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      'opens': '08:00',
      'closes': '17:00',
    },
    'priceRange': 'DA',
  };

  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} ${cairo.variable} ${playfair.variable} font-sans min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-slate-100 antialiased selection:bg-orange-500 selection:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
