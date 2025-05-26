import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX + 3, y: e.clientY + 3 })
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    const variants = {
        animate: { x: position.x, y: position.y },
    }

    const cursors = Array.from({ length: 16 }, (_, i) => (
        <motion.div
            key={i}
            className={`fixed z-[999] rounded-full bg-black hidden md:block`}
            style={{
                height: `${20 - i}px`,
                width: `${20 - i}px`
            }}
            variants={variants}
            animate="animate"
            transition={{ duration: 0.1 + i * 0.01 }}
        />
    ));

    return (
        <>{cursors}</>
    )
}

export default Cursor