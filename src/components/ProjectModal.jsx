import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-b from-blue-950 to-gray-800 rounded-2xl border border-blue-900 shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-blue-900/50 hover:bg-blue-800/70 transition-colors border border-blue-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 text-gray-300" />
            </motion.button>

            {project.live && (
              <link rel="preload" href={project.live} as="document" />
            )}
            <div className="aspect-video w-full">
              {project.live ? (
                <iframe
                  src={project.live}
                  title={project.title}
                  className="w-full h-full rounded-xl border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fit"
                />
              )}
            </div>

            <div className="p-6 text-gray-300">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyan-800/70 text-cyan-200 rounded-md text-sm font-medium border border-cyan-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.problem && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-amber-300 mb-2">Problem</h4>
                  <p>{project.problem}</p>
                </div>
              )}

              {project.solution && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-amber-300 mb-2">Solution</h4>
                  <p>{project.solution}</p>
                </div>
              )}

              {project.keyFeatures && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-amber-300 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.impact && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-amber-300 mb-2">Impact</h4>
                  <p>{project.impact}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-blue-900/50">
                <motion.a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  View Code
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}