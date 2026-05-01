import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  position: string;
  name: string;
}

const BoardCard = ({ image, position, name }: BoardCardProps) => {
  return (
    <div className="text-hohc-blue-700 flex w-55 flex-col items-center gap-1 text-center text-3xl leading-normal">
      <p>{position}</p>
      <Image src={image} alt={name} className="size-50" />
      <p>{name}</p>
    </div>
  );
};

export default BoardCard;
