import {
  Area,
  AreaChart,
  // CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";



const LineGraph = ({ lineGraphData }) => {

  const graphData = lineGraphData.map((item) => ({
    name: item.user_id,
    uv: Number(item.amount)
  }))
 


  return (
    <div className="w-full h-full mt-5 overflow-x-auto mb-[60px]">
      <ResponsiveContainer width="90%" height={350}>
        <AreaChart
          data={graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9CFA4A" stopOpacity={0.8} />
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
