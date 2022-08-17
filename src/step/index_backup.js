import React from "react";
import ReactDOM from "react-dom";
import { Step } from "./step/Step";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Step />
  </React.StrictMode>,
  rootElement
);
