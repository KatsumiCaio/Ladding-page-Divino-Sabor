import React from 'react';
import { motion } from 'motion/react';
import { CLIENT_DATA } from '../data/copyData';
import { MapPin, Clock, Navigation, Phone, MessageCircle, ExternalLink } from 'lucide-react';

interface LocationHoursSectionProps {
  onOpenWhatsAppModal: () => void;
}

export const LocationHoursSection: React.FC<LocationHoursSectionProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <section id="localizacao" className="py-12 sm:py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#D9C5B2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-[#F0E6D8] text-[#8C5E44] uppercase tracking-wider border border-[#D9C5B2]">
              <MapPin className="w-3.5 h-3.5 text-[#8C5E44]" /> Informações Práticas
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A3728]">
              Venha tomar um café especial com a gente!
            </h2>

            <p className="text-[#6B5E55] text-xs sm:text-sm sm:text-base leading-relaxed">
              Estamos localizados no coração do Centro de Capão Bonito - SP. Um ambiente fácil de encontrar, seguro e acolhedor para a sua rotina.
            </p>

            {/* Practical Info List Cards */}
            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2 text-left">
              
              {/* Address Card */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D9C5B2] flex items-start gap-3 sm:gap-4 shadow-xs hover:border-[#8C5E44] transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F0E6D8] text-[#8C5E44] flex items-center justify-center shrink-0 border border-[#D9C5B2]">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#4A3728]">Endereço Completo</h3>
                  <p className="text-xs text-[#6B5E55] mt-0.5 sm:mt-1 font-medium">{CLIENT_DATA.location}</p>
                  <p className="text-[10px] sm:text-[11px] text-[#8C5E44] mt-0.5 font-semibold">Ponto de referência: Próximo ao Centro Comercial</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D9C5B2] flex items-start gap-3 sm:gap-4 shadow-xs hover:border-[#8C5E44] transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F0E6D8] text-[#8C5E44] flex items-center justify-center shrink-0 border border-[#D9C5B2]">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#4A3728]">Horário de Funcionamento</h3>
                  <p className="text-xs text-[#4A3728] mt-0.5 sm:mt-1 font-semibold">{CLIENT_DATA.hours}</p>
                  <p className="text-[10px] sm:text-[11px] text-[#6B5E55] mt-0.5">Atendimento presencial e retiradas no balcão</p>
                </div>
              </div>

              {/* WhatsApp & Contact Card */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D9C5B2] flex items-start gap-3 sm:gap-4 shadow-xs hover:border-[#8C5E44] transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F0E6D8] text-[#8C5E44] flex items-center justify-center shrink-0 border border-[#D9C5B2]">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#4A3728]">Contato & WhatsApp</h3>
                  <p className="text-xs text-[#4A3728] mt-0.5 sm:mt-1 font-bold">{CLIENT_DATA.whatsapp}</p>
                  <p className="text-[10px] sm:text-[11px] text-[#6B5E55] mt-0.5">Tire dúvidas, peça encomendas ou reserve mesa</p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={CLIENT_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#8C5E44] text-[#FAF7F2] hover:bg-[#704832] transition-all shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#FAF7F2]" />
                <span>Como Chegar (Google Maps)</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenWhatsAppModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Mandar Mensagem no WhatsApp</span>
              </motion.button>
            </div>

          </motion.div>

          {/* Right Map Preview & Interactive Frame */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-2.5 sm:p-3 rounded-3xl border border-[#D9C5B2] shadow-xl relative overflow-hidden">
              
              {/* Map Badge */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 bg-[#FDFBF7]/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-md border border-[#D9C5B2] flex items-center gap-2">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#8C5E44] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold text-[#4A3728]">Divino Sabor - Capão Bonito</span>
              </div>

              {/* Embedded Google Maps Frame */}
              <div className="w-full h-[280px] sm:h-[400px] lg:h-[440px] rounded-2xl overflow-hidden bg-[#FAF7F2] relative">
                <iframe
                  title="Localização Divino Sabor Capão Bonito"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.330752185568!2d-48.3512392237402!3d-23.992019978510863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c50eb01bf361ad%3A0x2f9cb79fbb9b30c6!2sR.%20Nove%20de%20Julho%2C%20400%20-%20Centro%2C%20Cap%C3%A3o%20Bonito%20-%20SP%2C%2018240-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-110"
                />
              </div>

              {/* Footer info bar under map */}
              <div className="p-3 sm:p-4 bg-[#FAF7F2] rounded-xl mt-2.5 sm:mt-3 flex items-center justify-between flex-wrap gap-2 text-[11px] sm:text-xs text-[#6B5E55]">
                <span className="font-semibold text-[#4A3728]">📍 R. Nove de Julho, 400 - Centro</span>
                <a
                  href={CLIENT_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#8C5E44] font-bold hover:underline"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

