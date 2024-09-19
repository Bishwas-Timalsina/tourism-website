"use client";
import LoadingButton from "@/app/Button/LoadingButton";
import { AntdContext } from "@/app/context/AntdContext";
import axiosInstance from "@/app/utils/axiosInstance";
import { Form, Input, notification } from "antd";
import { useContext } from "react";
//emailjs

const ContactForm = () => {
  //states
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const { setLoading } = useContext(AntdContext);

  const handleContactSubmit = async (values: any) => {
    try {
      setLoading(true);
      const payload = {
        name: values?.name,
        email: values?.email,
        phone: values?.phone_number,
        message: values?.message,
      };

      if (payload) {
        setLoading(true);
        const response = await axiosInstance.post("/contact/store", payload);

        if (response?.status === 200) {
          notification.success({
            message: response?.data?.message,
          });
          form.resetFields();
          setLoading(false);
        } else {
          notification.error({
            message: "Sorry Something went wrong",
          });
          form.resetFields();
          setLoading(false);
        }
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-8 gap-6 lg:py-[80px] py-[75px]">
      <div className="lg:col-span-4">
        <div className="flex flex-col gap-2">
          <div className="text-primary font-semibold text-[22px]">
            Get In Touch{" "}
          </div>
          <div className="lg:w-[60%]">
            Reach out to us today and {`let's`} begin transforming your concepts
            into visually stunning that leave a lasting impression on your
            audience.
          </div>
        </div>
      </div>
      <div
        className={`border-t-[4px] lg:col-span-4 border-t-secondary  bg-[white] flex items-center justify-center drop-shadow-md p-4 md:p-8 lg:p-20 rounded-[8px]`}
      >
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col gap-5 "
          onFinish={handleContactSubmit}
        >
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium">Your Name</div>
            </div>
            <Form.Item
              hasFeedback
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please provide your full name",
                },
              ]}
              className="form-label"
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your full name here"
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium">Email Address</div>
            </div>

            <Form.Item
              hasFeedback
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please provide your email address",
                },
                {
                  pattern: /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/,
                  message:
                    "Please provide your email address in correct format",
                },
              ]}
              className=""
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your email address here"
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium ">Phone Number</div>
            </div>

            <Form.Item
              hasFeedback
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: "Please provide your valid phone number",
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Mobile number must be 10 digits",
                },
              ]}
              className=""
            >
              <Input
                className="w-[100%]"
                size="large"
                placeholder="Enter your phone number here"
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium ">Message</div>
            </div>
            <Form.Item
              hasFeedback
              name="message"
              rules={[
                { required: true, message: "Please provide your message" },
              ]}
              className="color-changer"
            >
              <TextArea
                rows={4}
                cols={10}
                className="w-[100%]"
                placeholder="Enter your message please"
                autoSize={false}
              />
            </Form.Item>
          </div>

          <div className=" flex items-center justify-center lg:h-[6vh] ">
            <LoadingButton>Submit</LoadingButton>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default ContactForm;
