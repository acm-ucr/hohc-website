import Image from "next/image";
import Board from "@/public/home/landing-image.webp";

const Description = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-3 p-3 md:flex-row md:items-start md:justify-between">
      <div className="p-3 text-base md:text-2xl lg:text-4xl">
        This program gives students hands-on experience in clinical settings,
        including taking vital signs, interacting with patients, and working
        with EHR systems. By building these practical skills, students are
        better prepared for future roles in healthcare and can make the most of
        volunteer opportunities as they continue their journey toward medical
        school.
      </div>
      <Image src={Board} alt="Board" className="h-auto w-1/2" />
    </div>
  );
};

export default Description;
