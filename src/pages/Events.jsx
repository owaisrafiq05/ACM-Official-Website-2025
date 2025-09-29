import React from 'react';
import ParallaxSection from "../components/EventPageComponents/ParallaxSection";
import UpcomingEvents from "../components/EventPageComponents/UpcomingEvents";
import EventCard from '../components/EventPageComponents/EventCard';
import ThroughTheYearsCarousel from '../components/EventPageComponents/ThroughTheYearsCarousel';
import CodersCupImage from '../assets/images/events/CodersCupBg.jpg';
import CodersCupLogo from '../assets/images/events/CodersCupLogo.png';
import skills from '../assets/images/events/IMG_5229 (1).webp'
import session from '../assets/images/events/imgsession.png'
import Devday from '../assets/devdayimg.jpg';
import Workshop from '../assets/workshopimg.jpg';
import BGimg from '../assets/background-image.jpg';
import BgShape from "../assets/Clip path group.svg"; // ✅ add your svg
import { motion } from 'framer-motion';
import BgShape2 from "../assets/Clip path group2.svg";
import event1 from '../assets/images/events/event1.jpg'
import event2 from '../assets/images/events/event2.jpg'
import event3 from '../assets/images/events/event3.jpg'
import about1 from '../assets/images/events/about-1.webp'
import about7 from '../assets/images/events/about-7.webp'

export function Events() {
  const carouselImages = [
    BGimg, event1, event2, event3, about7, about1,
    BGimg, CodersCupImage, Workshop, Devday
  ];

  return (
    <div className="mt-28 relative overflow-x-hidden">

      {/* SVG background */}
      <img
        src={BgShape}
        alt="Decorative background"
        className="absolute top-10 left-0 w-full h-auto opacity-70 pointer-events-none max-w-none"
      />

      <motion.h2
        className="font-extrabold text-[45px] lg:text-[60px] mb-8 sm:mb-0 text-center text-[#0B466D] relative"
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
        date="Coming Soon"
        image={CodersCupImage}
        venue="FAST NUCES"
        venueSubtitle="Karachi Campus"
        attendees="5000+"
        link="https://coderscup.acmnuceskhi.com/"
      />

      <img
        src={BgShape2}
        alt="Decorative divider"
        className="absolute w-full h-auto opacity-70 my-16 max-w-none"
      />
      <EventCard
        side='right'
        title="SkillPrep Series"
        logo={``}
        description="Level up your coding skills with SkillPrep Series — your weekly guide to mastering DSA, problem-solving, and cracking coding interviews through hands-on practice and contests."
        date="Weekly Sessions"
        image={skills}
        venue="Auditorium"
        venueSubtitle="Karachi Campus"
        attendees="250+"
        link="https://skillprep.acmnuceskhi.com/"
      />

      <EventCard
        side='left'
        title="Tech Activities"
        logo={``}
        description="Tech Activities are fun and engaging sessions designed to challenge your skills, boost your knowledge, and let you compete with peers while winning exciting prizes."
        date="Weekly Activities"
        image={session}
        venue="Auditorium"
        venueSubtitle="Karachi Campus"
        attendees="250+"
        link="https://activities.acmnuceskhi.com/"
      />


      <ThroughTheYearsCarousel
        images={carouselImages}
        autoPlayInterval={4000}
      />
    </div>
  );
}
