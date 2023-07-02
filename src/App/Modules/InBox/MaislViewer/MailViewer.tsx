import { FunctionComponent, ReactElement, useContext } from "react";
import { InBoxContext, InBoxProviderContext } from "../../../Context/InBoxContext";
import "./MailViewer.css";

export const MailViewer : FunctionComponent = () : ReactElement => {
    const {selectedMail, mailSection} : InBoxProviderContext = useContext(InBoxContext);

    const MailView : FunctionComponent = () : ReactElement =>{
        return(
        <div id="mail-viewer">
            <header id="buttons-section" className="view-section" >
                <button id="delete-btn" className="view-btn">Delete</button>
                <button id="span-btn" className="view-btn">Span</button>
                <button id="unread-btn" className="view-btn blue-btn">Mark as unread</button>
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