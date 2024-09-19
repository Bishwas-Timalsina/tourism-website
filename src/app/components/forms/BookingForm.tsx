"use client";
import LoadingButton from "@/app/Button/LoadingButton";
import { AntdContext } from "@/app/context/AntdContext";
import axiosInstance from "@/app/utils/axiosInstance";
import { Form, Input, notification, Select } from "antd";
import { useContext, useState } from "react";
//emailjs

const BookingForm = () => {
  //states
  const [form] = Form.useForm();
  const [destination, setDestination] = useState();
  const [packages, setPackages] = useState();

  const { setLoading } = useContext(AntdContext);

  const handleDestination = (value: any) => {
    setDestination(value);
  };

  const handlePackages = (value: any) => {
    setPackages(value);
  };

  const handleContactSubmit = async (values: any) => {
    try {
      setLoading(true);
      const payload = {
        name: values?.name,
        email: values?.email,
        phone: values?.phone_number,
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
    <div className="">
      <div
        className={`border-t-[4px]  border-t-secondary  bg-[white] flex items-center justify-center drop-shadow-md p-4 md:p-8 lg:p-10 rounded-[8px]`}
      >
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col gap-4 "
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
              <div className="text-[16px] font-medium">
                Select Your Packages
              </div>
            </div>

            <Form.Item
              hasFeedback
              name="adult"
              className="form-label w-[100%]"
              rules={[
                {
                  required: true,
                  message: "Please select the packages",
                },
              ]}
            >
              <Select
                style={{
                  width: "100%",
                }}
                size="large"
                defaultValue="Select packages"
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
                onChange={handlePackages}
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium">
                Select your Destination
              </div>
            </div>

            <Form.Item
              hasFeedback
              name="adult"
              className="form-label w-[100%]"
              rules={[
                {
                  required: true,
                  message: "Please select your destination",
                },
              ]}
            >
              <Select
                style={{
                  width: "100%",
                }}
                size="large"
                defaultValue="Select your destination"
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
                onChange={handleDestination}
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
export default BookingForm;
