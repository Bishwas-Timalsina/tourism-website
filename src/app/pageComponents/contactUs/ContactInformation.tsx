import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { CiMail } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { PiPhoneCall } from "react-icons/pi";

const ContactInformation = () => {
  const informatiion_list = [
    {
      icons: <FiMapPin />,
      title: "Our Address",
      desc: "2690 Hiltona Street ",
    },
    {
      icons: <PiPhoneCall />,
      title: "Phone Number",
      desc: "+01 234 567 890",
    },
    {
      icons: <CiMail />,
      title: "Mail",
      desc: "mailinfo00@tourm.com",
    },
  ];
  return (
    <div className="flex flex-col lg:gap-20 gap-10">
      <div className="text-center">
        <ComponentHeader
          data={{
            heading: "Get In Touch",
            subheading: "Our Contact Information",
          }}
        />
      </div>
      <div className="grid lg:grid-cols-3 gap-20">
        {informatiion_list?.map((data, index) => {
          return (
            <div
              key={index}
              className="flex gap-4 border-[1px] rounded-[8px] border-gray-500 px-6 py-3"
            >
              <div className="h-[6vh] w-[6vh] rounded-full bg-[#113D48] flex items-center justify-center">
                <div className=" text-[22px] text-white">{data?.icons}</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[20px] text-primary">{data?.title}</div>
                <div>{data?.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInformation;
