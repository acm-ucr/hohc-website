import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-hohc-blue-700 border-hohc-blue-600 relative border-t-[4px] px-5 py-3">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="HOHC Logo"
            width={32}
            height={32}
            className="h-full w-full"
            priority
          />
        </Link>
        <span className="text-3xl text-white">HOHC</span>
      </div>
      <p className="text-lg text-white">Hands on Health Care</p>
      <p className="text-lg text-white">At UCR</p>

      <div className="absolute right-5 bottom-3">
        <Link
          href={"https://www.instagram.com/handsonhealthcare_ucr"}
          target="_blank"
        >
          <FaInstagram className="h-14 w-14 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
