import { Button } from "antd";
import { useContext } from "react";
import { AntdContext } from "../context/AntdContext";
import { IButton } from "../interface/interface";

const LoadingButton = ({ children }: IButton) => {
  //
  const { loading } = useContext(AntdContext);

  return (
    <Button
      htmlType="submit"
      loading={loading}
      style={{
        backgroundColor: "#1CA8CB",
        color: "white",
        fontSize: "20px",
      }}
      className="h-[6vh]"
    >
      {children}
    </Button>
  );
};

export default LoadingButton;
