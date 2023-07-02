import { FunctionComponent, ReactElement, useContext } from "react";
import { InBoxContext, InBoxProviderContext } from "../../../Context/InBoxContext";
import "./MailSideBar.css"
import { Mail } from "../../../Types/Mail";

interface props {
    mail : Mail,   
} 

export function MailItem({mail}:props){
    const {
        selectedMail,
        setSelectedMail,
    } : InBoxProviderContext = useContext(InBoxContext)

    const updateSelected = ()=>{
        setSelectedMail(mail);
    }

    return(
        <div className={"mail-item " + (mail == selectedMail ? "selected-item " : "") + (!mail.isReaded? "new-item " : "")} onClick={updateSelected}>
            <div>
                <h4 className="sender">{mail.from}</h4>
                <p>{mail.subject}</p>
            </div>
            <div>
                <p className="date">{mail.date}</p>
                <i></i>
            </div>
        </div>
    );
}