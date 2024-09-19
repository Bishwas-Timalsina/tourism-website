import { IRibborBarData } from "@/app/interface/interface";
import Link from "next/link";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Ribbonbar = ({ ribbon_bar_data }: IRibborBarData) => {
  return (
    <div className="bg-[white] border-b-[1px] border-[gray] text-[black] relative z-50">
      <div className="layout py-2 lg:px-4 px-6">
        <div className="flex lg:flex-row flex-col lg:gap-4 gap-2 justify-between items-center">
          <div className="flex lg:flex-row flex-col gap-4">
            <div className="flex items-center justify-center gap-4">
              {ribbon_bar_data?.company_phone && (
                <div className="flex gap-[4px] items-center text-[12px] border-r-[1px] pr-4 border-red-200">
                  <div>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <a href={`tel:${ribbon_bar_data?.company_phone}`}>
                      {ribbon_bar_data?.company_phone}
                    </a>
                  </div>
                </div>
              )}
            </div>
            {ribbon_bar_data?.company_email && (
              <div className="flex gap-[4px] lg:justify-start justify-center items-center text-[12px]">
                <div>
                  <MdEmail size={14} />
                </div>
                <div>
                  <a
                    href={`mailto:${ribbon_bar_data?.company_email}`}
                    className=""
                  >
                    {ribbon_bar_data?.company_email}
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="flex">
            <div>
              {ribbon_bar_data?.company_address && (
                <div className="flex gap-[4px] items-center text-[12px] border-r-[1px] pr-4 border-red-200">
                  <div>
                    <FaLocationDot />
                  </div>
                  <div>{ribbon_bar_data?.company_address}</div>
                </div>
              )}
            </div>

            <div className="flex  lg:gap-2 gap-4 lg:justify-start justify-center lg:items-start items-center pl-2">
              {ribbon_bar_data?.facebook && (
                <Link
                  href={ribbon_bar_data?.facebook}
                  target="_blank"
                  className=""
                >
                  <FaFacebookF className="" size={14} />
                </Link>
              )}
              {ribbon_bar_data?.instagram && (
                <Link
                  href={ribbon_bar_data?.instagram}
                  target="_blank"
                  className=""
                >
                  <FaSquareInstagram size={14} />
                </Link>
              )}
              {ribbon_bar_data?.youtube && (
                <Link
                  href={ribbon_bar_data?.youtube}
                  target="_blank"
                  className=" hover:cursor-pointer"
                >
                  <IoLogoYoutube size={14} />
                </Link>
              )}

              {ribbon_bar_data?.twitter && (
                <Link
                  href={ribbon_bar_data?.twitter}
                  target="_blank"
                  className=" hover:cursor-pointer"
                >
                  <FaXTwitter size={14} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ribbonbar;
