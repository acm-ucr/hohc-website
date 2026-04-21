import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  icon1: StaticImageData;
  icon2: StaticImageData;
  title: string;
  subtitle?: string;
}

const Header = ({ icon1, icon2, title, subtitle }: HeaderProps) => {
  const textSize = subtitle ? "text-6xl mt-4 " : "text-7xl";
  return (
    <div className="flex items-center justify-center gap-3 p-8">
      <Image src={icon1} alt={title} className="size-30" />

      <div className="font-hohc-kanit flex flex-col items-center gap-2">
        <p className={`${textSize} text-hohc-blue-600 font-bold`}>{title}</p>
        <p className="text-hohc-blue-400 text-4xl">{subtitle}</p>
      </div>

      <Image src={icon2} alt={title} className="size-30" />
    </div>
  );
};

export default Header;
