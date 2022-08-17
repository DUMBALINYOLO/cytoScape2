import * as d3 from "d3";
import * as React from "react";
import "./double-donut-chart.scss";

export interface IDoubleDonutChartProps {
  data: IDoubleDonutChartData;
  height: number;
  width: number;
}

export interface IDoubleDonutChartData {
  outerData: IDonutChartData;
  innerData: IDonutChartData;
}

export interface IDonutChartData {
  critical: number;
  high: number;
  medium: number;
  low: number;
  unspecified: number;
}

export class DoubleDonutChart extends React.Component<IDoubleDonutChartProps> {
  ref = React.createRef<SVGSVGElement>();
  color = d3
    .scaleOrdinal()
    .domain(["Critical", "High", "Medium", "Low", "Unspecified"])
    .range(["#BD4248", "#D97A3E", "#EEBC4B", "#4C9A51", "#80817E"]);
  pie = d3
    .pie()
    .sort(null) // Do not sort group by size
    .value(function (d: any) {
      console.log(`lilly test color: ${JSON.stringify(d)}`);
      return d.value;
    });

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.renderD3();
  }

  componentDidUpdate() {
    this.renderD3();
  }

  convertChartData(data: any): any {
    const entries: any[] = [];
    for (const key in data) {
      const entry: any = {};
      entry.key = key;
      entry.value = data[key];
      entries.push(entry);
    }
    return entries;
  }

  // Recursively go through donut data, increasing any category values to a number that is whatever "minPercent" is passed (7% seems to be good enough)
  // This ensures all categories display at least a visible slight, even if they're count is extremely low
  donutDataBalancer(donutData, minPercent) {
    let total = 0;

    let donutDataOut = {};

    for (const [key, value] of Object.entries(donutData)) {
      if (typeof value === "number") {
        total = total + value;
      }
    }
    const minPercentNumber = (total * minPercent) / 100;

    let numberUnderMinimum = false;

    for (const [key, value] of Object.entries(donutData)) {
      if (typeof value === "number") {
        // Zero values will not be included in the donut chart at all
        if (value !== 0) {
          if (value < minPercentNumber) {
            numberUnderMinimum = true;
            donutDataOut[key] = Math.ceil(minPercentNumber) + 1;
          } else {
            donutDataOut[key] = value;
          }
        }
      }
    }

    if (numberUnderMinimum) {
      this.donutDataBalancer(donutDataOut, minPercent);
    }
    return donutDataOut;
  }

  renderInnerDonut() {
    const { width, height } = this.props;
    const {
      data: { innerData }
    } = this.props;
    const radius2 = Math.min(width, height) / 2 - 70;
    const innerDonut = d3
      .select(".outerDonut")
      .attr("height", height)
      .attr("transform", `translate( ${width / 2},${height / 2})`);
    const arc2: any = d3
      .arc()
      .innerRadius(radius2 * 0.625)
      .outerRadius(radius2 * 1);
    const color = this.color;

    let innerDataModified = this.donutDataBalancer(innerData, 7);
    let innerDonutData = this.pie(this.convertChartData(innerDataModified));

    // This adds the original values to the donut data, making sure they display in the chart (after the values for the minimum sized pie slice have been set by above)
    for (const [key, value] of Object.entries(innerData)) {
      for (let i = innerDonutData.length - 1; i >= 0; i--) {
        if (innerDonutData[i]["data"]["key"] === key) {
          innerDonutData[i]["data"]["value"] = value;
        }
      }
    }

    innerDonut
      .selectAll("allSlices")
      .data(innerDonutData)
      .enter()
      .append("path")
      .attr("class", ".innerDonut")
      .attr("d", arc2)
      .attr("fill", function (d: any) {
        return String(color(d.data.key));
      })
      .attr("stroke", "white")
      .style("stroke-width", "2px");

    // Another arc that won't be drawn. Just for labels positioning
    const outerArc = d3.arc().innerRadius(radius2).outerRadius(radius2);

    innerDonut
      .selectAll("allLabels")
      .data(innerDonutData)
      .enter()
      .append("text")
      .text(function (d: any) {
        return d.data.value;
      })
      .attr("transform", function (d: any) {
        const pos = arc2.centroid(d);
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        var rotation =
          midangle < Math.PI * 0.5 || midangle > Math.PI * 1.5
            ? ((d.startAngle / 2 + d.endAngle / 2) * 180) / Math.PI
            : ((d.startAngle / 2 + d.endAngle / 2 + Math.PI) * 180) / Math.PI;
        return `translate(${pos}) rotate(${rotation})`;
      })
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle");
  }

  renderD3() {
    const {
      data: { outerData }
    } = this.props;
    const { width, height } = this.props;
    const radius1 = Math.min(width, height) / 2 - 45;

    const svg = d3
      .select(this.ref.current)
      .attr("height", height)
      .attr("transform", `translate( ${width / 2},${height / 2})`);
    svg.selectAll("*").remove();
    const color = this.color;
    const data = this.convertChartData(outerData);

    let outerDataModified = this.donutDataBalancer(outerData, 7);

    let outerDonutData = this.pie(this.convertChartData(outerDataModified));

    // This adds the original values to the donut data, making sure they display in the chart (after the values for the minimum sized pie slice have been set by above)
    for (const [key, value] of Object.entries(outerData)) {
      for (let i = outerDonutData.length - 1; i >= 0; i--) {
        if (outerDonutData[i]["data"]["key"] === key) {
          outerDonutData[i]["data"]["value"] = value;
        }
      }
    }

    let sum: number = 0;
    data.forEach((element) => {
      sum += element.value;
    });
    const arc: any = d3
      .arc()
      .innerRadius(radius1 * 0.625) // This is the size of the donut hole
      .outerRadius(radius1 * 1);

    svg
      .selectAll("allSlices")
      .data(outerDonutData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", function (d: any) {
        return String(color(d.data.key));
      })
      .attr("stroke", "white")
      .style("stroke-width", "2px");

    // Another arc that won't be drawn. Just for labels positioning
    const outerArc = d3
      .arc()
      .innerRadius(radius1 * 0.9)
      .outerRadius(radius1 * 0.9);

    // Add the polylines between chart and labels:
    svg.select("allPolylines").exit().remove();
    svg
      .selectAll("allPolylines")
      .data(outerDonutData)
      .enter()
      .append("polyline")
      .attr("stroke", "black")
      .style("fill", "none")
      .attr("stroke-width", 1)
      .attr("points", function (d: any) {
        const posA = arc.centroid(d); // line insertion in the slice
        const posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
        const posC = outerArc.centroid(d); // Label position = almost the same as posB
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = radius1 * 1.1 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return String([posA, posB, posC]);
      });

    // Add the polylines between chart and labels:
    svg
      .selectAll("allLabels")
      .data(outerDonutData)
      .enter()
      .append("text")
      .text(function (d: any) {
        const percentage = Math.round(
          (d.data.value / sum + Number.EPSILON) * 100
        );
        return `${d.data.value}, ${percentage}%`;
      })
      .attr("transform", function (d: any) {
        const pos = outerArc.centroid(d);
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius1 * 1.15 * (midangle < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .style("font-family", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif")
      .style("text-anchor", function (d) {
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midangle < Math.PI ? "start" : "end";
      });

    this.renderInnerDonut();
  }

  render() {
    const { height, width } = this.props;
    return (
      <div
        style={{ height, width, padding: "0px" }}
        className="DoubleDonutChart"
      >
        <svg width={width} height={height} className="DoubleDonutChartSVG">
          <g className="outerDonut" ref={this.ref}></g>
        </svg>
      </div>
    );
  }
}
