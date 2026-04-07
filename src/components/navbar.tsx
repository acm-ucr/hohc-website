"use client";

import HOHCLogo from "@/public/hohc-logo.svg";
import { navbarLinks } from "@/components/data/navbarLinks";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex h-25 w-full border-b-6 border-[#3e6e92] bg-[#0c3374]">
      <div className="flex w-full items-center justify-between p-4">
        <Link href="/">
          <Image src={HOHCLogo} alt="HOHC Logo" className="size-18" />
        </Link>
        <div className="ml-5 font-sans text-4xl font-semibold text-white">
          HOHC
        </div>
        <div className="mt-1 mr-7 flex w-full flex-row justify-end gap-7 text-2xl font-semibold text-white">
          {navbarLinks.map(({ link, name }) => (
            <div key={link}>
              <Link href={link}>{name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
