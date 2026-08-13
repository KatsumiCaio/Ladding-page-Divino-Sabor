import React from 'react';
import { motion } from 'motion/react';
import { REVIEWS_DATA, CLIENT_DATA } from '../data/copyData';
import { Star, Quote, ExternalLink } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-16 sm:py-20 bg-[#FDFBF7] border-y border-[#D9C5B2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          
          {/* Main Google Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A3728] text-[#FAF7F2] text-xs sm:text-sm font-semibold shadow-xs">
            <span className="flex text-[#8C5E44]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FDFBF7]" />
              ))}
            </span>
            <span>5.0 estrelas no Google</span>
            <span className="text-[#D9C5B2] font-normal text-xs">(+60 avaliações de clientes apaixonados)</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A3728]">
            Quem experimenta, apaixona-se.
          </h2>
          <p className="text-[#6B5E55] text-base leading-relaxed">
            Nossa missão é acolher cada cliente com sorrisos, sabor inesquecível e preços que cabem no bolso. Veja a opinião de quem vive a experiência Divino Sabor.
          </p>
        </motion.div>

        {/* 3 Review Cards Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -5 }}
              className="relative bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#D9C5B2] hover:border-[#8C5E44] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Quote Icon Background */}
              <Quote className="absolute top-4 right-4 w-10 h-10 text-[#8C5E44]/10 group-hover:text-[#8C5E44]/20 transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#8C5E44] mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#8C5E44]" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#4A3728] bg-[#F0E6D8] px-2 py-0.5 rounded-md border border-[#D9C5B2]">
                    5.0
                  </span>
                </div>

                {/* Highlight Title */}
                <h3 className="font-serif font-bold text-[#4A3728] text-base mb-2 group-hover:text-[#8C5E44] transition-colors">
                  "{review.highlight}"
                </h3>

                {/* Comment Body */}
                <p className="text-[#6B5E55] text-sm leading-relaxed italic mb-6">
                  {review.comment}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#D9C5B2] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    loading="lazy"
                    className="w-10 h-10 rounded-full object-cover border border-[#8C5E44] shadow-xs"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-[#4A3728]">{review.name}</h4>
                    <p className="text-[11px] text-[#8C5E44] font-medium">{review.role}</p>
                  </div>
                </div>

                <span className="text-[10px] text-[#6B5E55] bg-[#F0E6D8] px-2 py-1 rounded-md border border-[#D9C5B2] font-medium">
                  Google Verified
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA to Google Maps Reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={CLIENT_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4A3728] hover:text-[#8C5E44] bg-[#F0E6D8] hover:bg-[#FAF7F2] px-5 py-3 rounded-xl border border-[#D9C5B2] shadow-xs transition-all cursor-pointer"
          >
            <span>Ver todas as avaliações no Google Maps (5.0 Estrelas)</span>
            <ExternalLink className="w-4 h-4 text-[#8C5E44]" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

