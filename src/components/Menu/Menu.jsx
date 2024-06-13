import React from "react";
import { Layout } from "antd";
import Sidebar from "./SideBar/Sidebar";
import HeaderData from "./Header/Header";
import ContentData from "./Content/Content";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useContextProvider } from "@/context/Context";

import { Outlet } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Sider } = Layout;

function MenuNav() {
  const { isChargingRouteOpen, setIsChargingRouteOpen } = useContextProvider();
  return (
    <div className="fixed bottom-0 right-0 w-[60%] w-full ">
      <Drawer
        open={isChargingRouteOpen}
        onOpenChange={(open) => setIsChargingRouteOpen(open)}
        className="bg-gray-50 min-w-[400px]  w-full "
      >
        {isChargingRouteOpen && <DrawerTrigger />}
        <DrawerContent className="bg-gray-100 min-h-[90vh] min-w-[400px] w-full max-w-[60%] ">
          <div className="bg-gray-100 w-full flex flex-col">
            <HeaderData />
            <div className="flex">
              <Sidebar />
              <ContentData>
                <Outlet />
              </ContentData>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MenuNav;
