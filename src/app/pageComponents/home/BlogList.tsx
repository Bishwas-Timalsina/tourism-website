"use client";
import NoBgButton from "@/app/Button/NoBgButton";
import PrimaryButton from "@/app/Button/PrimaryButton";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { IBlogs } from "@/app/interface/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiClock2 } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogList = ({ blog_data }: IBlogs) => {
  const pathname = usePathname();
  return (
    <div className="">
      <div className="flex flex-col lg:gap-20 gap-10 layout component-padding relative">
        {pathname !== "/news" && (
          <div className="text-center">
            <ComponentHeader
              data={{
                heading: "Latest Blogs",
                subheading: "News & Articles",
              }}
            />
          </div>
        )}
        <div className="grid lg:grid-cols-3 gap-10">
          {blog_data?.slice(0, 6)?.map((blog_data, index: number) => {
            return (
              <Link
                href={`/blogs/${blog_data?.slug}`}
                key={index}
                className=" group  hover:translate-y-[-10px] transition-all duration-700"
              >
                <div className="">
                  <div className="flex flex-col gap-4">
                    <div className="overflow-hidden rounded-[10px]">
                      <img
                        src={blog_data?.image_link}
                        alt=""
                        className="h-[40vh] w-[100%] object-cover transform transition duration-500 ease-in-out group-hover:scale-110 "
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-neutral text-[14px]">
                        <div className="flex gap-1 items-center w-fit ">
                          <div className="ml-[4px]">
                            <CiClock2 size={18} />
                          </div>
                          <div>
                            {new Date(blog_data?.created_at).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                          <div className="lg:text-[20px] text-black group-hover:text-primary  font-medium mt-3">
                            {blog_data?.title}
                          </div>
                        </div>

                        <div>
                          <NoBgButton>
                            <div className="flex items-center gap-2 text-[18px]">
                              <div>Read More</div>
                              <div>
                                <FaArrowRightLong size={20} />
                              </div>
                            </div>
                          </NoBgButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {pathname !== "/blogs" && (
          <div>
            <div className="flex items-center justify-center">
              <div className="hover:cursor-pointer">
                <PrimaryButton>Read More Blogs</PrimaryButton>
              </div>
            </div>
          </div>
        )}
        <div className="absolute top-[60px] right-0 h-[8vh] w-[8vh] ">
          <img src="/static/passport.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogList;
