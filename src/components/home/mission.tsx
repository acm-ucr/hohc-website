import StarBackground from "@/public/star-background.svg";
import StarBackground2 from "@/public/star-background-2.svg";
import Image from "next/image";
import Header from "@/components/header";
import CrossIcon from "@/public/cross-icon.svg";
import PillIcon from "@/public/pill-icon.svg";

const Mission = () => {
  return (
    <div className="flex h-100 flex-col">
      <Header icon1={CrossIcon} icon2={PillIcon} title="Our Mission" />

      <div className="relative">
        <Image
          src={StarBackground}
          alt=""
          className="-translate-x--1/3 absolute top-0 left-0 w-1/3 -translate-y-1/4 opacity-80 sm:w-1/2 sm:-translate-y-1/8 md:w-1/3 md:-translate-y-1/4"
        />
        <Image
          src={StarBackground2}
          alt=""
          className="absolute top-0 right-0 w-1/3 translate-y-1/3 sm:w-1/2 sm:translate-y-2/3 md:w-1/3 md:translate-y-1/3"
        />
      </div>
      <div className="flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="flex w-6/7 flex-col items-center p-2 px-8 py-4 text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
          To connect UCR undergraduate students interested in the healthcare
          field to various hands-on opportunities and help them explore
          different careers within healthcare!
        </div>
      </div>
    </div>
  );
};

export default Mission;
