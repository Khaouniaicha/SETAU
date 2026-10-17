'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesExactSection from '@/components/ServicesExactSection';
import AboutSection from '@/components/AboutSection';
import SectorsSection from '@/components/SectorsSection';
import MaterielSection from '@/components/MaterielSection';
import AllProjectsGallery from '@/components/AllProjectsGallery';
import StatsSection from '@/components/StatsSection';
import ProcessSection from '@/components/ProcessSection';
import ContactCta from '@/components/ContactCta';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import SectionRail from '@/components/SectionRail';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div id="accueil" className="min-h-screen flex flex-col relative selection:bg-orange-500 selection:text-white">
      {/* 1. Header with Geomexpert Top-Rule Navigation & Dual Hotlines */}
      <Header />

      {/* Floating Section Navigation Dots Rail (as shown in user screenshot) */}
      <SectionRail />

      <main className="flex-1">
        {/* 2. Hero Section: Exact Mockup with Surveyor Visual, Badges & Headline */}
        <Hero />

        {/* 3. Services Exact Section: 4 Cards matching mockup 1:1 */}
        <ServicesExactSection onSelectService={(service) => setSelectedService(service)} />

        {/* 4. À Propos de SETAU: Geomexpert 2-column About Grid & Credentials */}
        <AboutSection />

        {/* 4. Sectors & Services: Geomexpert 3-column Sector Cards with Real Field Photos */}
        <SectorsSection onSelectService={(service) => setSelectedService(service)} />

        {/* 5. Matériel & Instrumentation de Pointe (Leica) avec descriptions détaillées */}
        <MaterielSection />

        {/* 6. Réalisations: Geomexpert Horizontal Track + Full 66 Works Archive with Lightbox */}
        <AllProjectsGallery />

        {/* 6. Stats Section: Orange Gradient with 4 Serif Italic Jewel Numbers */}
        <StatsSection />

        {/* 7. Méthodologie d'Intervention: 4 Validated Technical Steps */}
        <ProcessSection />

        {/* 8. Geomexpert Circular Orbit CTA Disc with Animated Rotating Border */}
        <ContactCta />

        {/* 9. Interactive Devis & Technical Consultation Form */}
        <ContactSection selectedService={selectedService} />

        {/* 10. Frequently Asked Questions (Cadastre & Topographie) */}
        <FaqSection />
      </main>

      {/* 11. Footer: Geomexpert 4-column Layout with Accreditation Badge */}
      <Footer />

      {/* 12. Mobile Bottom Ergonomic Navigation Bar */}
      <MobileBottomNav />
    </div>
  );
}
