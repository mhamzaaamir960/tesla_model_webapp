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
    <div className="fixed bottom-0 right-0 ">
      <Drawer className="bg-gray-50 min-w-[400px] w-full ">
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className="bg-gray-100 min-h-[90vh] min-w-[400px] w-full max-w-[60%] ">
          <Layout className="bg-gray-100">
            <Sider
              theme="light"
              trigger={null}
              width={250}
              style={{ backgroundColor: "#f3f4f6" }}
              className=" bg-gray-100 "
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
    </div>
  );
}

export default MenuNav;
