/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticlesIcons = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="!absolute !inset-0 !z-0"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        particles: {
          number: {
            value: 12,
            density: { enable: true, area: 800 },
          },
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
                width: 32,
                height: 32,
              },
              {
                src: "/icons/bolt.svg",
                width: 32,
                height: 32,
              },
            ],
          },
          size: {
            value: 24,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.4,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          opacity: {
            value: 0.25,
            random: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesIcons;
