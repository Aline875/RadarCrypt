"use client";

import { FC } from "react";
import { Input } from "@/components/ui/input";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from 'next/image'
import Link from 'next/link';

const Header: FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-20 h-16 bg-white shadow-md dark:bg-gray-700">
      <div className="flex items-center justify-between h-full px-4 bg-white dark:bg-slate-700">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-2 text-slate-800 dark:text-white">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink className="flex items-center space-x-2">
                  <Image
                    src="/logo.svg"
                    alt="Logo do RadarCrypt"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                  <span className="font-bold text-lg dark:text-white">RadarCrypt</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <div className="hidden md:flex items-center space-x-4 m-4">
              <NavigationMenuItem>
                <Input placeholder="Pesquisa" className="ml-4" />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className="m-4 dark:text-white">Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" passHref>
                  <NavigationMenuLink className="dark:text-white">Sobre nós</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" passHref>
                  <NavigationMenuLink className="dark:text-white">Contato</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/login" passHref>
                  <NavigationMenuLink className="hover:text-indigo-700 dark:hover:text-indigo-400">
                    Log In
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/logout" passHref>
                  <NavigationMenuLink className="hover:text-indigo-700 dark:hover:text-indigo-400">
                    Log Out
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
