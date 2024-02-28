import React, { useState } from 'react';
import "./NewIntegrations.css";
import BankIntegrations from './BankIntegrations';
import DaysPayableOutstanding from './DaysPayableOutstanding';
import ERPIntegration from './ERPIntegration';
import WorkingCapitalSmall from './WCSmall';
import { useSelector } from 'react-redux';
import { DataState } from '../helper/dataReducer';

const NewIntegrations = () => {

    const allComponents = {
        WorkingCapitalSmall,
    }

    const allTopComponents = {
        BankIntegrations,
        ERPIntegration
    }

    const [isActive, setIsActive] = useState(false);
    // const [topComponentsList, setTopComponentsList] = useState([BankIntegrations, ERPIntegration])
    const topComponentsList = useSelector<DataState, DataState["shownTopComponents"]>((state) => state["shownTopComponents"])
    const componentsList = useSelector<DataState, DataState["shownComponents"]>((state) => state["shownComponents"])
    const businessName = useSelector<DataState, DataState["businessName"]>((state) => state["businessName"])


  return (
    <div className="leftside">
        <div className="title">
            <h1>The Genius AI Dashboard</h1>
        </div>
        <h2 style={{
            paddingLeft: "25px"
        }}>{businessName}</h2>
        <br></br>
        <div className="topBox">
            {topComponentsList.map((component) => {
                const Component = allTopComponents[component]
                return (
                    <div>
                        <Component />
                    </div>
                )
            })}
        </div>
        <div className="mainbox">
            {componentsList.map((component) => {
                const Component = allComponents[component]
                return (
                    <div> 
                        <Component />
                    </div>
                )
            })}
            {/* {isActive && <DaysPayableOutstanding />}
            <BankIntegrations />
            <ERPIntegration /> */}
        </div>
        
    </div>
  );
};

export default NewIntegrations;