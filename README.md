# Happy 20th Birthday, Bushra ❤️
### A Premium, Cinematic & Romantic Birthday Website Dedicated to Bushra

Created with unconditional love by her **Future Husband** for her **20th Birthday on 3 October 2026**.

---

## ✨ Features & Experiences

1. **Cinematic Hero Opening** — Romantic ambient glow, warm typography, and the initial *“I Have Something For You 💌”* reveal.
2. **Emotional Birthday Message** — Words from the heart celebrating her presence, warmth, and grace.
3. **Bushra's Photo Gallery** — Editorial portrait gallery featuring her beautiful smiles, selfies, and memories.
4. **Her Moving Clips** — Video cards opening into a fullscreen cinematic video player (non-autoplay, load on demand).
5. **Interactive Birthday Cake** — Tap/click to blow out the flickering 20th birthday candles, trigger confetti, floating hearts, and reveal the hidden secret wish.
6. **Handwritten Love Letter** — Realistic envelope with wax seal animation that unfolds into a heartfelt letter from her Future Husband 💍.
7. **Romantic Shayaris** — 7 beautiful Hindi/Hinglish Shayaris with interactive carousel, copy-to-clipboard, and heart reaction.
8. **Our Photos & Videos** — Masonry and polaroid-styled cards celebrating engagement memories, car rides, and moments together.
9. **Our Little Story (Memory Timeline)** — Relationship milestones with chapters and real photographs.
10. **Artistic Memory Wall** — Magazine-style mosaic of all cherished memories with dynamic category filters.
11. **Future Together** — Sacred proposal & promise with glowing diamond ring animation: *“Will You Keep Choosing Me Too? 💍”*
12. **Final Celebration & Special Photograph** — Slow reveal of the journey ahead: *“And this is only the beginning of our story.”*
13. **Full Keyboard & Mobile Swipe Support** — Arrow keys (← / →), ESC to close, and touch swipe on phones.
14. **Zero Background Music & Zero Countdowns** — Pure visual, emotional, and interactive storytelling.

---

## 📂 Project Structure

```text
birthday-wishing/
│
├── public/
│   └── assets/
│       ├── images/
│       │   ├── bushra/     # Solo photos, selfies, portraits of Bushra
│       │   ├── me/         # Personal photos of future husband (optional)
│       │   ├── us/         # Photos of couple together
│       │   └── memories/   # Special moments, rings, mehendi, drives
│       └── videos/
│           ├── bushra/     # Video clips of Bushra
│           ├── me/         # Video clips of future husband (optional)
│           ├── us/         # Video clips of couple together
│           └── memories/   # Special memory videos
│
├── src/
│   ├── components/         # Lightbox, VideoModal, HeartParticles, Controls, Confetti
│   ├── config/             # birthdayConfig.js (Name, Age, Birthday, Sender)
│   ├── data/               # media.js, shayaris.js, loveLetter.js, storyTimeline.js
│   ├── sections/           # 17 interactive story sections
│   ├── styles/             # Tailwind & custom romantic tokens
│   ├── App.jsx
│   └── main.jsx
│
├── scripts/
│   └── scan-media.js       # Auto-detects & organizes newly added photos/videos
│
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 How to Run

### Development Mode
```bash
npm run dev
```

### Add New Photos or Videos Anytime
Simply drop your photos (`.jpg`, `.png`, `.webp`) or videos (`.mp4`, `.mov`) into any of the folders under `public/assets/images/` or `public/assets/videos/`.

Then run:
```bash
npm run scan-media
```
The website will automatically include them without touching any React code. Empty folders will automatically hide their corresponding sections cleanly.

### Production Build
```bash
npm run build
npm run preview
```
