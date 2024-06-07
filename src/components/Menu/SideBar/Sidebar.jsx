import React, { useState } from "react";
import { MenuData } from "./MenuLinks";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function Items() {
  const [selectedKey, setSelectedKey] = useState(null);

  const handleItemClick = (key) => {
    setSelectedKey(key);
  };
  return MenuData.map((item) => ({
    key: item.key,
    label: (
      <NavLink
        to={item.link}
        className={({ isActive }) =>
          `flex items-center ${isActive ? "text-black " : "text-gray-500"}`
        }
      >
        {({ isActive }) => (
          <>
            <div className={isActive ? "text-black" : "text-gray-500"}>
              {item.icon}
            </div>
            <div
              className={`ml-2 font-medium  ${
                isActive ? "text-black" : "text-gray-500"
              }`}
            >
              {item.label}
            </div>
          </>
        )}
      </NavLink>
    ),
    onClick: () => handleItemClick(item.key),
    style: {
      backgroundColor: selectedKey === item.key ? "white" : "transparent",
    },
  }));
}

function Sidebar() {
  return (
    <Menu mode="inline" className="min-h-fit bg-gray-100 p-4" items={Items()} />
  );
}

export default Sidebar;
