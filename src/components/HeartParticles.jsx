import React, { useEffect, useState } from 'react';

export const HeartParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate gentle floating hearts and sparkles
    const items = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      size: Math.random() * 14 + 10, // px
      duration: Math.random() * 12 + 14, // seconds
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.15,
      type: i % 3 === 0 ? 'sparkle' : 'heart',
      drift: (Math.random() - 0.5) * 60 // horizontal drift
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-[-40px] select-none will-change-transform"
          style={{
            left: `${p.x}%`,
            opacity: p.opacity,
            animation: `floatUpward ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            fontSize: `${p.size}px`,
            filter: 'drop-shadow(0 0 6px rgba(244,63,94,0.4))'
          }}
        >
          {p.type === 'heart' ? (
            <span className="text-rose-400/80">❤️</span>
          ) : (
            <span className="text-amber-200/70">✨</span>
          )}
        </div>
      ))}
      <style>{`
        @keyframes floatUpward {
          0% {
            transform: translateY(0) translateX(0) scale(0.8) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: var(--particle-opacity, 0.4);
          }
          85% {
            opacity: var(--particle-opacity, 0.3);
          }
          100% {
            transform: translateY(-110vh) translateX(35px) scale(1.1) rotate(15deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
