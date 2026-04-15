import Image from "next/image";
import { HOHC_LINKS } from "../data/LinksData";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="bg-hohc-blue-600 flex h-1" />
      <div className="bg-hohc-blue-700 relative px-5 py-3">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/image 3_layerstyle.svg"
              alt="HOHC Logo"
              width={52}
              height={52}
              className="h-auto w-13"
              priority
            />
          </Link>
          <span className="text-xl text-white">HOHC</span>
        </div>
        <p className="text-md text-white/85">Hands on Health Care</p>
        <p className="text-md text-white/85">At UCR</p>

        <div className="absolute right-5 bottom-3">
          <Link href={HOHC_LINKS.instagram} target="_blank">
            <Image
              src="/Linkbox/Vector.svg"
              alt="Instagram"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
