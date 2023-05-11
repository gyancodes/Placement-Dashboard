import { PieChartOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";

import Sider from "antd/es/layout/Sider";
import {
  Routes,
  Route,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import { Content, Footer, Header } from "antd/es/layout/layout";
import TotalEligible from "../pages/Summary/TotalEligible";
import InterestedStudents from "../pages/Summary/InterestedStudents";
import TotalStudents from "../pages/Summary/TotalStudents";
import PlacementTarget from "../pages/Summary/PlacementTarget";
import ConductedDrive from "../pages/Summary/ConductedDrive";
import TotalOffers from "../pages/Summary/TotalOffers";
import TotalStudentPlaced from "../pages/Summary/TotalStudentPlaced";
import TotalStudentMultipleOffers from "../pages/Summary/TotalStudentsMultipleOffers";
import SalaryRange from "../pages/Summary/SalaryRange";
import TotalInternships from "../pages/Summary/TotalInternships";
import InterestedStudentPlaced from "../pages/UnplacedData/Totalintrested&Placed";
import UnplacedStudent from "../pages/UnplacedData/TotalUnplacedStudents";
import Strength from "../pages/UnplacedData/TotalStrength";

import cutmlogo from "../../assets/cutmlogo.png";
import Dashboard from "../../dashboard";

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
          <div className="flex justify-center rounded mt-2">
            <Link to="/">
              <img
                src={cutmlogo}
                alt="cutmlogo"
                style={{
                  background: "white",
                  height: 60,
                  width: "auto",
                  borderRadius: "10px",
                }}
              />
            </Link>
          </div>
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
              // { label: "Home", key: "/", icon: <HomeFilled /> },
              {
                label: "Placement Summary",
                key: "/placementsummary",
                icon: <PieChartOutlined />,
                children: [
                  { label: "Total Students", key: "/totalstudents" },
                  { label: "Eligible Students", key: "/eligiblestudents" },
                  { label: "Interested Students", key: "/interestedstudents" },
                  { label: "Placement Target", key: "/placementtarget" },
                  { label: "Conducted Drive", key: "/conducteddrive" },
                  { label: "Offers Generated", key: "/offersgenerated" },
                  { label: "Total Student Placed", key: "/totalstudentplaced" },
                  { label: "Multiple Offers", key: "/multipleoffers" },
                  { label: "Salary Range", key: "/salaryrange" },
                  { label: "Internships", key: "/internships" },
                ],
              },
              {
                label: "Unplaced Data",
                key: "/unplaceddata",
                icon: <PieChartOutlined />,
                children: [
                  {
                    label: "Total Interested and Placed",
                    key: "/InterestedStudentPlaced",
                  },
                  { label: "Total Strength", key: "/Strength" },
                  {
                    label: "Total Unplaced Students",
                    key: "/UnplacedStudent",
                  },
                ],
              },
            ]}
          ></Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: "colorBgContainer",
              textAlign: "center",
            }}
          >
            <h1 className="font-sans text-2xl mt-4 text-white font-extrabold">
              Placement Dashboard
            </h1>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <div
              style={{
                padding: 24,
                minHeight: 550,
                background: colorBgContainer,
              }}
            >
              <ContentDisplay />
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
        <Route path="*" element={<Dashboard />} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/totalstudents" element={<TotalStudents />} />
        <Route path="/eligiblestudents" element={<TotalEligible />} />
        <Route path="interestedstudents" element={<InterestedStudents />} />
        <Route path="/placementtarget" element={<PlacementTarget />} />
        <Route path="/conducteddrive" element={<ConductedDrive />} />
        <Route path="/offersgenerated" element={<TotalOffers />} />
        <Route path="/totalstudentplaced" element={<TotalStudentPlaced />} />
        <Route
          path="/InterestedStudentPlaced"
          element={<InterestedStudentPlaced />}
        />
        <Route path="/UnplacedStudent" element={<UnplacedStudent />} />
        <Route path="/Strength" element={<Strength />} />
        <Route
          path="/multipleoffers"
          element={<TotalStudentMultipleOffers />}
        />
        <Route path="/salaryrange" element={<SalaryRange />} />
        <Route path="/internships" element={<TotalInternships />} />
      </Routes>
    </div>
  );
}

export default SideMenu;
