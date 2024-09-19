import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const TrekkingCostExcluded = () => {
  const trekkingCostDetail = [
    {
      title:
        "Pick-up or Drop-off service from and to Airport(in our own vehicle)",
    },
    {
      title: "Transportation to and from!!",
    },
    {
      title:
        "Food all along the trip(Breakfast, Lunch, Dinner and a cup of coffee or tea) and accommodations during the trip in hotels with family environment",
    },
    {
      title:
        "Transportation, food, accommodation and insurance of Guide during the trip",
    },
    {
      title: "All the required permits and paperwork",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <div className="lg:text-[25px] text-[20px] font-semibold ">
        Excluded Cost
      </div>
      <div className="flex flex-col gap-4">
        {trekkingCostDetail?.map((data, index) => {
          return (
            <div key={index} className="flex items-start gap-2">
              <div className="text-red-600">
                <RxCrossCircled size={20} />
              </div>
              <div>{data?.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrekkingCostExcluded;
