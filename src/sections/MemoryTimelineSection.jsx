import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, BookOpen, Clock, Calendar } from 'lucide-react';
import { storyMilestones } from '../data/storyTimeline';
import { mediaData } from '../data/media';

export const MemoryTimelineSection = ({ onPhotoClick, onVideoClick }) => {
  // Map milestones to actual available media
  const milestonesWithMedia = storyMilestones.map((m, idx) => {
    let mediaItem = null;
    if (m.category === 'bushra') {
      mediaItem = mediaData.herPhotos[idx % mediaData.herPhotos.length];
    } else if (m.category === 'memories') {
      mediaItem = mediaData.memoriesPhotos[idx % mediaData.memoriesPhotos.length] || mediaData.usPhotos[idx % mediaData.usPhotos.length];
    } else {
      mediaItem = mediaData.usPhotos[idx % mediaData.usPhotos.length];
    }
    return {
      ...m,
      media: mediaItem
    };
  });

  return (
    <section
      id="story-timeline"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#120407]"
    >
      {/* Soft atmospheric background lights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/25 text-rose-300 text-xs sm:text-sm font-serif mb-4 shadow-lg backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            <span>Chapters of Our Journey</span>
            <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-cream-50 font-normal">
            Our Little Story <span className="text-rose-400 font-cursive text-5xl sm:text-7xl">❤️</span>
          </h2>
          <p className="text-rose-200/80 text-base sm:text-lg font-serif italic mt-3">
            Every chapter with you is a page I never want to stop reading.
          </p>
        </motion.div>

        {/* Timeline Spine & Milestones */}
        <div className="relative">
          {/* Central Line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-[2px] bg-gradient-to-b from-rose-500/10 via-rose-500/40 to-rose-500/10" />

          <div className="space-y-12 sm:space-y-16">
            {milestonesWithMedia.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline node icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-rose-950 border-2 border-rose-500/60 shadow-[0_0_15px_rgba(244,63,94,0.5)] items-center justify-center z-10">
                    <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
                  </div>

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="w-full md:w-[calc(50%-40px)]"
                  >
                    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-rose-500/25 hover:border-rose-400/50 shadow-xl transition-all duration-300">
                      {/* Chapter Badge & Date */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-rose-950/90 text-rose-300 text-xs font-serif border border-rose-500/20">
                          {milestone.badge}
                        </span>
                        {milestone.date && (
                          <span className="text-xs text-amber-200/80 font-serif flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {milestone.date}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-serif text-cream-50 mb-3 font-normal">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-cream-200/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
                        {milestone.description}
                      </p>

                      {/* Embedded Real Media */}
                      {milestone.media && (
                        <div
                          onClick={() => onPhotoClick && onPhotoClick(milestone.media, 0, [milestone.media])}
                          className="cursor-pointer relative rounded-2xl overflow-hidden aspect-[16/10] bg-black border border-rose-500/20 group"
                        >
                          <img
                            src={milestone.media.src}
                            alt={milestone.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity flex items-end p-3">
                            <span className="text-white text-xs font-serif italic">
                              {milestone.media.caption || "Click to view memory"}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
