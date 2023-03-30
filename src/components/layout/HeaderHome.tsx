import React, { useState } from "react";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import DemoPie from "../Pie";
import ConductedDrive from "../pages/Summary/ConductedDrive";
import TotalStudentPlaced from "../pages/Summary/TotalStudentPlaced";
import TotalStudents from "../pages/Summary/TotalStudents";
import InterestedStudents from "../pages/Summary/InterestedStudents";
import PlacementTarget from "../pages/Summary/PlacementTarget";
import TotalOffers from "../pages/Summary/TotalOffers";
import TotalStudentMultipleOffers from "../pages/Summary/TotalStudentsMultipleOffers";
import TotalInternships from "../pages/Summary/TotalInternships";
import { Routes, Route } from "react-router-dom";
import TotalEligible from "../pages/Summary/TotalEligible";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  // getItem("Placement Summary", "1", <PieChartOutlined />),
  // getItem("Unplaced Data", "2", <DesktopOutlined />),
  getItem("Placement Summary", "sub1", <PieChartOutlined />, [
    getItem("Total Students", "3"),
    getItem("Eligible Students", "4"),
    getItem("Interested Students", "5"),
    getItem("Placement Target", "6"),
    getItem("Conducted Drive", "7"),
    getItem("Offers Generated", "8"),
    getItem("Total Student Placed", "9"),
    getItem("Multiple Offers", "10"),
    getItem("Salary Range", "11"),
    getItem("Internships", "12"),
  ]),
  getItem("Unplaced Data", "sub2", <PieChartOutlined />, [
    getItem("Total Interested and Placed", "13"),
    getItem("Total Strength", "14"),
    getItem("Total Unplaced Students", "15"),
    getItem("Total Strength", "16"),
    getItem("Campus", "", <PieChartOutlined />, [
      getItem("Total Interested and Placed", "17"),
      getItem("Total Strength", "18"),
      getItem("Total Unplaced Students", "19"),
      getItem("Total Strength", "20"),
    ]),
  ]),
  // getItem("Files", "12", <FileOutlined />),
];

const HeaderHome: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={250}
      >
        <div style={{ height: 32, margin: 16, background: "blue" }} />
        <Menu

          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
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
            Placement Dashboard hello
          </h1>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Placement Summary</Breadcrumb.Item>
            <Breadcrumb.Item>Total Student</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {/* <h1 className="mb-10 font-mono text-orange-600 text-xl font-bold">
              Total Student Placed
            </h1> */}
            {/* <TotalStudentPlaced /> */}
            {/* <TotalStudents/> */}
            {/* <ConductedDrive/> */}
            {/* <InterestedStudents/> */}
            {/* <PlacementTarget/> */}
            {/* <TotalOffers/> */}
            {/* <TotalStudentMultipleOffers/> */}
            {/* <TotalInternships/> */}

            <Routes>
              <Route path="/totalstudents" element={<TotalStudents />} />
              <Route path="/eligiblestudents" element={<TotalEligible />} />
              {/* <Route path="/totalstudents" element={<div>TotalStudents</div>}/>
              <Route path="/totalstudents" element={<div>TotalStudents</div>}/> */}
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Centurion University Of Technology & Management ©2023{" "}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default HeaderHome;
