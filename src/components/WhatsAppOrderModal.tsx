import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLIENT_DATA } from '../data/copyData';
import { MenuItem } from '../types';
import { X, MessageCircle, Send, Loader2, AlertCircle } from 'lucide-react';
import { ImageWithSkeleton } from './ImageWithSkeleton';
import { security } from '../lib/security';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: MenuItem | null;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({ isOpen, onClose, selectedItem }) => {
  const [option, setOption] = useState<'cardapio' | 'encomenda' | 'reserva' | 'duvida'>('cardapio');
  const [customNote, setCustomNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rateLimitError, setRateLimitError] = useState<string | null>(null);

  const handleSendWhatsApp = () => {
    // Checagem de Rate Limit para prevenir envio excessivo
    const rateCheck = security.checkRateLimit('whatsapp_send', 5, 60000);
    if (!rateCheck.allowed) {
      setRateLimitError(`Aguarde ${rateCheck.retryAfterSeconds}s para enviar outra mensagem.`);
      return;
    }

    setRateLimitError(null);
    setIsSubmitting(true);
    const sanitizedNote = security.sanitizeInput(customNote);
    let messageText = '';

    if (selectedItem) {
      messageText = `Olá Divino Sabor! Gostaria de pedir o item *${selectedItem.name}* (${selectedItem.price}) do cardápio.`;
      if (sanitizedNote) messageText += ` Observação: ${sanitizedNote}`;
    } else if (option === 'cardapio') {
      messageText = `Olá Divino Sabor! Gostaria de receber o cardápio atualizado e fazer um pedido.`;
      if (sanitizedNote) messageText += ` Observação: ${sanitizedNote}`;
    } else if (option === 'encomenda') {
      messageText = `Olá Divino Sabor! Gostaria de fazer uma encomenda de bolos/doces/salgados para uma ocasião especial.`;
      if (sanitizedNote) messageText += ` Observação: ${sanitizedNote}`;
    } else if (option === 'reserva') {
      messageText = `Olá Divino Sabor! Gostaria de saber mais sobre o atendimento presencial e mesas no Centro de Capão Bonito.`;
      if (sanitizedNote) messageText += ` Observação: ${sanitizedNote}`;
    } else {
      messageText = `Olá Divino Sabor! Tenho uma dúvida: ${sanitizedNote || 'poderiam me ajudar?'}`;
    }

    const encodedMessage = encodeURIComponent(messageText);

    setTimeout(() => {
      window.open(`https://wa.me/${CLIENT_DATA.whatsappRaw}?text=${encodedMessage}`, '_blank');
      setIsSubmitting(false);
      onClose();
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-10 bg-[#FAF7F2] w-full max-w-lg max-h-[90vh] rounded-3xl border-2 border-[#25D366] shadow-2xl overflow-hidden flex flex-col"
          >
            
            {/* Header */}
            <div className="bg-[#8C5E44] text-white p-4 sm:p-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-xs shrink-0">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg leading-tight">Atendimento Divino Sabor</h3>
                  <p className="text-[11px] sm:text-xs text-white/80">WhatsApp: {CLIENT_DATA.whatsapp}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 bg-white overflow-y-auto">
              
              {selectedItem ? (
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D9C5B2] flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#D9C5B2]">
                    <ImageWithSkeleton
                      src={selectedItem.image}
                      alt={selectedItem.name}
                    />
                  </div>
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
                    {[
                      { id: 'cardapio', label: '🍰 Ver Cardápio & Pedir' },
                      { id: 'encomenda', label: '🎂 Encomenda de Bolos' },
                      { id: 'reserva', label: '☕ Visitar no Centro' },
                      { id: 'duvida', label: '💬 Outra Dúvida' },
                    ].map((item) => (
                      <motion.button
                        key={item.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setOption(item.id as any)}
                        className={`p-3 rounded-xl text-xs font-semibold border text-left transition-all cursor-pointer ${
                          option === item.id
                            ? 'bg-[#8C5E44]/10 border-[#8C5E44] text-[#8C5E44]'
                            : 'bg-[#FAF7F2] border-[#D9C5B2] text-[#6B5E55]'
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    ))}
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

              {rateLimitError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{rateLimitError}</span>
                </div>
              )}

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  onClick={handleSendWhatsApp}
                  className="w-full py-4 rounded-2xl text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-80"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Redirecionando para o WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem no WhatsApp</span>
                    </>
                  )}
                </motion.button>
              </div>

            </div>

            {/* Footer */}
            <div className="bg-[#FAF7F2] px-6 py-3 border-t border-[#D9C5B2] text-[11px] text-[#6B5E55] text-center">
              ⚡ Resposta rápida em horário comercial (08:30 às 19:00)
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

