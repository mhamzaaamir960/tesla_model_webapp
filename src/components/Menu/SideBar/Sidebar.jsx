import React, { useState } from "react";
import { MenuData } from "./MenuLinks";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[400px] h-[84vh]  p-4 flex flex-col gap-y-2 ">
      {MenuData.map((item) => (
        <NavLink to={item.link} key={item.key} >
          {({ isActive }) => (
            <div className={`flex gap-x-2 px-4 py-4 -xl ${isActive ? "bg-white rounded-xl" : "bg-gray-100"}`}>
              <div
                className={` ${
                  isActive ? "text-black" : "text-gray-500"
                }`}
              >
                {item.icon}
              </div>
              <div
                className={`ml-2 font-medium text-3xl  ${
                  isActive ? "text-black" : "text-gray-500"
                }`}
              >
                {item.label}
              </div>
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
