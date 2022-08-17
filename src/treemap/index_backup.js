import React from "react";
import ReactDOM from "react-dom";
import { ZoomableTreemap } from "./treemap/ZoomableTreemap";
import { data2 } from "./treemap/sampleData";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ZoomableTreemap
      data={data2}
      height={500}
      width={1200}
      margin={{ top: 24, right: 0, bottom: 0, left: 0 }}
    />
  </React.StrictMode>,
  rootElement
);
