import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const imageDirs = {
  bushra: path.join(rootDir, 'public/assets/images/bushra'),
  me: path.join(rootDir, 'public/assets/images/me'),
  us: path.join(rootDir, 'public/assets/images/us'),
  memories: path.join(rootDir, 'public/assets/images/memories'),
};

const videoDirs = {
  bushra: path.join(rootDir, 'public/assets/videos/bushra'),
  me: path.join(rootDir, 'public/assets/videos/me'),
  us: path.join(rootDir, 'public/assets/videos/us'),
  memories: path.join(rootDir, 'public/assets/videos/memories'),
};

// Ensure all target directories exist
Object.values(imageDirs).forEach(d => fs.mkdirSync(d, { recursive: true }));
Object.values(videoDirs).forEach(d => fs.mkdirSync(d, { recursive: true }));

// Supported formats
const imageExts = /\.(jpe?g|png|webp|gif)$/i;
const videoExts = /\.(mp4|webm|mov)$/i;

// 1. First, check if root folder has images/videos that need to be categorized and copied
const rootFiles = fs.readdirSync(rootDir).filter(f => {
  try {
    const stat = fs.statSync(path.join(rootDir, f));
    return !stat.isDirectory();
  } catch {
    return false;
  }
});

// Meaningful captions database
const defaultCaptions = {
  bushra: [
    "That smile that brightens up my whole world ❤️",
    "The prettiest part of my world ✨",
    "How can someone be this beautiful? 🌸",
    "My favourite person in the entire universe ❤️",
    "Grace, elegance, and pure beauty 💖",
    "Every little expression of yours is pure magic ✨",
    "The queen of my heart 👑❤️",
    "My forever favourite view 🌹"
  ],
  us: [
    "From the first glance to forever with you ❤️",
    "Some memories become special simply because they were shared with you ✨",
    "Standing beside you is my favourite place in the world 💍",
    "Two souls, one heart, endless love ❤️",
    "Every step together feels like a blessing 💫",
    "I choose you today, tomorrow, and every single day after 💍❤️",
    "The beginning of our lifelong fairy tale 🌹",
    "Together is our favourite place to be 💕"
  ],
  memories: [
    "Holding your hand is holding my entire future 💍❤️",
    "The little moments that mean the entire world to me 💫",
    "A promise carved in our hearts forever ✨",
    "Our sacred beginning — 'Just Engaged' 💍❤️",
    "Every memory with you is a treasure I hold close 🌹",
    "Quiet laughter, car rides, and eternal love ✨"
  ],
  me: [
    "Somehow, I got lucky enough to call the most beautiful girl my future wife 😌❤️",
    "Counting my blessings every single day ✨",
    "Forever proud and grateful to be yours 💍"
  ]
};

console.log('Distributing root files to structured folders safely...');

rootFiles.forEach(file => {
  const src = path.join(rootDir, file);
  try {
    const stat = fs.statSync(src);
    if (!stat.isFile() || stat.size === 0) return; // ignore 0 byte files or unreadable files

    if (imageExts.test(file)) {
      let targetDir = imageDirs.bushra;
      
      if (
        file.includes('6.40.46 PM.jpeg') ||
        file.includes('6.40.46 PM (1).jpeg') ||
        file.includes('6.43.38 PM.jpeg') ||
        file.includes('6.43.42 PM (1).jpeg') ||
        file.includes('6.43.43 PM.jpeg') ||
        file.includes('6.43.44 PM (1).jpeg') ||
        file.includes('6.43.54 PM.jpeg') ||
        file.includes('6.43.56 PM.jpeg') ||
        file.includes('6.43.57 PM (1).jpeg') ||
        file.includes('6.43.58 PM.jpeg') ||
        file.includes('6.43.59 PM.jpeg') ||
        file.includes('6.44.01 PM (2).jpeg')
      ) {
        targetDir = imageDirs.us;
      } else if (
        file.includes('6.44.04 PM (2).jpeg') ||
        file.includes('6.44.07 PM.jpeg') ||
        file.includes('6.43.50 PM (2).jpeg') ||
        file.includes('6.44.05 PM (2).jpeg')
      ) {
        targetDir = imageDirs.memories;
      } else {
        targetDir = imageDirs.bushra;
      }

      const dest = path.join(targetDir, file);
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
      }
    } else if (videoExts.test(file)) {
      let targetDir = videoDirs.bushra;
      if (
        file.includes('6.43.49 PM.mp4') ||
        file.includes('6.44.00 PM.mp4') ||
        file.includes('HEQE1266.MP4')
      ) {
        targetDir = videoDirs.us;
      } else if (
        file.includes('6.40.44 PM (1).mp4') ||
        file.includes('6.40.45 PM.mp4') ||
        file.includes('6.43.32 PM.mp4')
      ) {
        targetDir = videoDirs.memories;
      } else {
        targetDir = videoDirs.bushra;
      }

      const dest = path.join(targetDir, file);
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
      }
    }
  } catch (err) {
    console.warn(`Skipping unreadable/placeholder file ${file}:`, err.message);
  }
});

// 2. Scan and generate media manifest
function scanFolder(dirPath, publicPrefix, category) {
  if (!fs.existsSync(dirPath)) return [];
  try {
    const files = fs.readdirSync(dirPath).filter(f => {
      try {
        const fullPath = path.join(dirPath, f);
        const stat = fs.statSync(fullPath);
        return stat.isFile() && stat.size > 0;
      } catch {
        return false;
      }
    });

    const list = defaultCaptions[category] || defaultCaptions.bushra;

    return files.map((file, idx) => {
      const isVid = videoExts.test(file);
      return {
        id: `${category}-${idx}-${path.basename(file, path.extname(file)).replace(/[^a-zA-Z0-9]/g, '_')}`,
        src: `${publicPrefix}/${encodeURIComponent(file)}`,
        filename: file,
        category,
        type: isVid ? 'video' : 'image',
        caption: list[idx % list.length],
        aspectRatio: 'vertical'
      };
    });
  } catch (e) {
    console.error(`Error scanning ${dirPath}:`, e.message);
    return [];
  }
}

const manifest = {
  bushraImages: scanFolder(imageDirs.bushra, '/assets/images/bushra', 'bushra'),
  meImages: scanFolder(imageDirs.me, '/assets/images/me', 'me'),
  usImages: scanFolder(imageDirs.us, '/assets/images/us', 'us'),
  memoriesImages: scanFolder(imageDirs.memories, '/assets/images/memories', 'memories'),
  
  bushraVideos: scanFolder(videoDirs.bushra, '/assets/videos/bushra', 'bushra'),
  meVideos: scanFolder(videoDirs.me, '/assets/videos/me', 'me'),
  usVideos: scanFolder(videoDirs.us, '/assets/videos/us', 'us'),
  memoriesVideos: scanFolder(videoDirs.memories, '/assets/videos/memories', 'memories'),
  
  scannedAt: new Date().toISOString()
};

// Summary count
console.log('--- Media Scan Summary ---');
console.log(`Bushra Images: ${manifest.bushraImages.length}`);
console.log(`Us Images: ${manifest.usImages.length}`);
console.log(`Memories Images: ${manifest.memoriesImages.length}`);
console.log(`Me Images: ${manifest.meImages.length}`);
console.log(`Bushra Videos: ${manifest.bushraVideos.length}`);
console.log(`Us Videos: ${manifest.usVideos.length}`);
console.log(`Memories Videos: ${manifest.memoriesVideos.length}`);
console.log(`Me Videos: ${manifest.meVideos.length}`);

// Write manifest JSON
const manifestPath = path.join(rootDir, 'src/data/mediaManifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');

console.log(`Manifest written successfully to ${manifestPath}`);
