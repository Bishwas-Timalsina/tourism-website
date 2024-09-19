"use client";
import { createContext, useState } from "react";
import { IAntdContext } from "../interface/interface";

const defaultValue: IAntdContext = {
  loading: false,
  setLoading: () => {},
  openDrawer: false,
  setOpenDrawer: () => {},
};
export const AntdContext = createContext<IAntdContext>(defaultValue);

const AntdContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <AntdContext.Provider
      value={{ loading, setLoading, openDrawer, setOpenDrawer }}
    >
      {children}
    </AntdContext.Provider>
  );
};
export default AntdContextProvider;
