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
          className="h-8 w-8 sm:h-12 sm:w-12 md:h-20 md:w-20 lg:h-30 lg:w-30"
        />
      </div>

      <div className="border-hohc-blue-500 flex flex-col gap-2 rounded-lg sm:gap-3">
        <div className="pl-1 text-base font-medium sm:text-xl md:text-2xl lg:text-4xl">
          {title}
        </div>
        <div className="pl-2 text-base break-all underline sm:text-lg md:text-xl lg:text-3xl">
          {link}
        </div>
      </div>
    </div>
  );
};

export default Social;
