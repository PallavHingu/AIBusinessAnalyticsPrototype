import { FunctionComponent } from "react";
import "./Header.css";
const Header: FunctionComponent = () => {
  return (
    <div className="header">
      <b className="ai-dashboard-container">
        <span className="ai-dashboard-container1">
          <span>{`AI `}</span>
          <span className="span">-</span>
          <span> DASHBOARD</span>
        </span>
      </b>
      <div className="header-child" />
      <div className="notificationsbutton" />
      <div className="profilebutton" />
      <div className="search-for-anything">Search for anything...</div>
      <div className="headerline" />
    </div>
  );
};

export default Header;
