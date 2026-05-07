import HOHCLogo from "@/public/Logo-black.svg";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const followUs = () => {
  return (
    <div>
      <div className="mb-60 flex items-center justify-center gap-48">
        <div className="border-hohc-blue-700 inline-flex rounded-full border-8 p-4 shadow-2xl">
          <Image
            src={HOHCLogo}
            alt="HOHC Logo"
            className="size-112 object-cover"
          />
        </div>
        <div className="text-font-hohc-kanit flex flex-col items-center">
          <p className="text-hohc-blue-600 mb-12 text-7xl font-bold">
            Follow Us
          </p>
          <p className="text-hohc-blue-300 mb-8 text-5xl font-bold">
            @handsonhealthcare_ucr
          </p>
          <Link href="https://www.instagram.com/handsonhealthcare_ucr/">
            <p className="bg-hohc-blue-800 gap-2 rounded-4xl px-6 py-4 text-4xl font-medium text-white drop-shadow-[16px_10px_6px_gray]">
              <FaInstagram className="mr-3 inline-block text-7xl" />
              Follow here
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default followUs;
