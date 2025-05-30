

import React from "react";
import NavBar from "../components/navbar/NavBar";
import MainTitle from "@/components/mainTitle/MainTitle";
import FrustrationSection from "@/components/FrustrationSection/FrustrationSection";
import Button from "@/components/Button/Button";
import BenefitsSection from "@/components/BenefitsSection/BenefitsSection";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <NavBar />
      <MainTitle />
      <div className="h-full flex justify-center">
        <Button size="big">Únete ya</Button>
      </div>
      <div className="w-3/4 h-1 mx-auto !my-10 bg-gradient-to-r from-transparent via-[#DBA0F0] to-transparent opacity-70 !m-auto"></div>
      <FrustrationSection />
      <div className="w-3/4 h-1 mx-auto !my-10 bg-gradient-to-r from-transparent via-[#DBA0F0] to-transparent opacity-70 !m-auto"></div>
      <BenefitsSection />
      <div className="w-3/4 h-1 mx-auto !my-10 bg-gradient-to-r from-transparent via-[#DBA0F0] to-transparent opacity-70 !m-auto"></div>
    </main>
  );
}
