import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Maximize2, Camera } from 'lucide-react';
import { mediaData } from '../data/media';

export const BushraPhotosSection = ({ onPhotoClick }) => {
  const [showAll, setShowAll] = useState(false);
  const photos = mediaData.herPhotos || [];

  if (photos.length === 0) return null;

  const heroPhoto = photos[0];
  const displayedPhotos = showAll ? photos.slice(1) : photos.slice(1, 13);

  return (
    <section
      id="bushra-photos"
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#120407]"
    >
      {/* Soft background ambient light */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/70 border border-rose-500/25 text-rose-300 text-xs sm:text-sm font-serif mb-4">
            <Camera className="w-3.5 h-3.5 text-rose-400" />
            <span>Portraits & Moments</span>
            <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 font-normal leading-tight">
            The Girl Who Makes My World <br className="hidden sm:inline" />
            <span className="font-cursive text-rose-400 text-4xl sm:text-6xl md:text-7xl">
              More Beautiful ❤️
            </span>
          </h2>
        </motion.div>

        {/* Hero Portrait Feature Card */}
        {heroPhoto && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div
              onClick={() => onPhotoClick && onPhotoClick(heroPhoto, 0, photos)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl glass-card border border-rose-500/30 p-3 sm:p-4 hover:border-rose-400/50 transition-all duration-500 shadow-2xl"
            >
              <div className="relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black">
                <img
                  src={heroPhoto.src}
                  alt={heroPhoto.caption}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Romantic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Card Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-rose-300 text-xs sm:text-sm font-serif mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-sparkle" />
                      <span>Featured Portrait</span>
                    </div>
                    <p className="text-xl sm:text-2xl md:text-3xl font-serif text-cream-50 font-normal">
                      {heroPhoto.caption || "That smile ❤️"}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-950/80 border border-rose-500/30 text-rose-200 text-xs sm:text-sm backdrop-blur-md self-start sm:self-auto group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Memory</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedPhotos.map((photo, idx) => {
            const actualIndex = idx + 1;
            return (
              <motion.div
                key={photo.id || idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                onClick={() => onPhotoClick && onPhotoClick(photo, actualIndex, photos)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl glass-card border border-rose-500/20 p-2 sm:p-2.5 hover:border-rose-400/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-black">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                    <p className="text-white text-xs sm:text-sm font-serif line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>

                  {/* Corner heart icon on hover */}
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More / Show Less Button */}
        {photos.length > 13 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-rose-950/70 hover:bg-rose-900/80 text-rose-200 border border-rose-500/30 text-sm font-medium transition-all hover:scale-105 shadow-lg backdrop-blur-md"
            >
              <span>{showAll ? "Show Less" : `View All Photos (${photos.length})`}</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
