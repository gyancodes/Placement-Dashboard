import "./App.css";
import { Divider } from "@tremor/react";

import D from "./dashboard";
import Un from "./unplaceddata";
import Ctc from "./ctc";
import DemoPie from "./components/Pie";
import HeaderHome from "./components/layout/HeaderHome";
import SideMenu from "./components/layout/SideMenu";
function App() {
  return (
    <>
      {/* <HeaderHome /> */}
      <SideMenu/>
    </>
  );
}

export default App;
