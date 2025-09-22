// Auto-play videos when they come into view
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('.publication__video-player');
  
  videos.forEach(video => {
    // Try to play the video
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Video started playing successfully
        console.log('Video autoplay started');
      }).catch(error => {
        // Autoplay was prevented
        console.log('Video autoplay prevented:', error);
        
        // Add a click handler to play when user interacts
        video.addEventListener('click', () => {
          video.play();
        });
        
        // Add a play button overlay
        const playButton = document.createElement('div');
        playButton.className = 'video-play-button';
        playButton.innerHTML = '▶';
        playButton.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.7);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          cursor: pointer;
          z-index: 10;
        `;
        
        video.parentElement.style.position = 'relative';
        video.parentElement.appendChild(playButton);
        
        playButton.addEventListener('click', (e) => {
          e.stopPropagation();
          video.play();
          playButton.remove();
        });
      });
    }
  });
  
  // Intersection Observer for videos coming into view
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          video.play().catch(() => {
            // Autoplay failed, which is expected in many browsers
          });
        }
      });
    }, {
      threshold: 0.5
    });
    
    videos.forEach(video => {
      videoObserver.observe(video);
    });
  }
});