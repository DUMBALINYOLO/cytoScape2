import { setInterval } from "core-js";
import { observer } from "mobx-react";
import * as React from "react";
import { toolTipData } from "./sampleData";
import Parse from "html-react-parser";
import "./topcve.scss";

export interface ITopCveProps {
  data: ITopCve[];
}

export interface ITopCve {
  sort: number;
  cve_id: string;
}

@observer
export class TopCve extends React.Component<ITopCveProps> {
  public state = { selectedId: "" };
  intervals = [];

  getHoverOverAgencyData = (cve_id: string) => {
    let hoverOverAgencyData: any = {};
    const tempData = toolTipData.find((x) => x.id === cve_id);
    if (tempData === undefined || tempData === null) {
      return "";
    }
    Object.keys(tempData).forEach((key) => {
      if (key !== "id" && key !== "total") {
        hoverOverAgencyData[key] = tempData[key];
      }
    });
    return hoverOverAgencyData;
  };
  regex = /;/g;
  onButtonClick = (id) => {
    window.open(`https://nvd.nist.gov/vuln/detail/${id}`, "_blank");
  };
  toolTipShow(e, id: string) {
    this.setState({ selectedId: id });
    console.log(`test event id: ${e.target.id}`);
    if (
      this.intervals !== null &&
      this.intervals !== undefined &&
      this.intervals.length > 0
    ) {
      this.intervals.forEach((x) => clearInterval(x));
    }
    let tp = document.getElementById("test1");
    tp.style.display = "block";
  }

  toolTipSide(id: string) {
    if (toolTipData.findIndex((x) => x.id === id) % 2 === 0) {
      return "right";
    } else {
      return "left";
    }
  }

  toolTipHide() {
    var counter = 0; // setting the counter
    var interval = null;
    console.log(`it is out`);
    if (
      this.intervals !== null &&
      this.intervals !== undefined &&
      this.intervals.length > 0
    ) {
      this.intervals.forEach((x) => clearInterval(x));
    }
    interval = setInterval(function () {
      counter++;
      if (counter >= 5) {
        let tp = document.getElementById("test1");
        tp.style.display = "";

        clearInterval(interval);
      }
    }, 1000);
    this.intervals.push(interval);
  }

  // pair the key
  pairData = (data) => {
    let output = [];
    data.forEach((val, index) => {
      if (index < data.length - 1 && index % 2 === 0) {
        output.push([val, data[index + 1]]);
      }
    });
    if (data.length % 2 === 1) {
      output.push([data[data.length - 1], ""]);
    }
    return output;
  };

  render() {
    const data = toolTipData;
    return (
      <div className="TopCve">
        <div className="TopCveContainer">
          {data.map((cveItem) => (
            <div className="cveButon">
              <div>
                <button
                  key={cveItem.id}
                  onMouseOver={(e) => this.toolTipShow(e, cveItem.id)}
                  onMouseOut={(e) => this.toolTipHide()}
                  className="TopCveItem"
                  onClick={(e) => this.onButtonClick(cveItem.id)}
                >
                  {Parse(cveItem.id.replace(this.regex, "<br />"))}
                </button>
              </div>
              <div>
                <div>
                  <div
                    id="test1"
                    className={`tooltiptext tooltip_${this.toolTipSide(
                      this.state.selectedId
                    )}`}
                  >
                    <div>
                      Data summery <br />
                      {this.state.selectedId} <br />
                      <table className="hoverTable">
                        <thead>
                          <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.pairData(
                            Object.keys(
                              this.getHoverOverAgencyData(this.state.selectedId)
                            )
                          ).map((user, index) => (
                            <tr>
                              <td> {user[0]}</td>
                              <td>
                                {
                                  this.getHoverOverAgencyData(
                                    this.state.selectedId
                                  )[user[0]]
                                }
                              </td>
                              <td> {user[1]}</td>
                              <td>
                                {
                                  this.getHoverOverAgencyData(
                                    this.state.selectedId
                                  )[user[1]]
                                }
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td>Total:</td>
                            <td />
                            <td />
                            <td>
                              {" "}
                              {
                                this.getHoverOverAgencyData(
                                  this.state.selectedId
                                ).total
                              }
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className={"HoverOver__Buttons"}>
                        <div id="hoverOverMsg">
                          <div style={{ textAlign: "center" }}>
                            {" "}
                            Generate Report{" "}
                          </div>
                          <div className="HoverOver__Buttons__alignleft">
                            <button type="button" className="hoverButton">
                              all CVEs
                            </button>
                          </div>
                          <div className="HoverOver__Buttons__alignright">
                            <button type="button" className="hoverButton">
                              single CVE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
