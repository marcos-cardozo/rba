import React from "react";

interface FrustrationPointProps {
  title: string;
  description: string;
  highlightColor: string;
  titleColor: string;
  className?: string;
}

const FrustrationPoint: React.FC<FrustrationPointProps> = ({
  title,
  description,
  highlightColor,
  titleColor,
  className = "",
}) => {
  return (
    <div
      className={`rounded-2xl !p-6 bg-gradient-to-br from-[#5E29A7] to-[#3A0E78] font-racing transition-transform duration-300 hover:scale-105 hover:shadow-[#ED61A5] hover:shadow-lg ${className}`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`!w-3 !h-3 !mt-1.5 flex-shrink-0 rounded-sm ${highlightColor}`}
        ></div>
        <div>
          <span className={`!text-xl font-bold uppercase ${titleColor}`}>
            {title}
          </span>
          <p className="text-white !mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FrustrationPoint;
