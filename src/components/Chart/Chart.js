import React, {Component} from 'react';
import * as d3 from 'd3';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.svgElemref = React.createRef();
  }

  componentDidMount() {
    let accerssToref = d3.select(this.myRef.current)
      .selectAll("div")
        .data([4, 8, 15, 16, 23, 42])
      .enter()
        .append("div")
        .text(d => {
          if(d % 2) {
            return "even"
          }
          else {
            return "odd"
          }
        });
    
    const data = [1, 3, 5, 6, 7, 8];

    let svg_elem = d3.select(this.svgElemref.current);
    // svg_elem.selectAll("circle")
    //     .data(data)
    //     .enter()
    //     .append("circle")
    //     .attr("cx", (d, i) => d * 25)
    //     .attr("cy", 10)
    //     .attr("r", (d, i) => d)
    //     .attr("fill", "tomato");

    var line = d3.line()
      .x(function(d) { return d.date })
      .y(function(d) { return d.value });

    const generated_d = d3.line()([[10, 60], [10, 90], [30, 10], [40, 10]]);
    console.log(generated_d)
    svg_elem.select("path")
            .attr("d", generated_d)
            .attr("fill", "none")
            .attr("stroke-width", "3")
            .attr("stroke", "red");

    accerssToref.style('background-color', 'green');
  }

  render() {
    return (
      <>
        <div ref={this.myRef}></div>
        <svg width={1000} height={1000} ref={this.svgElemref}>
          <path />
        </svg>
      </>
    )
  }

}

export default BarChart;