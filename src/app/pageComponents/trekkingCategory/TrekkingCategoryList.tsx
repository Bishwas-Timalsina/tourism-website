import TrekkingCategoryCard from "./TrekkingCategoryCard";

const TrekkingCategoryList = () => {
  const trekkinCategory = [
    {
      id: 2,
      name: "Kew Mae Pan Nature Trail",
      slug: "kew-mae-pan-nature-trail",
      image: "1720933071pouder-Medium.jpg",
      status: "on",
      created_at: "2024-07-02T04:33:51.000000Z",
      updated_at: "2024-07-14T04:58:14.000000Z",
      image_link:
        "https://cdn.getyourguide.com/img/tour/ac51af3880b89a7f.jpeg/97.jpg",
    },
    {
      id: 3,
      name: "Ang Ka Luang Nature Trail",
      slug: "ang-ka-luang-nature-trail",
      image: "1720933001yak_chews.webp",
      status: "on",
      created_at: "2024-07-02T04:35:11.000000Z",
      updated_at: "2024-07-14T04:58:11.000000Z",
      image_link:
        "https://thumbs.dreamstime.com/b/wat-tham-chiang-dao-temple-cave-chiang-mai-province-thailand-wat-tham-chiang-dao-temple-cave-chiang-mai-province-thailand-219987599.jpg",
    },
    {
      id: 5,
      name: "Wachirathan Waterfall",
      slug: "wachirathan-waterfall",
      image: "1720933423dairy-products.jpg",
      status: "on",
      created_at: "2024-07-14T05:03:43.000000Z",
      updated_at: "2024-07-14T05:03:43.000000Z",
      image_link:
        "https://www.remotelands.com/storage/media/734/conversions/b200915002-banner-size.jpg",
    },
    {
      id: 5,
      name: "Sirithan Waterfall",
      slug: "sirithan-waterfall",
      image: "1720933423dairy-products.jpg",
      status: "on",
      created_at: "2024-07-14T05:03:43.000000Z",
      updated_at: "2024-07-14T05:03:43.000000Z",
      image_link:
        "https://thaiunikatravel.com/wp-content/uploads/2023/05/Erawan-National-Park-Fea.jpg",
    },
  ];
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-3 gap-10">
        {trekkinCategory?.map((data, index) => {
          return (
            <div key={index}>
              <TrekkingCategoryCard trekking_category_data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrekkingCategoryList;
