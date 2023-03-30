import {
  DashboardFilled,
  HomeFilled,
  PoweroffOutlined,
  ProfileFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React, { useState } from "react";

import Sider from "antd/es/layout/Sider";
import { Routes, Route, useNavigate,  } from "react-router-dom";
import TotalStudents from "../pages/Summary/TotalStudents";
import { Content, Footer, Header } from "antd/es/layout/layout";
import TotalEligible from "../pages/Summary/TotalEligible";

const SideMenu = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={250}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            onClick={({ key }) => {
              if (key === "signout") {
                //Todo SignOut Feature
              } else {
                navigate(key);
              }
            }}
            items={[
              { label: "Home", key: "/", icon: <HomeFilled /> },
              {
                label: "Dashboard",
                key: "/dashboard",
                icon: <DashboardFilled />,
              },
              {
                label: "Total Student",
                key: "/totalstudent",
                icon: <ProfileFilled />,
              },
              { label: "About", key: "/about", icon: <UserOutlined /> },
              {
                label: "Signout",
                key: "/signout",
                icon: <PoweroffOutlined />,
              },
            ]}
          ></Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              textAlign: "center",
            }}
          >
            <h1 className="font-mono text-2xl mt-4 text-blue-700 font-extrabold">
              Placement Dashboard
            </h1>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>{location.pathname === "/"}</Breadcrumb.Item>
              <Breadcrumb.Item>Total Student</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
             <ContentDisplay/>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Centurion University Of Technology & Management ©2023{" "}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
function ContentDisplay() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<div>Home</div>} /> */}
        <Route path="/totalstudent" element={<TotalStudents />} />
        {/* <Route path="/profile" element={<div>Profile</div>} /> */}
        {/* <Route path="/about" element={<div>About</div>} /> */}
      </Routes>
    </div>
  );
}

export default SideMenu;
