import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

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

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(133, 76, 230, 0.3)"
    }
  };

  const educationData = [
    {
      id: 1,
      degree: "Masters Of Computer Application",
      institution: "Thakur Institute of Management Studies, Career Development and Research",
      period: "2024-2026 | Pursuing",
      image: "src/images/timscdr.jpg",
      icon: <FaGraduationCap className="text-2xl text-amber-300" />
    },
    {
      id: 2,
      degree: "Bachelor of Science (Mathematics)",
      institution: "Viva College of Arts, Science & Commerce, University of Mumbai",
      period: "2020-2023 | Completed | 7.6 CGPA",
      image: "src/images/viva_clg.avif",
      icon: <FaGraduationCap className="text-2xl text-amber-300" />
    },
    {
      id: 3,
      degree: "HSC",
      institution: "Matruchhaya Junior College of Arts, Science & Commerce",
      period: "2018-2020 | Completed | 79.38%",
      image: "src/images/matruchhaya_clg.jpg",
      icon: <FaGraduationCap className="text-2xl text-amber-300" />
    }
  ];

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

      {/* Education Cards */}
      <div className="w-full max-w-4xl space-y-6 sm:space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="bg-[#101d42]/90 backdrop-blur-sm border-2 border-blue-900/50 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 hover:border-blue-700 transition-all duration-300"
            variants={cardVariants}
            custom={index}
            whileHover="hover"
          >
            {/* College Image */}
            <motion.div 
              className="min-w-[140px] sm:min-w-[160px] relative"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute -inset-2 bg-blue-700/20 rounded-lg blur-md" />
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-full h-auto max-w-[160px] rounded-lg object-cover relative z-10 border-2 border-blue-900/30"
              />
            </motion.div>

            {/* Education Details */}
            <div className="text-center sm:text-left">
              <motion.div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                {edu.icon}
                <motion.h1 
                  className="text-xl sm:text-2xl font-bold"
                  whileHover={{ x: 5 }}
                >
                  {edu.degree}
                </motion.h1>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 mb-4 text-sm sm:text-base"
                whileHover={{ x: 3 }}
              >
                {edu.institution}
              </motion.p>
              
              <motion.h2 
                className="text-amber-300 font-medium text-sm sm:text-base"
                whileHover={{ x: 3 }}
              >
                {edu.period}
              </motion.h2>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;