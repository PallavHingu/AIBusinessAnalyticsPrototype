import { FunctionComponent } from "react";
import "./KeyQuaterlyObservations.css";
const KeyQuaterlyObservations: FunctionComponent = () => {
  return (
    <div className="key-quaterly-observations">
      <div className="kqobox" />
      <b className="key-quarterly-observations">Key Quarterly Observations</b>
      <div className="you-have-completed-container">
        <span className="you-have-completed-container1">
          <span>{`You have completed `}</span>
          <b>1500 transactions</b>
          <span>{` through these `}</span>
          <b>top 5 bank</b>
          <span> relationships</span>
        </span>
      </div>
      <div className="your-top-5-container">
        <span className="you-have-completed-container1">
          <span>{`Your `}</span>
          <b>top 5</b>
          <span> clients with unpaid invoices</span>
        </span>
      </div>
      <div className="total-banks-10-container">
        <span className="you-have-completed-container1">
          <span>{`Total banks: `}</span>
          <b>10</b>
        </span>
      </div>
      <div className="total-value-of-container">
        <span className="you-have-completed-container1">
          <span>{`Total value of unpaid invoices associated with top 5 clients: `}</span>
          <b>£3,500,000</b>
        </span>
      </div>
      <div className="kqoline" />
    </div>
  );
};

export default KeyQuaterlyObservations;
