import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });

    const detectClickable = (e) => {
      const target = e.target;
      const clickable = target.closest("button, a, [role='button'], .cursor-pointer");
      setIsHoveringClickable(!!clickable);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", detectClickable);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", detectClickable);
    };
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#5a6581]`}
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isHoveringClickable ? 1.5 : 1,
        opacity: isHoveringClickable ? 0.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      style={{
        width: 20,
        height: 20,
      }}
    />
  );
};

export default CustomCursor;
