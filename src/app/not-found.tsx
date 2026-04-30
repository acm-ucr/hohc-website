import Link from "next/link";
import Image from "next/image";
import Star1 from "@/public/star-icon.svg";
import Star2 from "@/public/star-icon.svg";

const NotFound = () => {
  return (
    <div className="bg-hohc-yellow-200 relative h-screen w-full overflow-hidden">
      <div className="absolute right-50 bottom-100">
        <Image
          src={Star1}
          alt=""
          className="h-full w-full scale-850 rotate-4 object-contain opacity-5"
        />
      </div>

      <div className="relative z-10 mt-6 flex translate-x-5 translate-y-1 flex-col items-center">
        <p className="text-huge font-hohc-kanit leading-tight">404</p>
        <p className="font-hohc-kanit mb-5 w-3/5 text-center text-7xl leading-normal">
          Oops! The page you were looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="bg-hohc-blue-500 mt-4 rounded-4xl px-24 py-10 text-5xl text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
        >
          Back to Home
        </Link>
      </div>

      <div className="absolute bottom-15 left-50">
        <Image
          src={Star2}
          alt=""
          className="h-full w-full scale-850 -rotate-20 object-contain opacity-5"
        />
      </div>
    </div>
  );
};

export default NotFound;
