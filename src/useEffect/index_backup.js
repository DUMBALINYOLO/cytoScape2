import React from "react";
import ReactDOM from "react-dom";
import { Effect } from "./effect/Effect";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Effect />
  </React.StrictMode>,
  rootElement
);
