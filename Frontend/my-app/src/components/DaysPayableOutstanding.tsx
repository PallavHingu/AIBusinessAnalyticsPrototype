import { FunctionComponent } from "react";
import DpoGraph from "./DpoGraph";
import "./DaysPayableOutstanding.css";
const DaysPayableOutstanding: FunctionComponent = () => {
  return (
    <div className="days-payable-outstanding">
      <div className="dpobox" />
      <b className="days-payable-outstanding1">Days Payable Outstanding</b>
      <div className="estimated-to-be-container">
        <span className="estimated-to-be-container1">
          <span>Estimated to be paid in 37</span>
          <b> days</b>
        </span>
      </div>
      <b className="b">£7 ,500,000</b>
      <div className="total-value-of">Total value of invoices payable</div>
      <div className="dpoline" />
      <DpoGraph />
    </div>
  );
};

export default DaysPayableOutstanding;
