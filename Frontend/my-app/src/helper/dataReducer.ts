type ERP = {
    name: string,
    id: string,
    logo: string,
    status: string
}

type BANKS = {
    name: string,
    accountNo: string,
    sortCode: string,
    icon: string,
    connected: boolean,
}

type COMPONENT = "WorkingCapitalSmall" | "KeyQuaterlyObservations" | "Forecasting" | "DaysSalesOutstanding" | "DaysPayableOutstanding" | "DaysInventoryOutstanding"

type TOPCOMPONENT = "BankIntegrations" | "ERPIntegration"

export interface DataState {
    businessName: string,
    shownComponents: TOPCOMPONENT[],
    shownTopComponents: COMPONENT[],
    bankInfo: BANKS[], 
    erpInfo: ERP[],
}

const initialState = {
    businessName: "",
    shownComponents: [],
    shownTopComponents: [],
    bankInfo: [], 
    erpInfo: [],
}

type Action = {type: "UPDATE_DATA", payload: object}

export const dataReducer = (state:DataState = initialState, action: Action) => {
    switch(action.type){
        case "UPDATE_DATA": {
            return action.payload;
        }
        default:
            return state
    }
}