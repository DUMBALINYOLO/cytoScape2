import * as d3 from "d3";
import * as React from "react";

export class SamplePie  {
  ref = React.createRef<SVGSVGElement>();
  const color = d3.scaleOrdinal()
    .range(['#869099', '#8c7853', '#007d4a']);
  pie = d3
    .pie()
    .sort(null) // Do not sort group by size
    .value(function (d: any) {
      return d.value;
    });

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.renderD3();
  }
const width = 400
const height = 400;
const radius = Math.min(width, height) / 2.5;

const totals = [{
    "name": "District A",
    "value": 20
}, {
    "name": "District B",
    "value": 50
}, {
    "name": "District C",
    "value": 30
}, {
    "name": "District D",
    "value": 20
}, {
    "name": "District E",
    "value": 50
}, {
    "name": "District F",
    "value": 30
}];

renderInnerDonut() {
const arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(40);

const svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

const g = svg.selectAll('.arc')
    .data(pie(totals))
    .enter()
    .append('g')
    .attr('class', 'arc');

g.append('path')
    .attr('d', arc)
    .style('fill', 'steelblue')
    .style('stroke', 'white');

pie(totals).forEach(function(d, i) {
    [x, y] = arc.centroid(d);
    let label = d.data.name;
    var rotation = d.endAngle < Math.PI ? (d.startAngle / 2 + d.endAngle / 2) * 180 / Math.PI : (d.startAngle / 2 + d.endAngle / 2 + Math.PI) * 180 / Math.PI;
    svg.append("text")
        .attr("text-anchor", "middle").attr("alignment-baseline", "middle")
        .attr("transform", "translate(" + [x, y] + ") rotate(-90) rotate(" + rotation + ")")
        .text(label);
})
render() {
  const { height, width } = this.props;
  return (
    <div
      style={{ height, width, padding: "0px" }}
      className="DoubleDonutChart"
    >
      <svg width={width} height={height} className="DoubleDonutChartSVG">
        <g className="outerDonut" ref={this.ref}></g>1
      </svg>
    </div>
  );
}
}