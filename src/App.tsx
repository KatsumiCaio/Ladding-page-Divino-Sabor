import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SocialProofSection } from './components/SocialProofSection';
import { MenuHighlightsSection } from './components/MenuHighlightsSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { FooterSection } from './components/FooterSection';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { LegalPrivacyModal } from './components/LegalPrivacyModal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { measurePerformanceBudget } from './lib/performance';
import { MenuItem } from './types';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'terms' | 'privacy'>('privacy');
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    measurePerformanceBudget();
  }, []);

  const handleOpenLegalModal = (tab: 'terms' | 'privacy') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  const handleOpenMenuItemWhatsApp = (item: MenuItem) => {
    setSelectedMenuItem(item);
    setWhatsAppModalOpen(true);
  };

  const handleOpenGeneralWhatsApp = () => {
    setSelectedMenuItem(null);
    setWhatsAppModalOpen(true);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#FAF7F2] text-[#2C221E] flex flex-col font-sans selection:bg-[#E8A598]/30 selection:text-[#5C2E2B]">
        
        {/* Header */}
        <Header onOpenWhatsAppModal={handleOpenGeneralWhatsApp} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <HeroSection onOpenWhatsAppModal={handleOpenGeneralWhatsApp} />

          {/* 2. Social Proof Section (Google 5.0 Stars) */}
          <SocialProofSection />

          {/* 3. Menu Highlights Section */}
          <MenuHighlightsSection onSelectMenuItem={handleOpenMenuItemWhatsApp} />

          {/* 4. Differentiators Section */}
          <DifferentiatorsSection />

          {/* 5. Location & Hours Section */}
          <LocationHoursSection onOpenWhatsAppModal={handleOpenGeneralWhatsApp} />
        </main>

        {/* 6. Footer Section */}
        <FooterSection onOpenLegalModal={handleOpenLegalModal} />

        {/* Floating WhatsApp Action Button (Mobile-First Ergonomics) */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleOpenGeneralWhatsApp}
            className="group relative flex items-center gap-2.5 px-4 py-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-2xl hover:bg-[#20bd5a] transition-all cursor-pointer border-2 border-white/40"
            title="Falar no WhatsApp Divino Sabor"
            aria-label="Falar no WhatsApp Divino Sabor"
          >
            {/* Pulse ping wave */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#8C5E44] border-2 border-white"></span>
            </span>

            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span className="font-semibold tracking-wide">Falar no WhatsApp</span>
          </motion.button>
        </div>

        {/* Modals */}
        <WhatsAppOrderModal
          isOpen={whatsAppModalOpen}
          onClose={() => {
            setWhatsAppModalOpen(false);
            setSelectedMenuItem(null);
          }}
          selectedItem={selectedMenuItem}
        />

        <LegalPrivacyModal
          isOpen={legalModalOpen}
          onClose={() => setLegalModalOpen(false)}
          defaultTab={legalTab}
        />

      </div>
    </ErrorBoundary>
  );
}
