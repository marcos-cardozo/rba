import { NavBarItems } from "@/data/NavBar";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="w-full bg-[#ED61A5] shadow-md">
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

          {/* Botón derecho */}
          <div className="h-full flex items-center pr-16 !mr-16">
            <button className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 text-purple-900 font-bold italic uppercase text-2xl !px-10 !py-3 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,255,0,0.6)] cursor-pointer">
              Únete ya
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
