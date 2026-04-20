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
        <div className="absolute inset-0 h-1/2 bg-gradient-to-b from-white to-transparent"></div>
        <p className="text-hohc-blue-700 absolute top-24 text-center text-8xl font-bold whitespace-nowrap drop-shadow-[2px_4px_2px_rgba(255,255,255,0.8)]">
          Hands on Health Care
        </p>
      </div>
    </div>
  );
};

export default Landing;
