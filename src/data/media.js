import mediaManifest from './mediaManifest.json';

const getAppBasePath = () => {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname
      .replace(/\/19th-birthday-video\/?$/, '')
      .replace(/\/index\.html$/, '');
    if (pathname.startsWith('/birthday')) {
      return '/birthday/';
    }
  }
  const envBase = import.meta.env.BASE_URL || './';
  return envBase.endsWith('/') ? envBase : `${envBase}/`;
};

export const resolveAssetUrl = (pathStr) => {
  if (!pathStr) return '';
  if (pathStr.startsWith('http://') || pathStr.startsWith('https://') || pathStr.startsWith('data:')) {
    return pathStr;
  }
  const cleanPath = pathStr.replace(/^\/+/, '');
  return `${getAppBasePath()}${cleanPath}`;
};

const mapAssetList = (list = []) =>
  list.map((item) => ({
    ...item,
    src: resolveAssetUrl(item.src)
  }));

export const mediaData = {
  herPhotos: mapAssetList(mediaManifest.bushraImages),
  mePhotos: mapAssetList(mediaManifest.meImages),
  usPhotos: mapAssetList(mediaManifest.usImages),
  memoriesPhotos: mapAssetList(mediaManifest.memoriesImages),
  
  herVideos: mapAssetList(mediaManifest.bushraVideos),
  meVideos: mapAssetList(mediaManifest.meVideos),
  usVideos: mapAssetList(mediaManifest.usVideos),
  memoriesVideos: mapAssetList(mediaManifest.memoriesVideos),
  memoriesMedia: [
    ...mapAssetList(mediaManifest.memoriesImages),
    ...mapAssetList(mediaManifest.memoriesVideos)
  ],
  
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
