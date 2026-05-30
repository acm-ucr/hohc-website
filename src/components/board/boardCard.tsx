import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  position: string;
  name: string;
}

const BoardCard = ({ image, position, name }: BoardCardProps) => {
  return (
    <div className="text-hohc-blue-700 font-hohc-kanit flex w-25 flex-col items-center gap-1 text-center text-sm leading-normal md:w-55 md:text-3xl">
      <p>{position}</p>
      <div className="from-hohc-blue-500 to-hohc-blue-600 rounded-full bg-gradient-to-b p-1.5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] md:p-2">
        <Image
          src={image}
          alt={name}
          className="size-22 object-cover md:size-45"
        />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default BoardCard;
