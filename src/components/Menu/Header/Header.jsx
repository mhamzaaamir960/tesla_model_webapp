import React from "react";
import image from "@/assets/image.png";
import { Layout, Flex } from "antd";
import Notifications from "./Notifications";
import Bluetooth from "./Bluetooth";
import Wifi from "./Wifi";

const { Header } = Layout;

function HeaderData() {
  return (
    <Header className="bg-gray-100 h-[60px] w-full relative top-0">
      <Flex className=" flex  items-center justify-between h-full w-full">
        <div className="flex items-center  gap-x-4 ">
          <img
            src={image}
            alt="Image"
            width={18}
            height={18}
            className="object-cover text-gray-500 "
          />
          <span className="text-base font-medium">Matteo</span>
        </div>
        <div className="flex items-center gap-x-4 relative top-0 h-full">
          <Notifications />
          <Bluetooth />
          <Wifi />
        </div>
      </Flex>
    </Header>
  );
}

export default HeaderData;
