"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AnimatedDivider = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPositionX: ["0%", "100%", "200%"],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="!w-3/4 !h-1 !my-10 !rounded-full !mx-auto"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, transparent 0%, transparent 10%, #DBA0F0 10%, #DBA0F0 30%, transparent 30%)",
        backgroundSize: "200% 100%",
      }}
      animate={controls}
    />
  );
};

export default AnimatedDivider;
