import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export const FutureTogetherSection = () => {
  return (
    <section
      id="future-together"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-[#150508] via-[#20060e] to-[#150508]"
    >
      {/* Golden & Rose Radiant Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-rose-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Our Future Awaits</span>
            <span className="text-sm">💍</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 font-normal">
            And If I Could Ask For One Thing… <span className="text-rose-400 font-cursive">❤️</span>
          </h2>
        </motion.div>

        {/* Commitment Statement Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="glass-card-gold rounded-3xl p-8 sm:p-14 md:p-16 border border-amber-300/30 shadow-[0_20px_70px_rgba(0,0,0,0.7)] relative"
        >
          {/* Animated Diamond Ring Icon */}
          <div className="relative mb-8 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
                filter: [
                  'drop-shadow(0 0 15px rgba(212,175,55,0.4))',
                  'drop-shadow(0 0 30px rgba(244,63,94,0.7))',
                  'drop-shadow(0 0 15px rgba(212,175,55,0.4))'
                ]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-6xl sm:text-7xl md:text-8xl select-none"
            >
              💍
            </motion.div>
          </div>

          <div className="space-y-6 text-cream-100/90 text-lg sm:text-xl md:text-2xl font-serif font-light leading-relaxed">
            <p>
              I don't need a perfect life. I just want a life where I get to celebrate your smile, your dreams, your little victories, and every single beautiful moment with you.
            </p>

            <div className="py-4">
              <p className="text-xl sm:text-2xl md:text-3xl text-rose-200 font-medium font-serif italic text-glow-rose">
                I choose you. <br />
                Today. <br />
                Tomorrow. <br />
                And every day after. ❤️
              </p>
            </div>
          </div>

          {/* Emotional Proposal / Sacred Promise */}
          <div className="mt-10 pt-8 border-t border-amber-500/25">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 font-normal leading-tight text-glow-gold">
              Will You Keep Choosing Me Too? <span className="inline-block animate-pulse">💍</span>
            </h3>

            <div className="mt-8 flex items-center justify-center gap-3 text-rose-300/80 font-serif italic text-sm sm:text-base">
              <Heart className="w-4 h-4 fill-rose-400 text-rose-400 animate-bounce" />
              <span>A promise sealed in our hearts forever</span>
              <Heart className="w-4 h-4 fill-rose-400 text-rose-400 animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
