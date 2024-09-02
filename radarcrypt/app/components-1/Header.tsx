import { FC } from "react";
import { Input } from "@/components/ui/input";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Header: FC = () =>
{
  return(
    <header className="fixed top-0 left-0 right-0 z-20 h-16 bg-white shadow-md dark:bg-gray-700">
      <div className="flex items-center justify-between h-full px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-2">
            <NavigationMenuItem>
            <NavigationMenuLink href="/" className="flex items-center space-x-2">
              <img src="Logo.svg" alt="Logo do RadarCrypt" className="h-10"/>
              <span className="font-bold text-lg">RadarCrypt</span>
            </NavigationMenuLink>
            </NavigationMenuItem>
            {/*Responsividade no desktop*/}
            <div className="hidden: md:flex items-center space-x-4 m-4">
              <NavigationMenuItem>
                <Input placeholder="Pesquisa" className="ml-4"/>
              </NavigationMenuItem>
              <NavigationMenuItem >
                <NavigationMenuLink href="/" className="m-4">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">
                  Sobre nós
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">
                  Contato
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">
                  Login
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">
                  Log Out
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header