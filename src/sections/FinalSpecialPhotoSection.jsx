import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { featuredPhotos } from '../data/media';
import { birthdayConfig } from '../config/birthdayConfig';

export const FinalSpecialPhotoSection = ({ onPhotoClick }) => {
  const photo = featuredPhotos.finalSpecial || featuredPhotos.specialUs || featuredPhotos.hero;

  return (
    <section
      id="final-special-photo"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-[#120407] via-[#1a060d] to-[#0d0205] text-center"
    >
      {/* Soft Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Special Photograph Reveal Card */}
        {photo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            onClick={() => onPhotoClick && onPhotoClick(photo, 0, [photo])}
            className="cursor-pointer group relative max-w-xl w-full rounded-3xl glass-card border border-rose-500/30 p-4 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:border-rose-400/60 transition-all duration-500 mb-12"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black">
              <img
                src={photo.src}
                alt="Our Beginning"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-rose-950/70 border border-rose-400/30 flex items-center justify-center backdrop-blur-md">
                <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Final Cinematic Lines */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-6 max-w-2xl"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-rose-200 text-glow-rose font-normal">
            “And this is only the beginning of our story.” <span className="text-rose-400">❤️</span>
          </p>

          <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 font-normal leading-tight">
            Happy 20th Birthday, <br className="sm:hidden" />
            <span className="font-cursive text-rose-400 text-4xl sm:text-6xl md:text-7xl">
              {birthdayConfig.name}.
            </span>
          </h3>

          <div className="pt-8 border-t border-rose-500/20">
            <p className="text-rose-300/80 font-serif italic text-base sm:text-lg">
              Forever yours,
            </p>
            <p className="text-2xl sm:text-3xl font-cursive text-cream-50 mt-1 font-normal">
              {birthdayConfig.sender} 💍❤️
            </p>
          </div>

          <div className="pt-10 flex items-center justify-center gap-2 text-rose-400/40 text-xs tracking-widest uppercase font-serif">
            <span>Designed with love for Bushra</span>
            <span>•</span>
            <span>3 October 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
