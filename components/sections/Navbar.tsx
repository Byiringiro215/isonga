'use client'
import React, { useState } from "react";
import { Moon, Menu, X, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { images } from "@/assets/images";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Trending News", path: "/news" },
    { name: "Gallery", path: "/gallery" },
    { name: "Past Events", path: "/events" },
    { name: "Bootcamp", path: "/bootcamps" },
    { name: "About us", path: "/aboutus" },

  ];

  return (
    <div className="bg-[#007bff] h-16 md:h-20 flex items-center justify-between relative">
      {/* Left Side: Logo */}
      <div className="text-white font-bold text-xl md:text-3xl flex items-center ml-4 md:ml-6 gap-2 leading-none">
        <img src={images.logo} alt="logo" className="h-8 md:h-12" />
        <span className="hidden sm:inline">ISONGA</span>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white mr-4 p-2 cursor-pointer"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex relative h-full top-4 w-4/5  items-center justify-between ml-auto">
        {/* Slanted Left Edge */}
        <div className="absolute -left-6 top-3 h-16 w-10 bg-white transform -skew-x-[25deg] rounded-bl-xl" />

        {/* Actual White Navbar Content */}
        <div className="bg-white top-0 mt-2 w-full h-16 flex items-center justify-between px-4 lg:px-8 overflow-hidden rounded-tr-xl">
          {/* Nav Links */}
          <div className="flex gap-2 lg:gap-6 ml-8 lg:ml-12 space-x-2 lg:space-x-4 text-xs lg:text-sm text-gray-600 items-center pl-4 lg:pl-6">
            {navLinks.map((link) => (
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


          {/* <button className="text-red-500 hover:text-red-600 mr-4 lg:mr-6 cursor-pointer flex items-center gap-2">
            <LogOut size={18} className="lg:w-5 lg:h-5" />
            <span >Logout</span>
          </button> */}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* <div className="pt-4 border-t border-gray-200">
            <button className="text-red-500 hover:text-red-600 mr-4 lg:mr-6 cursor-pointer flex items-center gap-2">
            <LogOut size={18} className="lg:w-5 lg:h-5" />
            <span >Logout</span>
          </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;