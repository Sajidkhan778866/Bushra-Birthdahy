import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, LayoutGrid, Image as ImageIcon, Play } from 'lucide-react';
import { allPhotos, mediaData } from '../data/media';

export const MemoryWallSection = ({ onPhotoClick, onVideoClick }) => {
  const [filter, setFilter] = useState('all');

  // Filter items
  const photos = allPhotos;
  const filteredPhotos = filter === 'all'
    ? photos
    : filter === 'bushra'
    ? mediaData.herPhotos
    : filter === 'us'
    ? mediaData.usPhotos
    : mediaData.memoriesPhotos;

  const displayList = filteredPhotos.slice(0, 18);

  return (
    <section
      id="memory-wall"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#150508]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/25 text-rose-300 text-xs sm:text-sm font-serif mb-4 shadow-lg backdrop-blur-md">
            <LayoutGrid className="w-3.5 h-3.5 text-amber-300" />
            <span>Editorial Memory Mosaic</span>
            <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-cream-50 font-normal">
            Memory Wall <span className="text-rose-400 font-cursive text-5xl sm:text-7xl">✨</span>
          </h2>
          <p className="text-rose-200/80 text-base sm:text-lg font-serif italic mt-3">
            A tapestry of glances, smiles, and sacred memories.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {[
            { key: 'all', label: `All Memories (${photos.length})` },
            { key: 'bushra', label: `Bushra (${mediaData.herPhotos.length})` },
            { key: 'us', label: `Us Together (${mediaData.usPhotos.length})` },
            { key: 'memories', label: `Special Moments (${mediaData.memoriesPhotos.length})` }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-serif transition-all duration-300 border ${
                filter === tab.key
                  ? 'bg-rose-600 text-white border-rose-400 shadow-[0_0_20px_rgba(225,29,72,0.4)] scale-105'
                  : 'bg-rose-950/50 text-rose-200/80 border-rose-500/20 hover:bg-rose-900/60 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Artistic Magazine Mosaic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[190px]">
          {displayList.map((photo, idx) => {
            // Give different cards different spanning for editorial feel
            const isLarge = idx === 0 || idx === 7 || idx === 13;
            const isTall = idx === 3 || idx === 9 || idx === 15;

            return (
              <motion.div
                key={photo.id || idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
                onClick={() => onPhotoClick && onPhotoClick(photo, idx, displayList)}
                className={`group cursor-pointer relative overflow-hidden rounded-2xl glass-card border border-rose-500/20 hover:border-rose-400/60 hover:shadow-2xl transition-all duration-500 p-1.5 ${
                  isLarge
                    ? 'col-span-2 row-span-2'
                    : isTall
                    ? 'row-span-2 col-span-1'
                    : 'col-span-1 row-span-1'
                }`}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient & Hover Information */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 sm:p-4 flex flex-col justify-end">
                    <p className="text-white text-xs sm:text-sm font-serif line-clamp-2 drop-shadow">
                      {photo.caption}
                    </p>
                  </div>

                  {/* Little corner sparkle badge */}
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
