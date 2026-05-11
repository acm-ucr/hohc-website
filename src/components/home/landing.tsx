import Image from "next/image";
import LandingImage from "@/public/home/landing-image.webp";

const Landing = () => {
  return (
    <div>
      <div className="relative flex w-full justify-center">
        <Image
          src={LandingImage}
          alt="HOHC Landing Image"
          className="h-auto w-full object-cover"
        />
        <div className="absolute inset-0 h-1/2 bg-gradient-to-b from-white to-transparent" />
        <p className="text-hohc-blue-700 font-hohc-kanit absolute text-center top-16 text-4xl md:top-20 md:text-6xl xl:top-24 xl:text-8xl font-bold whitespace-nowrap drop-shadow-[2px_4px_2px_rgba(255,255,255,0.8)]">
          Hands on Health Care
        </p>
      </div>
    </div>
  );
};

export default Landing;
