import React from "react";
import { FaClock } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";

const Card = ({ card_data }: any) => {
  const { image_link, country, location, person, price, rating, day } =
    card_data;

  return (
    <div>
      <div className="bg-white drop-shadow-md rounded-md">
        <img
          src={image_link}
          alt=""
          className=" h-[30vh] w-[100%] object-cover rounded-t-md"
        />
        <div className="p-4 flex flex-col gap-5">
          <div className="flex  flex-col gap-4">
            <div className="text-primary font-medium">{country}</div>
            <div className="flex flex-col gap-5">
              <div className="text-[20px] font-bold text-neutral h-[6vh]">
                {location}
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-primary" />
                    <div>{day}</div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <IoPerson className="text-primary" />
                    <div>{person}</div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-neutral">
            <div className="my-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <MdOutlineStar size={20} className="text-primary" />
                  <div>{rating}</div>
                </div>
              </div>
              <div>
                <span className="text-[14px] text-neutral">Start From </span>
                <span className="text-primary">{price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
