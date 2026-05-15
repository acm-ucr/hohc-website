import Image from "next/image";
import Card from "@/public/Event-Card.svg";

interface EventProps {
  title: string;
  date: string;
  location: string;
  description: string;
}

const Event = (props: EventProps) => {
  return (
    <div className="relative w-1/5">
      <Image
        src={Card}
        alt="Event Card"
        width={32}
        height={32}
        className="h-full w-full"
      />

      <div className="font-hohc-kanit absolute top-0 left-0 flex w-full flex-col gap-2 p-6">
        <h2 className="text-hohc-blue-700/75 text-4xl">{props.title}</h2>
        <p className="text-hohc-blue-500 text-base">{props.date}</p>
        <p className="text-hohc-blue-500 text-base">{props.location}</p>
        <p className="text-hohc-blue-500 text-base">{props.description}</p>
      </div>
    </div>
  );
};

export default Event;
