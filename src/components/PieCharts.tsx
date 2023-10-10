
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#B71E41", "#B71E41", "#B71E41", "#FF8042"];



const PieCharts = ({ pieChartData }) => {

  const graphData = pieChartData?.map((item) => ({
    name: item.user_id,
    uv: Number(item.amount)
  }))
  return (
    <>

      <div className="w-full h-full">
        <ResponsiveContainer width="99%" height={300} className="">
          <PieChart>
            <Pie
              data={graphData}
              innerRadius={"70%"}
              outerRadius={"100%"}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
export default PieCharts;