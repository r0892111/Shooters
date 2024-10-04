import React, { useState, useEffect } from 'react';

const Gallery: React.FC = () => {
  const images = [
    '/entrance.jpg',
    '/snooker.jpg',
    '/bier.jpg',
    '/competition.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="gallery" id="gallery">
      <div className="w-screen overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
          className="w-full h-auto block transition-opacity duration-1000 ease-in-out"
        />
      </div>
    </section>
  );
};

export default Gallery;
