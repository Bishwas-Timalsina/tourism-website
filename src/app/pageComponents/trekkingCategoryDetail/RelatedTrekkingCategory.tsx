import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import React from "react";
import TrekkingCategoryList from "../trekkingCategory/TrekkingCategoryList";

const RelatedTrekkingCategory = () => {
  return (
    <div className="lg:py-[80px] py-[75px]">
      <div className="text-center">
        <ComponentHeader
          data={{
            heading: "",
            subheading: "Similar Destination Like this",
          }}
        />
      </div>
      <TrekkingCategoryList />
    </div>
  );
};

export default RelatedTrekkingCategory;
