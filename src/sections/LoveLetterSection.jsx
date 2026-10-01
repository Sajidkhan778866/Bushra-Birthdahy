import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MailOpen, Heart, Sparkles, X } from 'lucide-react';
import { loveLetterData } from '../data/loveLetter';
import { triggerBirthdayConfetti } from '../components/ConfettiHearts';

export const LoveLetterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleLetter = () => {
    if (!isOpen) {
      triggerBirthdayConfetti();
    }
    setIsOpen(!isOpen);
  };

  return (
    <section
      id="love-letter"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#150508]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/25 text-rose-300 text-xs sm:text-sm font-serif mb-4 shadow-lg backdrop-blur-md">
            <Mail className="w-3.5 h-3.5 text-rose-400" />
            <span>Personal & Confidential</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 font-normal">
            A Little Letter For You… <span className="text-rose-400 font-cursive">💌</span>
          </h2>
          <p className="text-rose-200/70 text-sm sm:text-base font-serif italic mt-3">
            Handwritten feelings straight from my heart to yours.
          </p>
        </motion.div>

        {/* Envelope Container */}
        <div className="flex flex-col items-center">
          {!isOpen ? (
            /* Closed Envelope Card */
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-md w-full"
            >
              <div
                onClick={handleToggleLetter}
                className="group cursor-pointer relative bg-gradient-to-br from-[#2a0b12] to-[#1a0509] rounded-3xl p-8 sm:p-10 border border-rose-500/30 shadow-[0_15px_45px_rgba(0,0,0,0.7)] hover:border-rose-400/60 hover:shadow-[0_20px_60px_rgba(225,29,72,0.3)] transition-all duration-500 flex flex-col items-center"
              >
                {/* Envelope Flap visual */}
                <div className="w-20 h-20 rounded-full bg-rose-900/60 border border-rose-400/40 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-9 h-9 text-rose-300 group-hover:text-white transition-colors" />
                </div>

                <p className="font-cursive text-3xl sm:text-4xl text-rose-200 mb-2 font-normal">
                  For Bushra ❤️
                </p>

                <p className="text-xs sm:text-sm font-serif text-rose-300/60 mb-6 italic">
                  To be opened only by the birthday girl
                </p>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 text-white font-serif text-sm sm:text-base shadow-lg group-hover:shadow-rose-600/50 group-hover:scale-105 transition-all"
                >
                  <span>Open My Letter</span>
                  <span>💌</span>
                </button>
              </div>
            </motion.div>
          ) : (
            /* Unfolded Parchment Love Letter */
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
              className="relative max-w-2xl w-full bg-[#fdfaf5] text-[#2c1810] rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_20px_70px_rgba(0,0,0,0.8)] border border-amber-200/80 text-left relative overflow-hidden font-handwriting"
            >
              {/* Parchment texture background & watermark */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <button
                  onClick={handleToggleLetter}
                  aria-label="Fold Letter"
                  className="w-9 h-9 rounded-full bg-rose-950/10 hover:bg-rose-950/20 text-[#2c1810]/70 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Top Letter Meta */}
              <div className="border-b border-[#2c1810]/15 pb-4 mb-8 flex items-center justify-between">
                <div>
                  <span className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#7c3f30]">
                    {loveLetterData.occasion}
                  </span>
                  <p className="text-xs text-[#5c4033] font-sans">
                    {loveLetterData.date}
                  </p>
                </div>
                <div className="text-rose-600 text-xl animate-pulse">❤️</div>
              </div>

              {/* Salutation */}
              <h3 className="text-2xl sm:text-3xl font-cursive text-[#5c1c28] mb-6 font-normal">
                {loveLetterData.salutation}
              </h3>

              {/* Letter Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg md:text-xl text-[#36221c] leading-relaxed">
                {loveLetterData.paragraphs.map((para, i) => (
                  <p key={i}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Letter Sign-off */}
              <div className="mt-10 pt-6 border-t border-[#2c1810]/15 flex flex-col items-end">
                <p className="text-base sm:text-lg text-[#5c4033] font-serif italic mb-1">
                  {loveLetterData.closing}
                </p>
                <p className="text-2xl sm:text-3xl font-cursive text-[#881337] font-normal">
                  {loveLetterData.signature}
                </p>
              </div>

              {/* Close / Fold Back Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={handleToggleLetter}
                  className="text-xs font-sans uppercase tracking-wider text-[#7c3f30] hover:text-[#5c1c28] underline underline-offset-4"
                >
                  Fold & Keep in Heart 💌
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
