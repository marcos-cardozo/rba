"use client";

import { useState } from "react";
import { NavBarItems } from "@/data/NavBar";
import Image from "next/image";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="!w-full !bg-[#ED61A5] !shadow-md !sticky !top-0 !z-50">
      <nav className="!container !mx-auto !flex !justify-between !items-center !py-4 !px-4 font-racing">
        {/* Logo + Nombre */}
        <div className="!flex !items-center !gap-3">
          <Image src="/logos/logo.svg" alt="logo" width={60} height={60} />
          <span className="!text-3xl md:!text-4xl !font-semibold !text-white">RBA</span>
        </div>

        {/* Menú Desktop */}
        <motion.ul
          className="!hidden md:!flex !items-center !gap-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {NavBarItems.map((item, index) => (
            <motion.li
              key={index}
              className="!relative !font-bold !italic !text-white !transition-all !duration-300 hover:!text-black !cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              {item}
              <motion.span className="!absolute !bottom-0 !left-0 !h-[3px] !w-0 !bg-black hover:!w-full !transition-all !duration-300" />
            </motion.li>
          ))}
        </motion.ul>

        {/* Botón + Menú móvil */}
        <div className="!flex !items-center !gap-4">
          <Button size="lg" onClick={() => alert("Clicked!")}>
            Únete ya
          </Button>
          <button
            className="md:!hidden !text-white !text-3xl !cursor-pointer !focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      <motion.div
        className={`!bg-[#ED61A5] md:!hidden !w-full !shadow-lg !px-4 ${
          menuOpen ? "block" : "hidden"
        }`}
        initial={{ y: -10, opacity: 0 }}
        animate={menuOpen ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        <ul className="!flex !flex-col !items-center !gap-4 !py-4">
          {NavBarItems.map((item, index) => (
            <motion.li
              key={index}
              className="!text-white !font-bold !text-lg !cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
};

export default NavBar;
