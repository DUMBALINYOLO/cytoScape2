import React from "react";
import "./tableTest.scss";
import { dataSummaryDetailsData } from "./dataForTableTest";

export interface IDataSummaryDetailItem {
  id?: string;
  isSelected?: boolean;
  count: number;
  exploitDBID: number;
  iCOASTID: number;
  stateActorsUsingCVE: string[];
}

export function TableTest() {
  dataSummaryDetails = () => {
    return dataSummaryDetailsData.map((item: IDataSummaryDetailItem, index) => (
      <tr
        key={index}
        role="rowgroup"
        className={`"background":"blue"`}
        // onClick={handleCveRowClick(item.id)}
      >
        <td style={{ width: "20%" }}>
          <button
            key={item.id}
            className="cveItem"
            onClick={e => this.searchCve(item.id)}
          >
            {item.id}
          </button>
        </td>
        <td>{item.count}</td>
        <td>{item.exploitDBID}</td>
        <td>{item.iCOASTID}</td>
        <td style={{ width: "30%" }}>{item.stateActorsUsingCVE.toString()}</td>
      </tr>
    ));
  };
  return (
    <table className="cveTable">
      <thead>
        <tr>
          <th style={{ width: "20%" }}>CVE #</th>
          <th>Count</th>
          <th>Exploit DB ID</th>
          <th>ICOAST ID</th>
          <th style={{ width: "30%" }}>State Actor Using CVE</th>
        </tr>
      </thead>
      <tbody>{this.dataSummaryDetails()}</tbody>
    </table>
  );
}
