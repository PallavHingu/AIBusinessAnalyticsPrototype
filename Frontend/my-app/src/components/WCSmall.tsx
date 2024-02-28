import WorkingCapitalGraph from './WorkingCapitalGraph';
import './WorkingCapitalSmall.css'
import { FunctionComponent, useState } from "react";


const WorkingCapitalSmall: FunctionComponent = () => {

  const [workingCapitalNumber, setWorkingCapitalNumber] = useState(2000)


  return (
    <div className="wcBox" >
      <div className="wcGraphContainer">
        <WorkingCapitalGraph />
      </div>
      <span className='wcTitle'>Total Working Capital</span>
      <span className='wcNumber'>{"£" + workingCapitalNumber}</span>

    </div>
    
  );
};

export default WorkingCapitalSmall;