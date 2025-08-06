import React, { useState, useRef } from 'react';
import '../../VideoTestimonials.css';

const videos = [
  {
    id: 1,
    name: 'Sameus Wills, CFO',
    title: 'Art Director',
    text: 'We needed a solution that could handle our individual projects and investor groups. Creative proved to be the perfect partner, saving us time and effort across all operations.',
    thumbnail: 'https://i.ibb.co/gZRFWMB/video-thumb1.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    name: 'Sameus Wills, CFO',
    title: 'Art Director',
    thumbnail: 'https://i.ibb.co/ckpTbPd/video-thumb2.jpg',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    name: 'Sameus Wills, CFO',
    title: 'Art Director',
    thumbnail: 'https://i.ibb.co/8M8WzLG/video-thumb3.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 4,
    name: 'Sameus Wills, CFO',
    title: 'Art Director',
    thumbnail: 'https://i.ibb.co/TwRkmKj/video-thumb4.jpg',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 5,
    name: 'Sameus Wills, CFO',
    title: 'Art Director',
    thumbnail: 'https://i.ibb.co/WzBHp9g/video-thumb5.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 6,
    name: 'Sameus Wills, CFO',
    title: 'Art Director',
    thumbnail: 'https://i.ibb.co/WzBHp9g/video-thumb5.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 7,
    name: 'Sameus Wills, CFO',
    title: 'Art Director',
    thumbnail: 'https://i.ibb.co/WzBHp9g/video-thumb5.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 8,
    name: 'Sameus Wills, CFO',
    title: 'Art Director',
    thumbnail: 'https://i.ibb.co/WzBHp9g/video-thumb5.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

export default function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='video-bg-section'>
      <div className="container video-carousel-section py-5">
      <h2 className="video-carousel-section-heading text-center">Video Testimonials</h2>
        <div className="row mb-4 align-items-center">
          <div className="col-md-6">
            <div className="video-carousel-section-quote">❝</div>
           
            <h5 className="video-carousel-section-name">{selectedVideo.name}</h5>
            <p className="video-carousel-section-title">{selectedVideo.title}</p>
            <p className="video-carousel-section-text">{selectedVideo.text}</p>
          </div>
          <div className="col-md-6">
            <div className="video-carousel-section-player">
              <video key={selectedVideo.id} controls poster={selectedVideo.thumbnail}>
                <source src={selectedVideo.videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="position-relative">
          <button className="carousel-nav left" onClick={() => scroll(-300)}>‹</button>
          <div className="video-carousel-section-carousel d-flex gap-3 pt-3" ref={scrollRef}>
            {videos.map((video) => (
              <div
                key={video.id}
                className={`video-carousel-section-thumb p-2 ${selectedVideo.id === video.id ? 'active' : ''}`}
                onClick={() => setSelectedVideo(video)}
              >
                <img src={video.thumbnail} alt="thumbnail" />
                <div className="mt-2">
                  <strong>{video.name}</strong>
                  <p>{video.title}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-nav right" onClick={() => scroll(300)}>›</button>
        </div>
      </div>
    </div>
  );
}
