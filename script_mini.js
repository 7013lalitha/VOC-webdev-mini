document.querySelector('.main-button').addEventListener('click', function() {
    alert('Exploring EditKaro Portfolio!');
  });
  function filterVideos(category) {
      const videos = document.querySelectorAll('.video-item');
      videos.forEach(video => {
          if (category === 'all' || video.classList.contains(category)) {
              video.style.display = 'block';
          } else {
              video.style.display = 'none';
          }
      });
  }
  // JavaScript to open and close lightbox
  function openLightbox(videoSrc) {
      const lightbox = document.getElementById('lightbox');
      const lightboxVideo = document.getElementById('lightbox-video');
      lightbox.style.display = 'flex';
      lightboxVideo.src = videoSrc;
      lightboxVideo.play();
  }
  
  function closeLightbox() {
      const lightbox = document.getElementById('lightbox');
      const lightboxVideo = document.getElementById('lightbox-video');
      lightboxVideo.pause();
      lightboxVideo.src = '';
      lightbox.style.display = 'none';
  }
  
  // Add this to each video element
  document.querySelectorAll('.video-item').forEach(video => {
      video.addEventListener('click', () => {
          openLightbox(video.querySelector('source').src);
      });
  });
  