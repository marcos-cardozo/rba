import React from "react";
import NavBar from "../components/navbar/NavBar";
import MainTitle from "@/components/mainTitle/MainTitle";
import FrustrationSection from "@/components/FrustrationSection/FrustrationSection";
import Button from "@/components/Button/Button";
import BenefitsSection from "@/components/BenefitsSection/BenefitsSection";
import "./globals.css";
import AnimatedDivider from "@/components/AnimatedDivider/AnimatedDivider";

export default function Home() {
  return (
    <main>
      <NavBar />
      <MainTitle />
      <div className="h-full flex justify-center">
        <Button size="big">Únete ya</Button>
      </div>
      <AnimatedDivider />
      <FrustrationSection />
      <AnimatedDivider />
      <BenefitsSection />
      <AnimatedDivider />
    </main>
  );
}
