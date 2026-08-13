import React from 'react';
import { CLIENT_DATA } from '../data/copyData';
import { Star, ShoppingBag, MessageCircle, MapPin, Heart, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface HeroSectionProps {
  onOpenWhatsAppModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-[#F0E6D8]/40 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Natural Subtle Warm Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#8C5E44]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#D9C5B2]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0E6D8] border border-[#D9C5B2] shadow-xs text-xs font-semibold text-[#4A3728]">
              <span className="flex items-center gap-1 text-[#8C5E44]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#8C5E44]" />
                ))}
              </span>
              <span className="font-bold text-[#8C5E44]">5.0 no Google</span>
              <span className="text-[#8C5E44] hidden sm:inline">•</span>
              <span className="text-[#6B5E55] hidden sm:inline">Centro de Capão Bonito - SP</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A3728] leading-[1.15] tracking-tight">
              O seu dia merece um toque <span className="gold-shimmer italic font-serif">divino</span> de sabor e aconchego.
            </h1>

            {/* Slogan Pill */}
            <p className="font-script text-2xl sm:text-3xl text-[#8C5E44] tracking-wide">
              "Coisas doces acontecem por aqui"
            </p>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#6B5E55] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Sinta o aroma do café quentinho, os bolos artesanais mais fofinhos e salgados assados que derretem na boca. Localizada no Centro de Capão Bonito, a <strong className="text-[#4A3728] font-semibold">Divino Sabor</strong> é o seu refúgio para momentos inesquecíveis.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA - Cardápio Digital */}
              <a
                href={CLIENT_DATA.cardapioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-sm font-bold bg-[#8C5E44] text-[#FDFBF7] hover:bg-[#704832] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <ShoppingBag className="w-5 h-5 text-[#FDFBF7] group-hover:scale-110 transition-transform" />
                <span>Ver Cardápio Digital</span>
                <ArrowRight className="w-4 h-4 text-[#FDFBF7] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA - WhatsApp */}
              <button
                onClick={onOpenWhatsAppModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-sm font-bold bg-white border-2 border-[#8C5E44] text-[#8C5E44] hover:bg-[#FDFBF7] transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Falar no WhatsApp / Pedir</span>
              </button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#6B5E55] flex-wrap">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#8C5E44]" />
                R. Nove de Julho, 400 - Centro
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#8C5E44]" />
                Seg a Sáb: 08:30 às 19:00
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                Consumo no Local e Delivery
              </span>
            </div>

          </div>

          {/* Right Column - Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame with Warm Earth Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#8C5E44]/20 via-[#D9C5B2]/30 to-[#8C5E44]/10 blur-xl opacity-70" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D9C5B2] bg-white group">
                {/* Hero Image */}
                <img
                  src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80"
                  alt="Café cremoso com arte na espuma e sobremesa artesanal na Divino Sabor"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3728]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge - Top Left */}
                <div className="absolute top-4 left-4 bg-[#FDFBF7]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-[#D9C5B2] flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#F0E6D8] flex items-center justify-center text-[#8C5E44]">
                    ☕
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#4A3728]">Café Cremoso & Especial</p>
                    <p className="text-[10px] text-[#6B5E55]">Extraído na hora</p>
                  </div>
                </div>

                {/* Floating Review Quote Pill - Bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FDFBF7]/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#D9C5B2]">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#8C5E44] text-[#8C5E44]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-[#8C5E44] bg-[#F0E6D8] px-2 py-0.5 rounded-full">
                      Avaliação Real
                    </span>
                  </div>
                  <p className="text-xs text-[#4A3728] italic font-medium">
                    "O melhor atendimento e os doces mais maravilhosos do centro de Capão Bonito!"
                  </p>
                  <p className="text-[10px] text-[#6B5E55] mt-1 text-right font-semibold">
                    — Cliente Divino Sabor
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
