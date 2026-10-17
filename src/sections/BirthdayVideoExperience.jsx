import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Download,
  Heart,
  Sparkles,
  ArrowLeft,
  Film,
  Smartphone,
  Monitor,
  CheckCircle2
} from 'lucide-react';
import { mediaData } from '../data/media';
import { birthdayConfig } from '../config/birthdayConfig';

export const BirthdayVideoExperience = ({ onBackToSite }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [aspectMode, setAspectMode] = useState('landscape'); // 'landscape' (16:9) | 'vertical' (9:16)
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportSuccess, setExportSuccess] = useState(false);

  const playerContainerRef = useRef(null);

  // Build the 7-scene cinematic sequence from local media only
  const scenes = useMemo(() => {
    const items = [];

    // Scene 1: Opening Title
    items.push({
      id: 'scene-opening',
      chapter: 'Scene 1 • Opening Title',
      type: 'title',
      duration: 4500,
      badge: 'For Someone Truly Special ✨',
      heading: 'Happy 19th Birthday, Bushra ❤️',
      subtext: '3 October 2026',
      footer: 'From Your Future Husband 💍',
      bgMedia: mediaData.herPhotos[0] || mediaData.usPhotos[0] || null
    });

    // Scene 2: Her Beauty & Smile
    const herSelection = mediaData.herPhotos.slice(0, 6);
    const herQuotes = [
      'A smile that makes everything brighter',
      'Grace, warmth, and pure beauty',
      'Every look at you feels special',
      'The most beautiful soul inside and out',
      'Your laughter is my favorite memory',
      'Celebrating 19 beautiful years of you'
    ];
    herSelection.forEach((photo, idx) => {
      items.push({
        id: `scene-her-${idx}`,
        chapter: 'Scene 2 • Her Beauty & Smile',
        type: 'photo',
        duration: 3800,
        media: photo,
        caption: herQuotes[idx % herQuotes.length],
        subtext: 'Happy 19th Birthday, Bushra ❤️'
      });
    });

    // Scene 3: Her Video Moments
    mediaData.herVideos.slice(0, 2).forEach((video, idx) => {
      items.push({
        id: `scene-her-vid-${idx}`,
        chapter: 'Scene 3 • Her Moments in Motion',
        type: 'video',
        duration: 5500,
        media: video,
        caption: idx === 0 ? 'Every second of your smile is pure magic ✨' : 'Unforgettable grace in every frame ❤️',
        subtext: 'Bushra • 19th Birthday Film'
      });
    });

    // Scene 4: Our Moments Together
    const usSelection = mediaData.usPhotos.slice(0, 5);
    const usQuotes = [
      'My favorite place will always be beside you',
      'Every moment with you becomes a memory',
      'Two hearts, one beautiful story',
      'With you, every ordinary day feels extraordinary',
      'Forever grateful for every moment we share'
    ];
    usSelection.forEach((photo, idx) => {
      items.push({
        id: `scene-us-${idx}`,
        chapter: 'Scene 4 • Our Moments Together',
        type: 'photo',
        duration: 3800,
        media: photo,
        caption: usQuotes[idx % usQuotes.length],
        subtext: 'Together & Forever 💍'
      });
    });

    mediaData.usVideos.slice(0, 2).forEach((video, idx) => {
      items.push({
        id: `scene-us-vid-${idx}`,
        chapter: 'Scene 4 • Our Moments Together',
        type: 'video',
        duration: 5500,
        media: video,
        caption: 'Moments with you that I will cherish forever ❤️',
        subtext: 'Our Story in Motion'
      });
    });

    // Scene 5: Special Memories Montage
    const memorySelection = [
      ...mediaData.memoriesMedia.filter((m) => m.type === 'image').slice(0, 3),
      ...mediaData.mePhotos.slice(0, 1)
    ];
    memorySelection.forEach((photo, idx) => {
      items.push({
        id: `scene-mem-${idx}`,
        chapter: 'Scene 5 • Special Memories Montage',
        type: 'photo',
        duration: 3600,
        media: photo,
        caption: 'Moments I want to keep forever',
        subtext: '3 October 2026 • 19th Birthday'
      });
    });

    // Scene 6: 19th Birthday Message Card
    items.push({
      id: 'scene-message',
      chapter: 'Scene 6 • 19th Birthday Dedication',
      type: 'message',
      duration: 6000,
      heading: 'Happy 19th Birthday, Bushra ❤️',
      body: 'May your 19th year be filled with happiness, peace, love, and beautiful moments. Thank you for making my world brighter just by being in it.',
      footer: 'With all my love — Your Future Husband 💍',
      bgMedia: mediaData.usPhotos[0] || mediaData.herPhotos[0] || null
    });

    // Scene 7: Final Closing Frame
    items.push({
      id: 'scene-closing',
      chapter: 'Scene 7 • Final Closing Frame',
      type: 'closing',
      duration: 5500,
      heading: 'Happy 19th Birthday, Bushra ❤️',
      subtext: 'Forever Yours,',
      signature: 'Your Future Husband 💍',
      date: '3 October 2026',
      bgMedia:
        mediaData.usPhotos[mediaData.usPhotos.length - 1] ||
        mediaData.herPhotos[mediaData.herPhotos.length - 1] ||
        null
    });

    return items;
  }, []);

  const currentScene = scenes[currentSlideIndex] || scenes[0];

  // Auto-advance slides when playing
  useEffect(() => {
    if (!isPlaying || scenes.length === 0) return;

    const timer = setTimeout(() => {
      setCurrentSlideIndex((prev) => {
        if (prev >= scenes.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, currentScene?.duration || 4000);

    return () => clearTimeout(timer);
  }, [isPlaying, currentSlideIndex, scenes, currentScene]);

  const handleRestart = () => {
    setCurrentSlideIndex(0);
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  // Client-side Canvas Video Exporter (works 100% on static cPanel hosting without server FFmpeg)
  const handleExportVideo = async () => {
    if (isExporting) return;
    setIsExporting(true);
    setExportProgress(5);
    setExportSuccess(false);

    try {
      const width = aspectMode === 'vertical' ? 720 : 1280;
      const height = aspectMode === 'vertical' ? 1280 : 720;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      const mimeTypes = [
        'video/mp4',
        'video/webm;codecs=vp9',
        'video/webm;codecs=vp8',
        'video/webm'
      ];
      const supportedMime = mimeTypes.find((m) => window.MediaRecorder?.isTypeSupported?.(m)) || '';

      if (!window.MediaRecorder || !supportedMime) {
        alert('Your browser does not support client-side video recording. Please try Chrome or Edge on desktop.');
        setIsExporting(false);
        return;
      }

      const stream = canvas.captureStream(30);
      const recorder = new MediaRecorder(stream, {
        mimeType: supportedMime,
        videoBitsPerSecond: 4000000
      });

      const chunks = [];
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunks.push(e.data);
      };

      const recordingDone = new Promise((resolve) => {
        recorder.onstop = () => resolve();
      });

      recorder.start();

      // Helper to load an image safely
      const loadImage = (src) =>
        new Promise((resolve) => {
          if (!src) return resolve(null);
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
          img.src = src;
        });

      const exportSlides = scenes.filter((s) => s.type !== 'video').slice(0, 10);

      for (let i = 0; i < exportSlides.length; i++) {
        const slide = exportSlides[i];
        const imgSrc = slide.media?.src || slide.bgMedia?.src || null;
        const img = await loadImage(imgSrc);
        const frames = 45; // 1.5s per slide during quick client-side render

        for (let f = 0; f < frames; f++) {
          const progressRatio = f / frames;

          // Deep romantic background
          const grad = ctx.createLinearGradient(0, 0, width, height);
          grad.addColorStop(0, '#120407');
          grad.addColorStop(0.5, '#230811');
          grad.addColorStop(1, '#120407');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);

          if (img) {
            ctx.save();
            const scale = 1 + progressRatio * 0.05;
            const imgRatio = img.width / img.height;
            const canvasRatio = width / height;
            let drawW = width * 0.82 * scale;
            let drawH = drawW / imgRatio;
            if (drawH > height * 0.65) {
              drawH = height * 0.65 * scale;
              drawW = drawH * imgRatio;
            }
            const x = (width - drawW) / 2;
            const y = (height - drawH) / 2 - 30;
            ctx.globalAlpha = slide.type === 'photo' ? 0.95 : 0.28;
            ctx.drawImage(img, x, y, drawW, drawH);
            ctx.restore();
          }

          // Top badge
          ctx.fillStyle = '#fda4af';
          ctx.font = '600 20px Georgia, serif';
          ctx.textAlign = 'center';
          ctx.fillText('3 OCTOBER 2026 • BUSHRA’S 19TH BIRTHDAY', width / 2, 56);

          // Main caption / heading
          ctx.fillStyle = '#fff9f5';
          ctx.font = 'bold 38px Georgia, serif';
          const mainText = slide.heading || slide.caption || 'Happy 19th Birthday, Bushra ❤️';
          ctx.fillText(mainText, width / 2, height - 105);

          // Subtext
          ctx.fillStyle = '#fecdd3';
          ctx.font = 'italic 24px Georgia, serif';
          const sub = slide.subtext || slide.footer || 'From Your Future Husband 💍';
          ctx.fillText(sub, width / 2, height - 60);

          await new Promise((r) => setTimeout(r, 25));
        }

        setExportProgress(Math.round(((i + 1) / exportSlides.length) * 95));
      }

      recorder.stop();
      await recordingDone;

      const ext = supportedMime.includes('mp4') ? 'mp4' : 'webm';
      const blob = new Blob(chunks, { type: supportedMime });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `bushra-19th-birthday-video.${ext}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setExportProgress(100);
      setExportSuccess(true);
    } catch (err) {
      console.error('Video export error:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0205] text-[#FDFBF7] flex flex-col justify-between relative overflow-hidden">
      {/* Ambient rose-gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Top Navigation & Controls Bar */}
      <header className="relative z-20 flex flex-wrap items-center justify-between gap-4 px-4 sm:px-8 py-4 border-b border-rose-500/20 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          {onBackToSite && (
            <button
              onClick={onBackToSite}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-rose-950/80 hover:bg-rose-900/80 border border-rose-500/30 text-rose-200 text-xs sm:text-sm font-serif transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Full Birthday Website</span>
            </button>
          )}
          <div className="flex items-center gap-2 text-rose-200 font-serif text-sm sm:text-base">
            <Film className="w-4 h-4 text-amber-300" />
            <span>Happy 19th Birthday, {birthdayConfig.name} ❤️</span>
          </div>
        </div>

        {/* Aspect Ratio & Export Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="inline-flex rounded-full bg-rose-950/70 p-1 border border-rose-500/25">
            <button
              onClick={() => setAspectMode('landscape')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif transition-all ${
                aspectMode === 'landscape'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-rose-200/70 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>16:9 Cinema</span>
            </button>
            <button
              onClick={() => setAspectMode('vertical')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif transition-all ${
                aspectMode === 'vertical'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-rose-200/70 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>9:16 Reel</span>
            </button>
          </div>

          <button
            onClick={handleExportVideo}
            disabled={isExporting}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/90 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white text-xs sm:text-sm font-serif shadow-lg transition-all disabled:opacity-60"
          >
            <Download className="w-4 h-4" />
            <span>
              {isExporting
                ? `Rendering Video (${exportProgress}%)...`
                : 'Export 19th Birthday Video'}
            </span>
          </button>
        </div>
      </header>

      {/* Main Cinema Stage */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
        <div
          ref={playerContainerRef}
          className={`relative overflow-hidden rounded-3xl border border-rose-500/35 bg-[#120407] shadow-[0_20px_80px_rgba(0,0,0,0.85)] transition-all duration-500 flex flex-col justify-between ${
            aspectMode === 'vertical'
              ? 'w-full max-w-[380px] aspect-[9/16]'
              : 'w-full max-w-5xl aspect-video'
          }`}
        >
          {/* Top Chapter Indicator */}
          <div className="relative z-20 flex items-center justify-between px-5 pt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-rose-400/30 text-rose-200 text-xs font-serif backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-amber-300" />
              {currentScene.chapter}
            </span>
            <span className="text-xs font-serif text-rose-200/70 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-md">
              {currentSlideIndex + 1} / {scenes.length}
            </span>
          </div>

          {/* Animated Scene Content */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScene.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Background blurred layer for any media */}
                {(currentScene.media?.src || currentScene.bgMedia?.src) && (
                  <>
                    <img
                      src={currentScene.media?.src || currentScene.bgMedia?.src}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0205] via-black/40 to-[#0d0205]/80" />
                  </>
                )}

                {/* TITLE SCENE */}
                {currentScene.type === 'title' && (
                  <div className="relative z-10 text-center px-6 max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-400/30 text-rose-200 text-xs sm:text-sm font-serif">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>{currentScene.badge}</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50 leading-tight drop-shadow-lg">
                      {currentScene.heading}
                    </h1>
                    <p className="text-lg sm:text-2xl text-amber-200 font-serif tracking-widest uppercase">
                      {currentScene.subtext}
                    </p>
                    <p className="text-xl sm:text-3xl font-cursive text-rose-300 pt-2">
                      {currentScene.footer}
                    </p>
                  </div>
                )}

                {/* PHOTO SCENE */}
                {currentScene.type === 'photo' && currentScene.media && (
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 sm:p-10">
                    <motion.img
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.06 }}
                      transition={{ duration: 4, ease: 'linear' }}
                      src={currentScene.media.src}
                      alt={currentScene.caption}
                      className="max-h-[68%] max-w-[88%] object-contain rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.85)] border border-rose-300/30"
                    />
                    <div className="mt-5 text-center max-w-xl bg-black/55 backdrop-blur-md px-6 py-3 rounded-2xl border border-rose-500/25">
                      <p className="text-base sm:text-xl font-serif italic text-cream-50">
                        “{currentScene.caption}”
                      </p>
                      <p className="text-xs sm:text-sm font-serif text-rose-300 mt-1">
                        {currentScene.subtext}
                      </p>
                    </div>
                  </div>
                )}

                {/* VIDEO SCENE (Muted / No Audio per strict 19th birthday rules) */}
                {currentScene.type === 'video' && currentScene.media && (
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 sm:p-10">
                    <video
                      src={currentScene.media.src}
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="max-h-[68%] max-w-[88%] object-contain rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.85)] border border-rose-300/30"
                    />
                    <div className="mt-5 text-center max-w-xl bg-black/55 backdrop-blur-md px-6 py-3 rounded-2xl border border-rose-500/25">
                      <p className="text-base sm:text-xl font-serif italic text-cream-50">
                        {currentScene.caption}
                      </p>
                      <p className="text-xs sm:text-sm font-serif text-rose-300 mt-1">
                        {currentScene.subtext}
                      </p>
                    </div>
                  </div>
                )}

                {/* MESSAGE SCENE */}
                {currentScene.type === 'message' && (
                  <div className="relative z-10 max-w-2xl mx-6 p-8 sm:p-10 rounded-3xl bg-black/65 border border-rose-400/35 backdrop-blur-md text-center space-y-5">
                    <Heart className="w-8 h-8 text-rose-400 fill-rose-400 mx-auto" />
                    <h2 className="text-2xl sm:text-4xl font-serif text-cream-50">
                      {currentScene.heading}
                    </h2>
                    <p className="text-base sm:text-xl font-serif text-cream-100/90 leading-relaxed italic">
                      “{currentScene.body}”
                    </p>
                    <p className="text-lg sm:text-2xl font-cursive text-rose-300">
                      {currentScene.footer}
                    </p>
                  </div>
                )}

                {/* CLOSING SCENE */}
                {currentScene.type === 'closing' && (
                  <div className="relative z-10 text-center px-6 max-w-2xl space-y-4">
                    <Sparkles className="w-8 h-8 text-amber-300 mx-auto" />
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cream-50">
                      {currentScene.heading}
                    </h2>
                    <p className="text-lg sm:text-xl font-serif italic text-rose-200 pt-2">
                      {currentScene.subtext}
                    </p>
                    <p className="text-3xl sm:text-4xl font-cursive text-rose-400">
                      {currentScene.signature}
                    </p>
                    <p className="text-xs sm:text-sm font-serif tracking-widest uppercase text-amber-200/80 pt-3">
                      {currentScene.date}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Transport Controls & Timeline Bar */}
          <div className="relative z-20 px-5 pb-4 pt-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
            {/* Progress segments */}
            <div className="grid grid-flow-col gap-1 mb-3">
              {scenes.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  title={s.chapter}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentSlideIndex
                      ? 'bg-rose-400'
                      : idx < currentSlideIndex
                      ? 'bg-rose-500/60'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying((p) => !p)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-serif transition-all"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-rose-100 text-xs sm:text-sm font-serif transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Replay</span>
                </button>
              </div>

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-rose-100 transition-all"
                title="Toggle Fullscreen"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Export Feedback Note */}
        {exportSuccess && (
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-200 text-xs font-serif">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>
              Your 19th Birthday keepsake video has been downloaded to your device!
            </span>
          </div>
        )}
      </main>
    </div>
  );
};
