import Link from "next/link";
import Image from "next/image";
import Star from "@/public/star-icon.svg";

const NotFound = () => {
  return (
    <div className="bg-hohc-yellow-200 relative h-screen w-full overflow-hidden">
      <div className="absolute top-10 left-130 h-full w-full scale-150 rotate-4 opacity-5">
        <Image src={Star} alt="" fill className="object-contain" priority />
      </div>

      <div className="relative z-10 mt-6 flex translate-x-5 translate-y-1 flex-col items-center">
        <p className="text-huge font-hohc-kanit leading-tight">404</p>
        <p className="font-hohc-kanit mb-5 w-3/5 text-center text-7xl leading-normal">
          Oops! The page you were looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="bg-hohc-blue-500 mt-4 rounded-4xl px-20 py-10 text-4xl text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
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
