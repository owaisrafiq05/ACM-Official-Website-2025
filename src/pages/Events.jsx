import React from 'react';
import ParallaxSection from "../components/EventPageComponents/ParallaxSection";
import UpcomingEvents from "../components/EventPageComponents/UpcomingEvents";
import EventCard from '../components/EventPageComponents/EventCard';
import ThroughTheYearsCarousel from '../components/EventPageComponents/ThroughTheYearsCarousel';
import CodersCupImage from '../assets/images/events/CodersCupBg.jpg';
import CodersCupLogo from '../assets/images/events/CodersCupLogo.png';
import Devday from '../assets/devdayimg.jpg';
import Workshop from '../assets/workshopimg.jpg';
import BGimg from '../assets/background-image.jpg';
import BgShape from "../assets/Clip path group.svg"; // ✅ add your svg
import { motion } from 'framer-motion';
import BgShape2 from "../assets/Clip path group2.svg";

export function Events() {
  const carouselImages = [
    BGimg, CodersCupImage, Workshop, Devday,
    BGimg, CodersCupImage, Workshop, Devday
  ];

  return (
    <div className="mt-12 lg:pl-20 relative overflow-x-hidden">
      
      {/* SVG background */}
      <img 
        src={BgShape} 
        alt="Decorative background" 
        className="absolute top-10 left-0 w-full h-auto opacity-70 pointer-events-none max-w-none"
      />

      <motion.h2
        className="font-extrabold text-[50px] lg:text-[60px] text-center text-[#0B466D] mb-6 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Upcoming Events
      </motion.h2>

      <EventCard
        side='left'
        title="Coders Cup 2025"
        logo={CodersCupLogo}
        description="The Coders' Cup is an intra-FAST programming competition that stands as the epitome of where rising minds polish and develop their coding abilities while debugging their very own creations."
        date="9th September 2025"
        image={CodersCupImage}
        venue="FAST NUCES"
        venueSubtitle="Karachi Campus"
        attendees="5000+"
      />
  
 <img 
  src={BgShape2} 
  alt="Decorative divider" 
  className="absolute w-full h-auto opacity-70 my-16 max-w-none"
/>

      <EventCard
        side='right'
        title="Sessions & Workshops"
        logo={``}
        description="Interactive sessions and workshops designed to spark creativity and foster collaboration. Join industry experts and peers to gain insights that will fuel your journey in technology and innovation."
        date="Weekly Sessions"
        image={Workshop}
        venue="Auditorium"
        venueSubtitle="Karachi Campus"
        attendees="250+"
      />

      <ThroughTheYearsCarousel 
        images={carouselImages}
        autoPlayInterval={4000}
      />
    </div>
  );
}
