import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { HashLink as Link } from "react-router-hash-link";

// Navigation Links Data
const QUICK_LINKS = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Education",
  "Projects",
];

const CONTACT_INFO = {
  email: "sushilverma40408@gmail.com",
  location: "Mumbai, India-401209",
};

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#051f5b] to-black text-white py-12 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 lg:gap-8 mb-8">
          {/* Portfolio Info */}
          <div className="flex-1 max-w-md">
            <h1 className="font-bold text-2xl mb-2">Sushil's Portfolio</h1>
            <p className="text-sm mb-2">
              Thank You for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
            <p className="text-sm">Keep Rising. Connect with me over mails!</p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 max-w-xs">
            <h1 className="font-bold text-2xl mb-4">Quick Links</h1>
            <ul className="space-y-2">
              {QUICK_LINKS.map((item) => (
                <Link to={`#${item.toLowerCase()}`} key={item}>
                  <li className="flex items-center gap-2 hover:text-blue-300 transition-colors cursor-pointer sm:cursor-none">
                    <FaAngleRight className="bg-blue-700 rounded-full p-1 text-white flex-shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 max-w-xs">
            <h1 className="font-bold text-2xl mb-4">Contact Info</h1>
            <div className="space-y-2">
              <p className="text-sm md:text-base">{CONTACT_INFO.email}</p>
              <p className="text-sm md:text-base">{CONTACT_INFO.location}</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>Designed & Developed By Sushil Verma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
