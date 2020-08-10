import React, {Component, useEffect, useRef} from 'react';
import * as d3 from 'd3';

export default () => {
  const myRef = useRef();
  const svgElemref = useRef();

  useEffect(() => {
    let accerssToref = d3.select(myRef.current)
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

    let svg_elem = d3.select(svgElemref.current);
    svg_elem.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d, i) => d * 55)
        .attr("cy", 50)
        .attr("r", 30)
        .transition()
        .delay(750)
        .on("start", function() { d3.select(this).style("color", "green"); })
        .style("color", "red");

    // var line = d3.line()
    //   .x(function(d) { return d.date })
    //   .y(function(d) { return d.value });

    // const generated_d = d3.line()([[10, 60], [10, 90], [30, 10], [40, 10]]);
    // console.log(generated_d)
    // svg_elem.select("path")
    //         .attr("d", generated_d)
    //         .attr("fill", "none")
    //         .attr("stroke-width", "3")
    //         .attr("stroke", "red");

    accerssToref.style('background-color', 'green');
  }, []);

  
    return (
      <>
        <div ref={myRef}></div>
        <svg width={1000} height={200} ref={svgElemref}>
          <path />
        </svg>
      </>
    )
}