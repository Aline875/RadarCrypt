import { FC } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Header: FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-64 right-0 z-20 h-16">
      <div className="flex items-center justify-between p-4 max-w-screen-lg mx-auto h-full">
        <div className="relative flex-1 max-w-md mx-4">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black dark:text-gray-400" />
          <input
            type="search"
            name="pesquisa-nav"
            id="pesquisa-nav"
            placeholder="Pesquisa"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
          />
        </div>

        <nav className="flex space-x-4">
          <Link href="/" className="text-font-color hover:text-custom-gray dark:text-gray-300 dark:hover:text-gray-100">
            Home
          </Link>
          <Link href="/about" className="text-font-color hover:text-custom-gray dark:text-gray-300 dark:hover:text-gray-100">
            Sobre nós
          </Link>
          <Link href="/contact" className="text-font-color hover:text-custom-gray dark:text-gray-300 dark:hover:text-gray-100">
            Contato
          </Link>
          <Link href="/" className="text-font-color hover:text-custom-button dark:text-gray-300 dark:hover:text-custom-button">
            Log in
          </Link>
          <Link href="/" className="text-font-color hover:text-custom-button dark:text-gray-300 dark:hover:text-custom-button">
            Log Out
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
