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
      <h2 className="text-center text-2xl font-bold mb-4">Gallery</h2>
      <div className="relative w-full max-w-4xl mx-auto h-96 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transition: 'opacity 1s ease-in-out' }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
