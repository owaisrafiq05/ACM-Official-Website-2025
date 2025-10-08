import React from 'react';

export function CardDemo({ name, description, bgImage, afterBgImage, index }) {
  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const hoverBackgroundStyle = {
    backgroundImage: `url(${afterBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  // Alternating gradient colors: red for even indices, blue for odd indices
  const gradientClass = index % 2 === 0 
    ? "bg-gradient-to-t from-red-600 via-red-400/80 to-transparent" 
    : "bg-gradient-to-t from-[#0B466D] via-[#257fb4]/80 to-transparent";

  return (
    <div className="max-w-xs w-full mx-auto">
      <div
        className="group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-lg hover:shadow-2xl shadow-slate-500 transition-shadow duration-500 flex flex-col justify-end border border-transparent dark:border-neutral-800"
        style={backgroundStyle}
      >
        {/* Hover Background */}
        <div
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={hoverBackgroundStyle}
        ></div>

        {/* Gradient Overlay Section - matching Executive Committee style */}
        <div className={`absolute bottom-0 left-0 right-0 z-20 ${gradientClass} p-6 pt-16`}>
          <h1 className="font-bold text-xl md:text-3xl text-white">{name}</h1>
          <p className="font-normal text-base text-white/90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
