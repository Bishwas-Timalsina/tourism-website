import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import OurValuablePartners from "@/app/pageComponents/aboutUs/OurValuablePartners";
import TrekkingCategoryList from "@/app/pageComponents/trekkingCategory/TrekkingCategoryList";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "WindowViewTravel-Trekking",
    keywords: "best travel destination",
    openGraph: {
      type: "website",
      title: `WindowViewTravel-Trekking`,
      description: `WindowViewTravel`,
      images: [
        {
          url: `https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        },
      ],
    },
  };
}

export default async function trekkingCategoryPage({ params }: any) {
  const { trekking_category_list } = params;
  return (
    <div>
      <PageHeader
        data={{
          image:
            "https://science.nasa.gov/wp-content/uploads/2023/11/9827327865_98e0f0dc2d_o.jpg",

          title: "Trekking",
        }}
      />
      <TrekkingCategoryList />
      <OurValuablePartners />
    </div>
  );
}
