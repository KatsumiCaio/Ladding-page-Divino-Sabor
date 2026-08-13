import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { CLIENT_DATA } from '../data/copyData';
import { MenuItem } from '../types';
import { ExternalLink, ShoppingBag, MessageCircle, Sparkles, Check } from 'lucide-react';

interface MenuHighlightsSectionProps {
  onSelectMenuItem?: (item: MenuItem) => void;
}

export const MenuHighlightsSection: React.FC<MenuHighlightsSectionProps> = ({ onSelectMenuItem }) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'doces' | 'salgados' | 'cafes'>('todos');

  const categories = [
    { id: 'todos', label: '✨ Todos os Destaques', icon: '🍽️' },
    { id: 'doces', label: '🍰 Doces & Sobremesas', icon: '🍰' },
    { id: 'salgados', label: '🥐 Salgados Assados', icon: '🥐' },
    { id: 'cafes', label: '☕ Cafés & Bebidas', icon: '☕' },
  ];

  const filteredItems = activeTab === 'todos' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="cardapio" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F0E6D8] text-[#8C5E44] uppercase tracking-wider border border-[#D9C5B2]">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5E44]" /> Destaques do Cardápio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A3728]">
            O que você vai encontrar na Divino Sabor
          </h2>
          <p className="text-[#6B5E55] text-base leading-relaxed">
            Receitas artesanais preparadas diariamente com os melhores ingredientes. Das sobremesas elaboradas aos salgados assados e cafés cremosos.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#8C5E44] text-white shadow-md scale-102 border border-[#8C5E44]'
                  : 'bg-white text-[#6B5E55] hover:bg-[#FDFBF7] hover:text-[#4A3728] border border-[#D9C5B2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#D9C5B2] hover:border-[#8C5E44] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Item Image Container */}
                <div className="relative h-52 overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A3728]/60 via-transparent to-transparent opacity-60" />

                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-[#4A3728]/90 text-[#FAF7F2] backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold shadow-xs border border-[#D9C5B2]">
                      ✨ {item.badge}
                    </span>
                  )}

                  {/* Price Tag */}
                  <span className="absolute bottom-3 right-3 bg-[#F0E6D8] text-[#8C5E44] backdrop-blur-md px-3 py-1 rounded-xl text-sm font-bold shadow-md border border-[#D9C5B2]">
                    {item.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg text-[#4A3728] group-hover:text-[#8C5E44] transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#6B5E55] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-[#F0E6D8]">
                <span className="text-[11px] font-semibold text-[#8C5E44]">
                  {item.category === 'doces' ? '🍰 Sobremesa' : item.category === 'salgados' ? '🥐 Assado' : '☕ Bebida'}
                </span>

                <button
                  onClick={() => onSelectMenuItem && onSelectMenuItem(item)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#F0E6D8] text-[#8C5E44] hover:bg-[#8C5E44] hover:text-white transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Pedir no WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Cardápio Digital Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#4A3728] via-[#5C4635] to-[#4A3728] rounded-3xl p-8 sm:p-10 text-[#FAF7F2] relative overflow-hidden shadow-xl border border-[#D9C5B2]/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-[#D9C5B2] uppercase tracking-wider">
              📲 Cardápio Digital Completo em Tempo Real
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Quer ver todas as opções com fotos e preços atualizados?
            </h3>
            <p className="text-xs sm:text-sm text-[#F0E6D8]">
              Acesse nosso aplicativo de pedidos online. Faça seu pedido diretamente da sua mesa ou peça entrega para a sua casa em Capão Bonito.
            </p>
          </div>

          <a
            href={CLIENT_DATA.cardapioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-sm font-bold bg-[#8C5E44] text-[#FAF7F2] hover:bg-[#704832] transition-all shadow-lg hover:scale-105"
          >
            <ShoppingBag className="w-4 h-4 text-[#FAF7F2]" />
            <span>Acessar Cardápio (compraqui.app)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
