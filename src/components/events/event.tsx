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
    <div className="relative w-full max-w-xs sm:w-4/5 sm:max-w-sm md:w-1/2 md:max-w-none">
      <Image
        src={Card}
        alt="Event Card"
        width={32}
        height={32}
        className="h-full w-full"
      />

      <div className="font-hohc-kanit absolute top-0 left-0 flex w-full flex-col gap-1 p-3 sm:gap-1.5 sm:p-4 md:gap-2 md:p-5 lg:p-6">
        <h2 className="text-hohc-blue-700/75 text-2xl sm:text-3xl lg:text-4xl">
          {props.title}
        </h2>
        <p className="text-hohc-blue-500 text-xs sm:text-sm lg:text-base">
          {props.date}
        </p>
        <p className="text-hohc-blue-500 text-xs sm:text-sm lg:text-base">
          {props.location}
        </p>
        <p className="text-hohc-blue-500 text-xs sm:text-sm lg:text-base">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Event;
