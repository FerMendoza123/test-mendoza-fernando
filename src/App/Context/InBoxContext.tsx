import { createContext } from "react";
import { Mail } from "../Types/Mail";


export interface InBoxProviderContext{
    selectedMail : Mail|undefined,
    setSelectedMail : Function,
    mailSection : string,
    setMailSection : Function,
    inBoxList : Mail[];
    setInBoxList : Function,
    spamList : Mail[];
    setSpamList : Function,
    deletedList : Mail[];
    setDeletedList : Function,
}

export const InBoxContext = createContext<InBoxProviderContext>({} as InBoxProviderContext);