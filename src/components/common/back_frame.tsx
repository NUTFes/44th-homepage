import { ReactNode } from "react";

interface ContentsProps {
  children: ReactNode;
}

export default function BackFrame({ children }: ContentsProps) {
  return (
    <div className="flex justify-center">
      <div className=" w-2/5 min-w-[450px] max-md:w-screen mb-8 ">
      <div className="bg-gradient-to-t from-white_back h-1" />
        <div className="bg-white_back flex flex-col pr-4 pl-4">{children}</div>
        <div className="bg-gradient-to-b from-white_back h-1" />
      </div>
    </div>
  );
}
