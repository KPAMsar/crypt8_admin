import {
  Area,
  AreaChart,
  // CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LineGraph = () => {
  return (
    <div className="w-full h-full mt-5 overflow-x-auto mb-[60px]">
      <ResponsiveContainer width="90%" height={350}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
           <defs>
      <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00FF00" stopOpacity={0.8} />
        <stop offset="100%" stopColor="#00FF00" stopOpacity={0} />
      </linearGradient>
    </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#23A455" fill="url(#fillGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
