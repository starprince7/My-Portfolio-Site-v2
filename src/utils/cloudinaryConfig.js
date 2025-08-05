// Cloudinary Video Optimization Configuration

const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/starprince-dev/video/upload';

/**
 * Generate optimized Cloudinary video URLs with transformations
 * @param {string} publicId - Cloudinary public ID
 * @param {Object} options - Optimization options
 * @returns {Object} - Optimized video sources
 */
export const getOptimizedVideoUrls = (publicId, options = {}) => {
  const {
    quality = 'auto:good',
    format = 'auto',
    width = 450,  // Portrait width
    height = 800,  // Portrait height
    crop = 'fill'
  } = options;

  // Use portrait dimensions for mobile screen recordings
const baseTransform = `q_${quality},f_${format},w_${width},h_${height * 1.78},c_${crop}`;  // 16:9 inverted to 9:16
  
  return {
    // High quality for desktop
    desktop: `${CLOUDINARY_BASE_URL}/${baseTransform},br_2000k/${publicId}`,
    
    // Medium quality for tablet
    tablet: `${CLOUDINARY_BASE_URL}/${baseTransform.replace('w_450', 'w_360').replace('h_800', 'h_640')},br_1000k/${publicId}`,
    
    // Low quality for mobile
    mobile: `${CLOUDINARY_BASE_URL}/${baseTransform.replace('w_450', 'w_270').replace('h_800', 'h_480')},br_500k/${publicId}`,
    
    // Poster image
    poster: `${CLOUDINARY_BASE_URL.replace('/video/', '/image/')}/so_1.0,${baseTransform.replace('f_auto', 'f_jpg')}/${publicId}`,
    
    // WebM format for better compression
    webm: `${CLOUDINARY_BASE_URL}/${baseTransform.replace('f_auto', 'f_webm')}/${publicId}`,
    
    // MP4 fallback
    mp4: `${CLOUDINARY_BASE_URL}/${baseTransform.replace('f_auto', 'f_mp4')}/${publicId}`
  };
};

// Video configurations for your portfolio
export const VIDEO_CONFIGS = {
  'app-1': {
    publicId: 'princenweke.com/Video/app-1_yoooed',
    title: 'E Store iOS App',
    description: 'iOS E-commerce application'
  },
  'app-2': {
    publicId: 'princenweke.com/Video/app-2_rbqzhr', 
    title: 'Financial App',
    description: 'Android & iOS Financial application'
  },
  'app-3b': {
    publicId: 'princenweke.com/Video/app-3b_glyaeu',
    title: 'E Store Mobile',
    description: 'Android & iOS E-commerce application'
  }
};

/**
 * Get responsive video sources for a specific app
 * @param {string} appKey - App key (app-1, app-2, app-3b)
 * @returns {Object} - Responsive video sources
 */
export const getResponsiveVideoSources = (appKey) => {
  const config = VIDEO_CONFIGS[appKey];
  if (!config) return null;

  return getOptimizedVideoUrls(config.publicId, {
    quality: 'auto:good',
    format: 'auto'
  });
};
