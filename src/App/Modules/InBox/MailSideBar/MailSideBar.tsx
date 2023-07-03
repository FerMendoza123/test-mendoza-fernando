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
    
    useEffect(()=>{
        if(mailSection == "InBox"){
            setMailList(inBoxList)
        }
    },[inBoxList])
    
    function changeSection(e:any){
        if(e.target.value!==mailSection){
            setMailSection(e.target.value)
        }
    }
    return(
        <div id="mail-side-bar">
            <div id="header">
                <h4>{mailSection}</h4>
                <select name="select" id="" onChange={changeSection}>
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