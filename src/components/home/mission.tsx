import Header from "@/components/header";
import CrossIcon from "@/public/cross-icon.svg";
import PillIcon from "@/public/pill-icon.svg";
import StarBackground from "@/public/star-background.svg";
import StarBackground2 from "@/public/star-background-2.svg";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="flex flex-col">
      <Header icon1={CrossIcon} icon2={PillIcon} title="Our Mission" />

      <div className="flex items-center py-16">
        <Image
          src={StarBackground}
          alt="Star Background"
          className="absolute w-90 opacity-80"
        />

        <div className="flex flex-col items-center p-2 px-8 py-4 text-center text-2xl font-semibold">
          To connect UCR undergraduate students interested in the healthcare
          field to various hands-on opportunities and help them explore
          different careers within healthcare!
        </div>

        <Image
          src={StarBackground2}
          alt="Star Background"
          className="absolute right-0 w-90"
        />
      </div>
    </div>
  );
};

export default Mission;
