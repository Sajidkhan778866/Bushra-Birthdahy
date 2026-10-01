import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Compass } from 'lucide-react';
import { mediaData } from '../data/media';

export const FromMemoriesToForeverSection = ({ onPhotoClick }) => {
  const photos = mediaData.usPhotos.slice(0, 4);

  return (
    <section
      id="from-memories-to-forever"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#150508]"
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/25 text-rose-300 text-xs sm:text-sm font-serif mb-4 shadow-lg backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-amber-300" />
            <span>The Journey Unfolds</span>
            <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 font-normal">
            From Memories To Forever <span className="text-rose-400 font-cursive">❤️</span>
          </h2>

          <p className="text-rose-200/90 text-lg sm:text-2xl font-serif italic mt-6 max-w-3xl mx-auto leading-relaxed">
            “Every picture has a story. Every story has a memory. And somehow, my favourite memories have you in them.”
          </p>
        </motion.div>

        {/* Selected Highlight Cards */}
        {photos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo, idx) => (
              <motion.div
                key={photo.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                onClick={() => onPhotoClick && onPhotoClick(photo, idx, photos)}
                className="group cursor-pointer relative rounded-2xl overflow-hidden glass-card border border-rose-500/20 p-2.5 hover:border-rose-400/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-black">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                    <p className="text-white text-xs font-serif line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
