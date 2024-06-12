import React from "react";
import image from "@/assets/image.png";
import { useContextProvider } from "@/context/Context";
import { Layout, Flex } from "antd";
import Notifications from "./Notifications";
import Bluetooth from "./Bluetooth";
import Wifi from "./Wifi";

const { Header } = Layout;

function HeaderData() {
  const { data } = useContextProvider();
  return (
    <div className="bg-gray-100 h-[100px] w-full relative top-0 flex justify-center " >
      <div className=" flex  items-center justify-between h-full w-full p-2 max-w-[90%]">
        <div className="flex items-center  gap-x-4 ">
          <img
            src={image}
            alt="Image"
            width={40}
            height={40}
            className="object-cover text-gray-500 "
          />
          <span className="text-2xl font-medium">{data.name}</span>
        </div>
        <div className="flex items-center gap-x-4 relative top-0 h-full">
          <Notifications />
          <Bluetooth />
          <Wifi />
        </div>
      </div>
    </div>
  );
}

export default HeaderData;
