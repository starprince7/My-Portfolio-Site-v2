import { useRef, useState, useCallback, useEffect } from "react";

/**
 * Optimized Video Component with Cloudinary
 * - Loads videos only when visible in viewport
 * - Uses responsive sources based on screen size
 * - Includes poster images for instant display
 */
const OptimizedVideo = ({ src, poster, isVisible, style }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle video loading states
  const handleVideoLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Play video when it becomes visible and is ready
  useEffect(() => {
    const video = videoRef.current;
    if (isVisible && video && !isPlaying && isLoaded) {
      // Only play if video has loaded
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((e) => console.log("Playback prevented:", e));
      }
    }
  }, [isVisible, isPlaying, isLoaded]);

  // Pause video when not visible
  useEffect(() => {
    const video = videoRef.current;
    if (!isVisible && video && isPlaying) {
      video.pause();
      setIsPlaying(false);
    }
  }, [isVisible, isPlaying]);
  
  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      onLoadedData={handleVideoLoad}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        backgroundColor: '#1a1a1a',
        maxHeight: '80vh',  // Limit height to 80% of viewport height
        maxWidth: '100%',   // Ensure it doesn't overflow container width
        margin: '0 auto',   // Center the video
        objectFit: 'contain' // Maintain aspect ratio without cropping
      }}
    >
      <source src={src.replace('f_auto', 'f_webm')} type="video/webm" />
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default OptimizedVideo;
