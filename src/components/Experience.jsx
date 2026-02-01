import React from "react";
import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

// Experience Data
const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Celebrare",
    companyUrl: "https://celebrare.in",
    period: "Oct 2025 - Present",
    type: "Remote",
    responsibilities: [
      "Implemented Google Drive file uploads using multiple service accounts in a round-robin strategy, balancing load and improving upload throughput and reliability",
      "Built a scalable media upload pipeline handling 100+ images per batch, with retry logic, batch confirmation, and Shared Drive integration to prevent data loss.",
      "Built backend APIs to manage seamless collage creation and uploading workflows, ensuring correct batching, synchronization, and failure recovery.",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "SakalpSphere - Namastep.com",
    companyUrl: "https://www.namastep.com/",
    period: "April 2025 - Oct 2025",
    type: "Hybrid",
    responsibilities: [
      "Engineered backend systems and RESTful APIs using Node.js and Express.js",
      "Optimized MongoDB queries, improving data retrieval performance by 25%",
      "Implemented authentication systems and integrated third-party services",
    ],
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const titleVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 30px -10px rgba(133, 76, 230, 0.4)",
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};


const ExperienceCard = ({ experience, index }) => (
  <motion.div
    className="relative bg-[#101d42]/90 backdrop-blur-sm border-2 border-blue-900/50 rounded-xl p-6 md:p-8"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover="hover"
    custom={index}
  >
    {/* Role & Company */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white">
          {experience.role}
        </h3>
        <a
          href={experience.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors cursor-pointer sm:cursor-none"
        >
          <span className="font-medium">{experience.company}</span>
          <FaExternalLinkAlt className="text-xs" />
        </a>
      </div>
      <div className="mt-2 md:mt-0 text-right">
        <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-sm font-medium">
          {experience.period}
        </span>
        <p className="text-gray-400 text-sm mt-1">{experience.type}</p>
      </div>
    </div>

    {/* Responsibilities */}
    <motion.ul className="space-y-3 mt-4">
      {experience.responsibilities.map((item, idx) => (
        <motion.li
          key={idx}
          className="flex items-start gap-3 text-gray-300"
          variants={listItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <span className="inline-block w-2 h-2 mt-2 rounded-full bg-amber-400 flex-shrink-0" />
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

// Experience - Work experience timeline section
const Experience = () => {
  return (
    <motion.div
      id="experience"
      className="text-white bg-[#0f172b] w-full min-h-screen p-4 sm:p-10 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Title Section */}
      <motion.div
        className="flex flex-col items-center mt-10 mb-8 sm:mb-12 w-full"
        variants={titleVariants}
      >
        <motion.div
          className="flex items-center gap-4 mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <MdWork className="text-4xl sm:text-5xl text-amber-300" />
          <motion.h1
            className="text-3xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-purple-300"
            whileHover={{ scale: 1.02 }}
          >
            Experience
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

      {/* Experience Cards */}
      <div className="w-full max-w-4xl space-y-6">
        {EXPERIENCE_DATA.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
