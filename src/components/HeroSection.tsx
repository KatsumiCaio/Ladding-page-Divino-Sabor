import React from 'react';
import { motion } from 'motion/react';
import { CLIENT_DATA } from '../data/copyData';
import { Star, ShoppingBag, MessageCircle, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { ImageWithSkeleton } from './ImageWithSkeleton';

interface HeroSectionProps {
  onOpenWhatsAppModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-[#F0E6D8]/40 pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24">
      {/* Background Natural Subtle Warm Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#8C5E44]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#D9C5B2]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column - Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            
            {/* Google Rating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#F0E6D8] border border-[#D9C5B2] shadow-xs text-[11px] sm:text-xs font-semibold text-[#4A3728]"
            >
              <span className="flex items-center gap-0.5 text-[#8C5E44]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#8C5E44]" />
                ))}
              </span>
              <span className="font-bold text-[#8C5E44]">5.0 no Google</span>
              <span className="text-[#8C5E44] hidden xs:inline">•</span>
              <span className="text-[#6B5E55] hidden xs:inline">Centro de Capão Bonito - SP</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#4A3728] leading-[1.2] sm:leading-[1.15] tracking-tight">
              O seu dia merece um toque <span className="gold-shimmer italic font-serif">divino</span> de sabor e aconchego.
            </h1>

            {/* Slogan Pill */}
            <p className="font-script text-xl sm:text-2xl lg:text-3xl text-[#8C5E44] tracking-wide">
              "Coisas doces acontecem por aqui"
            </p>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-[#6B5E55] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Sinta o aroma do café quentinho, os bolos artesanais mais fofinhos e salgados assados que derretem na boca. Localizada no Centro de Capão Bonito, a <strong className="text-[#4A3728] font-semibold">Divino Sabor</strong> é o seu refúgio para momentos inesquecíveis.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Primary CTA - Cardápio Digital */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={CLIENT_DATA.cardapioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold bg-[#8C5E44] text-[#FDFBF7] hover:bg-[#704832] transition-all shadow-md hover:shadow-xl group"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDFBF7] group-hover:scale-110 transition-transform" />
                <span>Ver Cardápio Digital</span>
                <ArrowRight className="w-4 h-4 text-[#FDFBF7] group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Secondary CTA - WhatsApp */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenWhatsAppModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold bg-white border-2 border-[#8C5E44] text-[#8C5E44] hover:bg-[#FDFBF7] transition-all shadow-xs hover:shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366]" />
                <span>Falar no WhatsApp / Pedir</span>
              </motion.button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 sm:gap-6 text-[11px] sm:text-xs text-[#6B5E55] flex-wrap">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8C5E44] shrink-0" />
                R. Nove de Julho, 400
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8C5E44] shrink-0" />
                08:30 às 19:00
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                Consumo e Delivery
              </span>
            </div>

          </motion.div>

          {/* Right Column - Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Decorative Frame with Warm Earth Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#8C5E44]/20 via-[#D9C5B2]/30 to-[#8C5E44]/10 blur-xl opacity-70" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D9C5B2] bg-white group">
                {/* Hero Image with Skeleton Loading */}
                <div className="w-full h-[290px] xs:h-[340px] sm:h-[420px] lg:h-[480px]">
                  <ImageWithSkeleton
                    src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80"
                    alt="Café cremoso com arte na espuma e sobremesa artesanal na Divino Sabor"
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3728]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge - Top Left */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#FDFBF7]/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl shadow-lg border border-[#D9C5B2] flex items-center gap-2"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F0E6D8] flex items-center justify-center text-xs sm:text-sm text-[#8C5E44]">
                    ☕
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold text-[#4A3728]">Café Cremoso & Especial</p>
                    <p className="text-[9px] sm:text-[10px] text-[#6B5E55]">Extraído na hora</p>
                  </div>
                </motion.div>

                {/* Floating Review Quote Pill - Bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#FDFBF7]/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-[#D9C5B2]"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#8C5E44] text-[#8C5E44]" />
                      ))}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-[#8C5E44] bg-[#F0E6D8] px-2 py-0.5 rounded-full">
                      Avaliação Real
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#4A3728] italic font-medium leading-snug">
                    "O melhor atendimento e os doces mais maravilhosos do centro de Capão Bonito!"
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#6B5E55] mt-1 text-right font-semibold">
                    — Cliente Divino Sabor
                  </p>
                </motion.div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

