const fs = require('fs');
const path = require('path');

const dir = './images';
const files = fs.readdirSync(dir);

const images = [];
const videos = [];

files.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
    // Exclude any thumbnail or output files if we generate them later
    if (file !== '1784440538834.png') { // this one is 12MB, let's keep it but maybe it's a map or logo?
      images.push(file);
    } else {
      images.push(file); // include it for now
    }
  } else if (['.mp4', '.mov', '.webm'].includes(ext)) {
    videos.push(file);
  }
});

// Sort files to keep them in order
images.sort();
videos.sort();

const result = {
  images,
  videos
};

fs.writeFileSync('media-list.json', JSON.stringify(result, null, 2), 'utf8');
console.log(`Found ${images.length} images and ${videos.length} videos.`);
