import { createContext, useContext, useState } from "react";

export const AlertContext = createContext();


export const AltertProvider = ({ children }) => {

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("info");
    const [message, setMessage] = useState("");

    const openAlert = (option, msg) => {
        setOpen(true)
        setSeverity(option);
        setMessage(msg);
    }

    const closeAlert = () => {
        setOpen(false)
    }

    return (
        <AlertContext.Provider value={{ openAlert, closeAlert, open, severity, message }}>
            {children}
        </AlertContext.Provider>
    )
}

export const useAlert = () => useContext(AlertContext)