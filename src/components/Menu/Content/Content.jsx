import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

function ContentData({ children }) {
  return (
    <div
      className="bg-gray-100 h-[83vh] w-full max-w-[710px] overflow-y-scroll"
      style={{
        WebkitOverflowScrolling: "touch",
        overflowY: "scroll",
        msOverflowStyle: "none" /* for Internet Explorer and Edge */,
        scrollbarWidth: "none" /* for Firefox */,
      }}
    >
      <div>{children}</div>
    </div>
  );
}

export default ContentData;
