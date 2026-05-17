import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-hohc-blue-700 border-hohc-blue-600 relative border-t-[6px] px-5 py-3 sm:px-5 md:px-8">
      <div className="flex items-center gap-3 sm:gap-1 md:gap-2">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="HOHC Logo"
            width={32}
            height={32}
            className="h-full w-full sm:h-12 sm:w-12 md:h-13 md:w-13"
            priority
          />
        </Link>
        <span className="text-2xl text-white sm:text-3xl">HOHC</span>
      </div>
      <p className="text-sm text-white sm:text-base md:text-lg">
        Hands on Health Care
      </p>
      <p className="text-sm text-white sm:text-base md:text-lg">At UCR</p>

      <div className="absolute right-5 bottom-3">
        <Link
          href={"https://www.instagram.com/handsonhealthcare_ucr"}
          target="_blank"
        >
          <FaInstagram className="h-10 w-10 text-white sm:h-12 sm:w-12 md:h-14 md:w-14" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
