import * as d3 from "d3";
import * as React from "react";
import { data2 } from "./sampleData";
import "./styles.scss";

export interface ITreemapProps {
  data: ITreemapData;
  height: number;
  width: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}
export interface ITreeMapChildData {
  item: string;
  itemShortName: string;
  size: number;
}
export interface ITreemapData {
  item: string;
  itemShortName: string;
  children: ITreemapData[] | ITreeMapChildData[];
}

export class ZoomableTreemap extends React.Component<ITreemapProps> {
  formatNumber = d3.format(",d");
  x = d3
    .scaleLinear()
    .domain([0, this.props.width])
    .range([0, this.props.width]);

  y = d3
    .scaleLinear()
    .domain([0, this.props.height])
    .range([0, this.props.height]);
  ref = React.createRef<SVGSVGElement>();
  componentDidMount() {
    this.renderD3();
  }

  componentDidUpdate() {
    this.renderD3();
  }

  color = d3.scaleOrdinal().range(
    d3.schemeCategory10.map((c) => {
      var d = d3.rgb(c);
      d.opacity = 0.4;
      return d;
    })
  );

  format = d3.format(",d");
  svg;
  grandparent;

  renderD3() {
    const { height, width, margin } = this.props;
    if (this.svg) {
      this.svg.selectAll("*").remove();
    } else {
      this.svg = d3.select(this.ref.current);

      this.grandparent = this.svg.append("g").attr("class", "grandparent");

      this.grandparent
        .append("rect")
        .attr("y", -margin.top)
        .attr("width", width)
        .attr("height", margin.top);

      this.grandparent
        .append("text")
        .attr("x", 6)
        .attr("y", 6 - margin.top)
        .attr("dy", ".75em");

      var treemap = d3
        .treemap()
        .tile(
          d3.treemapResquarify.ratio(
            (height / width) * 0.5 * (1 + Math.sqrt(5))
          )
        )
        .size([width, height])
        .round(false)
        .paddingInner(1);
    }

    var root = d3
      .hierarchy(data2)
      .eachBefore((d) => {
        d.id = (d.parent ? d.parent.id + "." : "") + d.data.itemShortName;
      })
      .sum((d) => d.size)
      .sort((a, b) => {
        console.log("initial root sort a " + a.value + " b " + b.value);
        return b.height - a.height || b.value - a.value;
      });

    this.initialize(root);
    this.accumulate(root);
    this.layout(root);
    treemap(root);
    this.display(root);
  }

  initialize(root) {
    root.x = root.y = 0;
    root.x1 = this.props.width;
    root.y1 = this.props.height;
    root.depth = 0;
  }

  // Aggregate the values for internal nodes.
  // A snapshot of the original children (_children) to avoid
  // the children being overwritten when when layout is computed.
  accumulate(d) {
    console.log("accumulate called " + d.data.item);
    d._children = d.children;

    return d.children
      ? (d.value = d.children.reduce((p, v) => p + this.accumulate(v), 0))
      : d.value;
  }

  // Compute the treemap layout recursively
  layout(d) {
    debugger;
    if (d._children) {
      d._children.forEach((c) => {
        c.x0 = d.x0 + c.x0 * d.x1;
        c.y0 = d.y0 + c.y0 * d.y1;
        c.x1 *= d.x1 - d.x0;
        c.y1 *= d.y1 - d.y0;
        c.parent = d;
        this.layout(c);
      });
    }
  }

  display(d) {
    var self = this;
    var g1: any;
    var transitioning: boolean;
    //here, the function will pass in event,
    //but when I put in app, it will not pass event
    //don't know why.
    var transition = function (event, d) {
      if (transitioning || !d) return;
      transitioning = true;
      var g2 = self.display(d),
        t1 = g1.transition().duration(750),
        t2 = g2.transition().duration(750);

      // Update the domain only after entering new elements.
      self.x.domain([d.x0, d.x0 + (d.x1 - d.x0)]);
      self.y.domain([d.y0, d.y0 + (d.y1 - d.y0)]);

      // Enable anti-aliasing during the transition.
      self.svg.style("shape-rendering", null);

      // Draw child nodes on top of parent nodes.
      self.svg.selectAll(".depth").sort((a, b) => {
        console.log(".depth sort a " + a.depth + " b " + b.depth);
        return a.depth - b.depth;
      });

      // Fade-in entering text.
      g2.selectAll("text").style("fill-opacity", 0);

      // Transition to the new view.
      t1.selectAll(".ptext")
        .call(self.slfTextPos, self.x, self.y)
        .style("fill-opacity", 0);
      t2.selectAll(".ptext")
        .call(self.slfTextPos, self.x, self.y)
        .style("fill-opacity", 1);
      t1.selectAll(".ctext")
        .call(self.chdTextPos, self.x, self.y)
        .style("fill-opacity", 0);
      t2.selectAll(".ctext")
        .call(self.chdTextPos, self.x, self.y)
        .style("fill-opacity", 1);
      t1.selectAll("rect").call(self.rectSize, self.x, self.y);
      t2.selectAll("rect").call(self.rectSize, self.x, self.y);

      // Remove the old node when the transition is finished.
      t1.remove().on("end", () => {
        self.svg.style("shape-rendering", "crispEdges");
        transitioning = false;
      });
    };
    this.grandparent
      .datum(d.parent)
      .on("click", transition)
      .select("text")
      .text(this.navBarTitle(d));

    g1 = this.svg.insert("g", ".grandparent").datum(d).attr("class", "depth");

    var g = g1.selectAll("g").data(d._children).enter().append("g");

    g.filter((d) => {
      return d._children;
    })
      .classed("children", true)
      .on("click", transition);

    var children = g
      .selectAll(".child")
      .data((d) => {
        return d._children || [d];
      })
      .enter()
      .append("g");

    children
      .append("rect")
      .attr("class", "child")
      .call(this.rectSize, this.x, this.y)
      .append("title")
      .text((d) => {
        return d.data.itemShortName + " (" + this.formatNumber(d.value) + ")";
      });

    children
      .append("text")
      .attr("class", "ctext")
      .text((d) => {
        return d.data.itemShortName;
      })
      .call(this.chdTextPos, this.x, this.y);

    g.append("rect")
      .attr("class", "parent")
      .call(this.rectSize, this.x, this.y);

    var t = g.append("text").attr("class", "ptext").attr("dy", ".75em");

    t.append("tspan").text((d) => {
      return d.data.itemShortName;
    });

    t.append("tspan")
      .attr("dy", "1.0em")
      .text((d) => {
        return this.formatNumber(d.value);
      });

    t.call(this.slfTextPos, this.x, this.y);

    g.selectAll("rect").style("fill", (d) => {
      return this.color(d.data.itemShortName);
    });

    return g;
  }

  // calculate the text position for self component
  slfTextPos(text, x, y) {
    text.selectAll("tspan").attr("x", (d) => {
      return x(d.x0) + 6;
    });
    text
      .attr("x", (d) => {
        return x(d.x0) + 6;
      })
      .attr("y", (d) => {
        return y(d.y0) + 3;
      })
      .style("opacity", (d) => {
        var w = x(d.x1) - x(d.x0);
        console.log(
          "text opacity setting textlength " +
            text.node().getComputedTextLength() +
            " d size " +
            w
        );
        return text.node().getComputedTextLength() < w - 6 ? 1 : 0;
      });
  }

  // calcuate the text postion for child component
  chdTextPos(text, x, y) {
    text
      .attr("x", (d) => {
        return x(d.x1) - text.node().getComputedTextLength() - 6;
      })
      .attr("y", (d) => {
        return y(d.y1) - 6;
      })
      .style("opacity", (d) => {
        var w = x(d.x1) - x(d.x0);
        console.log(
          "text2 opacity setting textlength " +
            text.node().getComputedTextLength() +
            " d size " +
            w
        );
        return text.node().getComputedTextLength() < w - 6 ? 1 : 0;
      });
  }

  //calculate the rectangle size for each componment.
  rectSize(rect, x, y) {
    rect
      .attr("x", (d) => {
        return x(d.x0);
      })
      .attr("y", (d) => {
        return y(d.y0);
      })
      .attr("width", (d) => {
        var w = x(d.x1) - x(d.x0);
        console.log("id " + d.id + " rect width " + w);
        return w;
      })
      .attr("height", (d) => {
        var h = y(d.y1) - y(d.y0);
        console.log("id " + d.id + " rect height " + h);
        return h;
      });
  }

  // generate the title for navigation bar.
  navBarTitle(d) {
    return d.parent
      ? this.navBarTitle(d.parent) +
          " / " +
          d.data.itemShortName +
          " (" +
          this.formatNumber(d.value) +
          ")"
      : d.data.itemShortName + " (" + this.formatNumber(d.value) + ")";
  }

  render() {
    const { height, width, margin } = this.props;
    return (
      <div>
        <svg
          width={width - margin.left - margin.right}
          height={height - margin.bottom - margin.top}
        >
          <g
            shape-rendering={"crispEdges"}
            transform={`translate(${margin.left},${margin.top})`}
            ref={this.ref}
          ></g>
        </svg>
      </div>
    );
  }
}
