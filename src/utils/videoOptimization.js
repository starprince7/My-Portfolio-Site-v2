// Video Optimization Utilities

export const createOptimizedVideoSources = (videoPath) => {
  return {
    webm: videoPath.replace('.mp4', '.webm'),
    mp4: videoPath,
    poster: videoPath.replace('.mp4', '-poster.jpg'),
  };
};

export const lazyLoadVideo = (videoElement, options = {}) => {
  const { rootMargin = '50px', threshold = 0.1 } = options;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        if (video.dataset.src) {
          video.src = video.dataset.src;
          video.load();
        }
        observer.unobserve(video);
      }
    });
  }, { rootMargin, threshold });

  observer.observe(videoElement);
  return observer;
};

export const canAutoplay = () => {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.src = 'data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQ==';
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => resolve(true)).catch(() => resolve(false));
    } else {
      resolve(false);
    }
  });
};
