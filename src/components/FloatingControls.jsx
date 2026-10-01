import React, { useState, useEffect } from 'react';
import { Heart, ChevronUp } from 'lucide-react';

export const FloatingControls = ({ sections = [] }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 800);

      // Check active section
      const sectionElements = sections.map(s => document.getElementById(s.id)).filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top minimal progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-rose-950/40 z-40">
        <div
          className="h-full bg-gradient-to-r from-rose-500 via-blush-400 to-amber-300 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Subtle Right Floating Navigation Dots */}
      <div className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center justify-center p-1.5 focus:outline-none"
              aria-label={`Scroll to ${section.label}`}
            >
              {/* Tooltip */}
              <span className="absolute right-7 px-2.5 py-1 rounded-md bg-rose-950/90 text-rose-200 text-xs font-serif opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap border border-rose-500/20 shadow-lg">
                {section.label}
              </span>
              
              {/* Dot */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3 h-3 bg-rose-400 shadow-[0_0_10px_#f43f5e] scale-125'
                    : 'w-1.5 h-1.5 bg-rose-300/30 group-hover:bg-rose-300/70 group-hover:scale-110'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Back to top floating button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-rose-950/80 hover:bg-rose-900 border border-rose-500/30 text-rose-200 shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};
