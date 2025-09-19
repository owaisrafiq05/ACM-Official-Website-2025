import React from "react";
import Logo from "../../assets/acm.svg";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const FooterComponent = () => {
  const events = [
    { name: "Coders Cup", link: "https://coderscup.acmnuceskhi.com/" },
    { name: "ACM Developers Day", link: "https://www.acmdevday.com/" },
  ];

  const developers = [
    { name: "Arham Alvi", link: "https://www.linkedin.com/in/arham-alvi-62068b1bb/" },
    { name: "Owais Rafiq", link: "https://www.linkedin.com/in/owais-rafiq-639494253/ " },
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
      <li key={index} className="mb-4">
        <a href={item.link} className="hover:underline text-gray-600">
          {item.name}
        </a>
      </li>
    ));

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200">
      <footer className="bg-repeat shadow-lg shadow-black sm:pl-20">
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 ml-9">
              <a href="https://www.acmdevday.com" className="flex items-center md:flex md:justify-center">
                <img className="mx-auto md:mx-0" src={Logo} width={"250vw"} alt="Logo" />
              </a>
            </div>
            <div className="mt-9 mr-9">
              {/* Top Row - Events and Socials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="mb-6 text-lg font-bold text-[#031e2c] uppercase">Our Events</h2>
                  <ul className="text-gray-600 font-medium text-lg">
                    {renderList(events)}
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-lg font-bold text-[#031e2c] uppercase">Connect with Us</h2>
                  <div className="flex flex-wrap mt-4 items-left justify-left">
                    {socialLinks.map((social, index) => (
                      <a key={index} href={social.link} className="text-[#031e2c] mx-1 lg:mx-4 text-xl sm:text-2xl hover:text-gray-600 transition-colors">
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row - Developers and Designers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="mb-6 text-lg font-bold text-[#031e2c] uppercase">Meet the Developers</h2>
                  <ul className="text-gray-600 font-medium text-lg">
                    {renderList(developers)}
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-lg font-bold text-[#031e2c] uppercase">Meet the Designers</h2>
                  <ul className="text-gray-600 font-medium text-lg">
                    {renderList(designers)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 h-0.5 mt-8 mb-3"></div>
          <h2 className="text-sm text-center text-gray-600">
            © {new Date().getFullYear()}{" "}
            ACM NUCES™
            . All Rights Reserved.
          </h2>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
