/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        cream: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f0e8',
          300: '#ede4d6',
          400: '#dfd0bc',
          500: '#cbb69d',
        },
        rosewood: {
          800: '#4a151b',
          900: '#340c11',
          950: '#220508',
        },
        champagne: {
          100: '#fcf6ed',
          200: '#f7ebd5',
          300: '#efdcba',
          400: '#e4c99a',
          500: '#d5b275',
          600: '#bd9653',
        },
        gold: {
          300: '#f5d77f',
          400: '#ecc440',
          500: '#d4af37',
          600: '#b89228',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cursive: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
        handwriting: ['"Dancing Script"', '"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseGlow 4s ease-in-out infinite',
        'sparkle': 'sparkle 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
