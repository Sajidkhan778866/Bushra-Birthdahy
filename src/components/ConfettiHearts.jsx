import confetti from 'canvas-confetti';

export const triggerBirthdayConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  // Romantic rose, blush, gold, champagne colors
  const colors = ['#f43f5e', '#fda4af', '#f7ebd5', '#d4af37', '#e11d48', '#ffffff'];

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors
  });

  fire(0.2, {
    spread: 60,
    colors
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors
  });
};
