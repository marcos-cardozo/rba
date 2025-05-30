/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

interface BenefitCardProps {
  title: string;
  subtitle: string;
  borderColorFrom: string;
  borderColorTo: string;
}

export default function BenefitCard({
  title,
  subtitle,
  borderColorFrom,
  borderColorTo,
}: BenefitCardProps) {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative w-full">
      {/* Fondo con íconos personalizados */}
      <Particles
        id="tsparticles-icons"
        init={particlesInit}
        className="!absolute !inset-0 !z-0"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 8 },
            move: { enable: true, speed: 0.5 },
            size: { value: 18 },
            opacity: { value: 0.2 },
            shape: {
              type: "image",
              image: [
                {
                  src: "/icons/rocket.svg",
                  width: 32,
                  height: 32,
                },
                {
                  src: "/icons/star.svg",
                  width: 24,
                  height: 24,
                },
                {
                  src: "/icons/bolt.svg",
                  width: 24,
                  height: 24,
                },
              ],
            },
          },
        }}
      />

      <motion.div
        className="!relative !z-10 !p-[2px] !rounded-xl !transition-transform !duration-500 !ease-in-out hover:!scale-105 hover:!rotate-2"
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
          className="!rounded-xl !p-8 !text-center !shadow-xl hover:!shadow-2xl !transition-shadow !duration-300 !ease-in-out !backdrop-blur-md !bg-white/80 !border !border-black/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h3
            className="!text-lg !font-sans !font-bold !mb-2 !text-black !flex !items-center !justify-center !gap-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FaCheckCircle className="!text-black !animate-pulse" />
            {title}
          </motion.h3>

          <motion.p
            className="!text-sm !font-sans !font-medium !text-black/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
