import "./DioGraph.css";

import React, { PureComponent } from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const data = [

  {

    name: 'Page A',

    uv: 4000,

    pv: 2400,

    amt: 2400,

  },

  {

    name: 'Page B',

    uv: 3000,

    pv: 1398,

    amt: 2210,

  },

  {

    name: 'Page C',

    uv: 2000,

    pv: 9800,

    amt: 2290,

  },

  {

    name: 'Page D',

    uv: 2780,

    pv: 3908,

    amt: 2000,

  },

  {

    name: 'Page E',

    uv: 1890,

    pv: 4800,

    amt: 2181,

  },

];




export default class DioGraph extends PureComponent {

  render() {
    return (
      <div className="diograph">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            // width={500}
            // height={300}
            data={data}
            // margin={{
            //   top: 20,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
          >
            <CartesianGrid horizontal={true} vertical={false} />
            <XAxis dataKey="name" />
            <YAxis axisLine={false} />
            <Bar barSize={50} name="not approved: £4,500,000" dataKey="uv" stackId="a" fill="#f55151" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

}