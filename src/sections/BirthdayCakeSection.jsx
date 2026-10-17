import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Flame, Wind, Cake as CakeIcon } from 'lucide-react';
import { triggerBirthdayConfetti } from '../components/ConfettiHearts';
import { birthdayConfig } from '../config/birthdayConfig';

export const BirthdayCakeSection = () => {
  const [isBlown, setIsBlown] = useState(false);
  const [showHeartsBurst, setShowHeartsBurst] = useState(false);

  const handleBlowCandles = () => {
    if (isBlown) return;
    setIsBlown(true);
    setShowHeartsBurst(true);
    triggerBirthdayConfetti();

    // Trigger second wave of confetti
    setTimeout(() => {
      triggerBirthdayConfetti();
    }, 600);
  };

  const handleRelight = () => {
    setIsBlown(false);
    setShowHeartsBurst(false);
  };

  return (
    <section
      id="birthday-cake"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-[#120407] via-[#1f0710] to-[#120407]"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/25 text-rose-300 text-xs sm:text-sm font-serif mb-4 shadow-lg backdrop-blur-md">
            <CakeIcon className="w-3.5 h-3.5 text-amber-300" />
            <span>A 19th Birthday Ritual</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 font-normal">
            Make a wish, my love… <span className="text-rose-400">🕯️❤️</span>
          </h2>
          <p className="text-rose-200/80 text-base sm:text-lg font-serif italic mt-3">
            {isBlown ? "Your wish has been sent to the stars ✨" : "Tap or click the cake to blow out your 19th birthday candles"}
          </p>
        </motion.div>

        {/* Interactive Luxury Cake Box */}
        <div className="relative flex flex-col items-center justify-center my-8">
          <motion.div
            whileHover={{ scale: isBlown ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBlowCandles}
            className="cursor-pointer select-none relative p-6 sm:p-10 rounded-3xl glass-card border border-rose-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex flex-col items-center max-w-lg w-full"
          >
            {/* 19th Birthday Candles */}
            <div className="relative z-10 flex items-end justify-center gap-6 sm:gap-10 mb-2">
              {[1, 2].map((candleIndex) => (
                <div key={candleIndex} className="flex flex-col items-center relative">
                  {/* Flame or Smoke */}
                  <AnimatePresence mode="wait">
                    {!isBlown ? (
                      <motion.div
                        key="flame"
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.15, 0.95, 1.1, 1] }}
                        exit={{ scale: 0, opacity: 0, y: -10 }}
                        transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                        className="relative flex flex-col items-center"
                      >
                        <div className="w-5 h-8 sm:w-6 sm:h-9 bg-gradient-to-t from-amber-500 via-yellow-300 to-white rounded-full blur-[1px] shadow-[0_0_20px_#f59e0b] -mb-1" />
                        <div className="absolute -top-1 w-2.5 h-4 bg-white rounded-full blur-[0.5px]" />
                        <div className="w-1 h-3 bg-zinc-800 rounded-full" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="smoke"
                        initial={{ opacity: 0.9, y: 0, scale: 0.5 }}
                        animate={{ opacity: 0, y: -35, scale: 2.2, x: candleIndex === 1 ? -10 : 10 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        className="flex flex-col items-center"
                      >
                        <Wind className="w-5 h-5 text-gray-400/80" />
                        <span className="text-xs text-rose-300/60 font-serif italic">smoke</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Candle Stick */}
                  <div className="w-3.5 sm:w-4 h-12 sm:h-16 bg-gradient-to-r from-champagne-300 via-amber-100 to-champagne-400 rounded-t-md shadow-md border-t border-amber-200 flex items-center justify-center">
                    <span className="text-[9px] font-bold text-rose-900/60 font-serif">
                      {candleIndex === 1 ? '1' : '9'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* SVG Tiered Luxury Cake */}
            <div className="relative w-56 sm:w-72">
              <svg viewBox="0 0 240 160" className="w-full h-auto drop-shadow-2xl">
                <defs>
                  <linearGradient id="frostingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffd1dc" />
                    <stop offset="50%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#be123c" />
                  </linearGradient>
                  <linearGradient id="creamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fdfaf6" />
                    <stop offset="100%" stopColor="#f5e6d3" />
                  </linearGradient>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d4af37" />
                    <stop offset="50%" stopColor="#fff3b0" />
                    <stop offset="100%" stopColor="#aa8232" />
                  </linearGradient>
                </defs>

                {/* Cake Stand / Plate */}
                <ellipse cx="120" cy="150" rx="110" ry="8" fill="url(#goldGrad)" opacity="0.9" />
                <path d="M40 150 L200 150 L180 156 L60 156 Z" fill="#88681f" />

                {/* Bottom Tier */}
                <rect x="35" y="95" width="170" height="50" rx="10" fill="url(#creamGrad)" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" />
                <path d="M35 105 Q 45 115 55 105 T 75 105 T 95 105 T 115 105 T 135 105 T 155 105 T 175 105 T 195 105 T 205 105 L 205 95 L 35 95 Z" fill="url(#frostingGrad)" />
                {/* Gold beads decoration */}
                <circle cx="50" cy="130" r="3" fill="url(#goldGrad)" />
                <circle cx="85" cy="130" r="3" fill="url(#goldGrad)" />
                <circle cx="120" cy="130" r="3" fill="url(#goldGrad)" />
                <circle cx="155" cy="130" r="3" fill="url(#goldGrad)" />
                <circle cx="190" cy="130" r="3" fill="url(#goldGrad)" />

                {/* Top Tier */}
                <rect x="65" y="45" width="110" height="50" rx="8" fill="url(#creamGrad)" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" />
                <path d="M65 55 Q 75 65 85 55 T 105 55 T 125 55 T 145 55 T 165 55 T 175 55 L 175 45 L 65 45 Z" fill="url(#frostingGrad)" />
                
                {/* Heart on top cake */}
                <text x="120" y="80" textAnchor="middle" fontSize="18" fill="#e11d48">❤️</text>
              </svg>
            </div>

            {/* Prompt label */}
            <div className="mt-6 inline-flex items-center gap-2 text-rose-300 text-sm sm:text-base font-serif">
              {!isBlown ? (
                <>
                  <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
                  <span>Tap to blow out the candles 🎂</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span className="text-amber-200">Wished with love ✨</span>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Hidden Message Revealed Upon Blowing Candles */}
        <AnimatePresence>
          {isBlown && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="mt-8 max-w-2xl mx-auto glass-card-gold rounded-3xl p-8 sm:p-10 border border-amber-300/40 shadow-[0_0_50px_rgba(212,175,55,0.25)] relative"
            >
              <div className="flex items-center justify-center gap-2 text-amber-300 mb-3">
                <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-xs sm:text-sm font-serif tracking-widest uppercase">Secret Birthday Wish</span>
                <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-cream-50 font-normal leading-relaxed text-glow-gold">
                “My biggest wish already came true the day I found you. <span className="text-rose-400">❤️</span>”
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  onClick={handleRelight}
                  className="text-xs text-rose-300/70 hover:text-rose-200 underline font-serif transition-colors"
                >
                  Light candles again 🕯️
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
