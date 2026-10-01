import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight, Copy, Check, Sparkles, Feather } from 'lucide-react';
import { shayaris } from '../data/shayaris';

export const ShayariSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [heartLikes, setHeartLikes] = useState({});

  const currentShayari = shayaris[currentIndex] || shayaris[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? shayaris.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === shayaris.length - 1 ? 0 : prev + 1));
  };

  const handleCopy = () => {
    const textToCopy = `${currentShayari.lines.join('\n')}\n\n— Dedicated to Bushra ❤️`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    setHeartLikes((prev) => ({
      ...prev,
      [currentShayari.id]: (prev[currentShayari.id] || 0) + 1
    }));
  };

  return (
    <section
      id="shayari"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#120407]"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            <Feather className="w-3.5 h-3.5 text-amber-300" />
            <span>Romantic Poetry & Shayaris</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 font-normal">
            A Few Words From My Heart… <span className="text-rose-400 font-cursive">❤️</span>
          </h2>
          <p className="text-rose-200/70 text-sm sm:text-base font-serif italic mt-3">
            Lines written for the one who owns every beat of my heart.
          </p>
        </motion.div>

        {/* Shayari Card Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentShayari.id}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="glass-card-gold rounded-3xl p-8 sm:p-14 md:p-16 border border-amber-300/30 shadow-[0_15px_50px_rgba(0,0,0,0.6)] relative min-h-[300px] flex flex-col justify-between"
            >
              {/* Badge & Counter */}
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-6">
                <span className="text-xs sm:text-sm font-serif text-amber-200/80 tracking-widest uppercase">
                  {currentShayari.tag || "Mohabbat"}
                </span>
                <span className="text-xs sm:text-sm font-serif text-rose-300/60">
                  {currentIndex + 1} / {shayaris.length}
                </span>
              </div>

              {/* Shayari Lines */}
              <div className="space-y-4 my-6">
                {currentShayari.lines.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-xl sm:text-2xl md:text-3xl font-serif text-cream-50 leading-relaxed font-normal text-glow-rose"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Bottom Actions: Copy & Heart reaction */}
              <div className="mt-8 pt-6 border-t border-amber-500/20 flex items-center justify-between gap-4">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-950/70 hover:bg-rose-900/90 text-rose-200 text-xs sm:text-sm font-serif border border-rose-500/30 transition-all active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied to heart ❤️</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-rose-300" />
                      <span>Copy Shayari</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleLike}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-950/70 hover:bg-rose-900/90 text-rose-200 text-xs sm:text-sm font-serif border border-rose-500/30 transition-all active:scale-125"
                >
                  <Heart className={`w-4 h-4 ${heartLikes[currentShayari.id] ? 'fill-rose-500 text-rose-500' : 'text-rose-400'}`} />
                  <span>{heartLikes[currentShayari.id] ? `Loved (${heartLikes[currentShayari.id]})` : "Love this"}</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous Shayari"
              className="w-12 h-12 rounded-full glass-card border border-rose-500/30 text-rose-200 hover:text-white hover:bg-rose-900/60 flex items-center justify-center transition-all active:scale-95 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {shayaris.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === i
                      ? 'w-6 h-2 bg-rose-500 shadow-[0_0_10px_#f43f5e]'
                      : 'w-2 h-2 bg-rose-300/30 hover:bg-rose-300/60'
                  }`}
                  aria-label={`Go to Shayari ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Shayari"
              className="w-12 h-12 rounded-full glass-card border border-rose-500/30 text-rose-200 hover:text-white hover:bg-rose-900/60 flex items-center justify-center transition-all active:scale-95 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
