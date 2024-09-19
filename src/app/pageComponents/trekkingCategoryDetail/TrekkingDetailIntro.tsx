"use client";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";

//swiper
import "swiper/css";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const TrekkingDetailIntro = () => {
  const trekking_data = [
    {
      image_link:
        "https://img.freepik.com/free-photo/seascape-texture-waves-water-generative-ai_169016-30500.jpg",
    },
    {
      image_link:
        "https://t3.ftcdn.net/jpg/05/63/76/92/360_F_563769202_XvjMvyMO593Wt70Um2OQPJ5CZrTXbT4t.jpg",
    },
    {
      image_link:
        "https://cdn.britannica.com/32/93932-050-B213E0FB/ocean-water-beach-The-Bahamas-Grand-Bahama.jpg",
    },
    {
      image_link:
        "https://images.nationalgeographic.org/image/upload/v1638892112/EducationHub/photos/greek-coast-south-aegean.jpg",
    },
    {
      image_link:
        "https://img.freepik.com/free-photo/seascape-texture-waves-water-generative-ai_169016-30500.jpg",
    },
    {
      image_link:
        "https://t3.ftcdn.net/jpg/05/63/76/92/360_F_563769202_XvjMvyMO593Wt70Um2OQPJ5CZrTXbT4t.jpg",
    },
    {
      image_link:
        "https://cdn.britannica.com/32/93932-050-B213E0FB/ocean-water-beach-The-Bahamas-Grand-Bahama.jpg",
    },
    {
      image_link:
        "https://images.nationalgeographic.org/image/upload/v1638892112/EducationHub/photos/greek-coast-south-aegean.jpg",
    },
  ];
  return (
    <div className="flex flex-col gap-20">
      <div className="flex items-center justify-between">
        <ComponentHeader
          data={{
            heading: "",
            subheading: "Ghorepani Poon Hill Trek",
          }}
        />
        <div>
          <div className="bg-white drop-shadow-md text-center ">
            <div className="bg-primary px-6 py-2 rounded-t-[6px] font-medium text-[25px] text-white">
              5
            </div>
            <div className="text-neutral text-[14px] px-6 py-1 rounded-b-[8px]">
              Days
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:gap-14">
        <div className="w-[100%]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            allowSlideNext={true}
            navigation
            className=""
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              10: {
                slidesPerView: 1,
              },
            }}
          >
            {trekking_data?.map((data, index) => {
              return (
                <SwiperSlide key={index} className="z-50 relative group">
                  <div className="overflow-hidden">
                    <img
                      src={data?.image_link}
                      alt=""
                      className={`h-[50vh] w-[100%] object-cover rounded-[8px]`}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex flex-col gap-8">
          <div className="lg:text-[25px] text-neutral text-[20px] font-semibold ">
            About this Destination
          </div>
          <div className="flex flex-col gap-6 text-neutral text-[14px]">
            <div>
              The Kew Mae Pan Nature Trail is a popular trekking route located
              in Doi Inthanon National Park, northern Thailand. This trail
              offers hikers a chance to explore stunning natural landscapes,
              including panoramic views of mountains, valleys, and forests.
            </div>
            <div>
              Situated near the peak of Doi Inthanon, Thailand highest mountain
              at 2,565 meters above sea level, the trail provides breathtaking
              vistas, particularly on clear days when the surrounding scenery is
              especially visible. The Kew Mae Pan Nature Trail is renowned for
              its beauty and is a favorite among nature enthusiasts and
              photographers.
            </div>
            <div>
              The Kew Mae Pan Nature Trail is not just a visual treat but also
              an educational experience. The trail is approximately 3 kilometers
              long and typically takes about 2 to 3 hours to complete, depending
              on your pace and how often you stop to take in the views. It winds
              through a variety of ecosystems, including lush cloud forests,
              open grasslands, and montane forests. The trail is particularly
              famous for its where clouds blanket the valleys below, creating a
              surreal and magical atmosphere.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekkingDetailIntro;
