"use client";

import React from "react";
import { motion } from "framer-motion";

// Nuevas configuraciones de animación mejoradas
const cardVariants = {
  offscreen: {
    y: 80,
    opacity: 0,
    scale: 0.9,
    rotate: -2
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.8,
      delay: 0.1
    }
  }
};

const dotVariants = {
  pulse: {
    scale: [1, 1.4, 1],
    opacity: [1, 0.6, 1],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

interface FrustrationPointProps {
  title: string;
  description: string;
  highlightColor: string;
  titleColor: string;
  className?: string;
}

const FrustrationPoint: React.FC<FrustrationPointProps> = ({
  title,
  description,
  highlightColor,
  titleColor,
  className = "",
}) => {
  return (
    <motion.div
      className={`relative rounded-2xl !p-6 bg-gradient-to-br from-[#5E29A7] to-[#3A0E78] font-racing overflow-hidden ${className}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 10px 30px -5px ${highlightColor}80`,
        transition: { 
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1] 
        }
      }}
    >
      {/* Efecto de brillo al hacer hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 1,
          background: `radial-gradient(circle at center, ${highlightColor}20 0%, transparent 70%)`
        }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Borde animado */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `linear-gradient(90deg, ${highlightColor}00 0%, ${highlightColor}80 50%, ${highlightColor}00 100%)`,
          opacity: 0,
          boxShadow: `inset 0 0 10px ${highlightColor}40`
        }}
        whileHover={{
          opacity: 0.8,
          transition: { duration: 0.8 }
        }}
      />
      
      <div className="flex items-start gap-3 relative z-10">
        <motion.div
          className={`!w-4 !h-4 !mt-1 flex-shrink-0 rounded-full`}
          style={{ backgroundColor: highlightColor }}
          variants={dotVariants}
          animate="pulse"
        />
        <div>
          <motion.span 
            className={`!text-xl font-bold uppercase ${titleColor} drop-shadow-md`}
            whileHover={{ 
              x: 5,
              textShadow: `0 0 12px ${highlightColor}`,
              transition: { 
                type: "spring", 
                stiffness: 500,
                damping: 15
              }
            }}
          >
            {title}
          </motion.span>
          <motion.p 
            className="text-white !mt-3 text-opacity-90"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 0.4,
                duration: 0.6 
              }
            }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default FrustrationPoint;