import React from "react";
import "./styles.scss";

export function Effect() {
  let overView = true;
  function toggleOverView() {
    overView = !overView;
    if (overView) {
      document.getElementById("report").className = "Gray";
    } else {
      document.getElementById("report").className = "Blue";
    }
  }

  function testbutton() {
    console.log(`disabled`);
  }

  return (
    <div>
      Today you've taken steps!
      <br />
      <div>
        <input
          type="checkbox"
          onClick={toggleOverView}
          style={{
            color: "black",
            visibility: "visible",
            width: "14px",
            height: "14px",
            padding: 0,
            paddingBottom: "0px",
            marginRight: "6px"
          }}
        ></input>
        IC Overview
      </div>
      <button
        type="button"
        id="report"
        className="Blue"
        disabled
        onClick={testbutton}
      >
        Generate Report
      </button>
    </div>
  );
}
