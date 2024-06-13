import React, { useState } from "react";
import { MenuData } from "./MenuLinks";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[420px] h-[85vh]  px-10 py-5 flex flex-col gap-y-[0.39rem] ">
      {MenuData.map((item) => (
        <NavLink to={item.link} key={item.key} >
          {({ isActive }) => (
            <div className={`flex gap-x-4 px-4 py-4 -xl ${isActive ? "bg-white rounded-xl" : "bg-gray-100"}`}>
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
