import React from "react";
import { exportCsv } from "./exportCsv";
export function ExportButton() {
  return (
    <div>
      Today you've taken button to export csv!
      <br />
      <button onClick={exportCsv}>I took another step</button>
    </div>
  );
}
