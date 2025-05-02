import React, { useRef, useEffect } from 'react';
import '../../VideoCarouselReviews.css';
import luke from '../../images/Luke.mp4';
import rami from '../../images/rami.mp4';
import plumcreekreview from '../../images/plumcreekreview.mp4';

import plumcreekreviewthumbnail from '../../images/plumcreekreviewthumbnail.png';
import lukethumbnail from '../../images/lukethumbnail.png';
import ramithumbnail from '../../images/ramithumbnail.png';




const videoData = [
  {
    id: 1,
    url: luke,
    thumbnail: lukethumbnail,
  },
  {
    id: 2,
    url: rami,
    thumbnail: ramithumbnail,
  },
  {
    id: 3,
    url: plumcreekreview,
    thumbnail: plumcreekreviewthumbnail,
  },
//   {
//     id: 4,
//     url: 'https://www.w3schools.com/html/movie.mp4',
//     thumbnail: 'https://i.ibb.co/WzBHp9g/video-thumb5.jpg',
//   },
];

export default function VideoCarouselReviews() {
  const videoRefs = useRef([]);

  const handlePlayClick = (index) => {
    const video = videoRefs.current[index];
    const playBtn = document.getElementById(`custom-btn-${index}`);

    if (video) {
      video.play();
      video.setAttribute('controls', true);
      if (playBtn) playBtn.style.display = 'none';
    }
  };

  // Attach fullscreen event listener to each video
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.addEventListener('fullscreenchange', () => {
          video.style.objectFit = document.fullscreenElement ? 'contain' : 'cover';
        });
        video.addEventListener('webkitfullscreenchange', () => {
          video.style.objectFit = document.webkitFullscreenElement ? 'contain' : 'cover';
        });
      }
    });
  }, []);

  return (
    <div className="video-carousel-reviews-section py-5">
      <div className="container text-center">
        <h2 className="main-heading">Video Testimonial</h2>
        <p className="video-carousel-reviews-description mb-4">
          Hear directly from our happy clients their success speaks for itself.
        </p>
        <div className="video-carousel-reviews-wrapper mx-auto">
          {videoData.map((video, index) => (
            <div className="video-carousel-reviews-card" key={video.id}>
              <div className="video-carousel-reviews-video-container">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  preload="metadata"
                  poster={video.thumbnail || `${video.url}#t=1`}
                  style={{ objectFit: 'cover' }}
                >
                  <source src={video.url} type="video/mp4" />
                </video>
                <div
                  id={`custom-btn-${index}`}
                  className="video-carousel-reviews-play-btn"
                  onClick={() => handlePlayClick(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
