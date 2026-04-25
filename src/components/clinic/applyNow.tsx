import Link from "next/link";
import Image from "next/image";
import Background from "@/public/background.svg";

const ApplyNow = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image src={Background} alt="HOHC Logo" className="absolute w-full" />
      <div className="relative z-10 mt-6 flex translate-y-50 flex-col items-center">
        <p className="font-hohc-kanit text-hohc-blue-800 mb-12 text-8xl font-extrabold">
          Apply Now
        </p>
        <p className="font-hohc-kanit mb-5 w-2/5 text-center text-5xl leading-normal">
          apply instructions here apply instructions here
        </p>
        <Link
          href="/clinics"
          className="bg-hohc-blue-800 font-hohc-kanit mt-4 w-1/4 rounded-4xl px-20 py-10 text-center text-5xl text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
        >
          Apply Here
        </Link>
      </div>
    </div>
  );
};

export default ApplyNow;
