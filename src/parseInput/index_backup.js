import React from "react";
import ReactDOM from "react-dom";
import { UserInputGui } from "./parseInput/userInputGui";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <UserInputGui />
  </React.StrictMode>,
  rootElement
);
