import Image from 'next/image';

interface HeaderProps {
    icon1: string; icon2: string; title: string; subtitle?: string
}

const Header = ({ icon1, icon2, title, subtitle} : HeaderProps) => {
  const textSize = subtitle ? "text-6xl" : "text-7xl";
  return (
    <div className="flex items-center p-8">
      <Image src={icon1} alt={title} className="size-30" />

      <div className="flex flex-col items-center gap-1">
        <p className={`${textSize} text-hohc-blue-600 font-bold font-hohc-kanit`}>{title}</p>
        <p className="text-4xl text-hohc-blue-400 font-hohc-kanit">{subtitle}</p>
      </div>

      <Image src={icon2} alt={title} className="size-30" />
    </div>
  );
};

export default Header;
