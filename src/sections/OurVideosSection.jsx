import React from 'react';
import { motion } from 'framer-motion';
import { Play, Film, Heart, Sparkles } from 'lucide-react';
import { mediaData } from '../data/media';

export const OurVideosSection = ({ onVideoClick }) => {
  const videos = mediaData.usVideos || [];

  if (videos.length === 0) return null;

  return (
    <section
      id="our-videos"
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#150508]"
    >
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
            <Film className="w-3.5 h-3.5 text-rose-400" />
            <span>Captured in Motion</span>
            <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 font-normal">
            Little Moments, Big Memories <span className="text-rose-400">🎥❤️</span>
          </h2>
          <p className="text-rose-200/70 text-sm sm:text-base font-serif italic mt-3">
            The laughs, the glances, and the moments we will remember forever.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => onVideoClick && onVideoClick(video)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl glass-card border border-rose-500/20 p-3 hover:border-rose-400/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[9/16] sm:aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black">
                {/* Video thumbnail preview */}
                <video
                  src={`${video.src}#t=0.5`}
                  preload="metadata"
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Centered Glowing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-600/90 group-hover:bg-rose-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(225,29,72,0.6)] group-hover:scale-115 transition-all duration-300 backdrop-blur-sm border border-white/20">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-1" />
                  </div>
                </div>

                {/* Card Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-rose-300 text-xs font-serif mb-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Our Special Clip</span>
                  </div>
                  <p className="text-white text-sm sm:text-base font-serif font-medium line-clamp-2">
                    {video.caption || "An unforgettable moment together ❤️"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
