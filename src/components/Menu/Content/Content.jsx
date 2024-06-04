import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

function ContentData({ children }) {
  return <Content className="bg-gray-100 ">{children} </Content>;
}

export default ContentData;
