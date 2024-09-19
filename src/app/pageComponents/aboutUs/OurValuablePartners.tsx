import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";

const OurValuablePartners = () => {
  const partner_list = [
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/partners/partner-5.png",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/partners/partner-1.png",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/partners/partner-2.png",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/partners/partner-3.png",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/partners/partner-4.png",
    },
  ];
  return (
    <div className="layout component-padding flex flex-col lg:gap-20 gap-10">
      <div className="text-center">
        <ComponentHeader
          data={{
            heading: "Valuable Partners",
            subheading: "Our Valuable Partners",
          }}
        />
      </div>
      <div className="grid lg:grid-cols-5 gap-6">
        {partner_list?.map((data, index) => {
          const { image_link } = data;
          return (
            <div key={index}>
              <div>
                <img
                  src={image_link}
                  alt=""
                  className="grayscale hover:grayscale-0 hover:cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurValuablePartners;
