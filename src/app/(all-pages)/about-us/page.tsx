import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import OurSpeciality from "@/app/pageComponents/aboutUs/OurSpeciality";
import OurValuablePartners from "@/app/pageComponents/aboutUs/OurValuablePartners";
import Testimonial from "@/app/pageComponents/home/Testimonial";
import WhyUs from "@/app/pageComponents/home/WhyUs";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "WindowViewTravel-About Us",
    keywords: "best travel destination",
    openGraph: {
      type: "website",
      title: `WindowViewTravel-About Us`,
      description: `WindowViewTravel`,
      images: [
        {
          url: `https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        },
      ],
    },
  };
}

export default async function AboutUsPage() {
  return (
    <div>
      <PageHeader
        data={{
          image:
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

          title: "About Us",
        }}
      />
      <WhyUs />
      <OurSpeciality />
      <OurValuablePartners />
      <Testimonial />
    </div>
  );
}
