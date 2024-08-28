"use client"
import { FC, useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";

const Sidebar: FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Verifica o modo preferido do usuário
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
    <aside className="fixed top-0 left-0 h-full w-64 bg-custom-light dark:bg-dark-background shadow-lg">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-font-color dark:text-dark-font">Sidebar</h1>
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800 dark:text-gray-300" />}
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="text-font-color dark:text-dark-font">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-font-color dark:text-dark-font">Sobre nós</Link>
          </li>
          <li>
            <Link href="/contact" className="text-font-color dark:text-dark-font">Contato</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
