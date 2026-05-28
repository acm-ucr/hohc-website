import Image, { StaticImageData } from "next/image";

interface SocialProps {
  title: string;
  link: string;
  icon: StaticImageData;
}

const Social = ({ title, link, icon }: SocialProps) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
      <div className="flex items-center justify-center self-center rounded-full">
        <Image
          src={icon}
          alt={title}
          className="h-10 w-10 sm:h-20 sm:w-20 md:h-30 md:w-30"
        />
      </div>

      <div className="border-hohc-blue-500 flex flex-col gap-2 rounded-lg sm:gap-3">
        <div className="pl-1 text-xl font-medium sm:text-2xl md:text-4xl">
          {title}
        </div>
        <div className="pl-2 text-lg underline sm:text-xl md:text-3xl">
          {link}
        </div>
      </div>
    </div>
  );
};

export default Social;
