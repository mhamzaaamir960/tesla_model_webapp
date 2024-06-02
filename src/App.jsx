import React from "react";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import './App.css'

const { Sider, Content } = Layout;

function App() {
  return (
    <Layout className="h-[100vh] flex flex-col justify-end bg-gray-100">
      <Sider theme="light" trigger={null} width={250} className=" bg-gray-100">
        <Sidebar />
      </Sider>
      <Content className="bg-gray-100 ">content</Content>
    </Layout>
  );
}

export default App;
