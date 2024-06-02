import React, { useState } from "react";
import { MenuData } from "./Menu";
import { Menu } from "antd";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const [selectedKey, setSelectedKey] = useState(null);

  const handleItemClick = (key) => {
    setSelectedKey(key);
  };

  return (
    <Menu mode="inline" className="h-[100vh] bg-gray-100 p-4">
      {MenuData.map((item) => (
        <Menu.Item
          key={item.key}
          style={{
            backgroundColor:
              selectedKey === item.key ? "white   " : "transparent",
          }}
          className={``}
          onClick={() => handleItemClick(item.key)}
        >
          <div
            className={`flex items-center  ${
              selectedKey === item.key ? "" : "text-gray-500"
            }`}
          >
            <div className={`${selectedKey === item.key ? "text-black " : "text-gray-500"}`}>{item.icon}</div>
            <span
              className={`ml-2 font-medium  ${
                selectedKey === item.key ? "text-black" : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default Sidebar;
