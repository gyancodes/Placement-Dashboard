import "./App.css";
import { Divider } from "@tremor/react";

import D from "./dashboard";
import Un from "./unplaceddata";
import Ctc from "./ctc";
import DemoPie from "./components/Pie";
import HeaderHome from "./components/layout/HeaderHome";
function App() {
  return (
    // <div>
    //   <h1 className="text-red-500 text-5xl font-extrabold">
    //     Placement Dashboard
    //   </h1>
    //   <Divider></Divider>
    //   <D></D>
    //   <h1 className="text-green-500 text-5xl font-extrabold">
    //     UNPLACED Dashboard
    //   </h1>
    //   <Un></Un>
    //   <Ctc></Ctc>
    //   <DemoPie />
    // </div>
    <>
    <HeaderHome/>
    <Ctc/>
    <D/>
    </>
  );
}

export default App;
