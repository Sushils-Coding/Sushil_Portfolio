import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GraduationCap } from 'lucide-react';
import { motion } from "framer-motion";
import educationData from "../data/educationData";

const Education = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const desktopItemVariants = {
    hidden: (i) => ({ 
      opacity: 0, 
      x: i % 2 === 0 ? -50 : 50 
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    })
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  const hoverVariant = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(133, 76, 230, 0.3)"
    }
  };

  return (
    <motion.div
      id="education"
      className="text-white bg-gradient-to-b from-[#0f172b] to-[#1c294c] w-full min-h-screen p-4 sm:p-10 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Title Section */}
      <motion.div 
        className="flex flex-col items-center mt-10 mb-4 sm:mb-3 sm:mt-2 w-full"
        variants={titleVariants}
      >
        <motion.div 
          className="flex items-center gap-4 mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <FaGraduationCap className="text-4xl sm:text-5xl text-amber-300" />
          <motion.h1 
            className="text-3xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-purple-300"
            whileHover={{ scale: 1.02 }}
          >
            My Education
          </motion.h1>
        </motion.div>
        <motion.div 
          className="w-32 h-1 bg-gradient-to-r from-amber-400 to-purple-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>

      {/* Desktop Timeline (shown on md screens and up) */}
      <div className="hidden md:block relative w-full max-w-4xl mt-12">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-400/30" />

        <div className="space-y-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              custom={index}
              variants={desktopItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  whileHover={hoverVariant}
                  className={`bg-[#101d42]/90 backdrop-blur-sm border-2 border-blue-900/50 p-6 rounded-xl shadow-lg ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-sm font-medium mb-2">
                    {edu.year}
                  </span>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-purple-300 font-medium">{edu.institution}</p>
                  <p className="text-gray-300 mt-2">{edu.period}</p>
                </motion.div>
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center z-10 border-4 border-[#1c294c]"
              >
                <GraduationCap className="w-6 h-6 text-[#0f172b]" />
              </motion.div>

              {/* Empty space for the other side */}
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Layout (shown on screens smaller than md) */}
      <div className="md:hidden w-full max-w-4xl mt-8 space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            variants={mobileItemVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#101d42]/90 backdrop-blur-sm border-2 border-blue-900/50 rounded-xl shadow-lg p-6 flex flex-col items-center gap-6"
            whileHover={hoverVariant}
          >
            {/* Icon - Centered for mobile */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center z-10 border-4 border-[#1c294c]"
            >
              <GraduationCap className="w-6 h-6 text-[#0f172b]" />
            </motion.div>

            {/* Content - Centered for mobile */}
            <div className="text-center">
              <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-sm font-medium mb-2">
                {edu.year}
              </span>
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-purple-300 font-medium">{edu.institution}</p>
              <p className="text-gray-300 mt-2">{edu.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;