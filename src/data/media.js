import mediaManifest from './mediaManifest.json';

export const mediaData = {
  herPhotos: mediaManifest.bushraImages || [],
  mePhotos: mediaManifest.meImages || [],
  usPhotos: mediaManifest.usImages || [],
  memoriesPhotos: mediaManifest.memoriesImages || [],
  
  herVideos: mediaManifest.bushraVideos || [],
  meVideos: mediaManifest.meVideos || [],
  usVideos: mediaManifest.usVideos || [],
  memoriesVideos: mediaManifest.memoriesVideos || [],
  
  scannedAt: mediaManifest.scannedAt || new Date().toISOString()
};

// All combined photos for memory wall & lightbox
export const allPhotos = [
  ...mediaData.herPhotos,
  ...mediaData.usPhotos,
  ...mediaData.memoriesPhotos,
  ...mediaData.mePhotos
];

// All combined videos for video showcase & lightbox
export const allVideos = [
  ...mediaData.herVideos,
  ...mediaData.usVideos,
  ...mediaData.memoriesVideos,
  ...mediaData.meVideos
];

// Featured hero photos
export const featuredPhotos = {
  hero: mediaData.herPhotos[0] || mediaData.usPhotos[0] || null,
  engagementGown: mediaData.herPhotos.find(p => p.filename.includes('6.43.48') || p.filename.includes('6.43.45')) || mediaData.herPhotos[1] || null,
  ringCloseUp: mediaData.memoriesPhotos.find(p => p.filename.includes('6.43.50')) || mediaData.memoriesPhotos[0] || null,
  holdingHands: mediaData.memoriesPhotos.find(p => p.filename.includes('6.44.04')) || mediaData.memoriesPhotos[1] || null,
  specialUs: mediaData.usPhotos.find(p => p.filename.includes('6.43.56') || p.filename.includes('6.43.54')) || mediaData.usPhotos[0] || null,
  finalSpecial: mediaData.usPhotos.find(p => p.filename.includes('6.43.57') || p.filename.includes('6.43.58')) || mediaData.usPhotos[0] || null
};
