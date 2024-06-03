import React from "react";
import { Layout, Flex } from "antd";
import Sidebar from "./Sidebar";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import image from "@/assets/image.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Sider, Header, Content } = Layout;

function Menu() {
  return (
    <Drawer className="bg-gray-50 min-w-[400px] w-full ">
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent className="bg-gray-100 min-w-[400px] w-full max-w-[70%] ">
        <Layout className="">
          <Sider
            theme="light"
            trigger={null}
            width={250}
            className=" bg-gray-100"
          >
            <Sidebar />
          </Sider>
          <Layout className="">
            <Header className="bg-gray-100 border-2 h-[70px]">
              <Flex className=" flex  items-center  h-full">
                <div className="flex items-center">
                  <img src={image} alt="Image" width={25} height={25} className="object-cover text-gray-500"/>
                  {/* <FontAwesomeIcon icon="fa-solid fa-user" className="bg-black" />{" "} */}
                  <span>Matteo</span>
                </div>
                <div></div>
              </Flex>
            </Header>
            <Content className="bg-gray-100 ">content</Content>
          </Layout>
        </Layout>
      </DrawerContent>
    </Drawer>
  );
}

export default Menu;
