import { FunctionComponent, ReactElement, useContext } from "react";
import { InBoxContext, InBoxProviderContext } from "../../../Context/InBoxContext";
import "./MailViewer.css";
import { Mail } from "../../../Types/Mail";

export const MailViewer : FunctionComponent = () : ReactElement => {
    const {
        selectedMail, 
        setSelectedMail,
        mailSection,
        inBoxList,
        setInBoxList,
        deletedList,
        setDeletedList,
        spamList,
        setSpamList
    } : InBoxProviderContext = useContext(InBoxContext);


    function deleteMail(){
        setInBoxList(inBoxList.filter(mail=>mail!==selectedMail))
        deletedList.push(selectedMail as Mail);
        setDeletedList(deletedList);
        setSelectedMail(undefined);
    }
    function sendToSpam(){
        setInBoxList(inBoxList.filter(mail=>mail!==selectedMail))
        spamList.push(selectedMail as Mail);
        setSpamList(spamList);
        setSelectedMail(undefined);
    }
    function markAsUnread(){
        var idx : number = inBoxList.findIndex(mail => mail==selectedMail);
        inBoxList[idx].isReaded = false;
        setInBoxList(inBoxList);
    }


    const MailView : FunctionComponent = () : ReactElement =>{
        return(
        <div id="mail-viewer">
            <header id="buttons-section" className="view-section" >

                {mailSection==="InBox" && 
                <>
                    <button id="delete-btn" className="view-btn" onClick={deleteMail}>Delete</button>
                    <button id="span-btn" className="view-btn" onClick={sendToSpam}>Span</button>
                    <button id="unread-btn" className="view-btn blue-btn" onClick={markAsUnread}>Mark as unread</button>
                </>
                }
            </header>
            <section className="view-section">
                <h3>{selectedMail?.from}</h3>
                <div id="tag-section" className="content-section">
                    <span><b>Tags</b></span>
                    <div className="mail-tag">{mailSection}</div>
                    <div className="mail-tag">{selectedMail?.tag}</div>
                </div>
                <div id="body-section" className="content-section">
                    <p id="body">
                        {selectedMail?.body}
                    </p>
                    <div id="body-footer">
                        {/* <i></i> */}
                        <button id="replay-btn" className="view-btn blue-btn">Replay</button>
                    </div>
                </div>
            </section>
            
        </div>);
    }
    return(
        selectedMail? <MailView/>
        : <></>
    );
}