import React from "react";
import ReactDOM from "react-dom";
//import { UserInputGui } from "./parseInput/userInputGui";
import { doubleDonutData } from "./donut/sampleData";
import { DoubleDonutChart } from "./donut/double-donut-chart";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <DoubleDonutChart data={doubleDonutData} height={315} width={450} />
  </React.StrictMode>,
  rootElement
);
