import "./MailSideBar.css";
import { MailItem } from "./MailItem";
import { Mail } from "../../../Types/Mail";
import { useContext } from "react";
import { InBoxContext, InBoxProviderContext } from "../../../Context/InBoxContext";




export function MailSideBar(){
    const {
        mailList,
    } : InBoxProviderContext = useContext(InBoxContext)

    
    return(
        <div id="mail-side-bar">
            <div id="header">

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