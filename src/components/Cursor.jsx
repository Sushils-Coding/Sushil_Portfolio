import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

// Cursor Configuration
const CURSOR_COUNT = 16;
const BASE_SIZE = 20;
const BASE_DURATION = 0.1;
const DURATION_INCREMENT = 0.01;


const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX + 3, y: e.clientY + 3 });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const variants = useMemo(
    () => ({
      animate: { x: position.x, y: position.y },
    }),
    [position.x, position.y]
  );

  const cursors = useMemo(
    () =>
      Array.from({ length: CURSOR_COUNT }, (_, i) => (
        <motion.div
          key={i}
          className="fixed z-[999] rounded-full bg-black hidden md:block"
          style={{
            height: `${BASE_SIZE - i}px`,
            width: `${BASE_SIZE - i}px`,
          }}
          variants={variants}
          animate="animate"
          transition={{ duration: BASE_DURATION + i * DURATION_INCREMENT }}
        />
      )),
    [variants]
  );

  return <>{cursors}</>;
};

export default Cursor;