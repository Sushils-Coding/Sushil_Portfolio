import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from 'lucide-react';
import projects from "../data/projectData";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project, index, setSelectedProject }) => {
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
      className="group relative bg-gradient-to-b from-blue-950 to-gray-800 rounded-2xl border border-blue-950 shadow-lg overflow-hidden cursor-pointer sm:cursor-none"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      whileHover="hover"
      onClick={() => setSelectedProject(project)}
    >
      {/* Image container */}
      <motion.div 
        className="relative w-full aspect-video overflow-hidden"
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0  ">
          <img src={project.image} alt={project.title} />
        </div>
      </motion.div>
      
      <div className="p-6 flex flex-col">
        <motion.h1 
          className="text-2xl font-bold mb-3 text-white"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {truncateDescription(project.description)}
        </motion.p>
        
        <motion.ul className="flex flex-wrap gap-2 mb-4">
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
        
        <div className="mt-auto flex gap-4">
          {project.repo && (
            <motion.a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
              Code
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </motion.a>
          )}
          {project.description.split(' ').length > 15 && (
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors cursor-pointer sm:cursor-none"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
      className="text-white bg-gradient-to-b from-[#1c294c] to-[#0f172b] w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16"
          variants={titleVariants}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold text-center cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-purple-300"
            whileHover={{ scale: 1.05 }}
          >
            Featured Projects
          </motion.h1>
        </motion.div>

        {/* Mobile/small screens (horizontal scroll) */}
        <motion.div 
          className="md:hidden flex flex-nowrap overflow-x-auto gap-6 sm:snap-x sm:snap-mandatory px-4 scrollbar-thin scrollbar-thumb-blue-900 pb-4 sm:scroll-smooth"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-[85vw] flex-shrink-0 snap-center">
              <ProjectCard 
                project={project} 
                index={index} 
                setSelectedProject={setSelectedProject}
              />
            </div>
          ))}
        </motion.div>

        {/* Medium+ screens (grid layout) */}
        <motion.div 
          className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.div>
  );
};

export default Projects;