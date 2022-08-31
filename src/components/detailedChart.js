import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function DetailedChart(props) {
  return (
    <LineChart
      width={960}
      height={360}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis
        type="number"
        dataKey="name"
        domain={["auto", "auto"]}
        width={720}
      />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        data={props.recommendations[props.symbol.index].data}
        dataKey="zv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

export default DetailedChart;
