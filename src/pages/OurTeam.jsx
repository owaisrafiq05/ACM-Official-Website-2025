import React from 'react';
import FacultyList from '../components/TeamPageComponents/FacultyList';
import ExecutiveCommittee from '../components/TeamPageComponents/ExecutiveCommittee';
import ExComList from '../components/TeamPageComponents/ExComList';
import BgShape from "../assets/Clip path group.svg"; // ✅ add your svg
import { motion } from 'framer-motion';
import BgShape2 from "../assets/Clip path group2.svg";

export function OurTeam() {
  return (
    <div className="pt-28 relative overflow-x-hidden">

      {/* SVG background */}
      <img
        src={BgShape}
        alt="Decorative background"
        className="absolute top-10 left-0 w-full h-auto opacity-70 pointer-events-none max-w-none"
      />

      <div className="flex flex-col items-center text-center mb-2">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-[#0B466D] font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
      </div>

      <ExecutiveCommittee />
      <img
        src={BgShape2}
        alt="Decorative background"
        className="absolute top-12 left-0 w-full h-auto opacity-70 pointer-events-none max-w-none"
      />
      {/* <img
        src={BgShape2}
        alt="Decorative divider"
        className="absolute w-full h-auto opacity-70 max-w-none"
      /> */}
    </div>
  );
}
