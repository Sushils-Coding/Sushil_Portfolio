import React from "react";
import { motion } from "framer-motion";

const frontendSkills = ['React', 'Javascript', 'Tailwind CSS', 'Redux'];

const backendSkills = ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs"];

const otherSkills = ["Java", "Git", "GitHub", "Postman", "VS Code", "Figma"];

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration:1,
        type: "spring",
        stiffness: 90,
        damping: 12
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(133, 76, 230, 0.3), 0 10px 10px -5px rgba(133, 76, 230, 0.1)",
      transition: {
        y: { type: "spring", stiffness: 300 },
        scale: { type: "spring", stiffness: 300, damping: 10 }
      }
    }
  };

  const skillItemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }),
    hover: {
      x: 8,
      color: "#fbbf24",
      textShadow: "0 0 8px rgba(251, 191, 36, 0.5)",
      transition: { type: "spring", stiffness: 500 }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.6,
      transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
    }
  };

  return (
    <motion.div
      id="skills"
      className="relative text-white bg-gradient-to-b from-[#1c294c] to-[#0f172b] w-full min-h-screen p-4 sm:p-10 flex flex-col items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-purple-600 blur-[90px]"
        variants={glowVariants}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-amber-600 blur-[90px]"
        variants={glowVariants}
      />

      {/* Title Section */}
      <motion.div
        className="mb-16 relative z-10"
        variants={titleVariants}
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-purple-300"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          Technical Skills
        </motion.h1>
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>

      {/* Cards Container - Horizontal scroll on small screens */}
      <motion.div
        className="w-full max-w-7xl px-4"
        variants={cardContainerVariants}
      >
        <div className="flex overflow-x-auto pb-8 md:overflow-visible md:flex-wrap md:justify-center gap-6 md:gap-8 scrollbar-hide">
          {/* Frontend Card */}
          <motion.div
            className="flex-shrink-0 bg-[#1e293b]/90 backdrop-blur-sm border border-[#854CE6]/20 rounded-2xl p-8 w-full max-w-xs shadow-lg shadow-[#854CE6]/5 relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover="hover"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-500/20 blur-[60px]" />
            <motion.h2
              className="text-3xl font-bold mb-6 text-amber-200 relative z-10"
              whileHover={{ x: 5 }}
            >
              Frontend
            </motion.h2>
            <motion.ul className="space-y-4 relative z-10">
              {frontendSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="text-xl font-medium"
                  variants={skillItemVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <span className="inline-block w-2 h-2 mr-3 rounded-full bg-amber-400" />
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            className="flex-shrink-0 bg-[#1e293b]/90 backdrop-blur-sm border border-[#854CE6]/20 rounded-2xl p-8 w-full max-w-xs shadow-lg shadow-[#854CE6]/5 relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover="hover"
          >
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-blue-500/20 blur-[60px]" />
            <motion.h2
              className="text-3xl font-bold mb-6 text-amber-200 relative z-10"
              whileHover={{ x: 5 }}
            >
              Backend
            </motion.h2>
            <motion.ul className="space-y-4 relative z-10">
              {backendSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="text-xl font-medium"
                  variants={skillItemVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <span className="inline-block w-2 h-2 mr-3 rounded-full bg-amber-400" />
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Other Card */}
          <motion.div
            className="flex-shrink-0 bg-[#1e293b]/90 backdrop-blur-sm border border-[#854CE6]/20 rounded-2xl p-8 w-full max-w-xs shadow-lg shadow-[#854CE6]/5 relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover="hover"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-amber-500/20 blur-[60px]" />
            <motion.h2
              className="text-3xl font-bold mb-6 text-amber-200 relative z-10"
              whileHover={{ x: 5 }}
            >
              Others
            </motion.h2>
            <motion.ul className="space-y-4 relative z-10">
              {otherSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="text-xl font-medium"
                  variants={skillItemVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <span className="inline-block w-2 h-2 mr-3 rounded-full bg-amber-400" />
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;