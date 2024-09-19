import PrimaryButton from "@/app/Button/PrimaryButton";
import Card from "@/app/components/card/Card";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import React from "react";
import { FaClock } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";

const TravelPackages = () => {
  const package_list = [
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/destinations/italy.jpg",
      country: "Italy",
      location: "Romantic Venice",
      day: "5 Days 6 Nights",
      person: "2",
      rating: 4.8,
      price: "$199",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/destinations/brazil.jpg",
      country: "Brazil",
      location: "Lust Amazon Rainforest Waiting to be Explored",
      day: "5 Days 6 Nights",
      person: "2",
      rating: 4.8,
      price: "$199",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/destinations/egypt.jpg",
      country: "Egypt",
      location: "Unraveling Ancient Wonders, Exploring Egypt",
      day: "5 Days 6 Nights",
      person: "2",
      rating: 4.8,
      price: "$199",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/destinations/canada.jpg",
      country: "Canada",
      location: "Adventure in the  Canadian Rockies, Majesty Unleashed",
      day: "5 Days 6 Nights",
      person: "2",
      rating: 4.8,
      price: "$199",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/destinations/maldives.jpg",
      country: "Maldives",
      location: "Unveiling the Serenity of Maldivian Islands",
      day: "5 Days 6 Nights",
      person: "2",
      rating: 4.8,
      price: "$199",
    },
    {
      image_link:
        "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/destinations/morocco.jpg",
      country: "Morocco",
      location: "Marrakech, A Tapestry of Colors and Culture",
      day: "5 Days 6 Nights",
      person: "2",
      rating: 4.8,
      price: "$199",
    },
  ];
  return (
    <div className="bg-[#eefbfd]">
      <div className="layout component-padding flex flex-col lg:gap-20 gap-10">
        <div>
          <ComponentHeader
            data={{
              heading: "Packages",
              subheading: "Travel Packages",
            }}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {package_list?.map((data, index) => {
            return (
              <div key={index} className="">
                <Card card_data={data} />
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <div className="hover:cursor-pointer">
            <PrimaryButton>View More Packages</PrimaryButton>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default TravelPackages;
