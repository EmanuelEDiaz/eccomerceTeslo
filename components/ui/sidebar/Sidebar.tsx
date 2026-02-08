"use client";

import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { SidebarItem } from "./SidebarItem";

import { sideData } from "@/data/SidebarDataUser";
import { sideDataOptions } from "@/data/SidebarDataOption";
import { useUIStore } from "@/store";
import clsx from "clsx";

const userSidebarItems = sideData.dates;
const sidebarItems = sideDataOptions.dates;

// todo: convertir esto en un componente mas eficiente con un mapa y un enum
export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* Blackground black */}

      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
        onClick={closeMenu} 
        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />
      )}
      {/* SideMenu */}

      <nav
        
        className={
          clsx(
            "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
            {
              "translate-x-full":!isSideMenuOpen
            }
          )
        }>
        <IoCloseOutline
          size={50}
          className="absolute top-5 cursor-pointer"
          onClick={ () => closeMenu() }
        />
        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {userSidebarItems.map((item) => (
          <SidebarItem key={item.name} dataUser={item} />
        ))}

        {/* Line separator */}

        <div className="w-full h-px bg-gray-200 my-10" />

        {sidebarItems.map((item) => (
          <SidebarItem key={item.name} dataUser={item} />
        ))}
      </nav>
    </div>
  );
};
