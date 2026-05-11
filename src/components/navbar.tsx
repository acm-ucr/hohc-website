"use client";

import { useState } from "react";
import HOHCLogo from "@/public/hohc-logo.svg";
import { navbarLinks } from "@/data/navbarLinks";
import Image from "next/image";
import Link from "next/link";
import { TfiMenuAlt, TfiAngleUp } from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative z-50">
      <div className="border-hohc-blue-600 bg-hohc-blue-700 flex h-25 w-full border-b-6">
        <div className="flex w-full items-center justify-between p-4">
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu}>
              <Image src={HOHCLogo} alt="HOHC Logo" className="size-18" />
            </Link>
            <p className="font-hohc-kanit ml-5 text-4xl text-white">HOHC</p>
          </div>

          <div className="mt-1 mr-7 hidden w-full flex-row justify-end gap-7 text-2xl text-white md:flex">
            {navbarLinks.map(({ link, name }) => (
              <Link key={link} href={link}>
                {name}
              </Link>
            ))}
          </div>
          <div className="mr-2 text-3xl text-white md:hidden">
            <TfiMenuAlt
              onClick={handleClick}
              className={`cursor-pointer ${isOpen ? "hidden" : "block"}`}
            />
          </div>
        </div>
      </div>
      <div
        className={`bg-hohc-blue-700 border-hohc-blue-600 absolute top-full left-0 flex w-full flex-col items-center gap-6 shadow-lg md:hidden ${
          isOpen ? "border-b-6 py-6" : "hidden"
        }`}
      >
        {navbarLinks.map(({ link, name }) => (
          <Link
            key={link}
            href={link}
            onClick={closeMenu}
            className="text-2xl text-white"
          >
            {name}
          </Link>
        ))}
        <button
          onClick={closeMenu}
          className="mt-2 cursor-pointer text-3xl text-white"
          aria-label="Close Menu"
        >
          <TfiAngleUp />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
