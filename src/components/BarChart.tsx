import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DashboardBarChart = ()=>{

    const data = [
        {
          name: 'Jan',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Sep',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Oct',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Nov',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Dec',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
      ];
      
    return(
<>



<ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
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