import { StaticImageData } from "next/image";
import BoardCard from "./boardCard";
import board from "@/data/board";
import Header from "@/components/header";
import ShieldIcon from "@/public/shield-icon.svg";
import HeartIcon from "@/public/heart-icon.svg";

interface BoardMember {
  name: string;
  position: string;
  image: StaticImageData;
}

interface BoardSection {
  title?: string;
  members: BoardMember[];
}

const Board = () => {
  return (
    <div>
      <Header
        icon1={ShieldIcon}
        icon2={HeartIcon}
        title="Meet the Board"
        subtitle="2025-2026"
      />
      <div className="flex flex-col gap-6 pt-6 pb-15 md:gap-10 md:pt-10 md:pb-30">
        {(board as BoardSection[]).map(({ title, members }, index) => (
          <div key={title ?? index} className="flex flex-col gap-6 md:gap-12">
            {title && (
              <p className="font-hohc-kanit text-hohc-blue-300 text-center text-3xl font-bold md:text-6xl">
                {title}
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 md:gap-x-24 md:gap-y-8">
              {members.map(({ name, position, image }) => (
                <BoardCard
                  key={name}
                  name={name}
                  position={position}
                  image={image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
