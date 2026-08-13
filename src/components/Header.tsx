import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { CLIENT_DATA } from '../data/copyData';
import { ShoppingBag, MessageCircle, Copy, Menu, X, Star } from 'lucide-react';

interface HeaderProps {
  onOpenFramerStudio: () => void;
  onOpenWhatsAppModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenFramerStudio, onOpenWhatsAppModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Cardápio', href: '#cardapio' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#D9C5B2] transition-all">
      {/* Top Banner Alert */}
      <div className="bg-[#4A3728] text-[#FAF7F2] py-1.5 px-4 text-xs text-center font-medium flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 bg-[#8C5E44] text-[#FDFBF7] px-2.5 py-0.5 rounded-full text-[11px] font-semibold shadow-2xs">
          <Star className="w-3 h-3 fill-[#FDFBF7]" /> 5.0 no Google
        </span>
        <span>📍 R. Nove de Julho, 400 - Centro, Capão Bonito - SP</span>
        <span className="hidden md:inline">• Seg a Sáb: 08:30 às 19:00</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="focus:outline-none">
          <BrandLogo size="md" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#6B5E55] hover:text-[#8C5E44] font-medium text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8C5E44] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Framer Studio Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenFramerStudio}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#F0E6D8] text-[#4A3728] border border-[#D9C5B2] hover:bg-[#8C5E44] hover:text-white transition-all shadow-xs group cursor-pointer"
            title="Copiar estrutura e textos prontos para o Framer"
          >
            <Copy className="w-3.5 h-3.5 text-[#8C5E44] group-hover:text-white transition-colors" />
            <span>Copy para Framer</span>
            <span className="bg-[#8C5E44]/15 group-hover:bg-white/20 text-[#8C5E44] group-hover:text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold">
              PRO
            </span>
          </motion.button>

          {/* Cardápio Digital Button */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={CLIENT_DATA.cardapioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#8C5E44] text-[#FAF7F2] hover:bg-[#704832] transition-all shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#FDFBF7]" />
            <span>Cardápio Digital</span>
          </motion.a>

          {/* WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenWhatsAppModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onOpenFramerStudio}
            className="p-2 rounded-lg bg-[#F0E6D8] border border-[#D9C5B2] text-[#4A3728]"
            title="Copiar texto Framer"
          >
            <Copy className="w-4 h-4 text-[#8C5E44]" />
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#4A3728] hover:bg-[#F0E6D8]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="sm:hidden overflow-hidden bg-[#FAF7F2] border-b border-[#D9C5B2] px-4 pt-3 pb-6 space-y-3"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-[#4A3728] hover:bg-[#F0E6D8] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={CLIENT_DATA.cardapioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#8C5E44] text-[#FAF7F2]"
              >
                <ShoppingBag className="w-4 h-4 text-[#FDFBF7]" />
                Ver Cardápio Digital Completo
              </a>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#25D366] text-white"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp / Fazer Pedido
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

