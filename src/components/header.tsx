import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  icon1: StaticImageData;
  icon2: StaticImageData;
  title: string;
  subtitle?: string;
}

const Header = ({ icon1, icon2, title, subtitle }: HeaderProps) => {
  const textSize = subtitle ? "text-2xl sm:text-4xl md:text-6xl mt-4 " : "text-3xl sm:text-5xl md:text-7xl";
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 p-4 sm:p-6 md:p-8">
      <Image src={icon1} alt={title} className="size-15 sm:size-20 md:size-30" />

      <div className="font-hohc-kanit flex flex-col items-center gap-1 md:gap-2">
        <p className={`${textSize} text-hohc-blue-600 font-bold`}>{title}</p>
        <p className={`text-hohc-blue-400 ${textSize}`}>{subtitle}</p>
      </div>

      <Image src={icon2} alt={title} className="size-15 sm:size-20 md:size-30" />
    </div>
  );
};

export default Header;
