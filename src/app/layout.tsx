import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AntdContextProvider from "./context/AntdContext";
import "./globals.css";
import { fetchServerData } from "./helperFunctions/fetchServerData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"], // specify the weights you need
});

export async function generateMetadata(): Promise<Metadata> {
  const { data: companyProfile } = await fetchServerData("/company-profile");

  return {
    icons: {
      icon: companyProfile?.favicon_link,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: category } = await fetchServerData("/nav/category");
  const { data: companyProfile } = await fetchServerData("/company-profile");

  const trekking = [
    {
      id: 2,
      name: "Doi Inthanon National Park",
      slug: "doi-inthanon-national-park",
      image: "1720933071pouder-Medium.jpg",
      status: "on",
      created_at: "2024-07-02T04:33:51.000000Z",
      updated_at: "2024-07-14T04:58:14.000000Z",
      image_link:
        "https://cdn.getyourguide.com/img/tour/ac51af3880b89a7f.jpeg/97.jpg",
    },
    {
      id: 3,
      name: "Chiang Dao",
      slug: "chiang-dao",
      image: "1720933001yak_chews.webp",
      status: "on",
      created_at: "2024-07-02T04:35:11.000000Z",
      updated_at: "2024-07-14T04:58:11.000000Z",
      image_link:
        "https://thumbs.dreamstime.com/b/wat-tham-chiang-dao-temple-cave-chiang-mai-province-thailand-wat-tham-chiang-dao-temple-cave-chiang-mai-province-thailand-219987599.jpg",
    },
    {
      id: 5,
      name: "Khao Sok National Park",
      slug: "khao-sok-national-park",
      image: "1720933423dairy-products.jpg",
      status: "on",
      created_at: "2024-07-14T05:03:43.000000Z",
      updated_at: "2024-07-14T05:03:43.000000Z",
      image_link:
        "https://www.remotelands.com/storage/media/734/conversions/b200915002-banner-size.jpg",
    },
    {
      id: 5,
      name: "Erawan National Park",
      slug: "erawan-national-park",
      image: "1720933423dairy-products.jpg",
      status: "on",
      created_at: "2024-07-14T05:03:43.000000Z",
      updated_at: "2024-07-14T05:03:43.000000Z",
      image_link:
        "https://thaiunikatravel.com/wp-content/uploads/2023/05/Erawan-National-Park-Fea.jpg",
    },
  ];

  const headerItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "About Us",
      slug: "/about-us",
    },
    {
      name: "Trekking",
      slug: "/trekking",
      subMenu: trekking,
    },
    // {
    //   name: "Tour",
    //   subMenu: category,
    //   slug: "/category",
    // },
    // {
    //   name: "Volunterism",
    //   slug: "/volunterism",
    // },
    {
      name: "Gallery",
      slug: "/gallery",
    },
    {
      name: "Blogs",
      slug: "/blogs",
    },
  ];
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AntdContextProvider>
          <Header
            header_data={{
              companyProfile,
              headerItems,
            }}
          />
          {children}
          <Footer
            footer_data={{
              companyProfile,
              category,
            }}
          />
        </AntdContextProvider>
      </body>
    </html>
  );
}
