import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    { label: "Main Page", href: "#" },
    { label: "Categories", href: "#" },
    { label: "All products", href: "#" },
    { label: "All sales", href: "#" },
  ];

  return (
    <header className="w-full h-32 bg-white border-b border-[#dddddd] flex items-center justify-between px-10">
      {/* Logo */}
      <div className="w-[70px] h-[70px] bg-green rounded-[35px] relative flex items-center justify-center">
        <img
          className="absolute w-9 h-9 top-[18px]"
          alt="Plant"
          src="/figmaAssets/plant.svg"
        />
        <img
          className="absolute w-9 h-[17px] top-14"
          alt="Ground"
          src="/figmaAssets/ground.svg"
        />
      </div>

      {/* Navigation */}
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex gap-8">
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                className="[font-family:'Montserrat',Helvetica] font-medium text-txtblack text-xl tracking-[0] leading-[26px]"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Shopping cart icon */}
      <div className="flex items-center justify-center">
        <ShoppingBagIcon className="w-12 h-12 text-black" />
      </div>
    </header>
  );
};
