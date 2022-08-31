import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const stokes = ["#ff0000", "#0000ff", "#12cd9d"];

function SummaryChart(props) {
  function showDetails(event, index) {
    props.detailedChart({ name: event.name, index: index });
  }
  return (
    <LineChart
      width={1780}
      height={400}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis
        type="number"
        dataKey="name"
        domain={["auto", "auto"]}
        width={120}
      />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />

      <Legend
        layout="vetical"
        verticalAlign="middle"
        align="right"
        onClick={showDetails}
      />

      {props.data.map((each, i) => (
        <Line
          type="monotone"
          data={each.data}
          dataKey="zv"
          stroke={stokes[i]}
          onClick={(event) => showDetails(event, i)}
          strokeWidth={2}
          activeDot={{ r: 8 }}
          name={each.symbol}
        />
      ))}
    </LineChart>
  );
}

export default SummaryChart;
