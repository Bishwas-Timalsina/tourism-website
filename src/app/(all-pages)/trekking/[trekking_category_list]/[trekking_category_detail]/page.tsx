import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import TrekkingCategoryDetail from "@/app/pageComponents/trekkingCategoryDetail/TrekkingCategoryDetail";
import TrekkingDetailIntro from "@/app/pageComponents/trekkingCategoryDetail/TrekkingDetailIntro";
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
          url: `https://www.libertytravel.com/sites/default/files/styles/full_size/public/1920x1080-see-the-world-land-or-sea.jpg?itok=SeaP_sln`,
        },
      ],
    },
  };
}

export default async function trekkingCategoryDetailPage() {
  return (
    <div>
      <PageHeader
        data={{
          image:
            "https://www.libertytravel.com/sites/default/files/styles/full_size/public/1920x1080-see-the-world-land-or-sea.jpg?itok=SeaP_sln",
          title: "Trekking Category Detail",
        }}
      />
      <TrekkingCategoryDetail />
    </div>
  );
}
