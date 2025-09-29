import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logo from "../../assets/acm-logo-png.png"; // your ACM logo
import mainlogo from "../../assets/Group 1265 (2).png";
import BgShape from "../../assets/Clip path group.svg"; // ✅ add your svg
import { motion } from 'framer-motion';
import BgShape2 from "../../assets/Clip path group2.svg";

export default function HeroSectionComponent() {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 pb-12 md:pb-16 pt-36 lg:pb-24 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
         <img
        src={BgShape}
        alt="Decorative background"
        className="absolute top-20 left-0 w-full h-auto opacity-70 pointer-events-none max-w-none"
      />
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1
            className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-snug lg:leading-[70px] text-[#0B466D]"
          >
            Empowering Coders, <br className="hidden sm:block" /> Building Communities
          </h1>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-[#5D5D5D] max-w-md md:max-w-lg mx-auto lg:mx-0">
            Join us to explore technology, enhance your skills, and connect with like-minded individuals.
          </p>
          
          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="bg-[#0B466D] hover:bg-[#3A7A8A] text-sm sm:text-base md:text-lg text-white px-6 sm:px-8 md:px-[2rem] py-2.5 sm:py-3 rounded-full font-medium flex items-center gap-2 transition-colors duration-300 shadow-[0px_4px_4px_0px_#00000040]">
              Join Now
            </button>
          </div>
        </div>

        {/* Right Logo with PNG Card */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative bg-transparent">
            {/* PNG Card (background) */}
            <img
              src={mainlogo}
              alt="Card Background"
              className="object-contain max-w-[280px] sm:max-w-[340px] md:max-w-[400px]"
            />

            {/* Logo (overlayed on top of card) */}
            <img
              src={logo}
              alt="ACM Logo"
              className="absolute inset-0 m-auto object-contain max-h-[120px] sm:max-h-[150px] md:max-h-[180px]"
            />
          </div>
        </div>
      </div>

      {/* Cards Below */}
    {/* Cards Section */}
<div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 lg:flex md:gap-4 gap-6 lg:gap-6">
  {/* First Card */}
  <div className="bg-[#0B466D] text-white rounded-xl p-6 shadow-lg relative md:col-span-1 lg:flex-[2]">
    <div className="absolute -top-2 right-0 w-20 h-4 bg-[#0B466D] rounded-t-xl"></div>
    <ArrowUpRight className="absolute top-4 right-4 h-6 w-6 text-white" />
    <p className="text-sm md:text-base text-gray-200 mb-4 pr-8">
      Our aim is to bridge the gap between academic learning and industry requirements...
    </p>
    <h3 className="text-lg md:text-xl font-semibold">
      Our <br/> Core Mission
    </h3>
  </div>

  {/* Second Card */}
  <div className="bg-[#ED5554] text-white rounded-xl p-6 shadow-lg relative lg:flex-[1] flex flex-col">
  {/* Top-right wide pop */}
  <div className="absolute -top-2 right-0 w-20 h-4 bg-[#ED5554] rounded-t-xl"></div>

  {/* Arrow */}
  <ArrowUpRight className="absolute top-4 right-4 h-6 w-6 text-white" />

  {/* Content (heading at bottom) */}
  <h3 className="text-lg md:text-xl font-semibold mt-auto">
    Upcoming <br/> Events
  </h3>
</div>


  {/* Third Card */}
 <div className="bg-[#353535] text-white rounded-xl p-6 shadow-lg relative lg:flex-[1] flex flex-col">
  {/* Top-right wide pop */}
  <div className="absolute -top-2 right-0 w-20 h-4 bg-[#353535] rounded-t-xl"></div>

  {/* Arrow */}
  <ArrowUpRight className="absolute top-4 right-4 h-6 w-6 text-white" />

  {/* Content (heading at bottom) */}
  <h3 className="text-lg md:text-xl font-semibold mt-auto">
    Meet Our <br/> Team
  </h3>
</div>

</div>


    </section>
  );
}
