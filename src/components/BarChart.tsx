import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DashboardBarChart = ({ data }) => {

  
  const graphData = data?.map((item) => ({
    name: item.user_id,
    uv: Number(item.amount)
  }))

  return (
    <>



      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={graphData}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
          barSize={9}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#DDF5C9" background={{ fill: '#eee' }} radius={[5, 5, 0, 0]} />
          <Bar dataKey="uv" fill="#9CFA4A" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default DashboardBarChart