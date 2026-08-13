import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SocialProofSection } from './components/SocialProofSection';
import { MenuHighlightsSection } from './components/MenuHighlightsSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { FooterSection } from './components/FooterSection';
import { FramerCopyStudioModal } from './components/FramerCopyStudioModal';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { MenuItem } from './types';
import { Sparkles, Copy, MessageCircle } from 'lucide-react';

export default function App() {
  const [framerStudioOpen, setFramerStudioOpen] = useState(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const handleOpenMenuItemWhatsApp = (item: MenuItem) => {
    setSelectedMenuItem(item);
    setWhatsAppModalOpen(true);
  };

  const handleOpenGeneralWhatsApp = () => {
    setSelectedMenuItem(null);
    setWhatsAppModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C221E] flex flex-col font-sans selection:bg-[#E8A598]/30 selection:text-[#5C2E2B]">
      
      {/* Header */}
      <Header
        onOpenFramerStudio={() => setFramerStudioOpen(true)}
        onOpenWhatsAppModal={handleOpenGeneralWhatsApp}
      />

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
      <FooterSection />

      {/* Floating Action Bar (Sticky Copy & WhatsApp for Web Designer/Client) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          onClick={() => setFramerStudioOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#2C1A0E] text-[#FAF7F2] font-bold text-xs shadow-xl border border-[#C89B3C] hover:bg-[#3A2312] transition-all hover:scale-105 group cursor-pointer"
          title="Abrir Studio de Copy para Framer"
        >
          <Sparkles className="w-4 h-4 text-[#C89B3C] group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Copy Framer</span>
          <Copy className="w-3.5 h-3.5 text-[#E8A598]" />
        </button>

        <button
          onClick={handleOpenGeneralWhatsApp}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#25D366] text-white font-bold text-xs shadow-xl hover:bg-[#20bd5a] transition-all hover:scale-105 cursor-pointer"
          title="Falar no WhatsApp Divino Sabor"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </button>
      </div>

      {/* Modals */}
      <FramerCopyStudioModal
        isOpen={framerStudioOpen}
        onClose={() => setFramerStudioOpen(false)}
      />

      <WhatsAppOrderModal
        isOpen={whatsAppModalOpen}
        onClose={() => {
          setWhatsAppModalOpen(false);
          setSelectedMenuItem(null);
        }}
        selectedItem={selectedMenuItem}
      />

    </div>
  );
}
