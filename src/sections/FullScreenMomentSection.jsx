import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { featuredPhotos } from '../data/media';

export const FullScreenMomentSection = ({ onPhotoClick }) => {
  const photo = featuredPhotos.specialUs || featuredPhotos.hero;

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden my-16 sm:my-24">
      {/* Background Image with Dark Romantic Filter */}
      {photo && (
        <div className="absolute inset-0 z-0">
          <img
            src={photo.src}
            alt="Cinematic Love Memory"
            className="w-full h-full object-cover object-center filter brightness-[0.35] scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120407] via-rose-950/40 to-[#120407]" />
        </div>
      )}

      {/* Cinematic Quote Centerpiece */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass-card-gold rounded-3xl p-8 sm:p-14 md:p-16 border border-amber-300/30 shadow-[0_20px_70px_rgba(0,0,0,0.8)]"
        >
          <div className="w-12 h-12 rounded-full bg-rose-600/30 border border-rose-400/40 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_#f43f5e]">
            <Heart className="w-6 h-6 fill-rose-400 text-rose-400" />
          </div>

          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-serif text-cream-50 font-normal leading-relaxed text-glow-rose">
            “If I could save one feeling forever… <br className="hidden sm:inline" />
            it would be the feeling of being with you.” <span className="text-rose-400">❤️</span>
          </blockquote>

          <p className="mt-6 text-sm sm:text-base font-serif italic text-rose-200/80">
            A promise written in every quiet gaze
          </p>
        </motion.div>
      </div>
    </section>
  );
};
