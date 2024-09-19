"use client";
import Link from "next/link";

//context
import { IoIosMenu } from "react-icons/io";

//interface
import { IHeader } from "@/app/interface/interface";

//components
import PrimaryButton from "@/app/Button/PrimaryButton";
import { useEffect, useState } from "react";
import HeaderMenu from "./HeaderMenu";
import Ribbonbar from "./RibbonBa";
import SmallScreenHeader from "./SmallScreenHeader";

const Header = ({ header_data }: IHeader) => {
  const { companyProfile, headerItems } = header_data;
  const [topHeader, setTopHeader] = useState<boolean>(true);
  useEffect(() => {
    const changeNavbarDesign_onscroll = () => {
      const top = document.documentElement.scrollTop;

      if (top > 3) {
        setTopHeader(false);
      } else {
        setTopHeader(true);
      }
    };
    window.addEventListener("scroll", changeNavbarDesign_onscroll);
    return () => {
      window.removeEventListener("scroll", changeNavbarDesign_onscroll);
    };
  }, []);

  return (
    <>
      <Ribbonbar ribbon_bar_data={companyProfile} />
      <div className="sticky top-0 z-50">
        <div className="">
          <div
            className={`${
              topHeader == true ? "drop-shadow-none" : "drop-shadow-md"
            } bg-[white] text-black `}
          >
            <div className="layout  lg:px-4  px-6 lg:py-0 py-4 grid lg:grid-cols-12 grid-cols-2 gap-10 ">
              <Link href="/" className="flex items-center my-4 lg:col-span-2 ">
                <img
                  src="https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/07/logo3.svg"
                  alt=""
                />
                {/* <img
                  src={companyProfile?.logo_link}
                  alt=""
                  className="lg:w-[10vh] w-[6vh] object-contain "
                /> */}
              </Link>
              <div className="lg:flex gap-6 lg:col-span-8 items-center justify-center hidden ">
                <HeaderMenu headerItems={headerItems} />
              </div>
              <Link
                href="/contact-us"
                className="lg:col-span-2 hidden lg:flex items-center justify-end "
              >
                <PrimaryButton>Contact Us</PrimaryButton>
              </Link>

              <div className="lg:hidden flex items-center justify-end gap-4 ">
                <div
                //   onClick={() => {
                //     setOpenDrawer(true);
                //   }}
                >
                  <IoIosMenu size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <SmallScreenHeader
          header_data={{
            companyProfile,
            headerItems,
          }}
        /> */}
      </div>
      <SmallScreenHeader
        header_data={{
          companyProfile,
          headerItems,
        }}
      />
    </>
  );
};

export default Header;
