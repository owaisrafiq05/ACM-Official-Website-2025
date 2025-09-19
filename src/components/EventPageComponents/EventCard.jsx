import React from 'react';
import { motion } from 'framer-motion';

// Desktop Component (1024px and above)
const EventCardDesktop = ({ title, logo, description, date, image, venue, venueSubtitle, attendees, side }) => {
    return (
        <motion.div
            className="container mx-auto px-8 lg:px-16 2xl:px-[6rem] py-32 mb-[4rem] xl:mb-[2rem] overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className={`flex container flex-col lg:flex-row items-center gap-16 ${side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                {/* Left Content */}
                <div className="flex-1">
                    {/* Header with Logo */}
                    <div className="flex items-center gap-4 mb-5">
                        <h1 className="font-semibold text-[34px] xl:text-[40px] leading-[100%] tracking-[0] text-black">
                            {title}
                        </h1>
                        {logo && (
                            <div className="w-[70px] h-[70px] flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-full h-full object-cover rounded-[33px]"
                                />
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <p className="font-normal text-[#0B466D] text-[22px] leading-[100%] tracking-[0] mt-[30px]">
                        {description}
                    </p>

                    {/* Register Button */}
                    <button className="bg-[#0B466D] hover:bg-[#3A7A8A] text-[18px] text-white px-[2rem] py-3 rounded-full font-medium flex items-center gap-2 transition-colors duration-300 mt-[100px] shadow-[0px_4px_4px_0px_#00000040]">
                        Register Now
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 13H23.5M23.5 13L13 2.5M23.5 13L13 23.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Right Content */}
                <div className="flex-1 relative">
                    {/* Date Badge - positioned to extend outside the image */}
                    <div className={`absolute bg-[#ED5554] text-white h-[80px] 2xl:h-[100px] w-[300px] xl:w-[345px] -top-[2rem] z-20 border-[10px] px-4 xl:px-8 border-white rounded-full flex items-center justify-center ${side === 'right' ? 'right-[-2rem] xl:right-[-3.5rem]' : 'left-[-2rem] xl:left-[-3.5rem]'}`}>
                        <div className="flex items-center justify-center gap-2">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6667 2.83333V8.49999M11.3333 2.83333V8.49999M4.25 14.1667H29.75M7.08333 5.66666H26.9167C28.4815 5.66666 29.75 6.93519 29.75 8.49999V28.3333C29.75 29.8981 28.4815 31.1667 26.9167 31.1667H7.08333C5.51853 31.1667 4.25 29.8981 4.25 28.3333V8.49999C4.25 6.93519 5.51853 5.66666 7.08333 5.66666Z" stroke="#F3F3F3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-medium text-[20px] leading-[100%] tracking-[0]">{date}</span>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="relative rounded-2xl overflow-hidden mt-4">
                        <img
                            src={image}
                            alt={`${title} Event Image`}
                            className="w-full h-full object-cover rounded-[33px]"
                        />
                    </div>

                    {/* Combined Location and Attendees Badge - positioned to extend outside the image */}
                    <div className={`absolute bottom-[-6rem] bg-white rounded-2xl p-[1.5rem] 2xl:p-[2rem] shadow-xl z-20 min-w-[200px] ${side === 'right' ? 'left-[60px]' : 'right-[60px]'}`}>
                        {/* Location Section */}
                        <div className="flex items-center gap-3 mb-[2rem]">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 39.1666C13.5528 39.1666 13.1694 39.0389 12.85 38.7833C12.5305 38.5278 12.291 38.1923 12.1312 37.7771C11.5243 35.9882 10.7576 34.3111 9.83123 32.7458C8.93679 31.1805 7.67498 29.3437 6.04581 27.2354C4.41665 25.1271 3.09095 23.1146 2.06873 21.1979C1.07845 19.2812 0.583313 16.9653 0.583313 14.25C0.583313 10.5125 1.87706 7.34998 4.46456 4.76248C7.08401 2.14303 10.2625 0.833313 14 0.833313C17.7375 0.833313 20.9 2.14303 23.4875 4.76248C26.1069 7.34998 27.4166 10.5125 27.4166 14.25C27.4166 17.1569 26.8576 19.5847 25.7396 21.5333C24.6535 23.45 23.3916 25.3507 21.9541 27.2354C20.2291 29.5354 18.9194 31.4521 18.025 32.9854C17.1625 34.4868 16.4437 36.084 15.8687 37.7771C15.709 38.2243 15.4535 38.5757 15.1021 38.8312C14.7826 39.0548 14.4153 39.1666 14 39.1666ZM14 19.0416C15.3416 19.0416 16.4757 18.5785 17.4021 17.6521C18.3285 16.7257 18.7916 15.5916 18.7916 14.25C18.7916 12.9083 18.3285 11.7743 17.4021 10.8479C16.4757 9.92151 15.3416 9.45831 14 9.45831C12.6583 9.45831 11.5243 9.92151 10.5979 10.8479C9.67151 11.7743 9.20831 12.9083 9.20831 14.25C9.20831 15.5916 9.67151 16.7257 10.5979 17.6521C11.5243 18.5785 12.6583 19.0416 14 19.0416Z" fill="#0B466D" />
                            </svg>
                            <div>
                                <div className="font-medium text-[18px] xl:text-[22px] text-black leading-[100%] tracking-[0]">{venue}</div>
                                <div className="font-medium text-[12px] text-[#5D5D5D] leading-[100%] tracking-[0]">{venueSubtitle}</div>
                            </div>
                        </div>

                        {/* Attendees Section */}
                        <div className="flex items-center gap-3">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.715 16C14.5412 16 12.6802 15.2493 11.1321 13.7479C9.58407 12.2465 8.81004 10.4417 8.81004 8.33335C8.81004 6.22502 9.58407 4.42016 11.1321 2.91877C12.6802 1.41738 14.5412 0.666687 16.715 0.666687C18.8889 0.666687 20.7499 1.41738 22.298 2.91877C23.846 4.42016 24.6201 6.22502 24.6201 8.33335C24.6201 10.4417 23.846 12.2465 22.298 13.7479C20.7499 15.2493 18.8889 16 16.715 16ZM0.905029 31.3334V25.9667C0.905029 24.8806 1.19323 23.8823 1.76964 22.9719C2.34605 22.0615 3.11184 21.3667 4.06703 20.8875C6.10916 19.8972 8.18422 19.1545 10.2922 18.6594C12.4002 18.1643 14.5412 17.9167 16.715 17.9167C18.8889 17.9167 21.0299 18.1643 23.1379 18.6594C25.2459 19.1545 27.3209 19.8972 29.3631 20.8875C30.3183 21.3667 31.084 22.0615 31.6605 22.9719C32.2369 23.8823 32.5251 24.8806 32.5251 25.9667V31.3334H0.905029ZM4.85753 27.5H28.5726V25.9667C28.5726 25.6153 28.482 25.2959 28.3008 25.0084C28.1197 24.7209 27.8809 24.4972 27.5844 24.3375C25.8058 23.475 24.0107 22.8281 22.1991 22.3969C20.3876 21.9656 18.5595 21.75 16.715 21.75C14.8705 21.75 13.0425 21.9656 11.2309 22.3969C9.41938 22.8281 7.62429 23.475 5.84566 24.3375C5.54922 24.4972 5.31042 24.7209 5.12927 25.0084C4.94811 25.2959 4.85753 25.6153 4.85753 25.9667V27.5ZM16.715 12.1667C17.802 12.1667 18.7325 11.7913 19.5065 11.0406C20.2805 10.29 20.6676 9.38752 20.6676 8.33335C20.6676 7.27919 20.2805 6.37676 19.5065 5.62606C18.7325 4.87537 17.802 4.50002 16.715 4.50002C15.6281 4.50002 14.6976 4.87537 13.9236 5.62606C13.1496 6.37676 12.7625 7.27919 12.7625 8.33335C12.7625 9.38752 13.1496 10.29 13.9236 11.0406C14.6976 11.7913 15.6281 12.1667 16.715 12.1667Z" fill="#0B466D" />
                            </svg>
                            <div>
                                <div className="font-medium text-black text-[18px] xl:text-[22px] leading-[100%] tracking-[0]">{attendees}</div>
                                <div className="font-medium text-[12px] text-[#5D5D5D] leading-[100%] tracking-[0]">Expected Attendees</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Mobile/Tablet Component (below 1024px)
const EventCardMobile = ({ title, logo, description, date, image, venue, venueSubtitle, attendees }) => {
    return (
        <motion.div
            className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex flex-col gap-6 sm:gap-8">
                {/* Header Section */}
                <div className="text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
                        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-[0] text-black">
                            {title}
                        </h1>
                        {logo && ( 
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
                            <img
                                src={logo}
                                alt={`${title} Logo`}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        )}
                    </div>
                    <p className="font-normal text-[#0B466D] text-sm sm:text-base md:text-lg leading-relaxed tracking-[0] max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Image Section with Date Badge */}
                <div className="relative">
                    {/* Main Image */}
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                        <img
                            src={image}
                            alt={`${title} Event Image`}
                            className="w-full h-80 sm:h-[23rem] object-center object-cover rounded-xl sm:rounded-2xl"
                        />

                        {/* Date Badge - positioned on top corner of the image */}
                        <div className="absolute bg-[#ED5554] text-white z-10 border-4 sm:border-6 border-white rounded-full
                                        h-12 w-48 top-3 left-3 px-3 py-2
                                        sm:h-12 sm:w-56 sm:top-4 sm:left-4 sm:px-4 sm:py-3
                                        md:h-14 md:w-64 md:top-5 md:left-5 md:px-5 md:py-3.5">
                            <div className="flex items-center justify-center gap-1 sm:gap-2 h-full">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.6667 2.83333V8.49999M11.3333 2.83333V8.49999M4.25 14.1667H29.75M7.08333 5.66666H26.9167C28.4815 5.66666 29.75 6.93519 29.75 8.49999V28.3333C29.75 29.8981 28.4815 31.1667 26.9167 31.1667H7.08333C5.51853 31.1667 4.25 29.8981 4.25 28.3333V8.49999C4.25 6.93519 5.51853 5.66666 7.08333 5.66666Z" stroke="#F3F3F3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="font-medium text-xs sm:text-sm md:text-base leading-tight tracking-[0]">{date}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Card - Full width below image */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {/* Location Section */}
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-7 sm:w-6 sm:h-8 md:w-7 md:h-9 flex-shrink-0" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 39.1666C13.5528 39.1666 13.1694 39.0389 12.85 38.7833C12.5305 38.5278 12.291 38.1923 12.1312 37.7771C11.5243 35.9882 10.7576 34.3111 9.83123 32.7458C8.93679 31.1805 7.67498 29.3437 6.04581 27.2354C4.41665 25.1271 3.09095 23.1146 2.06873 21.1979C1.07845 19.2812 0.583313 16.9653 0.583313 14.25C0.583313 10.5125 1.87706 7.34998 4.46456 4.76248C7.08401 2.14303 10.2625 0.833313 14 0.833313C17.7375 0.833313 20.9 2.14303 23.4875 4.76248C26.1069 7.34998 27.4166 10.5125 27.4166 14.25C27.4166 17.1569 26.8576 19.5847 25.7396 21.5333C24.6535 23.45 23.3916 25.3507 21.9541 27.2354C20.2291 29.5354 18.9194 31.4521 18.025 32.9854C17.1625 34.4868 16.4437 36.084 15.8687 37.7771C15.709 38.2243 15.4535 38.5757 15.1021 38.8312C14.7826 39.0548 14.4153 39.1666 14 39.1666ZM14 19.0416C15.3416 19.0416 16.4757 18.5785 17.4021 17.6521C18.3285 16.7257 18.7916 15.5916 18.7916 14.25C18.7916 12.9083 18.3285 11.7743 17.4021 10.8479C16.4757 9.92151 15.3416 9.45831 14 9.45831C12.6583 9.45831 11.5243 9.92151 10.5979 10.8479C9.67151 11.7743 9.20831 12.9083 9.20831 14.25C9.20831 15.5916 9.67151 16.7257 10.5979 17.6521C11.5243 18.5785 12.6583 19.0416 14 19.0416Z" fill="#0B466D" />
                            </svg>
                            <div>
                                <div className="font-medium text-sm sm:text-base md:text-lg text-black leading-tight tracking-[0]">{venue}</div>
                                <div className="font-medium text-xs sm:text-sm text-[#5D5D5D] leading-tight tracking-[0]">{venueSubtitle}</div>
                            </div>
                        </div>

                        {/* Attendees Section */}
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-5 sm:w-7 sm:h-6 md:w-8 md:h-7 flex-shrink-0" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.715 16C14.5412 16 12.6802 15.2493 11.1321 13.7479C9.58407 12.2465 8.81004 10.4417 8.81004 8.33335C8.81004 6.22502 9.58407 4.42016 11.1321 2.91877C12.6802 1.41738 14.5412 0.666687 16.715 0.666687C18.8889 0.666687 20.7499 1.41738 22.298 2.91877C23.846 4.42016 24.6201 6.22502 24.6201 8.33335C24.6201 10.4417 23.846 12.2465 22.298 13.7479C20.7499 15.2493 18.8889 16 16.715 16ZM0.905029 31.3334V25.9667C0.905029 24.8806 1.19323 23.8823 1.76964 22.9719C2.34605 22.0615 3.11184 21.3667 4.06703 20.8875C6.10916 19.8972 8.18422 19.1545 10.2922 18.6594C12.4002 18.1643 14.5412 17.9167 16.715 17.9167C18.8889 17.9167 21.0299 18.1643 23.1379 18.6594C25.2459 19.1545 27.3209 19.8972 29.3631 20.8875C30.3183 21.3667 31.084 22.0615 31.6605 22.9719C32.2369 23.8823 32.5251 24.8806 32.5251 25.9667V31.3334H0.905029ZM4.85753 27.5H28.5726V25.9667C28.5726 25.6153 28.482 25.2959 28.3008 25.0084C28.1197 24.7209 27.8809 24.4972 27.5844 24.3375C25.8058 23.475 24.0107 22.8281 22.1991 22.3969C20.3876 21.9656 18.5595 21.75 16.715 21.75C14.8705 21.75 13.0425 21.9656 11.2309 22.3969C9.41938 22.8281 7.62429 23.475 5.84566 24.3375C5.54922 4.4972 5.31042 24.7209 5.12927 25.0084C4.94811 25.2959 4.85753 25.6153 4.85753 25.9667V27.5ZM16.715 12.1667C17.802 12.1667 18.7325 11.7913 19.5065 11.0406C20.2805 10.29 20.6676 9.38752 20.6676 8.33335C20.6676 7.27919 20.2805 6.37676 19.5065 5.62606C18.7325 4.87537 17.802 4.50002 16.715 4.50002C15.6281 4.50002 14.6976 4.87537 13.9236 5.62606C13.1496 6.37676 12.7625 7.27919 12.7625 8.33335C12.7625 9.38752 13.1496 10.29 13.9236 11.0406C14.6976 11.7913 15.6281 12.1667 16.715 12.1667Z" fill="#0B466D" />
                            </svg>
                            <div>
                                <div className="font-medium text-black text-sm sm:text-base md:text-lg leading-tight tracking-[0]">{attendees}</div>
                                <div className="font-medium text-xs sm:text-sm text-[#5D5D5D] leading-tight tracking-[0]">Expected Attendees</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Register Button */}
                <div className="flex justify-center">
                    <button className="bg-[#0B466D] hover:bg-[#3A7A8A] text-sm sm:text-base md:text-lg text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full font-medium flex items-center gap-2 transition-colors duration-300 shadow-[0px_4px_4px_0px_#00000040]">
                        Register Now
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 13H23.5M23.5 13L13 2.5M23.5 13L13 23.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

// Main Component with Conditional Rendering
const EventCard = ({
    title = "Coders Cup 2025",
    logo = "",
    description = "The Coders' Cup is an intra-FAST programming competition that stands as the epitome of where rising minds polish and develop their coding abilities while debugging their very own creations.",
    date = "9th September 2025",
    image = "",
    venue = "FAST NUCES",
    venueSubtitle = "Karachi Campus",
    attendees = "5000+",
    side = "left"
}) => {
    return (
        <>
            {/* Desktop Version - Hidden on screens smaller than 1024px */}
            <div className="hidden lg:block">
                <EventCardDesktop
                    title={title}
                    logo={logo}
                    description={description}
                    date={date}
                    image={image}
                    venue={venue}
                    venueSubtitle={venueSubtitle}
                    attendees={attendees}
                    side={side}
                />
            </div>

            {/* Mobile/Tablet Version - Hidden on screens 1024px and larger */}
            <div className="block lg:hidden">
                <EventCardMobile
                    title={title}
                    logo={logo}
                    description={description}
                    date={date}
                    image={image}
                    venue={venue}
                    venueSubtitle={venueSubtitle}
                    attendees={attendees}
                />
            </div>
        </>
    );
};

export default EventCard;