import BookingForm from "@/app/components/forms/BookingForm";
import OurValuablePartners from "../aboutUs/OurValuablePartners";
import RelatedTrekkingCategory from "./RelatedTrekkingCategory";
import TrekkingCostExcluded from "./TrekkingCostExcluded";
import TrekkingCostIncluded from "./TrekkingCostIncluded";
import TrekkingDetailFacilities from "./TrekkingDetailFacilities";
import TrekkingDetailIntro from "./TrekkingDetailIntro";
import TrekkingItenerary from "./TrekkingItenerary";
import TrekkingMap from "./TrekkingMap";

const TrekkingCategoryDetail = () => {
  return (
    <div className="layout component-padding">
      <div className="lg:grid lg:grid-cols-8 gap-20 flex flex-col">
        <div className="lg:col-span-5 text-neutral flex flex-col gap-14">
          <TrekkingDetailIntro />
          <TrekkingDetailFacilities />
          <TrekkingItenerary />
          <TrekkingCostIncluded />
          <TrekkingCostExcluded />
          <TrekkingMap />
        </div>

        <div className="lg:col-span-3">
          <div className="sticky top-[150px]">
            <BookingForm />
          </div>
        </div>
      </div>

      <div>
        <OurValuablePartners />
        <RelatedTrekkingCategory />
      </div>
    </div>
  );
};

export default TrekkingCategoryDetail;
