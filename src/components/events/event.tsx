import Image from "next/image";

const Event = (props: {
  title: string;
  date: string;
  location: string;
  description: string;
}) => {
  return (
    <div className="relative w-full">
      <Image
        src="/Event-Card.svg"
        alt="Event Card"
        width={32}
        height={32}
        className="h-full w-full"
      />

      <div className="font-hohc-kanit absolute top-0 left-0 flex w-full flex-col gap-2 p-6">
        <h2 className="text-hohc-blue-700 text-3xl font-bold">{props.title}</h2>
        <p className="text-hohc-blue-500 text-sm">{props.date}</p>
        <p className="text-hohc-blue-500 text-sm">{props.location}</p>
        <p className="text-hohc-blue-500 text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export default Event;
