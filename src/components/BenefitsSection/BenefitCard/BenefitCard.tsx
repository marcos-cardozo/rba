import React from "react";

interface BenefitCardProps {
  title: string;
  subtitle: string;
  borderColorFrom: string;
  borderColorTo: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  subtitle,
  borderColorFrom,
  borderColorTo,
}) => {
  return (
    <div
      className="!p-[2px] !rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
      style={{
        background: `linear-gradient(to right, ${borderColorFrom}, ${borderColorTo})`,
      }}
    >
      <div className="bg-[#1f005c] rounded-xl !p-10 text-center text-white !shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <h3 className="!text-lg font-fira !font-bold !mb-2">{title}</h3>
        <p className="!text-sm font-normal">{subtitle}</p>
      </div>
    </div>
  );
};

export default BenefitCard;