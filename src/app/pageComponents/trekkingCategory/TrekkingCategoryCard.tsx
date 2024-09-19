import PrimaryButton from "@/app/Button/PrimaryButton";
import Link from "next/link";
import { CiStopwatch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { LuBarChart, LuUsers } from "react-icons/lu";

const TrekkingCategoryCard = ({ trekking_category_data }: any) => {
  const { image_link, name, slug } = trekking_category_data;
  const description =
    "The Tiananmen, a gate in the wall of the Imperial City, was built in 1415 during the Ming dynasty. In the 17th century, fighting between Li Zicheng rebel forces and the forces of the Manchu-led Qing dynasty caused heavy damage to, or even destroyed, the gate. Tiananmen Square was designed and built in 1651, and has since been enlarged by four times its original size in the 1950s.";
  return (
    <Link href={`/trekking/kew-mae-pan-nature-trail/${slug}`}>
      <div className="border-gray-200 border-[2px] bg-white drop-shadow-sm hover:drop-shadow-md rounded-[12px]">
        <div>
          <img
            src={image_link}
            alt=""
            className="w-[100%] h-[35vh] object-cover rounded-t-[12px]"
          />
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div className="flex flex-col gap-4 border-b-gray-200 border-b-[1px] pb-4">
            <div className="flex justify-between items-center">
              <div>{name}</div>
              <div>
                <FaHeart size={20} className="text-neutral" />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-neutral text-[14px] flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div>
                        <GrLocation className="text-primary" />
                      </div>
                      <div>{name}, Thailand</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <CiStopwatch className="text-primary" />
                      </div>
                      <div>3 days</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <LuUsers className="text-primary" />
                      </div>
                      <div>8,12 people</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <LuBarChart className="text-primary" />
                      </div>
                      <div>Easy</div>
                    </div>
                  </div>
                  <div className="line-clamp-3">{description}</div>
                </div>
              </div>
              <div className="border-l-[1px] border-l-gray-200 pl-6 flex flex-col gap-2">
                <div className="bg-primary text-white rounded-[8px] px-3  text-[12px] flex items-center justify-center py-1">
                  20%
                </div>
                <div className="lg:text-[22px] font-semibold">$500</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <PrimaryButton>View Details</PrimaryButton>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrekkingCategoryCard;
