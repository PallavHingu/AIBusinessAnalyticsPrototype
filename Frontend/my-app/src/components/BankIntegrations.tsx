import { FunctionComponent, useState } from "react";
import "./BankIntegrations.css";
import { useSelector } from 'react-redux';

const BankIntegrations: FunctionComponent = () => {

  // const [banks, setBanks] = useState([{
  //   name: "Natwest",
  //   accountNo: "3523455",
  //   sortCode: "",
  //   icon: "https://static.cdnlogo.com/logos/n/89/natwest.svg",
  //   connected: false
  // },
  // {
  //   name: "Natwest",
  //   accountNo: "5432345",
  //   sortCode: "",
  //   icon: "https://static.cdnlogo.com/logos/n/89/natwest.svg",
  //   connected: true
  // },
  // {
  //   name: "Natwest",
  //   accountNo: "654346",
  //   sortCode: "",
  //   icon: "https://static.cdnlogo.com/logos/n/89/natwest.svg",
  //   connected: true
  // },
  // {
  //   name: "Natwest",
  //   accountNo: "435234",
  //   sortCode: "",
  //   icon: "https://static.cdnlogo.com/logos/n/89/natwest.svg",
  //   connected: false
  // }])

  const banks = useSelector<DataState, DataState["bankInfo"]>((state) => state["bankInfo"])

  return (
    <div className="bank-integrations">
      <b className="your-business-bank">Your Bank Accounts:</b>
      <div className="banks">
        {banks.map((bank) => {
          return (
            <div className="bank">
              <img className="bankIcon" alt="" src={bank.icon} />
              <div className="bankInfo">
                <div className="bankNameStatus">
                  <span className="bankName">{bank.name}</span>
                  {bank.connected && 
                  <div className="connection">
                    <span className="material-symbols-outlined connectedIcon">check_circle</span>
                    <span className="connected">Connected</span>
                  </div>}
                </div>
                
                <span className="accountNo">{"Account no.: " + bank.accountNo}</span>
                <span className="sortCode">{"Sort code: " + bank.sortCode}</span>
              </div>
              

            </div>
          )
        })}
      </div>
      {/* <div className="banks">
        <div className="bankName">Natwest</div>
        <div className="account-no">Account no.:</div>
        <div className="sort-code">Sort code:</div> 
        <img className="bankIcon" alt="" src="https://static.cdnlogo.com/logos/n/89/natwest.svg" />
      </div> */}
    </div>
  );
};

export default BankIntegrations;
