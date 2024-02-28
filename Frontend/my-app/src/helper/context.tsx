import { createContext, useContext } from "react"

// export type GlobalContext = {
//   isWorkingCapital: boolean
//   setWorkingCapital:(c: boolean) => void
// }

export type ComponentsContextType = {
    isWorkingCapital: boolean
    setWorkingCapital: (c: boolean) => void
    isDaysPayableOutstanding: boolean
    setDaysPayableOutstanding: (c: boolean) => void
}

export const ComponentsContext = createContext<ComponentsContextType>({
    isWorkingCapital: false,
    setWorkingCapital: () => {},
    isDaysPayableOutstanding: false,
    setDaysPayableOutstanding: () => {}
})

export const useComponentsContext = () => useContext(ComponentsContext)

export type IntegrationsContextType = {
    integrationsData: object,
    setIntegrationsData: (object) => void
}

// export const IntegrationsContext = createContext<IntegrationsContextType>({
//     integrationsData: {},
//     setIntegrationsData: () => {}
// })

// export const useIntegrationsContext = () => useContext(IntegrationsContext)

// export const IntegrationsContext = createContext<IntegrationsContextType>({
    
// })

// export const MyGlobalContext = createContext("global")

// export const useGlobalContext = () => useContext(MyGlobalContext)