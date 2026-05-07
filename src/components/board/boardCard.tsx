import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  position: string;
  name: string;
}

const BoardCard = ({ image, position, name }: BoardCardProps) => {
  return (
    <div className="text-hohc-blue-700 font-hohc-kanit flex w-55 flex-col items-center gap-1 text-center text-3xl leading-normal">
      <p>{position}</p>
      <div className="from-hohc-blue-500 to-hohc-blue-600 rounded-full bg-gradient-to-b p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
        <Image src={image} alt={name} className="size-45 object-cover" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default BoardCard;
