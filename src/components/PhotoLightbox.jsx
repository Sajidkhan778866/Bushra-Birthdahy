import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart, Sparkles, Image as ImageIcon } from 'lucide-react';

export const PhotoLightbox = ({
  isOpen,
  photos = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
  onSelectIndex
}) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Keyboard navigation: Left, Right, Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onPrev, onNext, onClose]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> Next
      onNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> Prev
      onPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-2 sm:p-4 md:p-6"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Header Bar */}
        <div
          className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-4 md:px-8 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2 text-rose-300/90 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Memory {currentIndex + 1} of {photos.length}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600/30 text-white/80 hover:text-white transition-all backdrop-blur-md border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous Photo"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-rose-600/40 text-white/80 hover:text-white transition-all backdrop-blur-md border border-white/10 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        )}

        {/* Next Button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next Photo"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-rose-600/40 text-white/80 hover:text-white transition-all backdrop-blur-md border border-white/10 active:scale-95"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        )}

        {/* Main Image Container */}
        <div
          className="relative max-w-5xl max-h-[82vh] sm:max-h-[85vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentPhoto.id || currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col items-center max-w-full max-h-[75vh]"
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.caption || "Special birthday memory for Bushra"}
              className="max-h-[70vh] sm:max-h-[74vh] max-w-full object-contain rounded-2xl shadow-2xl border border-rose-500/20"
              loading="lazy"
            />

            {/* Caption & Sentiment */}
            {currentPhoto.caption && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-950/80 via-black/80 to-rose-950/80 border border-rose-500/30 text-rose-100 text-center text-sm sm:text-base font-serif italic max-w-xl shadow-lg backdrop-blur-md flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400 inline-block shrink-0" />
                <span>{currentPhoto.caption}</span>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Keyboard hints footer */}
        <div className="hidden md:flex absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/40 items-center gap-4">
          <span>← / → to navigate</span>
          <span>•</span>
          <span>ESC to close</span>
          <span>•</span>
          <span>Swipe on mobile</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
