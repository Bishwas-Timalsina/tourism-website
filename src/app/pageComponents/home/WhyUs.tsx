import PrimaryButton from "@/app/Button/PrimaryButton";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { FaArrowRightLong } from "react-icons/fa6";

const WhyUs = () => {
  const why_us_feature = [
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/icons/f-icon-1.png",
      title: "Award winning tour & travel arranger",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/icons/f-icon-2.png",
      title: "Most popular booking solution provider",
    },
  ];
  const why_us_list = [
    {
      title:
        "Personalized Itineraries: Tailored to your preferences and interests.",
    },
    {
      title:
        "Hand picked premium Accommodations that guarantee comfort and relaxation.",
    },
    {
      title: "Dedicated 24/7 support team ready to assist you at any moment.",
    },
  ];
  return (
    <div className="text-neutral mt-8">
      <div className="layout component-padding">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="relative">
            <div className="lg:absolute z-40 lg:top-[100px] ">
              <img
                src="/static/man-hiking.jpg"
                alt=""
                className="lg:-rotate-[15deg] rounded-[8px]"
              />
            </div>
            <div className="lg:absolute z-0 lg:top-[-20px] lg:left-[80px] hidden lg:flex">
              <img
                src="/static/passport.jpg"
                alt=""
                className="lg:rotate-6 rounded-[8px] lg:h-[50vh] lg:w-[50vh]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 relative">
            <div>
              <ComponentHeader
                data={{
                  heading: "Let’s Explore the World",
                  subheading: "We Make Your Travel More Enjoyable",
                }}
              />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div>
                  Embrace a worry-free travel experience with us as we strive to
                  make your journey more enjoyable. From seamless itineraries to
                  handpicked accommodations, we take care of every detail,
                  leaving you free to savor every moment and create
                  unforgettable memories.
                </div>

                <div className="grid grid-cols-2 gap-6 items-center">
                  {why_us_feature?.map((data, index) => {
                    return (
                      <div key={index}>
                        <div className="group">
                          <div className="flex lg:flex-row flex-col lg:items-center items-start gap-2 group-hover:cursor-pointer">
                            <img
                              src={data?.image_link}
                              alt=""
                              className="group-hover:animate-spin "
                            />
                            <div className="font-semibold text-[16px] lg:h-auto h-[10vh]">
                              {data?.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                {why_us_list?.map((data, index) => {
                  return (
                    <div key={index}>
                      <div className="flex lg:items-center gap-2">
                        <div>
                          <FaArrowRightLong
                            className="text-primary  translate-y-[3px]"
                            size={20}
                          />
                        </div>
                        <div>{data?.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <PrimaryButton>Read More</PrimaryButton>
              </div>
            </div>
            <div className="absolute top-0 right-0">
              <img src="/static/green-spiral.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
