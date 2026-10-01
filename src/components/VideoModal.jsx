import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Film, Heart } from 'lucide-react';

export const VideoModal = ({
  isOpen,
  video = null,
  onClose
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // When opened, attempt to play safely
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: user can click native play button
      });
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl p-3 sm:p-6 md:p-8"
        onClick={onClose}
      >
        {/* Top Header Bar */}
        <div
          className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-4 md:px-8 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2 text-rose-300/90 text-sm font-medium">
            <Film className="w-4 h-4 text-rose-400" />
            <span>{video.title || "Special Video Memory"}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Video Player"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600/30 text-white/80 hover:text-white transition-all backdrop-blur-md border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-rose-500/30 bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src={video.src}
              controls
              playsInline
              className="max-h-[75vh] w-full object-contain rounded-2xl"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {video.caption && (
            <div className="mt-4 px-6 py-2 rounded-full bg-rose-950/80 border border-rose-500/20 text-rose-100 text-sm sm:text-base font-serif italic text-center backdrop-blur-md flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400 shrink-0" />
              <span>{video.caption}</span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
