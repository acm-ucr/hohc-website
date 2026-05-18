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
      <div className="flex flex-col gap-10 pt-10 pb-30">
        {(board as BoardSection[]).map(({ title, members }, index) => (
          <div key={title ?? index} className="flex flex-col gap-12">
            {title && (
              <p className="font-hohc-kanit text-hohc-blue-300 text-center text-6xl font-bold">
                {title}
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-24">
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
