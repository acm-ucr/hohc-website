import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  link: string;
  icon: StaticImageData;
}

const Social = ({ title, link, icon }: Props) => {
  return (
    <div className="flex flex-row">
      <div className="bg-hohc-blue-500 flex h-10 w-10 items-center justify-center self-center rounded-full">
        <Image src={icon} alt={title} width={25} height={25} />
      </div>

      <div className="border-hohc-blue-500 flex flex-col rounded-lg">
        <div className="pl-1 font-semibold">{title}</div>
        <div className="pl-2 text-sm underline">{link}</div>
      </div>
    </div>
  );
};

export default Social;
