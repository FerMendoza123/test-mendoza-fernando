import { createContext } from "react";
import { Mail } from "../Types/Mail";


export interface InBoxProviderContext{
    selectedMail : Mail|undefined,
    setSelectedMail : Function,
    mailList : Mail[],
    setMailList : Function,
    mailSection : string,
    setMailSection : Function,
}

export const InBoxContext = createContext<InBoxProviderContext>({} as InBoxProviderContext);