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
          alt="Star Background"
          className="-translate-x--1/3 absolute top-0 left-0 w-[520px] -translate-y-1/4 opacity-80"
        />
        <Image
          src={StarBackground2}
          alt="Star Background"
          className="absolute top-0 right-0 w-[520px] translate-y-1/3"
        />
      </div>
      <div className="flex items-center justify-center py-16">
        <div className="flex w-6/7 flex-col items-center p-2 px-8 py-4 text-center text-4xl font-semibold">
          To connect UCR undergraduate students interested in the healthcare
          field to various hands-on opportunities and help them explore
          different careers within healthcare!
        </div>
      </div>
    </div>
  );
};

export default Mission;
