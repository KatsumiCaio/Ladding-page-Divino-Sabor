import React, { useState } from 'react';
import { CLIENT_DATA } from '../data/copyData';
import { MenuItem } from '../types';
import { X, MessageCircle, Send, CheckCircle2, Heart, ShoppingBag } from 'lucide-react';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: MenuItem | null;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({ isOpen, onClose, selectedItem }) => {
  const [option, setOption] = useState<'cardapio' | 'encomenda' | 'reserva' | 'duvida'>('cardapio');
  const [customNote, setCustomNote] = useState('');

  if (!isOpen) return null;

  const handleSendWhatsApp = () => {
    let messageText = '';

    if (selectedItem) {
      messageText = `Olá Divino Sabor! Gostaria de pedir o item *${selectedItem.name}* (${selectedItem.price}) do cardápio.`;
      if (customNote) messageText += ` Observação: ${customNote}`;
    } else if (option === 'cardapio') {
      messageText = `Olá Divino Sabor! Gostaria de receber o cardápio atualizado e fazer um pedido.`;
    } else if (option === 'encomenda') {
      messageText = `Olá Divino Sabor! Gostaria de fazer uma encomenda de bolos/doces/salgados para uma ocasião especial.`;
    } else if (option === 'reserva') {
      messageText = `Olá Divino Sabor! Gostaria de saber mais sobre o atendimento presencial e mesas no Centro de Capão Bonito.`;
    } else {
      messageText = `Olá Divino Sabor! Tenho uma dúvida: ${customNote || 'poderiam me ajudar?'}`;
    }

    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/${CLIENT_DATA.whatsappRaw}?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FAF7F2] w-full max-w-lg rounded-3xl border-2 border-[#25D366] shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-[#8C5E44] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-xs">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg">Atendimento Divino Sabor</h3>
              <p className="text-xs text-white/80">WhatsApp Direct: {CLIENT_DATA.whatsapp}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 bg-white">
          
          {selectedItem ? (
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D9C5B2] flex items-center gap-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#D9C5B2]"
              />
              <div>
                <span className="text-[10px] font-bold text-[#8C5E44] uppercase">Item Selecionado</span>
                <h4 className="font-serif font-bold text-sm text-[#4A3728]">{selectedItem.name}</h4>
                <p className="text-xs text-[#25D366] font-bold mt-0.5">{selectedItem.price}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#4A3728] uppercase tracking-wider block">
                Como podemos te ajudar hoje?
              </label>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setOption('cardapio')}
                  className={`p-3 rounded-xl text-xs font-semibold border text-left transition-all ${
                    option === 'cardapio'
                      ? 'bg-[#8C5E44]/10 border-[#8C5E44] text-[#8C5E44]'
                      : 'bg-[#FAF7F2] border-[#D9C5B2] text-[#6B5E55]'
                  }`}
                >
                  🍰 Ver Cardápio & Pedir
                </button>

                <button
                  onClick={() => setOption('encomenda')}
                  className={`p-3 rounded-xl text-xs font-semibold border text-left transition-all ${
                    option === 'encomenda'
                      ? 'bg-[#8C5E44]/10 border-[#8C5E44] text-[#8C5E44]'
                      : 'bg-[#FAF7F2] border-[#D9C5B2] text-[#6B5E55]'
                  }`}
                >
                  🎂 Encomenda de Bolos
                </button>

                <button
                  onClick={() => setOption('reserva')}
                  className={`p-3 rounded-xl text-xs font-semibold border text-left transition-all ${
                    option === 'reserva'
                      ? 'bg-[#8C5E44]/10 border-[#8C5E44] text-[#8C5E44]'
                      : 'bg-[#FAF7F2] border-[#D9C5B2] text-[#6B5E55]'
                  }`}
                >
                  ☕ Visitar no Centro
                </button>

                <button
                  onClick={() => setOption('duvida')}
                  className={`p-3 rounded-xl text-xs font-semibold border text-left transition-all ${
                    option === 'duvida'
                      ? 'bg-[#8C5E44]/10 border-[#8C5E44] text-[#8C5E44]'
                      : 'bg-[#FAF7F2] border-[#D9C5B2] text-[#6B5E55]'
                  }`}
                >
                  💬 Outra Dúvida
                </button>
              </div>
            </div>
          )}

          {/* Optional Message Field */}
          <div>
            <label className="text-xs font-bold text-[#4A3728] uppercase tracking-wider block mb-1">
              Observação ou Detalhes do Pedido (Opcional):
            </label>
            <textarea
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="Ex: Gostaria de retirar às 16h no balcão / Quero saber sobre sabores de bolo..."
              rows={3}
              className="w-full p-3 rounded-xl border border-[#D9C5B2] bg-[#FAF7F2] text-xs text-[#4A3728] focus:outline-none focus:border-[#8C5E44] transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-4 rounded-2xl text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Mensagem no WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#FAF7F2] px-6 py-3 border-t border-[#D9C5B2] text-[11px] text-[#6B5E55] text-center">
          ⚡ Resposta rápida em horário comercial (08:30 às 19:00)
        </div>

      </div>
    </div>
  );
};
