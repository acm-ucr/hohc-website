import Image, { StaticImageData } from "next/image";

interface SocialProps {
  title: string;
  link: string;
  icon: StaticImageData;
}

const Social = ({ title, link, icon }: SocialProps) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <div className="flex items-center justify-center self-center rounded-full">
        <Image src={icon} alt={title} />
      </div>

      <div className="border-hohc-blue-500 flex flex-col gap-3 rounded-lg">
        <div className="pl-1 text-4xl font-medium">{title}</div>
        <div className="pl-2 text-3xl underline">{link}</div>
      </div>
    </div>
  );
};

export default Social;
