import React from "react";
import ReactDOM from "react-dom";
//import { UserInputGui } from "./parseInput/userInputGui";
import { ExportButton } from "./exportcsv/ExportButton";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ExportButton />
  </React.StrictMode>,
  rootElement
);
