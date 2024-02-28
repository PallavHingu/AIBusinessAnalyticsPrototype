import { FunctionComponent } from "react";
import "./Filters.css";
const Filters: FunctionComponent = () => {
  return (
    <div className="filters">
      <div className="timeframepicker" />
      <div className="unitpicker" />
      <div className="viewpicker" />
    </div>
  );
};

export default Filters;
