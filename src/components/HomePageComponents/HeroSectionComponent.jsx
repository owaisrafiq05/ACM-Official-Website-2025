import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/background-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function HeroSectionComponent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden lg:pr-12">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          y: scrollY * 0.5, // Parallax effect
        }}
      />
      
      {/* Gradient overlay with animated opacity */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Content container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 md:px-8">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left side content with animations */}
          <motion.div 
            className="md:w-3/5 text-left mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-[#095280]">NUCES</span> Khi <br />
              <span className="text-[#095280]">ACM</span> Student Chapter
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Join us to explore technology, enhance your skills, and connect with like-minded individuals.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button 
                className="px-8 py-3 bg-[#095280] text-white rounded-full font-semibold text-lg hover:bg-[#0b466d] transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => window.location.href = '/events'}
              >
                Explore Events
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right side decorative element */}
          <motion.div 
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#095280]/20 backdrop-blur-sm flex items-center justify-center border border-[#095280]/30">
              <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#095280]/30 animate-pulse"></div>
              <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#095280]/40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute w-16 h-16 md:w-32 md:h-32 rounded-full bg-[#095280]/50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToNextSection}
        >
          <FontAwesomeIcon icon={faArrowDown} className="text-white text-2xl" />
        </motion.div>
      </div>
    </div>
  );
}
