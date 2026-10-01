import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Flame, Camera } from 'lucide-react';
import { mediaData } from '../data/media';

export const OurPhotosSection = ({ onPhotoClick }) => {
  const photos = mediaData.usPhotos || [];

  if (photos.length === 0) return null;

  return (
    <section
      id="our-photos"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-[#120407] via-[#1a060d] to-[#120407]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/25 text-rose-300 text-xs sm:text-sm font-serif mb-4 shadow-lg backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
            <span>Our Shared Journey</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-cream-50 font-normal">
            Us <span className="text-rose-400 font-cursive text-5xl sm:text-7xl md:text-8xl">❤️</span>
          </h2>
          <p className="text-rose-200/90 text-base sm:text-xl font-serif italic mt-4 max-w-2xl mx-auto">
            “Some memories become special simply because they were shared with you.”
          </p>
        </motion.div>

        {/* Editorial Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id || idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.12 }}
              onClick={() => onPhotoClick && onPhotoClick(photo, idx, photos)}
              className="break-inside-avoid group cursor-pointer relative rounded-3xl glass-card border border-rose-500/25 p-3.5 sm:p-4 hover:border-rose-400/60 hover:shadow-[0_15px_40px_rgba(225,29,72,0.25)] transition-all duration-500"
            >
              {/* Polaroid Styled Inner Border */}
              <div className="relative overflow-hidden rounded-2xl bg-black">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-auto object-contain group-hover:scale-104 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Romantic Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-center justify-between gap-3">
                  <p className="text-cream-50 font-serif text-xs sm:text-sm md:text-base leading-snug drop-shadow-md">
                    {photo.caption}
                  </p>
                  <div className="w-8 h-8 rounded-full bg-rose-600/80 group-hover:bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Heart className="w-4 h-4 fill-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
