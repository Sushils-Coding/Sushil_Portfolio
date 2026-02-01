import React from "react";
import { IoMdOpen } from "react-icons/io";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const textItemVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Constants
const RESUME_URL = "https://shorturl.at/lEu4W";
const EMAIL = "sushilverma40408@gmail.com";
const LOCATION = "Mumbai, India";


const About = () => {

  return (
    <motion.div
      id="about"
      className="text-white bg-gradient-to-b from-[#0f172b] to-[#1c294c] w-full min-h-screen p-4 sm:p-6 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="py-10 px-4 sm:px-10"
        variants={textItemVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center"
          variants={textItemVariants}
        >
          About Me
        </motion.h1>
      </motion.div>

      <div className="w-screen max-w-7xl px-4 sm:px-10 lg:flex lg:justify-between lg:items-center">
        {/* Image Section */}
        <motion.div
          className="flex justify-center mb-8 lg:mb-0 lg:flex-shrink-0"
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.img
            src="/my_photo.jpeg"
            className="rounded-[10px] h-60 w-60 sm:h-100 sm:w-80 object-cover shadow-lg shadow-[#854CE6]/50"
            alt="Profile photo"
            initial={{ rotate: -5 }}
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* Content Section - all text elements will animate from right */}
        <motion.div
          className="space-y-5 lg:max-w-2xl mt-11"
          variants={containerVariants}
        >
          <motion.div variants={textItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}>
            <motion.h1
              className="text-2xl sm:text-3xl font-bold"
              whileHover={{ x: 5 }}
            >
              I'm Sushil
            </motion.h1>
            <motion.h3
              className="text-xl sm:text-2xl font-semibold text-amber-200"
              whileHover={{ x: 5 }}
            >
              Software Developer
            </motion.h3>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg"
            variants={textItemVariants} initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            I am a Software Developer based in Mumbai, India, with strong experience in building scalable, production-ready web applications. I hold a Bachelor of Science from Viva College, University of Mumbai, and an MCA from Thakur Institute of Management Studies. With a problem-solving mindset and a focus on real-world impact, I specialize in designing reliable systems, optimizing performance, and delivering robust end-to-end solutions.
            <br />
            <br />
            With hands-on experience as a Web Developer Intern at Celebrare and Full Stack Developer Intern at SakalpSphere, I have built scalable media upload systems using Google Drive APIs and multiple service accounts, developed backend APIs for seamless collage creation and batch-based uploads, and created responsive UI components with RESTful APIs and optimized database queries to deliver reliable, high-performance applications.
          </motion.p>

          <motion.div
            className="flex gap-2 items-baseline"
            variants={textItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ x: 5 }}
          >
            <span className="text-amber-200 font-medium">Email:</span>
            <span>{EMAIL}</span>
          </motion.div>

          <motion.div
            className="flex gap-2 items-baseline"
            variants={textItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ x: 5 }}
          >
            <span className="text-amber-200 font-medium">Place:</span>
            <span>{LOCATION}</span>
          </motion.div>

          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group mt-4 cursor-pointer sm:cursor-none"
            variants={textItemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className="border-1 bg-blue-700 text-xl sm:text-2xl font-bold rounded-[4px] px-4 py-2 w-fit flex justify-center items-center hover:bg-blue-600 transition-colors shadow-lg shadow-blue-700/50"
              variants={buttonVariants}
            >
              <button className="flex items-center gap-1 cursor-pointer sm:cursor-none">
                <span>Resume</span>
                <motion.span
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <IoMdOpen className="group-hover:translate-x-2 transition-all duration-500 ease-in-out" />
                </motion.span>
              </button>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;