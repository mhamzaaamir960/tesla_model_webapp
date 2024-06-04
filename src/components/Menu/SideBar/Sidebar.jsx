import React, { useState } from "react";
import { MenuData } from "./MenuLinks";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function Items() {
  const [selectedKey, setSelectedKey] = useState(null);

  const handleItemClick = (key) => {
    setSelectedKey(key);
  };

  const items = MenuData.map((item) => ({
    key: item.key,
    label: (
      <div
        className={`flex items-center ${
          selectedKey === item.key ? "text-black" : "text-gray-500"
        }`}
      >
        <div
          className={selectedKey === item.key ? "text-black" : "text-gray-500"}
        >
          {item.icon}
        </div>
        <Link
          to={item.link}
          className={`ml-2 font-medium ${
            selectedKey === item.key ? "text-black" : "text-gray-500"
          }`}
        >
          {item.label}
        </Link>
      </div>
    ),
    onClick: () => handleItemClick(item.key),
    style: {
      backgroundColor: selectedKey === item.key ? "white" : "transparent",
    },
  }));
  return items;
}

function Sidebar() {
  return (
    <Menu mode="inline" className="min-h-fit bg-gray-100 p-4" items={Items()} />
  );
}

export default Sidebar;
