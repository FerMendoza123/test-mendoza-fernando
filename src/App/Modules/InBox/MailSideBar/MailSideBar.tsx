import "./MailSideBar.css";
import { MailItem } from "./MailItem";
import { Mail } from "../../../Types/Mail";
import { useContext, useEffect, useState } from "react";
import { InBoxContext, InBoxProviderContext } from "../../../Context/InBoxContext";
import { initialMailList } from "../../../Context/MailItems";




export function MailSideBar(){
    const [mailList,setMailList] = useState<Mail[]>([]);
    const {
        mailSection,
        setMailSection,
        inBoxList,
        setInBoxList,
        spamList,
        deletedList,
        setSelectedMail
    } : InBoxProviderContext = useContext(InBoxContext)

    useEffect(()=>{
        setInBoxList(initialMailList)
        setMailSection("InBox");
    },[])

    //Change the mails list when the section changes
    useEffect(()=>{
        console.log(inBoxList);
        setSelectedMail(undefined)
        switch (mailSection) {
            case "InBox":
                setMailList(inBoxList);
                break;
            case "Deleted":
                setMailList(deletedList);
                break;
            case "Spam":
                setMailList(spamList);
                break;
            default:
                break;
        }
    },[mailSection])
    
    //Updates de component´s mail list when the inbox list changes and the selected mail section is inbox
    useEffect(()=>{
        if(mailSection == "InBox"){
            setMailList(inBoxList)
        }
    },[inBoxList])
    
    //Changes the selected mails section (InBox,Deleted,Spam)
    function changeSection(e:any){
        if(e.target.value!==mailSection){
            setMailSection(e.target.value)
        }
    }
    return(
        <div id="mail-side-bar">
            <div id="header">
                <div>
                    <h4>{mailSection}</h4>
                    <p>{mailList.filter(mail=>!mail.isReaded).length}</p>
                </div>
                
                <select name="select" id="select-section" onChange={changeSection}>
                    <option value="InBox">InBox</option>
                    <option value="Deleted">Deleted</option>
                    <option value="Spam">Spam</option>
                </select>
            </div>
            <div id="search-bar">

            </div>
            <div id="mail-list">
                {mailList?.map((mail:Mail)=>{
                    return <MailItem key={mail.id} mail={mail}/>;
                })}
            </div>
        </div>
        
    );
}