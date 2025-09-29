import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome, HiOutlinePhone, HiOutlineCalendar, HiOutlineUsers } from "react-icons/hi";
import logo from "../../assets/acm-logo-png.png";

const Navbar2 = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
     className="fixed top-4 left-0 right-0 mx-auto bg-transparent backdrop-blur-md border-2 border-blue-600 shadow-xl z-50 w-[90%] max-w-md lg:w-[30%] rounded-full px-3"

    >
      <div className="flex justify-between items-center w-full">
         {/* Bigger Logo */}
        <div className="flex h-14 w-14 items-center justify-center">
          <img src={logo} alt="Logo" className="h-14 w-14 object-contain rounded-full" />
        </div>
        {/* Home Link */}
        <div className="group relative cursor-pointer">
          <Link to="/" onClick={handleClick} className="flex h-10 w-10 items-center justify-center text-[#0B466D] hover:text-blue-500">
            <HiOutlineHome size={28} />
          </Link>
          <span className="absolute text-[#0B466D] top-8 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Home
          </span>
        </div>

        {/* Events Link */}
        <div className="group relative cursor-pointer">
          <Link to="/events" onClick={handleClick} className="flex h-10 w-10 items-center justify-center text-[#0B466D] hover:text-blue-500">
            <HiOutlineCalendar size={28} />
          </Link>
           <span className="absolute text-[#0B466D] top-8 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Events
          </span>
        </div>

        {/* Bigger Logo */}
        {/* <div className="flex h-14 w-14 items-center justify-center">
          <img src={logo} alt="Logo" className="h-14 w-14 object-contain rounded-full" />
        </div> */}

        {/* Team Link */}
        {/* <div className="group relative cursor-pointer">
          <Link to="/our-team" onClick={handleClick} className="flex h-10 w-10 items-center justify-center text-[#0B466D] hover:text-blue-500">
            <HiOutlineUsers size={28} />
          </Link>
           <span className="absolute text-[#0B466D] top-8 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Team
          </span>
        </div> */}

        {/* Contact Us Link */}
        <div className="group relative cursor-pointer">
          <Link to="/contact-us" onClick={handleClick} className="flex h-10 w-10 items-center justify-center text-[#0B466D] hover:text-blue-500">
            <HiOutlinePhone size={28} />
          </Link>
           <span className="absolute text-[#0B466D] top-8 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
