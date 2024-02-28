import { FunctionComponent } from "react";
import DsoGraph from "./DsoGraph";
import "./DaysSalesOutstanding.css";
const DaysSalesOutstanding: FunctionComponent = () => {
  return (
    <div className="days-sales-outstanding">
      <b className="days-sales-outstanding1">Days Sales Outstanding</b>
      <div className="dsobox" />
      <div className="total-clients-68-container">
        <span className="total-clients-68-container1">
          <span>{`Total Clients: `}</span>
          <b>68</b>
        </span>
      </div>
      <div className="estimated-collection-in-container">
        <span className="total-clients-68-container1">
          <span>{`Estimated collection in `}</span>
          <b>94 days</b>
        </span>
      </div>
      <b className="b2">£7 ,500,000</b>
      <div className="total-receivables">Total receivables</div>
      <div className="dsoline" />
      <b className="days-sales-outstanding1">Days Sales Outstanding</b>
      <DsoGraph />
    </div>
  );
};

export default DaysSalesOutstanding;
