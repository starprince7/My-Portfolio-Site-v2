#!/usr/bin/env node

// Video Optimization Script
// Run: node scripts/optimize-videos.js

const fs = require('fs');
const path = require('path');

const videoDir = path.join(__dirname, '../public/video');
const videos = fs.readdirSync(videoDir).filter(file => file.endsWith('.mp4'));

console.log('🎬 Video Optimization Report:');
console.log('================================');

videos.forEach(video => {
  const videoPath = path.join(videoDir, video);
  const stats = fs.statSync(videoPath);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  
  console.log(`📹 ${video}: ${sizeMB}MB`);
  
  if (stats.size > 5 * 1024 * 1024) { // > 5MB
    console.log(`   ⚠️  LARGE FILE - Consider compression`);
  }
});

console.log('\n💡 Optimization Recommendations:');
console.log('1. Compress videos to < 2MB each');
console.log('2. Use WebM format for better compression');
console.log('3. Generate poster images');
console.log('4. Consider using a CDN');

// Generate optimized video config
const config = {
  videos: videos.map(video => ({
    original: `/video/${video}`,
    optimized: `/video/optimized/${video}`,
    poster: `/video/posters/${video.replace('.mp4', '.jpg')}`,
    size: 'large'
  }))
};

fs.writeFileSync(
  path.join(__dirname, '../src/data/video-config.json'),
  JSON.stringify(config, null, 2)
);

console.log('\n✅ Generated video-config.json');
