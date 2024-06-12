import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

function ContentData({ children }) {
  return (
    <div
      className="bg-gray-100 h-[80vh] w-full max-w-[750px] border border-blue-300 overflow-y-scroll"
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
