import FollowUs from "./followUs";
import Socials from "./socials";
import StarBack from "@/public/home/streamline-color_star-1-flat.svg";
import StarBack1 from "@/public/home/StarBack1.svg";
import StarBack2 from "@/public/home/Starback2.svg";
import Image from "next/image";

const JoinWidget = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
      <div className="relative">
        <Image
          src={StarBack}
          alt=""
          className="absolute top-0 right-0 w-1/4 opacity-80 sm:w-1/3"
        />
        <Image
          src={StarBack1}
          alt=""
          className="absolute top-1/3 left-0 w-1/4 translate-y-4/5 opacity-80 sm:w-1/3"
        />
      </div>
      <div className="bg-hohc-blue-50 rounded-3xl p-5 sm:p-8 md:p-10">
        <h2 className="text-hohc-blue-700 text-font-hohc-kanit mb-4 text-center text-2xl font-bold sm:mb-6 sm:text-3xl md:mb-8 md:text-left md:text-5xl lg:text-7xl">
          How to Join
        </h2>
        <Socials />
      </div>
      <div className="relative">
        <Image
          src={StarBack2}
          alt=""
          className="absolute right-1/5 bottom-0 w-1/4 opacity-80 sm:w-1/3"
        />
        <FollowUs />
      </div>
    </div>
  );
};

export default JoinWidget;
