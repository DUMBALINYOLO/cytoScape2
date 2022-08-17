import React from "react";
import ReactDOM from "react-dom";
//import { UserInputGui } from "./parseInput/userInputGui";
import { TopCve } from "./tooltip/topCve";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <TopCve />
  </React.StrictMode>,
  rootElement
);
