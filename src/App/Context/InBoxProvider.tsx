import { useEffect, useState } from "react";
import { InBoxContext, InBoxProviderContext } from "./InBoxContext"
import { Mail } from "../Types/Mail";
import { initialMailList } from "./MailService";
import { randomInt } from "crypto";




export const InBoxProvider = ({children}:any)=>{
    const [selectedMail,setSelectedMail] = useState<Mail|undefined>(undefined);
    const [mailList,setMailList] = useState<Mail[]>([]);
    var inBoxList : Mail[]=[];
    var spamList : Mail[]=[];
    var deletedList : Mail[]=[];
    const [mailSection,setMailSection] = useState(String);


    async function insertMails(){
        let mail : Mail ={
            to:"",
            avatar:"",
            body:"",
            date:"",
            from:"",
            id:inBoxList.length,
            isReaded:false,
            subject:"",
            tag:"",
            attachements:[]
        }
        inBoxList.push(mail);
        console.log(inBoxList);
        
        setMailList(inBoxList);
    }
    async function getMails(){
        setInterval(insertMails,1000)
    }
    useEffect(()=>{
        setMailSection("InBox");
        inBoxList=initialMailList;
        setMailList(initialMailList);
        // getMails();
    },[])
    useEffect(()=>{
        if(mailSection=="InBox" && selectedMail && !selectedMail.isReaded){
            let mails : Mail[] = inBoxList;
            let idx = mails.findIndex(mail=>mail===selectedMail)
            mails[idx].isReaded = true;
            setMailList(mails);
        }
    },[selectedMail])

    // useEffect(()=>{
    //     switch (mailSection) {
    //         case "InBox":
                
    //             break;
    //         case "":
                
    //             break;
    //         case "":
                
    //             break;
    //         default:
    //             break;
    //     }
    // },[mailList])

    const provider:InBoxProviderContext = {
        selectedMail,
        setSelectedMail,
        mailList,
        setMailList,
        mailSection,
        setMailSection,
    }
    return (<InBoxContext.Provider value={provider}>
        {children}
    </InBoxContext.Provider>);
}