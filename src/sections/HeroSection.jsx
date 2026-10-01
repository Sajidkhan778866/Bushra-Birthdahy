import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Send } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerBirthdayConfetti } from '../components/ConfettiHearts';

export const HeroSection = ({ onStartJourney }) => {
  const handleOpenGift = () => {
    triggerBirthdayConfetti();
    if (onStartJourney) {
      onStartJourney();
    } else {
      const nextEl = document.getElementById('birthday-message');
      if (nextEl) {
        nextEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 py-20 overflow-hidden bg-gradient-to-b from-[#120407] via-[#1a060b] to-[#120407]"
    >
      {/* Cinematic ambient background glow rings */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-rose-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle romantic badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/70 border border-rose-500/30 text-rose-200 text-xs sm:text-sm font-serif mb-8 shadow-lg backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-sparkle" />
          <span>A Special Celebration for {birthdayConfig.name}</span>
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-cream-50 mb-6 leading-tight drop-shadow-[0_4px_30px_rgba(244,63,94,0.35)]"
        >
          Happy Birthday, <br className="sm:hidden" />
          <span className="font-cursive text-rose-400 text-5xl sm:text-7xl md:text-8xl lg:text-9xl block sm:inline mt-2 sm:mt-0 font-normal">
            My Love ❤️
          </span>
        </motion.h1>

        {/* Subtitle & Emotional quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="space-y-3 mb-12 max-w-2xl"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-rose-200/90 font-serif italic font-light">
            Today is not just another day…
          </p>
          <p className="text-base sm:text-lg md:text-xl text-cream-200/80 font-light leading-relaxed">
            It’s the day someone incredibly special came into this world.
          </p>
        </motion.div>

        {/* Interactive CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={handleOpenGift}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 text-white font-medium text-base sm:text-lg shadow-[0_0_35px_rgba(225,29,72,0.45)] hover:shadow-[0_0_50px_rgba(225,29,72,0.7)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 border border-rose-400/40"
          >
            <span>I Have Something For You</span>
            <span className="text-xl group-hover:scale-125 transition-transform duration-300">💌</span>
          </button>

          <span className="text-xs sm:text-sm text-rose-300/50 font-serif italic tracking-wide">
            Turn the page to our story ↓
          </span>
        </motion.div>
      </div>
    </section>
  );
};
