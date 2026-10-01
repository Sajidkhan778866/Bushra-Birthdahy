import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Smile } from 'lucide-react';
import { mediaData } from '../data/media';

export const MyPhotosSection = ({ onPhotoClick }) => {
  const photos = mediaData.mePhotos || [];

  // Automatically hide section if no personal photos exist
  if (photos.length === 0) return null;

  return (
    <section
      id="my-photos"
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#150508]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/70 border border-rose-500/25 text-rose-300 text-xs sm:text-sm font-serif mb-4">
            <Smile className="w-3.5 h-3.5 text-amber-300" />
            <span>The Lucky Guy</span>
            <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 font-normal">
            And Then There Is Me… <span className="text-rose-400 font-cursive">😌❤️</span>
          </h2>
          <p className="text-rose-200/90 text-lg sm:text-xl font-serif italic mt-4 max-w-2xl mx-auto">
            “Somehow, I got lucky enough to call the most beautiful girl my future wife.” ❤️
          </p>
        </motion.div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id || idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onPhotoClick && onPhotoClick(photo, idx, photos)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl glass-card border border-rose-500/20 p-3 hover:border-rose-400/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-xs sm:text-sm font-serif">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
