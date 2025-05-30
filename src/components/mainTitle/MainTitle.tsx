"use client";

import { motion } from "framer-motion";
import React from "react";

const MainTitle = () => {
  const benefits = [
    "Sin dedicarle miles de horas",
    "Sin compañeros que te arruinen las partidas", 
    "Sin quedarte estancado en un rango"
  ];

  return (
    <motion.div 
      className="!min-h-screen flex flex-col justify-center items-center text-center !px-4 !pt-32 !pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Contenedor principal */}
      <div className="!max-w-3xl !mx-auto">
        {/* Título principal */}
        <motion.h1
          className="!text-5xl md:!text-6xl !font-bold !mb-8 font-racing !glitch-effect"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              type: "spring",
              damping: 10,
              stiffness: 100,
              delay: 0.2
            }
          }}
        >
          <span className="!block !text-transparent !bg-clip-text !bg-gradient-to-r from-[#FBF5FE] via-[#DBA0F0] to-[#DB8DF7]">
            LA ACADEMIA DONDE
          </span>
          <motion.span 
            className="!block !text-transparent !bg-clip-text !bg-gradient-to-r from-[#DB8DF7] via-[#DBA0F0] to-[#FBF5FE] !font-bold"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            MEJORAR ES INEVITABLE
          </motion.span>
        </motion.h1>

        {/* Línea divisora */}
        <motion.div
          className="!w-3/4 !h-px !mx-auto !my-8 !bg-gradient-to-r from-transparent via-[#DBA0F0] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Lista de beneficios compacta */}
        <motion.ul 
          className="!flex !flex-row !justify-center !items-center !gap-15 !text-white !text-base md:!text-lg !whitespace-nowrap !px-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.7
              }
            }
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className="!flex !items-center !gap-3"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 12
                  }
                }
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className={`!w-2 !h-2 !rounded-sm ${
                  index === 0 ? '!bg-yellow-400' : 
                  index === 1 ? '!bg-pink-400' : '!bg-purple-400'
                }`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Efecto de partículas sutiles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="!absolute !rounded-full !bg-[#DBA0F0] !opacity-10 !pointer-events-none"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 40],
            x: [0, (Math.random() - 0.5) * 20],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default MainTitle;