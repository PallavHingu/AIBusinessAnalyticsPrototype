import { FunctionComponent, useState } from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import WorkingCapital from "../components/WorkingCapital";
import DaysPayableOutstanding from "../components/DaysPayableOutstanding";
import DaysInventoryOutstanding from "../components/DaysInventoryOutstanding";
import Forecasting from "../components/Forecasting";
import DaysSalesOutstanding from "../components/DaysSalesOutstanding";
import KeyQuaterlyObservations from "../components/KeyQuaterlyObservations";
import RM from "../components/RM";
import "./DashboardInitial.css";
import { ComponentsContext } from "../helper/context";
const DashboardInitial: FunctionComponent = () => {

  const [isWorkingCapital, setWorkingCapital] = useState(true);
  const [isDaysPayableOutstanding, setDaysPayableOutstanding] = useState(true);

  return (
    <ComponentsContext.Provider value={{isWorkingCapital, setWorkingCapital, isDaysPayableOutstanding, setDaysPayableOutstanding}}>
      <div className="dashboard-initial">
        <div className="background" />
        <Filters />
        <Header />
        <div className="column1">
          <div className="spacer1" />
          <div className="row1">
            <WorkingCapital />
            <DaysPayableOutstanding />
            <DaysInventoryOutstanding />
          </div>
          <div className="spacer1" />
          <div className="row2">
            <Forecasting />
            <DaysSalesOutstanding />
            <KeyQuaterlyObservations />
          </div>
          <div className="spacer1" />
        </div>
        <RM />
      </div>
    </ComponentsContext.Provider>
    
  );
};

export default DashboardInitial;
