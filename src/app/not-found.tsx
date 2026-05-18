import Link from "next/link";
import Image from "next/image";
import Star1 from "@/public/star-icon.svg";
import Star2 from "@/public/star-icon.svg";

const NotFound = () => {
  return (
    <div className="bg-hohc-yellow-200 relative h-screen w-full overflow-hidden">
      <div className="absolute bottom-30 left-10 md:right-20 md:bottom-100 md:left-auto lg:right-50 lg:bottom-80">
        <Image
          src={Star1}
          alt="Star"
          className="h-full w-full scale-200 -rotate-25 object-contain opacity-5 transition-transform md:scale-400 md:rotate-2 lg:scale-800 lg:rotate-4"
        />
      </div>
      <div className="absolute -top-10 right-30 md:hidden">
        <Image
          src={Star2}
          alt="Star"
          className="h-full w-full scale-200 -rotate-3 object-contain opacity-5 transition-transform"
        />
      </div>
      <div className="absolute top-20 -right-20 md:hidden">
        <Image
          src={Star1}
          alt="Star"
          className="h-full w-full scale-200 rotate-7 object-contain opacity-5 transition-transform"
        />
      </div>
      <div className="absolute top-35 -left-10 md:hidden">
        <Image
          src={Star2}
          alt="Star"
          className="h-full w-full scale-200 rotate-50 object-contain opacity-5 transition-transform"
        />
      </div>
      <div className="absolute top-1/2 -right-10 md:hidden">
        <Image
          src={Star1}
          alt="Star"
          className="h-full w-full scale-200 -rotate-7 object-contain opacity-5 transition-transform"
        />
      </div>
      <div className="absolute -bottom-15 -left-1 md:hidden">
        <Image
          src={Star2}
          alt="Star"
          className="h-full w-full scale-200 -rotate-5 object-contain opacity-5 transition-transform"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 md:mt-4 md:h-auto md:translate-x-3 md:translate-y-1 md:justify-start md:px-10 lg:mt-6 lg:translate-x-5 lg:px-0">
        <p className="font-hohc-kanit lg:text-huge text-center text-8xl leading-tight md:text-9xl">
          404
        </p>
        <p className="font-hohc-kanit mb-5 w-11/12 text-center text-4xl leading-normal md:w-4/5 md:text-5xl lg:w-3/5 lg:text-7xl">
          Oops! The page you were looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="bg-hohc-blue-500 mt-4 rounded-2xl px-12 py-3 text-center text-xl text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl md:rounded-3xl md:px-16 md:py-6 md:text-3xl lg:rounded-4xl lg:px-20 lg:py-10 lg:text-4xl"
        >
          Back to Home
        </Link>
      </div>
      <div className="absolute -right-3 bottom-3 md:right-auto md:bottom-10 md:left-20 lg:bottom-15 lg:left-50">
        <Image
          src={Star2}
          alt="Star"
          className="h-full w-full scale-200 -rotate-5 object-contain opacity-5 transition-transform md:scale-400 md:-rotate-12 lg:scale-800 lg:-rotate-20"
        />
      </div>
    </div>
  );
};

export default NotFound;
