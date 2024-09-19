"use client";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import "swiper/css";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Testimonial = () => {
  const testimonial_data = [
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/thumbnails/testi-7.jpg",
      description:
        "We were blown away by the service provided by this travel website. Our trip to Morocco was like a dream come true, with unique experiences and excellent accommodations. Thank you for making our vacation extraordinary!",
      position: "Engineer",
      name: "Ritchard Covey",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/thumbnails/testi-8.jpg",
      description:
        "We were blown away by the service provided by this travel website. Our trip to Morocco was like a dream come true, with unique experiences and excellent accommodations. Thank you for making our vacation extraordinary!",
      position: "Engineer",
      name: "Carlos Jr",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/thumbnails/testi-6.jpg",
      description:
        "We were blown away by the service provided by this travel website. Our trip to Morocco was like a dream come true, with unique experiences and excellent accommodations. Thank you for making our vacation extraordinary!",
      position: "Engineer",
      name: "David Hustler",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/thumbnails/testi-8.jpg",
      description:
        "We were blown away by the service provided by this travel website. Our trip to Morocco was like a dream come true, with unique experiences and excellent accommodations. Thank you for making our vacation extraordinary!",
      position: "Engineer",
      name: "Carlos Jr",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/thumbnails/testi-6.jpg",
      description:
        "We were blown away by the service provided by this travel website. Our trip to Morocco was like a dream come true, with unique experiences and excellent accommodations. Thank you for making our vacation extraordinary!",
      position: "Engineer",
      name: "David Hustler",
    },
  ];
  return (
    <div
      className=" relative"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-vector/travel-pattern-background_23-2148043441.jpg)`,
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-secondary opacity-90"></div>
      <div className="layout component-padding flex flex-col lg:gap-20 gap-10 relative">
        <div className="text-center">
          <ComponentHeader
            data={{
              heading: "Testimonials",
              subheading: "What Travellers Say",
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
            {testimonial_data?.map((data, index) => {
              return (
                <SwiperSlide key={index} className=" ">
                  <div className="bg-white rounded-md drop-shadow-md flex flex-col gap-4 items-center justify-center p-6">
                    <div className="flex items-center justify-center">
                      <FaQuoteLeft className="lg:text-[45px] text-[20px] text-primary" />
                    </div>
                    <div className="text-center italic text-neutral leading-[28px]">
                      {data?.description}
                    </div>
                    <div className="flex items-center  justify-center gap-2">
                      <img
                        src={data?.image_link}
                        alt=""
                        className="h-[8vh] w-[8vh] rounded-full"
                      />
                      <div className="flex flex-col items-center">
                        <div>{data?.name}</div>
                        <div className="text-[14px] text-neutral">
                          {data?.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="absolute top-[150px] ">
          <img src="/static/green-spiral.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
