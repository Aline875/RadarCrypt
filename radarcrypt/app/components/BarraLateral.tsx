"use client"
import { FC, useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";

const BarraLateral: FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-10">
        <div className="text-xl font-bold flex items-center space-x-3">
          <Link href="/" className="text-gray-800 flex items-center">
            <img 
              src="Logo.svg" 
              alt="Logo do RadarCrypt"
              className="h-10" 
            />
            <span className="ml-2 text-font-color dark:text-dark-font">RadarCrypt</span>
          </Link>
        </div>
      <div className="flex items-center justify-between p-4">
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800 dark:text-gray-300" />}
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="text-font-color dark:text-dark-font">Dashboard</Link>
          </li>
          <li>
            <Link href="/about" className="text-font-color dark:text-dark-font">Produtos</Link>
          </li>
          <li>
            <Link href="/contact" className="text-font-color dark:text-dark-font">Estátisticas</Link>
          </li>
          <li>
            <Link href="/contact" className="text-font-color dark:text-dark-font">Transações</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default BarraLateral;
