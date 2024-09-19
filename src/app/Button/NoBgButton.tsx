import React from "react";
import { IButton } from "../interface/interface";

const NoBgButton = ({ children }: IButton) => {
  return (
    <div className="group/button hover:cursor-pointer relative inline-flex items-center justify-center overflow-hidden border-1 border-black/30  hover:border-none  rounded-full px-6 py-3 text-base font-semibold text-black transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl group-hover:bg-primary border ">
      <span className="text-lg">{children}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/30"></div>
      </div>
    </div>
  );
};

export default NoBgButton;
