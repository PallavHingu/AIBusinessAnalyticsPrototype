import { FunctionComponent, PureComponent, useContext } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import "./WorkingCapitalGraph.css";
// import { ComponentsContext } from "../helper/context";


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 400 },
];

const data2 = [
    { name: 'Group A', value: 100 },
    { name: 'Group B', value: 300 },
];

const COLORS = ['#FE414D', '#EEEEEE'];
const COLORS2 = ['#B4B4B4', '#0000000'];

// const {isWorkingCapital, setWorkingCapital, isDaysPayableOutstanding, setDaysPayableOutstanding} = useContext(ComponentsContext);

export default class WorkingCapitalGraph extends PureComponent {

  render() {
    return (
      <div className="workingcapitalgraph">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart >
            <Pie
              data={data}
              cornerRadius={40}
              innerRadius={60}
              outerRadius={75}
              paddingAngle={-10}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Pie
              data={data2}
              cornerRadius={40}
              innerRadius={45}
              outerRadius={60}
              paddingAngle={-10}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}