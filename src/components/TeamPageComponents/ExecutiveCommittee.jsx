import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import NehaAamir from "../../assets/images/excom/Neha Aamir.jpg";
import MuhammadHasnain from "../../assets/images/excom/Muhammad Hasnain.jpg";
import ShoaibRaza from "../../assets/images/excom/Shoaib Raza.jpg";
import MuhammadHuzaifa from "../../assets/images/excom/Muhammad Huzaifa.jpg";
import HunainMemon from "../../assets/images/excom/Hunain Memon.jpg";
import AsfandyarKhanzada from "../../assets/images/excom/Asfandyar Khanzada.jpg";
import AnsharaAsad from "../../assets/images/excom/Anshara Asad.jpg";
import AhmedMirza from "../../assets/images/excom/Ahmed Mirza.jpg";
import MisbahIbrahim from "../../assets/images/excom/Misbah Ibrahim.jpg";

// Updated committee data with images
const committeeData = [
  { name: "Neha Aamir", designation: "President", pic: NehaAamir },
  { name: "Muhammad Hasnain", designation: "Vice President", pic: MuhammadHasnain },
  { name: "Shoaib Raza", designation: "General Secretary", pic: ShoaibRaza },
  { name: "Muhammad Huzaifa", designation: "Treasurer", pic: MuhammadHuzaifa },
  { name: "Hunain Memon", designation: "Director Media and Promotions", pic: HunainMemon },
  { name: "Asfandyar Khanzada", designation: "Director Technology", pic: AsfandyarKhanzada },
  { name: "Anshara Asad", designation: "Director SOP", pic: AnsharaAsad },
  { name: "Ahmed Mirza", designation: "Director Marketing", pic: AhmedMirza },
  { name: "Misbah Ibrahim", designation: "Director Corporate Affairs", pic: MisbahIbrahim },
];

// Animation variants
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ExecutiveCommittee = () => {
  return (
    <section className="ezy__team20 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl text-[#0B466D] font-extrabold mb-4"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Executive Committee
          </motion.h2>
          <div className="flex items-center justify-center w-full max-w-md">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="flex-1 h-0.5 bg-gray-400 mx-2"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 justify-items-center"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          {committeeData.map((member, index) => (
            <motion.div
              key={index}
              variants={variants}
              className="w-80 h-96 relative overflow-hidden rounded-3xl shadow-lg"
            >
              <div className="relative w-full h-full">
                <img
                  src={member.pic}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B466D] via-[#257fb4]/80 to-transparent p-6 pt-16">
                  <h3 className="text-white text-2xl font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white/90 text-md">
                    {member.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveCommittee;