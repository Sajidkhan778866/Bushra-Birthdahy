import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

export const BirthdayMessageSection = () => {
  return (
    <section
      id="birthday-message"
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#150508]"
    >
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-champagne-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-950/60 border border-rose-500/20 text-rose-300 text-xs tracking-widest uppercase mb-4">
            <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
            <span>Dedicated with love</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 font-normal">
            To The Most Special Person <span className="text-rose-400">❤️</span>
          </h2>
        </motion.div>

        {/* Emotional Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="glass-card rounded-3xl p-8 sm:p-12 md:p-14 relative border border-rose-500/20 shadow-2xl"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-6 left-6 text-rose-400/20 font-serif text-3xl">❝</div>
          <div className="absolute bottom-6 right-6 text-rose-400/20 font-serif text-3xl">❞</div>

          <div className="space-y-6 text-cream-100/90 text-base sm:text-lg md:text-xl font-light leading-relaxed text-center sm:text-left">
            <p className="font-serif italic text-xl sm:text-2xl text-rose-200">
              Dearest {birthdayConfig.name},
            </p>

            <p>
              There are billions of people in this world, but none of them could ever carry the warmth, the tenderness, and the sheer magic that you bring into my life. Your presence alone turns the quietest, most ordinary moments into memories I treasure with all my heart.
            </p>

            <p>
              Seeing you smile brings a peace to my soul that words can hardly describe. Every single day with you is a reminder of how lucky I am to have you as my partner, my best friend, and my future wife.
            </p>

            <p>
              Today, as you celebrate your <span className="text-rose-300 font-serif font-semibold">19th birthday</span>, I want to thank you simply for being you. For your kind heart, your innocent laughter, and the unconditional love you give.
            </p>

            <p className="font-serif italic text-rose-200/95 text-lg sm:text-xl pt-2">
              May this 19th year of your life be filled with pure joy, endless peace, and every dream your heart holds dear — with me right by your side through it all.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-rose-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-rose-300/80 text-sm font-serif">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Happy 19th Birthday, Bushra ❤️</span>
            </div>

            <div className="text-right text-rose-200 font-cursive text-2xl sm:text-3xl">
              Forever yours ❤️
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
