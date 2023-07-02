import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { MailSideBar } from "./MailSideBar/MailSideBar";
import { MailViewer } from "./MaislViewer/MailViewer";
import "./InBox.css";
import { InBoxProvider } from "../../Context/InBoxProvider";

export const InBox : FunctionComponent = () : ReactElement =>{
    

    

    return(
        <div id="inBox">
            <InBoxProvider>
                <MailSideBar/>
                <MailViewer/>
            </InBoxProvider>
        </div>
    );
}