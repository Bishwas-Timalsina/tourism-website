import { IoAirplaneOutline } from "react-icons/io5";

const TrekkingDetailFacilities = () => {
  const trekking_facilities = [
    {
      title: "Guided Tours",
      desc: "Local guides are available for hire at the start of the trail. These guides are knowledgeable about the area flora, fauna, and history, enhancing the trekking experience with valuable insights.",
      icon: <IoAirplaneOutline />,
    },
    {
      title: "Parking Area",
      desc: "A designated parking area is available near the trailhead, making it convenient for visitors arriving by car. The parking area is spacious and secure, providing easy access to the trail.",
      icon: <IoAirplaneOutline />,
    },
    {
      title: "Restrooms",
      desc: "Basic restroom facilities are located near the entrance of the trail. These are simple but well-maintained, ensuring comfort for visitors before and after their hike.",
      icon: <IoAirplaneOutline />,
    },
    {
      title: "Information Center",
      desc: "An information center is situated at the start of the trail, offering maps, brochures, and details about the trail and Doi Inthanon National Park. Staff at the center can assist with questions and provide tips for the trek.",
      icon: <IoAirplaneOutline />,
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <div className="lg:text-[25px] text-[20px] font-semibold ">
        Facilities
      </div>
      <div className="grid lg:grid-cols-2 gap-6 items-start justify-start">
        {trekking_facilities?.map((data, index) => {
          return (
            <div key={index}>
              <div className="flex gap-8">
                <div className="border-[1px] border-neutral lg:text-[40px] w-fit h-fit p-2">
                  {data?.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[18px] font-semibold">{data?.title}</div>
                  <div className="text-[14px]">{data?.desc}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrekkingDetailFacilities;
