import { FC } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Header: FC = () => {
  return (
    <header className="bg-white shadow-md flex-shrink-0">
      <div className="flex items-center justify-between p-4">
        <div className="text-xl font-bold flex items-center space-x-3">
          <Link href="/" className="text-gray-800">
            <img 
              src="Logo.svg" 
              alt="Logo do RadarCrypt"
              className="h-10" />
          </Link>
          <span className="text-font-color">RadarCrypt</span>
        </div>

        <div className="relative flex-1 max-w-md mx-4">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
          <input
            type="search"
            name="pesquisa-nav"
            id="pesquisa-nav"
            placeholder="Pesquisa"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:border-black"
          />
        </div>

        <nav className="flex space-x-4">
          <Link href="/" className="text-font-color hover:text-custom-gray">
            Home
          </Link>
          <Link href="/about" className="text-font-color hover:text-custom-gray">
            Sobre nós
          </Link>
          <Link href="/contact" className="text-font-color hover:text-custom-gray">
            Contato
          </Link>
          <Link href="/" className="text-font-color hover:text-custom-button">
            Log in
          </Link>
          <Link href="/" className="text-font-color hover:text-custom-button">
            Log Out
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
