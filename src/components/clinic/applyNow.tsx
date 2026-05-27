import Link from "next/link";
import Image from "next/image";
import Background from "@/public/background.svg";

const ApplyNow = () => {
  return (
    <div className="relative w-full overflow-hidden pb-13 md:pb-18 lg:pb-32">
      <Image
        src={Background}
        alt=""
        className="absolute -bottom-9 h-auto w-full md:-bottom-40 lg:top-0"
      />
      <div className="relative z-10 mt-16 flex flex-col items-center px-4 md:mt-24 lg:mt-32">
        <p className="font-hohc-kanit text-hohc-blue-800 mb-2 text-center text-3xl font-black md:mb-12 md:text-5xl lg:text-6xl">
          Apply Now
        </p>
        <p className="font-hohc-kanit mb-2 w-48 text-center text-base leading-normal md:mb-5 md:w-80 md:text-xl lg:h-1/2 lg:w-1/3 lg:text-3xl">
          apply instructions here apply instructions here
        </p>
        <Link
          href="/clinics"
          className="bg-hohc-blue-800 font-hohc-kanit mt-2 w-fit rounded-xl px-6 py-3 text-center text-xl text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl md:mt-4 md:rounded-3xl md:px-10 md:py-5 md:text-3xl lg:rounded-4xl lg:px-14 lg:py-7 lg:text-4xl"
        >
          Apply Here
        </Link>
      </div>
    </div>
  );
};

export default ApplyNow;
