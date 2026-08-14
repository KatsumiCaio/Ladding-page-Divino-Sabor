import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, FileText, X, Check } from 'lucide-react';
import { security } from '../lib/security';

interface LegalPrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'terms' | 'privacy';
}

export const LegalPrivacyModal: React.FC<LegalPrivacyModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'privacy',
}) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>(defaultTab);
  const [hasConsented, setHasConsented] = useState(() => security.validateLGPDConsent());

  const handleAcceptLGPD = () => {
    security.setLGPDConsent(true);
    setHasConsented(true);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-10 bg-[#FAF7F2] w-full max-w-3xl max-h-[85vh] rounded-3xl border-2 border-[#8C5E44] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#4A3728] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#5C4635] shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#8C5E44] text-white flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-lg text-white leading-tight">
                    Termos & Privacidade LGPD
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#F0E6D8]">
                    Divino Sabor - Capão Bonito / SP
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#5C4635] hover:bg-[#8C5E44] text-white transition-all cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Tabs */}
            <div className="bg-white border-b border-[#D9C5B2] px-3 sm:px-6 py-2 sm:py-2.5 flex items-center gap-2 overflow-x-auto shrink-0">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'privacy'
                    ? 'bg-[#4A3728] text-white'
                    : 'bg-[#FAF7F2] text-[#6B5E55] hover:text-[#4A3728]'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366]" />
                <span>Privacidade (LGPD)</span>
              </button>

              <button
                onClick={() => setActiveTab('terms')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'terms'
                    ? 'bg-[#4A3728] text-white'
                    : 'bg-[#FAF7F2] text-[#6B5E55] hover:text-[#4A3728]'
                }`}
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C5E44]" />
                <span>Termos de Uso</span>
              </button>
            </div>

            {/* Content Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3 sm:space-y-4 text-xs text-[#4A3728] leading-relaxed bg-white">
              {activeTab === 'privacy' ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D9C5B2] space-y-2">
                    <h4 className="font-serif font-bold text-sm text-[#4A3728]">
                      1. Tratamento de Dados Pessoais (Lei 13.709/2018 - LGPD)
                    </h4>
                    <p>
                      A <strong>Divino Sabor Doceria & Cafeteria</strong> valoriza a privacidade dos seus clientes de Capão Bonito - SP. Coletamos apenas as informações estritamente necessárias fornecidas voluntariamente ao enviar pedidos pelo WhatsApp (ex: nome, itens desejados e observações de entrega/retirada).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D9C5B2] space-y-2">
                    <h4 className="font-serif font-bold text-sm text-[#4A3728]">
                      2. Compartilhamento e Segurança
                    </h4>
                    <p>
                      Seus dados nunca são vendidos, alugados ou compartilhados com terceiros para fins de marketing. As mensagens de atendimento são transmitidas de forma direta e segura para o nosso canal de atendimento via WhatsApp Oficial.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D9C5B2] space-y-2">
                    <h4 className="font-serif font-bold text-sm text-[#4A3728]">
                      3. Seus Direitos
                    </h4>
                    <p>
                      Você tem o direito de solicitar a confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou eliminação de informações pessoais a qualquer momento via WhatsApp ou presencialmente em nossa loja no Centro de Capão Bonito.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D9C5B2] space-y-2">
                    <h4 className="font-serif font-bold text-sm text-[#4A3728]">
                      1. Uso do Cardápio Digital e Atendimento
                    </h4>
                    <p>
                      O cardápio virtual da Divino Sabor é um catálogo informativo de nossos doces, salgados e cafés artesanais. Preços e disponibilidade de produtos em estoque podem sofrer alterações sem aviso prévio.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D9C5B2] space-y-2">
                    <h4 className="font-serif font-bold text-sm text-[#4A3728]">
                      2. Encomendas e Prazos
                    </h4>
                    <p>
                      Encomendas de bolos festivos e tortas especiais devem ser confirmadas com antecedência pelo nosso WhatsApp com nossa equipe do balcão.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D9C5B2] space-y-2">
                    <h4 className="font-serif font-bold text-sm text-[#4A3728]">
                      3. Direitos Autorais e Marca
                    </h4>
                    <p>
                      Todas as marcas, fotografias de produtos, logotipo "Divino Sabor" e textos da landing page são de propriedade exclusiva do estabelecimento.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-[#FAF7F2] p-4 border-t border-[#D9C5B2] flex items-center justify-between text-xs">
              <span className="text-[#6B5E55]">
                Revisado & Aprovado pelo Jurídico - Atualizado em {new Date().getFullYear()}
              </span>

              <button
                onClick={handleAcceptLGPD}
                className="px-5 py-2.5 rounded-xl bg-[#8C5E44] text-white font-bold hover:bg-[#704832] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Check className="w-4 h-4 text-[#25D366]" />
                <span>{hasConsented ? 'Entendido' : 'Aceitar e Concordar'}</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
