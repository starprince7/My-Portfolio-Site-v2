import { useRef, useEffect } from "react";

/**
 * Simplified Optimized Video Component
 */
const OptimizedVideo = ({ src, poster, isVisible, style }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.muted = true; // Ensure muted for autoplay
      video.play().catch(e => console.log("Playback prevented:", e));
    } else {
      video.pause();
    }
  }, [isVisible]);
  
  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
        ...style,
        backgroundColor: '#1a1a1a',
        maxHeight: '80vh',
        maxWidth: '100%',
        margin: '0 auto',
        objectFit: 'contain'
      }}
    >
      <source src={src.replace('f_auto', 'f_webm')} type="video/webm" />
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default OptimizedVideo;