import { FunctionComponent } from "react";
import DioGraph from "./DioGraph";
import "./DaysInventoryOutstanding.css";
const DaysInventoryOutstanding: FunctionComponent = () => {
  return (
    <div className="days-inventory-outstanding">
      <div className="diobox" />
      <div className="forecasted-to-be-container">
        <span className="forecasted-to-be-container1">
          <span>{`Forecasted to be fulfilled in `}</span>
          <b>58 days</b>
        </span>
      </div>
      <b className="b1">£35,000,000</b>
      <b className="days-inventory-outstanding1">Days Inventory Outstanding</b>
      <div className="total-stock-value">Total stock value</div>
      <div className="dioline" />
      <DioGraph />
    </div>
  );
};

export default DaysInventoryOutstanding;
