import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import SideMenu from "./components/layout/SideMenu";


import { Content, Footer, Header } from "antd/es/layout/layout";
import TotalEligible from "./components/pages/Summary/TotalEligible";
import InterestedStudents from "./components/pages/Summary/InterestedStudents";
import TotalStudents from "./components/pages/Summary/TotalStudents";
import PlacementTarget from "./components/pages/Summary/PlacementTarget";
import ConductedDrive from "./components/pages/Summary/ConductedDrive";
import TotalOffers from "./components/pages/Summary/TotalOffers";
import TotalStudentPlaced from "./components/pages/Summary/TotalStudentPlaced";
import TotalStudentMultipleOffers from "./components/pages/Summary/TotalStudentsMultipleOffers";
import SalaryRange from "./components/pages/Summary/SalaryRange";
import TotalInternships from "./components/pages/Summary/TotalInternships";
import InterestedStudentPlaced from "./components/pages/UnplacedData/Totalintrested&Placed";
import UnplacedStudent from "./components/pages/UnplacedData/TotalUnplacedStudents";
import Strength from "./components/pages/UnplacedData/TotalStrength";

import cutmlogo from "./assets/cutmlogo.png";
import Dashboard from "./dashboard";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<SideMenu/>} />


    </Routes>
  </BrowserRouter>
);
