"use client";

import SecondaryButton from "@/app/Button/SecondaryButton";
//interface
import { ISlider } from "@/app/interface/interface";

//carousel
import { Carousel } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";

const Slider = ({ data: sliderData }: ISlider) => {
  const slider_constants = [
    {
      id: 4,
      title: "The Himalayas Yak Chews",
      image: "1720949158churpi-Web-banner-1.jpg",
      status: "on",
      created_at: "2024-07-02T02:45:28.000000Z",
      updated_at: "2024-07-14T09:25:58.000000Z",
      image_link:
        "https://images.unsplash.com/photo-1632103962914-5b156d47c987?q=80&w=2109&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Yak Chews Banner",
      image: "1720949252churpi-Web-banner-2.jpg",
      status: "on",
      created_at: "2023-03-19T19:46:30.000000Z",
      updated_at: "2024-07-28T06:34:03.000000Z",
      image_link:
        "https://images.unsplash.com/photo-1632103962914-5b156d47c987?q=80&w=2109&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="layout  lg:px-4 px-6 py-10">
      <div className="rounded-[28px] overflow-hidden">
        <Carousel autoplay={true} className="z-0 rounded-[28px]">
          {slider_constants?.map((data) => {
            return (
              <div
                key={data?.id}
                className="relative rounded-[28px] "
                style={{
                  backgroundImage: `url(${data?.image_link})`,
                }}
              >
                <div className="rounded-[28px]">
                  <img
                    src={data?.image_link}
                    alt="slider_image"
                    className="w-full lg:h-[80vh] h-[50svh] object-cover rounded-[28px] "
                  />
                  {/* <video
                    autoPlay
                    muted
                    loop
                    className="w-full lg:h-[80vh] h-[50vh] object-cover rounded-[28px] "
                  >
                    <source src="/nature.mp4" type="video/mp4" />
                  </video> */}
                </div>
                <div className="absolute top-0 w-full h-full left-0 right-0 bottom-0  bg-[#0c0a0a] opacity-60 rounded-[28px] "></div>
                <div className="absolute top-0 left-0 z-50 inset-0 flex flex-col items-center lg:gap-10 gap-2  justify-center text-white lg:my-0">
                  <div className="">
                    <div className="layout component-padding ">
                      <div className="">
                        <div className="flex flex-col gap-4 items-center  ml-6  lg:w-[60%]">
                          <div className="flex flex-col lg:gap-10 gap-2">
                            <div className="lg:text-[50px] text-[25px] font-semibold lg:font-bold text-[white]">
                              Explore the Top Destination of Planet Earth
                            </div>
                            <div className="flex flex-col gap-4">
                              <div className="lg:text-[20px] text-[16px] text-[white]">
                                Whether you are savoring a hearty entrée, a
                                light and refreshing salad, or a decadent
                                dessert, each bite promises to delight your
                                taste buds and leave you craving more
                              </div>
                              <div className="">
                                <div className="hover:cursor-pointer">
                                  <SecondaryButton>
                                    <div className="flex items-center gap-2 text-[18px]">
                                      <div>Book Now</div>
                                      <div>
                                        <FaArrowRightLong size={20} />
                                      </div>
                                    </div>
                                  </SecondaryButton>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
