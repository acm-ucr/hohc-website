import HOHCLogo from "@/public/Logo-black.svg";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const FollowUs = () => {
  return (
    <div>
      <div className="mb-60 flex items-center justify-center gap-48">
        <div className="border-hohc-blue-700 inline-flex rounded-full border-8 p-4 shadow-2xl sm:translate-x-15">
          <Image
            src={HOHCLogo}
            alt="HOHC Logo"
            className="size-36 object-cover sm:size-54 md:size-72 lg:size-112"
          />
        </div>
        <div className="text-font-hohc-kanit flex flex-col items-center">
          <p className="text-hohc-blue-600 mb-12 text-3xl font-bold sm:text-5xl md:text-7xl">
            Follow Us
          </p>
          <p className="text-hohc-blue-300 mb-8 text-lg font-bold sm:text-2xl md:text-5xl">
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
