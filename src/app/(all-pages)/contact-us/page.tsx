import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import ContactForm from "@/app/pageComponents/contactUs/ContactForm";
import ContactInformation from "@/app/pageComponents/contactUs/ContactInformation";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "WindowViewTravel-Contact Us",
    keywords: "best travel destination",
    openGraph: {
      type: "website",
      title: `WindowViewTravel-Contact Us`,
      description: `WindowViewTravel`,
      images: [
        {
          url: `https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg`,
        },
      ],
    },
  };
}
export default async function ContactUsPage() {
  unstable_noStore();
  return (
    <div className="">
      <div>
        <PageHeader
          data={{
            image:
              "https://img.lovepik.com/background/20211022/large/lovepik-contact-us-background-image_500584282.jpg",

            title: "Contact Us",
          }}
        />
      </div>
      <div className="layout component-padding">
        <ContactInformation />
        <ContactForm />
      </div>
    </div>
  );
}
