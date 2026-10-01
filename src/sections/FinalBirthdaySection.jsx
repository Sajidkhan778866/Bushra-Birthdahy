import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerBirthdayConfetti } from '../components/ConfettiHearts';

export const FinalBirthdaySection = () => {
  return (
    <section
      id="final-birthday"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#120407]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Sparkle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-950/90 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-serif mb-8 shadow-xl backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-sparkle" />
          <span>3 October 2026 • 20th Birthday Celebration</span>
          <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
        </motion.div>

        {/* Big Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-cream-50 font-normal mb-8 leading-tight drop-shadow-[0_4px_30px_rgba(244,63,94,0.35)]"
        >
          Happy Birthday, <br />
          <span className="font-cursive text-rose-400 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
            My Love ❤️
          </span>
        </motion.h2>

        {/* Heartfelt Wish Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="glass-card rounded-3xl p-8 sm:p-14 md:p-16 border border-rose-500/25 shadow-2xl space-y-8 max-w-3xl mx-auto"
        >
          <p className="text-lg sm:text-2xl text-cream-100 font-serif font-light leading-relaxed">
            May this year bring you countless reasons to smile, dreams that turn into reality, and moments that become beautiful memories.
          </p>

          <p className="text-xl sm:text-3xl font-serif italic text-rose-200 text-glow-rose font-normal">
            Forever grateful for you.
          </p>

          <div className="pt-6 border-t border-rose-500/20 space-y-2">
            <p className="text-sm sm:text-base font-serif text-rose-300/80 tracking-widest uppercase">
              With all my love,
            </p>
            <p className="text-3xl sm:text-4xl font-cursive text-rose-300 font-normal">
              {birthdayConfig.sender} 💍❤️
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={triggerBirthdayConfetti}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-serif text-sm shadow-[0_0_25px_rgba(225,29,72,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              <span>Celebrate Again</span>
              <span>✨🎉</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
