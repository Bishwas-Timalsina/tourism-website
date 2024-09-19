"use client";
import { Collapse } from "antd";
import React from "react";

const TrekkingItenerary = () => {
  const { Panel } = Collapse;
  const itineraryList = [
    {
      title:
        "Day1 : kathmandu to Pokhara (By flight or Bus), the city of Lakes, adventures and serenity.",
      description:
        "Arrive at Tribhuwan International Airport, Kathmandu, you are welcomed by the team and then you will be transferred to your hotel. This trail goes through Ghorepani Poon Hill. Normally, the trek starts like Pokhara to Nayapul and ends like Phedi to Pokhara. While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible. The evolution of technology in such diverse fields as horse tack and bullet trains has contributed to this trend.",
    },
    {
      title: "Day 2 : Drive to Nayapul and trek to Ulleri",
      description:
        "While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible. The evolution of technology in such diverse fields as horse tack and bullet trains has contributed to this trend.",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <div className="lg:text-[25px] text-[20px] font-semibold ">Itinerary</div>
      <div>
        <Collapse accordion>
          {itineraryList?.map((data: any, index: number) => (
            <Panel
              header={<div className="text-[16px]">{data.title}</div>}
              key={index}
            >
              <div
                className="text-[14px] font-semibold"
                dangerouslySetInnerHTML={{
                  __html: data?.description,
                }}
              ></div>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default TrekkingItenerary;
