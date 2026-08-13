import React from 'react';
import { CLIENT_DATA } from '../data/copyData';
import { BrandLogo } from './BrandLogo';
import { Instagram, MessageCircle, ShoppingBag, MapPin, Heart, Star, ArrowUp } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4A3728] text-[#FAF7F2] pt-16 pb-12 border-t-4 border-[#8C5E44] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#5C4635]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="lg" />
            <p className="text-xs sm:text-sm text-[#F0E6D8] max-w-md leading-relaxed pt-2">
              A cafeteria e doceria artesanal mais amada no Centro de Capão Bonito - SP. Cafés especiais, bolos artesanais, salgados assados e sobremesas elaboradas com amor.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="flex text-[#8C5E44]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FDFBF7]" />
                ))}
              </span>
              <span className="text-xs font-bold text-[#FDFBF7]">5.0 no Google</span>
              <span className="text-xs text-[#D9C5B2]">(+60 Avaliações Reais)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#D9C5B2] uppercase tracking-wider">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-xs text-[#F0E6D8]">
              <li>
                <a href="#cardapio" className="hover:text-[#D9C5B2] transition-colors flex items-center gap-1.5">
                  • Destaques do Cardápio
                </a>
              </li>
              <li>
                <a href={CLIENT_DATA.cardapioUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#D9C5B2] transition-colors flex items-center gap-1.5">
                  • Cardápio Digital (compraqui.app) ↗
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#D9C5B2] transition-colors flex items-center gap-1.5">
                  • Avaliações no Google (5.0 Stars)
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#D9C5B2] transition-colors flex items-center gap-1.5">
                  • Por que nos Visitar
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#D9C5B2] transition-colors flex items-center gap-1.5">
                  • Localização e Horários
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais & Contato */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#D9C5B2] uppercase tracking-wider">
              Conecte-se com a Gente
            </h4>

            <div className="space-y-2.5">
              {/* Instagram */}
              <a
                href={CLIENT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#5C4635] hover:bg-[#6C533F] text-xs font-semibold text-[#FAF7F2] transition-colors border border-[#D9C5B2]/30"
              >
                <Instagram className="w-4 h-4 text-[#D9C5B2]" />
                <span>Instagram: {CLIENT_DATA.instagramHandle}</span>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CLIENT_DATA.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-xs font-semibold text-[#25D366] transition-colors border border-[#25D366]/30"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {CLIENT_DATA.whatsapp}</span>
              </a>

              {/* Cardápio Digital App */}
              <a
                href={CLIENT_DATA.cardapioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#8C5E44]/30 hover:bg-[#8C5E44]/50 text-xs font-semibold text-[#FDFBF7] transition-colors border border-[#D9C5B2]/30"
              >
                <ShoppingBag className="w-4 h-4 text-[#D9C5B2]" />
                <span>Cardápio Digital: divinosabor.compraqui.app</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9C5B2]">
          <p className="text-center sm:text-left">
            © 2026 <strong className="text-[#FDFBF7]">Divino Sabor - Doceria & Cafeteria</strong>. R. Nove de Julho, 400 - Centro, Capão Bonito - SP.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px]">
              Feito com <Heart className="w-3.5 h-3.5 text-[#8C5E44] fill-[#8C5E44]" /> em Capão Bonito
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#5C4635] hover:bg-[#8C5E44] text-[#FAF7F2] transition-all"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
