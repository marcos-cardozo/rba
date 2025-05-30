"use client";

import React from "react";
import { motion } from "framer-motion";

interface BenefitCardProps {
  title: string;
  subtitle: string;
  borderColorFrom: string;
  borderColorTo: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, subtitle, borderColorFrom, borderColorTo }) => {
  return (
    <motion.div
      className="!p-[3px] !rounded-xl !transition-transform !duration-500 !ease-in-out hover:!scale-105 hover:!rotate-2"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{
        background: `linear-gradient(90deg, ${borderColorFrom}, ${borderColorTo})`,
        backgroundSize: "200% 200%",
      }}
    >
      <motion.div
        className="!rounded-xl !p-10 !text-center !text-gray-300 !shadow-lg hover:!shadow-2xl !transition-shadow !duration-300 !ease-in-out !bg-[#0E0622]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h3
          className="!text-lg !font-geistSans !font-bold !mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="!text-sm !font-geistSans !font-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default BenefitCard;