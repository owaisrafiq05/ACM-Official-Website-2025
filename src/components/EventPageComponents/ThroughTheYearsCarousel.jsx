import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ThroughTheYearsCarousel = ({ images = [], autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  if (images.length === 0) return null;

  // Helper to loop index
  const getIndex = (offset) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  // Positions for -2, -1, 0, +1, +2 (left2, left1, center, right1, right2)
   const positions = [
    { offset: -2, x: -340, scale: 0.7, opacity: 0.3, zIndex: 1, size: "w-[340px] h-[220px]" },
    { offset: -1, x: -200, scale: 0.85, opacity: 0.6, zIndex: 5, size: "w-[420px] h-[260px]" },
    { offset: 0,  x: 0,    scale: 1,   opacity: 1,   zIndex: 10, size: "w-[600px] h-[360px]" },
    { offset: 1,  x: 200,  scale: 0.85, opacity: 0.6, zIndex: 5, size: "w-[420px] h-[260px]" },
    { offset: 2,  x: 340,  scale: 0.7, opacity: 0.3, zIndex: 1, size: "w-[340px] h-[220px]" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 2xl:px-[6rem] py-10 sm:py-12 md:py-16">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B466D] leading-tight">
          Through the Years...
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full flex justify-center items-center overflow-hidden h-[380px]">
        {positions.map((pos, i) => {
          const index = getIndex(pos.offset);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, x: 0 }}
              animate={{
                x: pos.x,
                scale: pos.scale,
                opacity: pos.opacity,
                zIndex: pos.zIndex,
              }}
              transition={{ duration: 0.6 }}
              className="absolute rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={images[index]}
                alt={`Slide ${index + 1}`}
                className={`object-cover rounded-3xl transition-all duration-500 ${pos.size}`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#0B466D] scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThroughTheYearsCarousel;
