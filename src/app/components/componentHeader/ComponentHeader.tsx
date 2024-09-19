"use client";

import { IComponentHeader } from "@/app/interface/interface";

const ComponentHeader = ({ data }: IComponentHeader) => {
  if (data) {
    return (
      <div className=" flex flex-col gap-2">
        <div className="lg:text-[18px]  text-primary text-[18px] font-medium italic font-cursive">
          {data?.heading?.toUpperCase()}
        </div>
        <div className="relative">
          <div className="lg:text-[38px] text-neutral text-[25px] font-semibold  ">
            {data?.subheading}
          </div>
        </div>
      </div>
    );
  }
};

export default ComponentHeader;
