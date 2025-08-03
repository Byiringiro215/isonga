'use client'
import React from "react";
import { Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { images } from "@/assets/images";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="bg-[#007bff] h-20 flex items-center justify-between relative">
      {/* Left Side: Logo */}
      <div className="text-white font-bold text-3xl flex items-center ml-6 gap-2 leading-none">
        <img src={images.logo} alt="logo" className="h-12" />
        <span>ISONGA</span>
      </div>

      {/* Right Side: White Navbar inside blue */}
      <div className="relative h-full top-4 w-4/5 flex items-center justify-between ml-auto">
        {/* Slanted Left Edge */}
        <div className="absolute -left-6 top-2 h-16 w-10 bg-white transform -skew-x-[25deg] rounded-bl-xl" />

        {/* Actual White Navbar Content */}
        <div className="bg-white top-0 w-full h-16 flex items-center justify-between px-8 overflow-hidden rounded-tr-xl">
          {/* Nav Links */}
          <div className="flex gap-6 ml-12 space-x-4 text-sm text-gray-600 items-center pl-6">
            {[
              { name: "Home", path: "/" },
              // { name: "Category", path: "#category" },
              { name: "Trending News", path: "/news" },
              { name: "Gallery", path: "/gallery" },
              { name: "Past Events", path: "/events" },
              { name: "Bootcamp", path: "/bootcamps" },
              { name: "About us", path: "/aboutus" },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`hover:text-gray-800 transition-colors whitespace-nowrap ${
                  isActive(link.path)
                    ? "font-semibold text-black border-b-2 border-blue-500"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Moon Icon */}
          <button className="text-gray-600 hover:text-gray-800 mr-6">
            <Moon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;