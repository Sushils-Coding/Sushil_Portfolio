import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IoPersonSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { IoIosPaperPlane } from "react-icons/io";
import { FaHeadset } from "react-icons/fa6";
// import { FiCheckCircle } from "react-icons/fi";

export const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_637gbfd', 'template_8iqjl6p', form.current, {
        publicKey: "_WnfLBfun2K3Z-wPo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
          form.current.reset();
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const inputVariants = {
    initial: { borderColor: "#1e3a8a" },
    focus: {
      borderColor: "#fbbf24",
      boxShadow: "0 0 0 2px rgba(251, 191, 36, 0.3)",
      transition: { duration: 0.2 }
    },
    hover: {
      borderColor: "#3b82f6",
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    initial: { 
      background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)" 
    },
    hover: {
      background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.97,
      transition: { duration: 0.1 }
    },
    submit: {
      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      transition: { duration: 0.3 }
    }
  };

  const planeVariants = {
    initial: { x: 0 },
    hover: { 
      x: [0, 5, -3, 5, 0],
      transition: { 
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror"
      } 
    },
    submit: {
      x: [0, 200, -200, 200, 0],
      y: [0, -50, 50, -30, 0],
      rotate: [0, 20, -15, 10, 0],
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const successVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0,
      transition: { 
        ease: "easeIn",
        duration: 0.3 
      } 
    }
  };

  return (
    <motion.div
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#0f172b] to-[#1c294c] text-white flex flex-col items-center justify-start p-4 sm:p-10 w-full overflow-x-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-purple-600/20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-amber-600/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Title Section */}
      <motion.div 
        className="flex items-center gap-4 mb-8 mt-12 sm:mt-6 relative z-10"
        variants={titleVariants}
        whileHover="hover"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -5, 10, 0],
            y: [0, -5, 5, -3, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        >
          <FaHeadset className="text-4xl sm:text-5xl text-amber-300" />
        </motion.div>
        <motion.h1 
          className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-purple-300"
        >
          Get in Touch
        </motion.h1>
      </motion.div>
  
      {/* Contact Card */}
      <motion.div 
        className="w-full max-w-4xl bg-[#101d42]/90 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl shadow-lg shadow-[#854CE6]/10 p-6 sm:p-10 relative z-10"
        variants={itemVariants}
        whileHover={{ y: -5 }}
      >
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          {/* Illustration - Hidden on mobile */}
          <motion.div 
            className="hidden sm:block flex-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                type: "spring",
                stiffness: 60,
                damping: 12
              }
            }}
            viewport={{ once: false }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <motion.img 
              src="/contact.png" 
              alt="Contact illustration"
              className="w-full h-auto"
              animate={{
                y: isHovering ? [0, -10, 0] : 0
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
            />
          </motion.div>
  
          {/* Form */}
          <motion.div 
            className="flex-1 w-full"
            variants={containerVariants}
          >
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  variants={successVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="mb-6 p-4 bg-green-800/30 border border-green-500 rounded-lg flex items-center gap-3"
                >
                  {/* <FiCheckCircle className="text-2xl text-green-400" /> */}
                  <span>Message sent successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6 w-full">
              <motion.div 
                className="flex items-center border-2 border-blue-900/50 rounded-lg bg-[#1c294c]/50 p-3"
                variants={itemVariants}
                whileFocus="focus"
                whileHover="hover"
                initial="initial"
              >
                <IoPersonSharp className="text-xl mr-3 text-amber-300" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-transparent focus:outline-none placeholder-gray-400"
                  required
                />
              </motion.div>
  
              <motion.div 
                className="flex items-center border-2 border-blue-900/50 rounded-lg bg-[#1c294c]/50 p-3"
                variants={itemVariants}
                whileFocus="focus"
                whileHover="hover"
                initial="initial"
              >
                <MdMailOutline className="text-xl mr-3 text-amber-300" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent focus:outline-none placeholder-gray-400"
                  required
                />
              </motion.div>
  
              <motion.div 
                className="flex items-start border-2 border-blue-900/50 rounded-lg bg-[#1c294c]/50 p-3 min-h-[150px]"
                variants={itemVariants}
                whileFocus="focus"
                whileHover="hover"
                initial="initial"
              >
                <RiMessage2Line className="text-xl mr-3 mt-1 text-amber-300" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full bg-transparent focus:outline-none resize-none placeholder-gray-400"
                  required
                />
              </motion.div>
  
              <motion.button
                type="submit"
                className="flex items-center justify-center gap-3 text-white text-lg font-bold py-3 px-6 rounded-lg shadow-md w-full relative overflow-hidden"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                animate={isSubmitted ? "submit" : "initial"}
              >
                <span className="relative z-10">
                  {isSubmitted ? "Sent!" : "Send Message"}
                </span>
                <motion.span 
                  className="relative z-10"
                  variants={planeVariants}
                  animate={isSubmitted ? "submit" : isHovering ? "hover" : "initial"}
                >
                  <IoIosPaperPlane className="text-xl" />
                </motion.span>
                {isSubmitted && (
                  <motion.div 
                    className="absolute inset-0 bg-green-500/20"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5 }}
                  />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating success message */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 150,
                damping: 15
              }
            }}
            exit={{ 
              y: 50, 
              opacity: 0,
              transition: { 
                ease: "easeIn",
                duration: 0.3 
              } 
            }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
          >
            {/* <FiCheckCircle className="text-xl" /> */}
            <span>Your message has been sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;