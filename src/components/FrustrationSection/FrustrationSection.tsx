"use client";

import { motion } from "framer-motion";
import FrustrationSection_2 from "./FrustationSection_2";

const FrustrationSection = () => {
  return (
    <section className="!w-full !flex !justify-center !items-center ">
      <div className="!text-center">
        <div className="!max-w-5xl !mx-auto !mt-8 font-racing ">
          <motion.h2
            className="!text-6xl !font-bold !bg-gradient-to-r from-[#FBF5FE] via-[#DBA0F0] to-[#DB8DF7] !bg-clip-text !text-transparent !font-racing"
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 70,
                damping: 12,
                mass: 0.5,
                delay: 0.2,
              },
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            ¿CANSADO DE ESTAR{" "}
            <motion.span
              className="!relative !bg-gradient-to-r from-[#DBA0F0] via-[#DB8DF7] to-[#FBF5FE] !bg-clip-text !text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              ESTANCADO
            </motion.span>
            <br />
            EN UN MISMO{" "}
            <motion.span
              className="!relative !bg-gradient-to-r from-[#DB8DF7] via-[#DBA0F0] to-[#FBF5FE] !bg-clip-text !text-transparent"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              RANGO
            </motion.span>
            ?
          </motion.h2>
        </div>
        <FrustrationSection_2 />
      </div>
    </section>
  );
};

export default FrustrationSection;