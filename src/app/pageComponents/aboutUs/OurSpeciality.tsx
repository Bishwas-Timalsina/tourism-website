import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import React from "react";

const OurSpeciality = () => {
  const speciality_list = [
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/icons/f-icon-10.png",
      title: "Innovative Tour Plans",
      description:
        "Experience our innovative tour plans designed to take you off the beaten path and uncover hidden gems.",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/icons/f-icon-11.png",
      title: "Expert Travel Guide",
      description:
        "Embark on your journey with confidence, guided by our expert travel guides who share their local expertise and insider knowledge.",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/icons/f-icon-12.png",
      title: "Flexible Payment Policy",
      description:
        "Travel stress-free with our flexible payment policy that accommodates your needs and preferences.",
    },

    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/icons/f-icon-13.png",
      title: "High Quality Management",
      description:
        "Rest assured that your travel experience is in capable hands with our high-quality management and attention to every detail.",
    },
  ];
  return (
    <div className="layout component-padding">
      <div className="flex flex-col lg:gap-20 gap-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex flex-col gap-6">
            <div className=" relative  w-fit">
              <ComponentHeader
                data={{
                  heading: "Our Speciality",
                  subheading: "Your Trusted Travel Partner",
                }}
              />
              <div className="absolute top-0 right-0">
                <img src="/static/green-comma.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-8 text-neutral">
              <div>
                At our travel website, our speciality lies in curating
                unforgettable experiences that cater to the unique preferences
                of each traveler. From family vacations to solo adventures,
                romantic getaways to group escapades, we take pride in offering
                a diverse range of handpicked destinations and carefully crafted
                itineraries.
              </div>

              <div>
                Our team of travel experts is dedicated to staying ahead of the
                curve, ensuring that we bring you the latest travel trends and
                hidden gems to explore. Whether {`it's `}seeking out
                off-the-beaten-path activities or securing exclusive deals with
                our trusted partners, our commitment to excellence ensures that
                every trip planned through our platform is a journey of a
                lifetime.
              </div>

              <div>
                Our 24/7 customer service team is always at your disposal, ready
                to address any queries or assist with last-minute changes.
              </div>
            </div>
          </div>
          <div>
            <div className="grid lg:grid-cols-2 gap-6">
              {speciality_list?.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-col gap-6">
                      <img
                        src={data?.image_link}
                        alt=""
                        className="h-[7vh] w-[7vh]"
                      />
                      <div className="text-neutral flex flex-col gap-4">
                        <div className="text-[22px]  font-semibold">
                          {data?.title}
                        </div>
                        <div className="leading-[24px]">
                          {data?.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpeciality;
