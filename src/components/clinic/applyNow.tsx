import Link from "next/link";
import Image from "next/image";
import Background from "@/public/background.svg";

const ApplyNow = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image src={Background} alt="" className="absolute w-full" />
      <div className="relative z-10 mt-6 flex translate-y-50 flex-col items-center">
        <p className="font-hohc-kanit text-hohc-blue-800 mb-12 text-6xl font-extrabold">
          Apply Now
        </p>
        <p className="font-hohc-kanit mb-5 h-1/2 w-1/3 text-center text-3xl leading-normal">
          apply instructions here apply instructions here
        </p>
        <Link
          href="/clinics"
          className="bg-hohc-blue-800 font-hohc-kanit mt-4 w-2/9 rounded-4xl px-10 py-7 text-center text-4xl text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
        >
          Apply Here
        </Link>
      </div>
    </div>
  );
};

export default ApplyNow;
