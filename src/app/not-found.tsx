import Link from "next/link";
import Image from "next/image";
import Star from "@/public/Star Icon.svg";

const NotFound = () => {
  return (
    <div className="bg-hohc-yellow-100 relative h-screen w-full">
      <div className="absolute top-10 left-130 h-full w-full scale-150 rotate-4 opacity-5">
        <Image src={Star} alt="" fill className="object-contain" priority />
      </div>

      <div className="relative z-10 flex translate-y-1 flex-col items-center">
        <p className="text-huge font-hohc-kanit top-20">404</p>
        <p className="font-hohc-kanit mb-5 translate-x-5 text-7xl">
          Oops! The page you were <br className="mb-5" />
          looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="bg-hohc-blue-500 mt-10 rounded-4xl px-20 py-10 text-4xl text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
        >
          Back to Home
        </Link>
      </div>

      <div className="absolute right-120 -bottom-60 h-full w-full scale-150 -rotate-20 opacity-5">
        <Image src={Star} alt="" fill className="object-contain" priority />
      </div>
    </div>
  );
};

export default NotFound;
