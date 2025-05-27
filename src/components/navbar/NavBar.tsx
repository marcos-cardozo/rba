import { NavBarItems } from "@/data/NavBar";
import Image from "next/image";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <header className="w-full bg-[#ED61A5] shadow-md sticky top-0 z-50">
      <nav className="w-full">
        <div className="flex justify-between items-center px-16 py-4 mx-auto h-20 relative text-white font-racing">
          {/* Logo + texto */}
          <div className="flex items-center gap-3 h-full pl-16 !ml-16">
            <Image src="/logos/logo.svg" alt="logo" width={60} height={60} />
            <span className="!text-4xl font-semibold whitespace-nowrap text-gradient">
              RBA
            </span>
          </div>

          {/* Menú centrado */}
          <ul className="flex items-center justify-center gap-8 absolute left-1/2 transform -translate-x-1/2 h-full">
            {NavBarItems.map((item, index) => (
              <li
                key={index}
                className="hover-outline font-bold italic text-white cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Botón derecho usando el componente reutilizable */}
          <div className="h-full flex items-center pr-16 !mr-16">
            <Button size="lg">Únete ya</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
