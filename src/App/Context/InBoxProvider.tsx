import { useEffect, useState } from "react";
import { InBoxContext, InBoxProviderContext } from "./InBoxContext"
import { Mail } from "../Types/Mail";




export const InBoxProvider = ({children}:any)=>{
    const [selectedMail,setSelectedMail] = useState<Mail|undefined>(undefined);
    
    const [inBoxList,setInBoxList] = useState<Mail[]>([]);
    const [spamList,setSpamList] = useState<Mail[]>([]);
    const [deletedList,setDeletedList] = useState<Mail[]>([]);

    const [mailSection,setMailSection] = useState(String);
    const [timer,setTimer] = useState<NodeJS.Timer|undefined>(undefined)

    // function insertMails(){
    //     let mail : Mail ={
    //         to:"a",
    //         avatar:"s",
    //         body:"d",
    //         date:"s",
    //         from:"s",
    //         id:inBoxList.length,
    //         isReaded:false,
    //         subject:"d",
    //         tag:"d",
    //         attachements:[]
    //     }
    //     inBoxList.push(mail);
    //     setInBoxList(inBoxList)
    // }

    
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         let mail : Mail ={
    //             to:"a",
    //             avatar:"s",
    //             body:"d",
    //             date:"s",
    //             from:"s",
    //             id:inBoxList.length,
    //             isReaded:false,
    //             subject:"d",
    //             tag:"d",
    //             attachements:[]
    //         }
    //         console.log(inBoxList);
            
    //         inBoxList.push(mail);
    //         setInBoxList(inBoxList)
    //     },2000);
    //     return ()=>{
    //         clearInterval(interval)
    //     }
    // },[])

   

    

    const provider:InBoxProviderContext = {
        selectedMail,
        setSelectedMail,
        mailSection,
        setMailSection,
        deletedList,
        setDeletedList,
        inBoxList,
        setInBoxList,
        spamList,
        setSpamList,
    }
    return (<InBoxContext.Provider value={provider}>
        {children}
    </InBoxContext.Provider>);
}