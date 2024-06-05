import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

function ContentData({ children }) {
  return (
    <Content
      className="bg-gray-100 h-[70vh] overflow-y-scroll"
      style={{
        WebkitOverflowScrolling: "touch",
        overflowY: "scroll",
        msOverflowStyle: "none" /* for Internet Explorer and Edge */,
        scrollbarWidth: "none" /* for Firefox */,
      }}
    >
      <div style={{ height: "100%" }}>{children}</div>
    </Content>
  );
}

export default ContentData;
