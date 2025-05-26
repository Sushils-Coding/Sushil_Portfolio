import React, { useState, useEffect } from "react";
import { RiMenuFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveSection("home");
  };

  // Handle scroll to determine active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click on nav items
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  // Check if a nav item is active
  const isActive = (section) => {
    return activeSection === section ? "font-bold underline scale-110 transition-all duration-300 ease-in-out" : "";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const mobileItemVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: -50, opacity: 0 }
  };

  return (
    <motion.div 
      className="fixed z-50 backdrop-blur-md bg-black/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav className="flex list-none justify-between items-center m-0 py-[10px] px-[20px] border-[1px] border-b-1 border-b-white w-screen">
        <div className="flex gap-5 items-center w-[50vw]">
          <Link to="#home" onClick={() => handleNavClick("home")}>
            <motion.h1
              onClick={scrollToTop}
              className="relative inline-block text-2xl text-white font-bold tracking-wider cursor-pointer sm:cursor-none hover:scale-110 transition-all duration-400 before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-400 before:ease-in-out hover:before:left-0 hover:before:w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className='text-[#854CE6] symbol'>&lt;</span>Sushil<span style={{ color: '#854CE6' }}>/</span>Verma<span className='text-[#854CE6]'>&gt;</span>
            </motion.h1>
          </Link>
          <motion.div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-amber-50 block lg:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <IoClose className="w-[30px] h-[30px]" />
            ) : (
              <RiMenuFill className="w-[30px] h-[30px]" />
            )}
          </motion.div>

          <motion.ul 
            className="hidden lg:flex gap-3.5 text-xl font-semibold text-amber-100"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {['about', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <motion.li key={section} variants={itemVariants}>
                <Link to={`#${section}`} smooth onClick={() => handleNavClick(section)}>
                  <motion.span 
                    className={`capitalize hover:underline cursor-pointer sm:cursor-none ${isActive(section)}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section}
                  </motion.span>
                </Link>
              </motion.li>
            ))}

            <motion.li variants={itemVariants}>
              <a
                href="https://shorturl.at/7idxA"
                target="_blank"
                className="hover:underline cursor-pointer sm:cursor-none"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </motion.span>
              </a>
            </motion.li>
          </motion.ul>
        </div>

        <motion.div 
          className="flex gap-4 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* GitHub */}
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="https://github.com/Sushils-Coding" target="_blank">
              <img
                src="src/images/icons8-github-60 (1).png"
                alt="GitHub"
                className="h-[30px] w-[30px] cursor-pointer sm:cursor-none"
              />
            </a>
            <motion.span 
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium bg-black/50 text-white px-2 py-1 rounded whitespace-nowrap z-99"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              GitHub
            </motion.span>
          </motion.div>

          {/* LinkedIn */}
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              href="https://www.linkedin.com/in/sushil-verma-679444297/"
              target="_blank"
            >
              <img
                src="src/images/icons8-linkedin-100 (1).png"
                alt="LinkedIn"
                className="h-[30px] w-[30px] cursor-pointer sm:cursor-none"
              />
            </a>
            <motion.span 
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium bg-black/50 text-white px-2 py-1 rounded whitespace-nowrap z-99"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              LinkedIn
            </motion.span>
          </motion.div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className="block lg:hidden text-yellow-50 backdrop-blur-md bg-black/60 absolute w-[100vw] font-semibold text-2xl py-4 px-8 space-y-1 z-40"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {['about', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <motion.li 
                key={section}
                variants={mobileItemVariants}
                className={`capitalize hover:underline cursor-pointer sm:cursor-none py-2 px-4 ${isActive(section)}`}
              >
                <Link to={`#${section}`} smooth onClick={() => handleNavClick(section)}>
                  {section}
                </Link>
              </motion.li>
            ))}

            <motion.li variants={mobileItemVariants}>
              <a
                href="https://shorturl.at/7idxA"
                target="_blank"
                className="hover:underline cursor-pointer sm:cursor-none"
              >
                Resume
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;