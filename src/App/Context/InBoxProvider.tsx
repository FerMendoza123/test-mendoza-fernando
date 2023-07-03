import { useEffect, useState } from "react";
import { InBoxContext, InBoxProviderContext } from "./InBoxContext"
import { Mail } from "../Types/Mail";
import { initialMailList } from "./MailItems";
import { randomInt } from "crypto";




export const InBoxProvider = ({children}:any)=>{
    const [selectedMail,setSelectedMail] = useState<Mail|undefined>(undefined);
    
    const [inBoxList,setInBoxList] = useState<Mail[]>([]);
    const [spamList,setSpamList] = useState<Mail[]>([]);
    const [deletedList,setDeletedList] = useState<Mail[]>([]);

    const [mailSection,setMailSection] = useState(String);


    // async function insertMails(){
    //     let mail : Mail ={
    //         to:"",
    //         avatar:"",
    //         body:"",
    //         date:"",
    //         from:"",
    //         id:inBoxList.length,
    //         isReaded:false,
    //         subject:"",
    //         tag:"",
    //         attachements:[]
    //     }
    //     inBoxList.push(mail);
    //     console.log(inBoxList);
        
    //     setMailList(inBoxList);
    // }
    // async function getMails(){
    //     setInterval(insertMails,1000)
    // }
    
   

    

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