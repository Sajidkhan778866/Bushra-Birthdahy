import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Film, Heart, Sparkles } from 'lucide-react';
import { mediaData } from '../data/media';

export const BushraVideosSection = ({ onVideoClick }) => {
  const [showAll, setShowAll] = useState(false);
  const videos = mediaData.herVideos || [];

  if (videos.length === 0) return null;

  const displayedVideos = showAll ? videos : videos.slice(0, 6);

  return (
    <section
      id="bushra-videos"
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
            <span>Moving Moments</span>
            <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 font-normal">
            A Little Bit Of Her <span className="text-rose-400 font-cursive">❤️</span>
          </h2>
          <p className="text-rose-200/70 text-sm sm:text-base font-serif italic mt-3">
            Her expressions, her joy, and the little glimpses of magic.
          </p>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedVideos.map((video, idx) => (
            <motion.div
              key={video.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
              onClick={() => onVideoClick && onVideoClick(video)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl glass-card border border-rose-500/20 p-3 hover:border-rose-400/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[9/16] sm:aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black">
                {/* Video thumbnail frame preview */}
                <video
                  src={`${video.src}#t=0.5`}
                  preload="metadata"
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Centered Glowing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-600/90 group-hover:bg-rose-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(225,29,72,0.6)] group-hover:scale-115 transition-all duration-300 backdrop-blur-sm border border-white/20">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-1" />
                  </div>
                </div>

                {/* Video Info Bottom Banner */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-rose-300 text-xs font-serif mb-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Memory Clip {idx + 1}</span>
                  </div>
                  <p className="text-white text-sm sm:text-base font-serif font-medium line-clamp-2">
                    {video.caption || "A beautiful moment captured in time"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Videos Button */}
        {videos.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-rose-950/70 hover:bg-rose-900/80 text-rose-200 border border-rose-500/30 text-sm font-medium transition-all hover:scale-105 shadow-lg backdrop-blur-md"
            >
              <span>{showAll ? "Show Less" : `View All Video Clips (${videos.length})`}</span>
              <Film className="w-4 h-4 text-rose-400" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
