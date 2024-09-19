import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import BlogList from "@/app/pageComponents/home/BlogList";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "WindowViewTravel-Blogs",
    keywords: "best travel destination",
    openGraph: {
      type: "website",
      title: `WindowViewTravel-Blogs`,
      description: `WindowViewTravel`,
      images: [
        {
          url: `https://images.unsplash.com/photo-1496950866446-3253e1470e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        },
      ],
    },
  };
}

export default async function BlogPage() {
  const { data: blogs, error: newsError } = await fetchServerData("/blogs");
  if (newsError) return <div>Sorry Something went wrong!!</div>;

  return (
    <div>
      <PageHeader
        data={{
          image:
            "https://images.unsplash.com/photo-1496950866446-3253e1470e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

          title: "Blogs",
        }}
      />
      <BlogList blog_data={blogs} />
    </div>
  );
}
