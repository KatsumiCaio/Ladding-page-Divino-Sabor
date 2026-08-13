import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LANDING_PAGE_COPY_SECTIONS, FRAMER_COLOR_PALETTE } from '../data/copyData';
import { X, Copy, Check, Sparkles, Download, Layers, Palette, Type, FileText } from 'lucide-react';

interface FramerCopyStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FramerCopyStudioModal: React.FC<FramerCopyStudioModalProps> = ({ isOpen, onClose }) => {
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [activeTab, setActiveTab] = useState<'copy' | 'specs' | 'framer-guide'>('copy');

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSectionId(id);
    setTimeout(() => setCopiedSectionId(null), 2000);
  };

  const handleCopyAllMarkdown = () => {
    const fullMarkdown = `# LANDING PAGE DIVINO SABOR - DOCERIA & CAFETERIA (CAPÃO BONITO - SP)
Concept: "Coisas doces acontecem por aqui"
Location: R. Nove de Julho, 400 - Centro, Capão Bonito - SP
Google Rating: ⭐⭐⭐⭐⭐ 5.0 (+60 avaliações)
WhatsApp: (15) 99787-7048
Cardápio: divinosabor.compraqui.app

---

${LANDING_PAGE_COPY_SECTIONS.map(section => `
=========================================
${section.title}
=========================================

${section.framerFormattedText}
`).join('\n\n')}
`;

    navigator.clipboard.writeText(fullMarkdown);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const downloadTextFile = () => {
    const fullContent = `===================================================================
COPYWRITING & ESTRUTURA PARA FRAMER - DIVINO SABOR DOCERIA & CAFETERIA
===================================================================
Cliente: Divino Sabor
Endereço: R. Nove de Julho, 400 - Centro, Capão Bonito - SP
WhatsApp: (15) 99787-7048 | Cardápio: divinosabor.compraqui.app
Avaliação Google: 5.0 Estrelas

${LANDING_PAGE_COPY_SECTIONS.map(s => `
-------------------------------------------------------------------
${s.title}
-------------------------------------------------------------------
${s.framerFormattedText}
`).join('\n\n')}
`;

    const blob = new Blob([fullContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DivinoSabor_Copy_Framer_Completa.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-10 bg-[#FAF7F2] w-full max-w-5xl max-h-[90vh] rounded-3xl border-2 border-[#8C5E44] shadow-2xl flex flex-col overflow-hidden"
          >
            
            {/* Modal Header */}
            <div className="bg-[#4A3728] text-[#FAF7F2] p-5 sm:p-6 flex items-center justify-between border-b border-[#5C4635]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#8C5E44] text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                    Framer Copy Studio & Style Guide
                    <span className="text-[10px] bg-[#8C5E44] text-white px-2 py-0.5 rounded-md font-bold uppercase">
                      Pronto para Copiar
                    </span>
                  </h2>
                  <p className="text-xs text-[#F0E6D8]">
                    Textos exatos e estrutura de alta conversão para criar no Framer
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-xl bg-[#5C4635] hover:bg-[#8C5E44] text-[#FAF7F2] transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="bg-white border-b border-[#D9C5B2] px-6 py-2.5 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('copy')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'copy'
                      ? 'bg-[#4A3728] text-white shadow-xs'
                      : 'bg-[#FAF7F2] text-[#6B5E55] hover:text-[#4A3728]'
                  }`}
                >
                  <FileText className="w-4 h-4 text-[#8C5E44]" />
                  <span>Copy das 6 Seções</span>
                </button>

                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'specs'
                      ? 'bg-[#4A3728] text-white shadow-xs'
                      : 'bg-[#FAF7F2] text-[#6B5E55] hover:text-[#4A3728]'
                  }`}
                >
                  <Palette className="w-4 h-4 text-[#8C5E44]" />
                  <span>Paleta & Fontes Framer</span>
                </button>

                <button
                  onClick={() => setActiveTab('framer-guide')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'framer-guide'
                      ? 'bg-[#4A3728] text-white shadow-xs'
                      : 'bg-[#FAF7F2] text-[#6B5E55] hover:text-[#4A3728]'
                  }`}
                >
                  <Layers className="w-4 h-4 text-[#25D366]" />
                  <span>Guia de Estrutura Framer</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCopyAllMarkdown}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#8C5E44] text-[#FAF7F2] hover:bg-[#704832] transition-all shadow-xs cursor-pointer"
                >
                  {copiedAll ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAll ? 'Tudo Copiado!' : 'Copiar Tudo (Markdown)'}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={downloadTextFile}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#4A3728] text-[#FAF7F2] hover:bg-[#3A2312] transition-all shadow-xs cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#F0E6D8]" />
                  <span>Baixar .TXT</span>
                </motion.button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-8 bg-[#FAF7F2]">
              
              {/* TAB 1: COPY SECTIONS */}
              {activeTab === 'copy' && (
                <div className="space-y-6">
                  {LANDING_PAGE_COPY_SECTIONS.map((section) => (
                    <div
                      key={section.id}
                      className="bg-white rounded-2xl p-6 border border-[#D9C5B2] shadow-xs hover:border-[#8C5E44] transition-all"
                    >
                      <div className="flex items-center justify-between pb-4 border-b border-[#F0E6D8] mb-4">
                        <h3 className="font-serif font-bold text-base text-[#4A3728] flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-[#F0E6D8] text-[#8C5E44] flex items-center justify-center text-xs font-bold border border-[#D9C5B2]">
                            {section.sectionNumber}
                          </span>
                          {section.title}
                        </h3>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleCopyText(section.framerFormattedText, section.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F2] hover:bg-[#4A3728] text-[#4A3728] hover:text-[#FAF7F2] border border-[#D9C5B2] transition-all cursor-pointer"
                        >
                          {copiedSectionId === section.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#25D366]" />
                              <span>Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-[#8C5E44]" />
                              <span>Copiar Caixa de Texto Framer</span>
                            </>
                          )}
                        </motion.button>
                      </div>

                      {/* Formatted Code block */}
                      <pre className="bg-[#4A3728] text-[#FAF7F2] p-4 rounded-xl text-xs font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto border border-[#5C4635] selection:bg-[#8C5E44]">
                        {section.framerFormattedText}
                      </pre>

                      {/* Individual Fields Breakdown */}
                      <div className="mt-4 pt-4 border-t border-[#F0E6D8] grid sm:grid-cols-2 gap-3">
                        {section.fields.map((field, idx) => (
                          <div key={idx} className="bg-[#FAF7F2] p-3 rounded-xl border border-[#D9C5B2]">
                            <p className="text-[10px] font-bold text-[#8C5E44] uppercase tracking-wider">
                              {field.label}
                            </p>
                            <p className="text-xs text-[#4A3728] mt-0.5 font-medium">
                              {field.text}
                            </p>
                          </div>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: SPECS & PALETTE */}
              {activeTab === 'specs' && (
                <div className="space-y-6">
                  
                  {/* Color Palette Card */}
                  <div className="bg-white rounded-2xl p-6 border border-[#D9C5B2]">
                    <h3 className="font-serif font-bold text-lg text-[#4A3728] mb-4 flex items-center gap-2">
                      <Palette className="w-5 h-5 text-[#8C5E44]" />
                      Paleta de Cores Framer (Baseada no Tema Natural Tones)
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {FRAMER_COLOR_PALETTE.map((color, idx) => (
                        <div key={idx} className="p-4 rounded-xl border border-[#D9C5B2] bg-[#FAF7F2] flex items-center gap-4">
                          <div
                            className="w-12 h-12 rounded-xl shadow-md border border-black/10 shrink-0"
                            style={{ backgroundColor: color.hex }}
                          />
                          <div>
                            <h4 className="font-bold text-xs text-[#4A3728]">{color.name}</h4>
                            <code className="text-[11px] font-mono text-[#8C5E44] font-bold">{color.hex}</code>
                            <p className="text-[10px] text-[#6B5E55] mt-0.5">{color.usage}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography Specs Card */}
                  <div className="bg-white rounded-2xl p-6 border border-[#D9C5B2] space-y-4">
                    <h3 className="font-serif font-bold text-lg text-[#4A3728] flex items-center gap-2">
                      <Type className="w-5 h-5 text-[#8C5E44]" />
                      Fontes Recomendadas no Framer
                    </h3>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#D9C5B2]">
                        <span className="text-[10px] font-bold text-[#8C5E44] uppercase">Títulos Principais</span>
                        <h4 className="font-serif font-bold text-xl text-[#4A3728] mt-1">Playfair Display</h4>
                        <p className="text-xs text-[#6B5E55] mt-1">Estilo serifado elegante, transmite aconchego e sofisticação artesanal.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#D9C5B2]">
                        <span className="text-[10px] font-bold text-[#8C5E44] uppercase">Acentos & Slogan</span>
                        <h4 className="font-script font-bold text-2xl text-[#4A3728] mt-1">Alex Brush / Great Vibes</h4>
                        <p className="text-xs text-[#6B5E55] mt-1">Fonte caligráfica idêntica ao estilo do logo "Divino Sabor".</p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#D9C5B2]">
                        <span className="text-[10px] font-bold text-[#25D366] uppercase">Corpo de Texto & Botões</span>
                        <h4 className="font-sans font-bold text-lg text-[#4A3728] mt-1">Plus Jakarta Sans</h4>
                        <p className="text-xs text-[#6B5E55] mt-1">Sans-serif moderna, legível e otimizada para telas e conversão rápida.</p>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 3: FRAMER LAYOUT GUIDE */}
              {activeTab === 'framer-guide' && (
                <div className="bg-white rounded-2xl p-6 border border-[#D9C5B2] space-y-4">
                  <h3 className="font-serif font-bold text-lg text-[#4A3728]">
                    📐 Dicas de Construção de Layout no Framer (High-Conversion)
                  </h3>
                  
                  <ul className="space-y-3 text-xs text-[#6B5E55] leading-relaxed">
                    <li className="p-3 bg-[#FAF7F2] rounded-xl border border-[#D9C5B2] flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#8C5E44] text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                      <span><strong>Frames & Containers:</strong> Use o padrão de container principal com largura máxima de 1280px (Max Width) e padding horizontal de 24px em mobile e 48px em desktop.</span>
                    </li>
                    <li className="p-3 bg-[#FAF7F2] rounded-xl border border-[#D9C5B2] flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#8C5E44] text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                      <span><strong>Border Radius:</strong> Use <code className="bg-white px-1.5 py-0.5 rounded border">radius: 24px</code> para cards principais e <code className="bg-white px-1.5 py-0.5 rounded border">radius: 16px</code> para botões e caixas de avaliações.</span>
                    </li>
                    <li className="p-3 bg-[#FAF7F2] rounded-xl border border-[#D9C5B2] flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#8C5E44] text-white flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                      <span><strong>Links de Ação:</strong> Configure o botão principal para abrir em nova aba <code className="bg-white px-1.5 py-0.5 rounded border">https://divinosabor.compraqui.app</code> e o WhatsApp para <code className="bg-white px-1.5 py-0.5 rounded border">https://wa.me/5515997877048</code>.</span>
                    </li>
                  </ul>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="bg-[#FAF7F2] p-4 border-t border-[#D9C5B2] flex items-center justify-between text-xs text-[#6B5E55]">
              <span>📍 Divino Sabor • Capão Bonito - SP</span>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-[#4A3728] text-white font-bold hover:bg-[#5C4635] transition-colors cursor-pointer"
              >
                Fechar Studio
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

