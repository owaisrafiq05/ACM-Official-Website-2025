import React from 'react';
import HeroSectionComponent from '../components/HomePageComponents/HeroSectionComponent';
import { CardSection } from '../components/HomePageComponents/CardSection';
import { Mission } from '../components/HomePageComponents/Mission';
import AboutACM from '../components/HomePageComponents/AboutACM';
import AboutFast from '../components/HomePageComponents/AboutFast';
import Sponsor from '../components/HomePageComponents/Sponsor';
import { AchievementSection } from '../components/HomePageComponents/AchievementSection';
import BgShape from "../assets/Clip path group.svg"; // ✅ add your svg
import { motion } from 'framer-motion';
import BgShape2 from "../assets/Clip path group2.svg";

export function Home() {
  return (
    <>
      <HeroSectionComponent />
      <AboutFast />
      <img
        src={BgShape}
        alt="Decorative background"
        className="absolute top-20 left-0 w-full h-auto opacity-70 pointer-events-none max-w-none"
      />
      <img
        src={BgShape2}
        alt="Decorative background"
        className="absolute top-40 left-0 w-full h-auto opacity-70 pointer-events-none max-w-none"
      />
      <AboutACM />
      
      <CardSection />
      {/* <AchievementSection /> */}
      <Sponsor />
    </>
  );
}