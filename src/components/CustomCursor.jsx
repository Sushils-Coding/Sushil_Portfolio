import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

// Cursor Configuration
const CURSOR_SIZE = 20;
const CLICKABLE_SELECTORS = "button, a, [role='button'], .cursor-pointer";


const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseOver = useCallback((e) => {
    const clickable = e.target.closest(CLICKABLE_SELECTORS);
    setIsHoveringClickable(!!clickable);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [handleMouseMove, handleMouseOver]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#5a6581]"
      animate={{
        x: position.x - CURSOR_SIZE / 2,
        y: position.y - CURSOR_SIZE / 2,
        scale: isHoveringClickable ? 1.5 : 1,
        opacity: isHoveringClickable ? 0.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      style={{
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
      }}
    />
  );
};

export default CustomCursor;
