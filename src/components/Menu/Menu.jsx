import React from "react";
import { Layout } from "antd";
import Sidebar from "./SideBar/Sidebar";
import HeaderData from "./Header/Header";
import ContentData from "./Content/Content";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Outlet } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Sider } = Layout;

function MenuNav() {
  return (
    <Drawer className="bg-gray-50 min-w-[400px] w-full ">
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent className="bg-gray-100 min-w-[400px] w-full max-w-[60%] ">
        <Layout className="">
          <Sider
            theme="light"
            trigger={null}
            width={250}
            className=" bg-gray-100"
          >
            <Sidebar />
          </Sider>
          <Layout>
            <HeaderData />
            <ContentData>
              <Outlet />
            </ContentData>
          </Layout>
        </Layout>
      </DrawerContent>
    </Drawer>
  );
}

export default MenuNav;
