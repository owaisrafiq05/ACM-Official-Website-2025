import React from "react";
import Logo from "../../assets/acm.svg";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const FooterComponent = () => {
  const events = [
    { name: "Coders Cup", link: "https://coderscup.acmnuceskhi.com/" },
    { name: "SkillPrep Series", link: "https://skillprep.acmnuceskhi.com/" },
  ];

  const developers = [
    { name: "Arham Alvi", link: "https://www.linkedin.com/in/arham-alvi-62068b1bb/" },
    { name: "Owais Rafiq", link: "https://www.linkedin.com/in/owais-rafiq-639494253/" },
    { name: "Shareeq Rashid", link: "https://www.linkedin.com/in/arham-alvi-62068b1bb/" },
  ];

  const designers = [
    { name: "Hasan Sami" },
    { name: "Sameed Jamal" },
    { name: "Asjad Rehan" },
  ];

  const socialLinks = [
    { name: <FaInstagram />, link: "https://www.instagram.com/acmnuceskhi/" },
    { name: <FaLinkedin />, link: "https://www.linkedin.com/company/acmnuceskhi" },
    { name: <FaFacebook />, link: "https://www.facebook.com/acmnuceskhi/" },
  ];

  const renderList = (items) =>
    items.map((item, index) => (
      <li key={index} className="mb-1">
        <a href={item.link || "#"} className="hover:underline text-gray-600">
          {item.name}
        </a>
      </li>
    ));

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200">
      <footer className="shadow-lg shadow-black px-4 sm:px-8 ">
        <div className="w-full py-20">
          {/* Grid Layout for Footer */}
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-5 
              gap-8 
              text-sm md:text-base
              text-center sm:text-left
            "
          >
            {/* Logo */}
            <div className="flex flex-col items-center sm:items-start">
              <a href="https://www.acmdevday.com">
                <img src={Logo} alt="Logo" className="h-14 sm:h-16 md:h-20 object-contain" />
              </a>
            </div>

            {/* Events */}
            <div>
              <h2 className="mb-2 font-bold text-[#031e2c] uppercase text-sm">Our Events</h2>
              <ul>{renderList(events)}</ul>
            </div>

            {/* Socials */}
            <div>
              <h2 className="mb-2 font-bold text-[#031e2c] uppercase text-sm">Connect</h2>
              <div className="flex justify-center sm:justify-start space-x-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="text-[#031e2c] text-lg hover:text-gray-600 transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Developers */}
            <div>
              <h2 className="mb-2 font-bold text-[#031e2c] uppercase text-sm">Developers</h2>
              <ul>{renderList(developers)}</ul>
            </div>

            {/* Designers */}
            <div>
              <h2 className="mb-2 font-bold text-[#031e2c] uppercase text-sm">Designers</h2>
              <ul>{renderList(designers)}</ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border border-gray-300 h-0.5 mt-6 mb-3"></div>
          <h2 className="text-xs sm:text-sm text-center text-gray-600">
            © {new Date().getFullYear()} ACM NUCES™. All Rights Reserved.
          </h2>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
