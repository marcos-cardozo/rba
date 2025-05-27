import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "big";
  // Añadido className para permitir estilos personalizados
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  size = "md",
  className = "",
  onClick,
}: ButtonProps) => {
  // Tamaños predefinidos
  const sizeClasses = {
    sm: "text-lg !px-6 !py-2",
    md: "text-xl !px-8 !py-2.5",
    lg: "text-2xl !px-10 !py-3",
    xl: "text-3xl !px-12 !py-4",
    big: "text-4xl !px-14 !py-5",
  };

  return (
    <button
      onClick={onClick}
      className={`
        bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300
        text-purple-900 font-bold italic uppercase
        rounded-full shadow-md
        transition-transform duration-300
        transform hover:scale-105
        hover:shadow-[0_0_15px_5px_rgba(255,255,0,0.6)]
        cursor-pointer font-racing
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;