const Feature = () => {
  const featureList = [
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/icons/intro-1.png",
      title: "Most Popular Destinations",
      description:
        "Discover the world's most sought-after destinations, from breathtaking wonders to vibrant cityscapes. Unveil iconic landmarks, immerse in diverse cultures, and create cherished memories on your journey of a lifetime",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/icons/intro-2.png",
      title: "Budget Friendly Packages",
      description:
        "Travel doesn't have to break the bank! Explore our curated selection of budget-friendly packages, where you can experience incredible adventures without compromising on quality. Embrace wanderlust without the financial worry.",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/icons/intro-3.png",
      title: "Satisfaction Guarranted",
      description:
        "Your satisfaction is our top priority. With meticulous planning and personalized service, we ensure your travel experiences exceed expectations. Book with confidence, knowing that your journey will be nothing short of exceptional.",
    },
  ];
  return (
    <div className="layout component-padding relative ">
      <div className="grid lg:grid-cols-3 gap-8  ">
        {featureList?.map((data, index) => {
          const { description, image_link, title } = data;
          return (
            <div
              key={index}
              className="flex flex-col gap-6 items-center justify-center"
            >
              <div>
                <img src={image_link} alt="" />
              </div>
              <div className="text-center text-neutral flex flex-col gap-2">
                <div className="lg:text-[20px] text-[25px] font-bold">
                  {title}
                </div>
                <div className="z-40">{description}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-[-200px] z-0 left-[-150px]">
        <img src="/static/banner-arrow.png" alt="" />
      </div>
    </div>
  );
};

export default Feature;
