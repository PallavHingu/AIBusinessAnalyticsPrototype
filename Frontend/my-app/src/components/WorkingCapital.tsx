import { FunctionComponent } from "react";
import WorkingCapitalGraph from "./WorkingCapitalGraph";
import "./WorkingCapital.css";

const WorkingCapital: FunctionComponent = () => {
  return (
    <div className="working-capital">
      <div className="wcbox" />
      <div className="unlocked-42500000-locked-container">
        <span className="unlocked-42500000-locked-container1">
          <p className="unlocked">
            <span>
              <span> Unlocked</span>
            </span>
          </p>
          <p className="p">
            <span>
              <span>{` `}</span>
            </span>
          </p>
          <p className="p1">
            <b>£42,500,000</b>
          </p>
          <p className="unlocked">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="unlocked">
            <span>
              <span> Locked</span>
            </span>
          </p>
          <p className="p">
            <span>
              <span>{` `}</span>
            </span>
          </p>
          <p className="p1">
            <b>£42,500,000</b>
          </p>
          <p className="unlocked">
            Target: £10.000.000 estimated to unlock in 68 days
          </p>
        </span>
      </div>
      <div className="accounts-payable-7500000-container">
        <span className="unlocked-42500000-locked-container1">
          <p className="unlocked">
            <span>
              <span> Accounts Payable</span>
            </span>
          </p>
          <p className="p">
            <span>
              <span>{`  `}</span>
            </span>
          </p>
          <p className="p1">
            <b>£7,500,000</b>
          </p>
          <p className="unlocked">
            <span>
              <span>25% open invoices</span>
            </span>
          </p>
          <p className="unlocked">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="unlocked">
            <span>
              <span> Short term borrowings</span>
            </span>
          </p>
          <p className="p">
            <span>
              <span>{` `}</span>
            </span>
          </p>
          <p className="p1">
            <b>£17,500,000</b>
          </p>
          <p className="unlocked">5 finance products</p>
        </span>
      </div>
      <b className="assets">Assets</b>
      <b className="liabilities">Liabilities</b>
      <div className="wchortizontalline" />
      <div className="wcverticalline" />
      <div className="total-working-capital-container">
        <span className="unlocked-42500000-locked-container1">
          <p className="unlocked">Total Working Capital</p>
          <p className="p8">
            <b>£60.000.000</b>
          </p>
        </span>
      </div>
      <div className="unlockedcolor" />
      <div className="lockedcolor" />
      <div className="apcolor" />
      <div className="stbcolor" />
      <WorkingCapitalGraph />
    </div>
  );
};

export default WorkingCapital;
