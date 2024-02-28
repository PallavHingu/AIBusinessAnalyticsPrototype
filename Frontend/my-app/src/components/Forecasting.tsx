import { FunctionComponent } from "react";
import "./Forecasting.css";
const Forecasting: FunctionComponent = () => {
  return (
    <div className="forecasting">
      <div className="forecastingbox" />
      <b className="ai-forecasting-personalised-s">{`AI-forecasting, Personalised Suggestions & Solutions`}</b>
      <div className="div">1 / 2</div>
      <div className="forecast-3-button">
        <div className="forecast-3-button-child" />
        <div className="forecast-3">Forecast 3</div>
      </div>
      <div className="forecast-2-button">
        <div className="forecast-3-button-child" />
        <div className="forecast-3">Forecast 2</div>
      </div>
      <div className="forecast-1-button">
        <div className="forecast-1-button-child" />
        <div className="forecast-1">Forecast 1</div>
      </div>
      <div className="we-have-forecasted-container">
        <span className="we-have-forecasted-container1">
          <span>{`We have forecasted a shortfall in your working capital of `}</span>
          <b>£100.000</b>
          <span>{` in `}</span>
          <b>24 days</b>
        </span>
      </div>
      <div className="forescrollleftbutton" />
      <div className="forescrollrightbutton" />
      <div className="suggestion1">
        <div className="suggestion1box" />
        <div className="avoid-the-need">
          Avoid the need for finance by paying suppliers later on 31st July, and
          unlock more working capital
        </div>
        <div className="optimise-your-working">
          Optimise your working capital
        </div>
      </div>
      <div className="suggestion2">
        <div className="suggestion2box" />
        <div className="your-outgoing-invoices">
          Your outgoing invoices are pre-approved for financing of £2,000,000.
        </div>
        <div className="apply-for-invoice">Apply for invoice finance →</div>
        <div className="you-are-eligible">
          You are eligible for pre-approved finance
        </div>
        <div className="suggestion2-child" />
      </div>
      <div className="suggestion3">
        <div className="suggestion1box" />
        <div className="improve-your-cashflow">
          Improve your cashflow with a Trade Finance solution; and get the cash
          needed to pay suppliers at the beginning of the sales cycle. You are
          eligible for up to £1,500,000.
        </div>
        <div className="apply-for-trade">Apply for trade finance →</div>
        <div className="you-are-eligible">
          You are eligible for pre-approved finance
        </div>
        <div className="suggestion3-child" />
      </div>
    </div>
  );
};

export default Forecasting;
