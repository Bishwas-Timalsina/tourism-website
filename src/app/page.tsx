import { unstable_noStore } from "next/cache";
import Slider from "./pageComponents/home/Slider";
import { fetchServerData } from "./helperFunctions/fetchServerData";
import Feature from "./pageComponents/home/Feature";
import WhyUs from "./pageComponents/home/WhyUs";
import TravelPackages from "./pageComponents/home/TravelPackages";
import PopularDestination from "./pageComponents/home/PopularDestination";
import Testimonial from "./pageComponents/home/Testimonial";
import BlogList from "./pageComponents/home/BlogList";
import TrekkingDetailIntro from "./pageComponents/trekkingCategoryDetail/TrekkingDetailIntro";

export default async function indexPage() {
  unstable_noStore();

  const { data: sliderData, error: sliderError } = await fetchServerData(
    "/home/sliders"
  );
  const { data: blogs, error: newsError } = await fetchServerData("/blogs");

  if (sliderError || newsError) return <div>Sorry Something went wrong!!</div>;
  return (
    <div className="">
      <Slider data={sliderData} />
      <Feature />
      <WhyUs />
      <TravelPackages />
      <PopularDestination />
      <Testimonial />
      <BlogList blog_data={blogs} />
    </div>
  );
}
