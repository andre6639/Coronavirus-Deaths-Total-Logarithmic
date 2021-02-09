import { line, curveNatural } from 'd3';
export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  circleRadius,
  tooltipFormat
}) => (
  <g className="marks">
    <path
      fill="none"
      stroke="black"
      d={line()
        .x((d) => xScale(xValue(d)))
        .curve(curveNatural)
        .y((d) => yScale(yValue(d)))(data)
        }
    />
		// trying to fiure out how to make a tooltip work
    {
     // data.map((d) => (
     // <circle cx={xScale(xValue(d))} cy={yScale(yValue(d))} r={circleRadius}>
     //  <title>{tooltipFormat(xValue(d))}</title>
     // </circle>))
    }
  </g>
  
);
