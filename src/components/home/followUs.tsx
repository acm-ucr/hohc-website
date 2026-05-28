import HOHCLogo from "@/public/Logo-black.svg";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const FollowUs = () => {
  return (
    <div>
      <div className="mb-20 flex items-center justify-center gap-8 sm:mb-32 sm:gap-30 md:mb-48 md:gap-32 lg:mb-60 lg:gap-48">
        <div className="border-hohc-blue-700 inline-flex rounded-full border-4 p-2 shadow-2xl sm:border-6 md:border-8 sm:p-3 md:p-4 sm:translate-x-15">
          <Image
            src={HOHCLogo}
            alt="HOHC Logo"
            className="size-24 object-cover sm:size-40 md:size-60 lg:size-80"
          />
        </div>
        <div className="text-font-hohc-kanit flex flex-col items-center">
          <p className="text-hohc-blue-600 mb-6 text-xl font-bold sm:mb-8 md:mb-10 lg:mb-12 sm:text-3xl md:text-5xl lg:text-7xl">
            Follow Us
          </p>
          <p className="text-hohc-blue-300 mb-4 sm:mb-6 md:mb-7 lg:mb-8 font-bold text-sm sm:text-lg md:text-3xl lg:text-5xl hidden sm:hidden md:block">
            @handsonhealthcare_ucr
          </p>
          <Link href="https://www.instagram.com/handsonhealthcare_ucr/">
            <p className="bg-hohc-blue-800 rounded-4xl px-4 py-3 text-lg font-medium text-white sm:px-5 sm:text-2xl md:text-3xl lg:px-6 lg:py-4 lg:text-4xl">
              <FaInstagram className="mr-2 inline-block text-3xl sm:mr-3 sm:text-5xl lg:text-7xl" />
              Follow here
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
