import React from 'react';
import { motion } from 'motion/react';
import { Home, Bike, DollarSign, Sparkles, ShieldCheck } from 'lucide-react';

export const DifferentiatorsSection: React.FC = () => {
  const diffs = [
    {
      icon: Home,
      title: '🏡 Ambiente Aconchegante',
      subtitle: 'Seu refúgio perfeito no Centro',
      description: 'Espaço decorado com carinho, iluminação acolhedora e clima perfeito para pausar o dia, reunir a família ou fazer uma reunião de trabalho relaxante.',
      color: 'bg-[#F0E6D8] text-[#8C5E44]',
    },
    {
      icon: Bike,
      title: '🚴 Consumo no Local e Delivery',
      subtitle: 'Comodidade onde você estiver',
      description: 'Sinta a acolhida presencial de nossa equipe nota 10 no local ou peça no conforto da sua casa ou escritório com entrega rápida, embalagem segura e carinho em cada item.',
      color: 'bg-[#F0E6D8] text-[#8C5E44]',
    },
    {
      icon: DollarSign,
      title: '💵 Qualidade com Preço Justo',
      subtitle: 'Sabor refinado que cabe no bolso',
      description: 'Ingredientes selecionados de altíssima qualidade combinados com valores acessíveis e camaradas, citados com carinho em mais de 60 avaliações de clientes.',
      color: 'bg-[#F0E6D8] text-[#8C5E44]',
    },
  ];

  return (
    <section id="diferenciais" className="py-12 sm:py-20 lg:py-24 bg-[#FDFBF7] border-t border-[#D9C5B2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-[#F0E6D8] text-[#8C5E44] uppercase tracking-wider border border-[#D9C5B2]">
            <Sparkles className="w-3.5 h-3.5" /> Diferenciais Divino Sabor
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A3728]">
            Por que visitar a Divino Sabor?
          </h2>
          <p className="text-[#6B5E55] text-xs sm:text-sm sm:text-base leading-relaxed">
            Mais do que uma cafeteria e doceria, somos o ponto de encontro preferido em Capão Bonito para quem aprecia atendimento humano, ambiente aconchegante e receitas preparadas com alma.
          </p>
        </motion.div>

        {/* 3 Grid Cards */}
        <div className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {diffs.map((diff, index) => {
            const IconComponent = diff.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
                whileHover={{ y: -6 }}
                className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#D9C5B2] hover:border-[#8C5E44] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Icon badge */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${diff.color} flex items-center justify-center shadow-xs border border-[#D9C5B2] group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-bold text-[#8C5E44] uppercase tracking-wider block">
                    {diff.subtitle}
                  </span>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#4A3728] group-hover:text-[#8C5E44] transition-colors">
                    {diff.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9C5B2] flex items-center gap-2 text-xs font-semibold text-[#4A3728]">
                  <ShieldCheck className="w-4 h-4 text-[#8C5E44]" />
                  <span>Classificação 5.0 no Google</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

