import { createContext, FunctionComponent, useState } from "react";
import "./ChatInitial.css";

import NewIntegrations from "../components/NewIntegrations";
import NewChatBox from "../components/newChatBox";
import { IntegrationsContextType } from "../helper/context";

// import prompts from './Prompts.js';

export const IntegrationsContext = createContext<IntegrationsContextType>();

const ChatInitial: FunctionComponent = () => {

    const [integrationsData, setIntegrationsData] = useState({
        "businessName": "",
        "shownComponents": [],
        "shownTopComponents": [],
        "banksQueue": [],
        "bankInfo": [],
        "erpInfo" : {}
    })

    return (
        <IntegrationsContext.Provider value={{integrationsData, setIntegrationsData}}>
            <div className="chatPageBody">
                <NewIntegrations /> 
                <NewChatBox />
            </div>
        </IntegrationsContext.Provider>
    )
};

export default ChatInitial;
