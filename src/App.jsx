import React, { useState, useEffect } from 'react';
import { Film } from 'lucide-react';
import { HeroSection } from './sections/HeroSection';
import { BirthdayMessageSection } from './sections/BirthdayMessageSection';
import { BushraPhotosSection } from './sections/BushraPhotosSection';
import { BushraVideosSection } from './sections/BushraVideosSection';
import { BirthdayCakeSection } from './sections/BirthdayCakeSection';
import { LoveLetterSection } from './sections/LoveLetterSection';
import { ShayariSection } from './sections/ShayariSection';
import { MyPhotosSection } from './sections/MyPhotosSection';
import { OurPhotosSection } from './sections/OurPhotosSection';
import { OurVideosSection } from './sections/OurVideosSection';
import { MemoryTimelineSection } from './sections/MemoryTimelineSection';
import { MemoryWallSection } from './sections/MemoryWallSection';
import { FullScreenMomentSection } from './sections/FullScreenMomentSection';
import { FromMemoriesToForeverSection } from './sections/FromMemoriesToForeverSection';
import { FutureTogetherSection } from './sections/FutureTogetherSection';
import { FinalBirthdaySection } from './sections/FinalBirthdaySection';
import { FinalSpecialPhotoSection } from './sections/FinalSpecialPhotoSection';
import { BirthdayVideoExperience } from './sections/BirthdayVideoExperience';

import { PhotoLightbox } from './components/PhotoLightbox';
import { VideoModal } from './components/VideoModal';
import { HeartParticles } from './components/HeartParticles';
import { FloatingControls } from './components/FloatingControls';
import { mediaData } from './data/media';

const checkIsVideoRoute = () => {
  if (typeof window === 'undefined') return false;
  const pathname = window.location.pathname.replace(/\/+$/, '');
  const hash = window.location.hash;
  return (
    pathname.endsWith('/19th-birthday-video') ||
    hash === '#/19th-birthday-video'
  );
};

export default function App() {
  const [isVideoRoute, setIsVideoRoute] = useState(checkIsVideoRoute);

  useEffect(() => {
    const handlePopState = () => setIsVideoRoute(checkIsVideoRoute());
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateToVideo = () => {
    const cleanPath = window.location.pathname.replace(/\/+$/, '');
    const targetPath = cleanPath.endsWith('/19th-birthday-video')
      ? cleanPath
      : `${cleanPath}/19th-birthday-video`;
    window.history.pushState({}, '', targetPath);
    setIsVideoRoute(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    const cleanPath = window.location.pathname
      .replace(/\/+$/, '')
      .replace(/\/19th-birthday-video$/, '');
    window.history.pushState({}, '', cleanPath || '/');
    setIsVideoRoute(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxPhotos, setLightboxPhotos] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Video Modal State
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Open photo in lightbox
  const handlePhotoClick = (photo, index, photoList = []) => {
    const list = photoList.length > 0 ? photoList : [photo];
    setLightboxPhotos(list);
    setLightboxIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  };

  const handlePrevPhoto = () => {
    setLightboxIndex((prev) => (prev === 0 ? lightboxPhotos.length - 1 : prev - 1));
  };

  const handleNextPhoto = () => {
    setLightboxIndex((prev) => (prev === lightboxPhotos.length - 1 ? 0 : prev + 1));
  };

  // Open video in modal
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setVideoModalOpen(true);
  };

  // Sections for subtle floating navigation
  const navSections = [
    { id: 'hero', label: 'Opening' },
    { id: 'birthday-message', label: 'Birthday Wish' },
    ...(mediaData.herPhotos.length > 0 ? [{ id: 'bushra-photos', label: 'Bushra' }] : []),
    ...(mediaData.herVideos.length > 0 ? [{ id: 'bushra-videos', label: 'Her Clips' }] : []),
    { id: 'birthday-cake', label: 'Birthday Cake' },
    { id: 'love-letter', label: 'Love Letter' },
    { id: 'shayari', label: 'Shayari' },
    ...(mediaData.mePhotos.length > 0 ? [{ id: 'my-photos', label: 'Me' }] : []),
    ...(mediaData.usPhotos.length > 0 ? [{ id: 'our-photos', label: 'Us' }] : []),
    ...(mediaData.usVideos.length > 0 ? [{ id: 'our-videos', label: 'Our Videos' }] : []),
    { id: 'story-timeline', label: 'Our Story' },
    { id: 'memory-wall', label: 'Memory Wall' },
    { id: 'future-together', label: 'Future Together' },
    { id: 'final-birthday', label: 'Happy 19th' }
  ];

  if (isVideoRoute) {
    return <BirthdayVideoExperience onBackToSite={navigateToHome} />;
  }

  return (
    <div className="relative min-h-screen bg-[#120407] text-[#FDFBF7] selection:bg-rose-500/30 selection:text-white">
      {/* Background ambient floating hearts */}
      <HeartParticles />

      {/* Subtle top progress bar & floating dots */}
      <FloatingControls sections={navSections} />

      {/* Quick switch to 19th Birthday Video Experience */}
      <div className="fixed top-4 left-4 z-40">
        <button
          onClick={navigateToVideo}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-950/85 hover:bg-rose-900/90 border border-rose-400/35 text-rose-200 text-xs sm:text-sm font-serif shadow-lg backdrop-blur-md transition-all hover:scale-105"
        >
          <Film className="w-3.5 h-3.5 text-amber-300" />
          <span>19th Birthday Film 🎬</span>
        </button>
      </div>

      {/* Main Experience Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero / Opening Screen */}
        <HeroSection />

        {/* 2. Birthday Message */}
        <BirthdayMessageSection />

        {/* 3. Bushra's Photos */}
        <BushraPhotosSection onPhotoClick={handlePhotoClick} />

        {/* 4. Bushra's Videos */}
        <BushraVideosSection onVideoClick={handleVideoClick} />

        {/* 5. Interactive Birthday Cake */}
        <BirthdayCakeSection />

        {/* 6. Love Letter */}
        <LoveLetterSection />

        {/* 7. Romantic Shayaris */}
        <ShayariSection />

        {/* 8. My Photos (auto-hides if empty) */}
        <MyPhotosSection onPhotoClick={handlePhotoClick} />

        {/* 9. Our Photos */}
        <OurPhotosSection onPhotoClick={handlePhotoClick} />

        {/* 10. Our Videos */}
        <OurVideosSection onVideoClick={handleVideoClick} />

        {/* 11. Memory Timeline */}
        <MemoryTimelineSection
          onPhotoClick={handlePhotoClick}
          onVideoClick={handleVideoClick}
        />

        {/* 12. Memory Wall */}
        <MemoryWallSection
          onPhotoClick={handlePhotoClick}
          onVideoClick={handleVideoClick}
        />

        {/* 13. Full-Screen Cinematic Moment */}
        <FullScreenMomentSection onPhotoClick={handlePhotoClick} />

        {/* 14. From Memories To Forever */}
        <FromMemoriesToForeverSection onPhotoClick={handlePhotoClick} />

        {/* 15. Future Together */}
        <FutureTogetherSection />

        {/* 16. Final Birthday Message */}
        <FinalBirthdaySection />

        {/* 17. Final Special Photo */}
        <FinalSpecialPhotoSection onPhotoClick={handlePhotoClick} />
      </main>

      {/* Photo Lightbox */}
      <PhotoLightbox
        isOpen={lightboxOpen}
        photos={lightboxPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />

      {/* Cinematic Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        video={selectedVideo}
        onClose={() => {
          setVideoModalOpen(false);
          setSelectedVideo(null);
        }}
      />
    </div>
  );
}
