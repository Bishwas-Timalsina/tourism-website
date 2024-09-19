"use client";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { IoIosStar } from "react-icons/io";
import "swiper/css";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const PopularDestination = () => {
  const destination = [
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/gallery/gallery-2.jpg",
      package_name: "Bangkok City Tour",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/gallery/gallery-3.jpg",
      package_name: "Chiang Mai Cultural Tour",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/gallery/gallery-15.jpg",
      package_name: " Phuket Island Getaway",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/gallery/gallery-6.jpg",
      package_name: "Krabi Adventure",
    },
  ];
  return (
    <div className="layout component-padding flex flex-col lg:gap-20 gap-10">
      <div className="text-center">
        <ComponentHeader
          data={{
            heading: "Discover",
            subheading: "Popular Destination We Offer for all",
          }}
        />
      </div>

      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={3}
          allowSlideNext={true}
          pagination={{
            clickable: true,
          }}
          className=""
          style={{
            paddingTop: "10px",
            paddingBottom: "65px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            10: {
              slidesPerView: 1,
            },
          }}
        >
          {destination?.map((data, index) => {
            return (
              <SwiperSlide key={index} className="z-50 relative group">
                <div className="">
                  <img
                    src={data?.image_link}
                    alt=""
                    className={`h-[50vh] w-[100%] object-cover rounded-[8px]`}
                  />
                </div>

                <div className="block">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[80%] group-hover:bg-black/40 group-hover:border group-hover:backdrop-blur-sm transition-all duration-700 group-hover:w-[90%] group-hover:h-[90%] rounded-[8px]"></div>
                  </div>
                </div>
                <div className="absolute    inset-0 flex transition-all duration-700  justify-center items-center pointer-events-none ">
                  <div className="text-[white]  hidden  group-hover:flex flex-col items-center justify-center gap-4">
                    <div>
                      <div className=" font-semibold text-[24px] hover:text-primary">
                        {data?.package_name}
                      </div>
                      <div>
                        <div className="text-primary flex items-center justify-center text-[22px]">
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="text-[30px] font-semibold"> $980</span>
                      <span>/person</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularDestination;
