import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Function to truncate text after 15 words
  const truncateDescription = (text) => {
    const words = text.split(' ');
    if (words.length > 15 && !isExpanded) {
      return words.slice(0, 15).join(' ') + '...';
    }
    return text;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#155e75"
    }
  };

  return (
    <motion.div
      className="rounded-2xl border border-blue-950 shadow-sm shadow-black p-5 bg-gradient-to-b from-blue-950 to-gray-800  
      h-auto min-h-[500px] w-[85vw] sm:w-[350px] md:w-full md:max-w-[400px] lg:max-w-[450px] xl:max-w-[400px]
      transition-all duration-300 flex flex-col flex-shrink-0 snap-center md:flex-shrink"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      whileHover="hover"
    >
      {/* Image container */}
      <motion.div 
        className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden"
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 bg-red-200 border flex items-center justify-center">
          <span className="text-gray-800 font-medium">Project Image</span>
        </div>
      </motion.div>
      
      <div className="flex flex-col flex-grow px-2">
        <motion.h1 
          className="text-2xl font-bold mb-3 text-center"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h1>
        
        <motion.ul className="flex flex-wrap justify-center gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <motion.li 
              key={i} 
              className="border bg-cyan-800 text-sm font-medium rounded-md px-3 py-1"
              variants={tagVariants}
              whileHover="hover"
            >
              {tag}
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.p 
          className="text-base text-gray-300 leading-relaxed flex-grow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {truncateDescription(project.description)}
        </motion.p>
        
        <div className="mt-4 flex justify-center gap-3">
          <motion.button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors cursor-pointer sm:cursor-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.button>
          
          {project.description.split(' ').length > 15 && (
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors cursor-pointer sm:cursor-none"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const projects = [
    {
      title: "Course-flow ai",
      tags: ["React", "MongoDB", "Node.js", "Express.js"],
      description: "Course-Flow AI is an AI-powered MERN stack web app that generates personalized course content based on user input such as course name and difficulty level. It features a sleek, animated interface, a user dashboard for managing generated courses, and secure authentication to enhance user experience and accessibility."
    },
    {
      title: "ToyNest- Online Toy Store",
      tags: ["React", "Node.js", "MongoDB"],
      description: "ToyNest is a MERN Stack-based toy rental and purchase platform offering age-wise filtering, wishlist, and cart features, with chatbot assistance and an upcoming subscription model for flexible monthly toy rentals."
    },
    {
      title: "Portfolio Site",
      tags: ["React.js"],
      description: "Modern responsive portfolio showcasing projects with smooth animations."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      id="projects"
      className="text-white bg-gradient-to-b from-[#1c294c] to-[#0f172b] w-full min-h-screen py-12 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div 
        className="mb-12"
        variants={titleVariants}
      >
        <motion.h1 
          className="mt-3 text-3xl sm:text-4xl font-bold text-center cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-purple-300"
          whileHover={{ scale: 1.05 }}
        >
          Projects
        </motion.h1>
      </motion.div>

      {/* Mobile/small screens (horizontal scroll) */}
      <motion.div 
        className="md:hidden flex flex-nowrap overflow-x-auto gap-6 snap-x snap-mandatory px-4 scrollbar-thin scrollbar-thumb-blue-900 pb-4 scroll-smooth"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>

      {/* Medium+ screens (grid layout) */}
      <motion.div 
        className="hidden md:flex flex-wrap justify-center gap-8 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Project;