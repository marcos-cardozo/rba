"use client";

import React from "react";
import "./BenefitsSection.css";
import BenefitCard from "./BenefitCard/BenefitCard";
import { benefits } from "./benefits";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="text-center space-y-2 !mt-40">
        <motion.h2
          className="!text-8xl !md:text-5xl font-racing !italic !uppercase bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Rocket Boost Academy
        </motion.h2>

        <motion.p
          className="!text-7xl md:text-4xl font-racing uppercase text-pink-400"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Te ayuda con{" "}
          <span className="relative underline-gradient bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
            todo
          </span>{" "}
          eso
        </motion.p>
      </div>
<div className="flex justify-center items-center">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 !max-w-6xl mx-auto !mb-20 !mt-20">
        {benefits.map((b, index) => (
          <BenefitCard
            key={index}
            title={b.title}
            subtitle={b.subtitle}
            borderColorFrom={b.colors[0]}
            borderColorTo={b.colors[1]}
          />
        ))}
      </div>
</div>
    </section>
  );
};

export default BenefitsSection;
