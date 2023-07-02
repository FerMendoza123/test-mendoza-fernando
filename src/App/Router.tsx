import { FunctionComponent, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { InBox } from "./Modules/InBox/InBox";


export const AppRouter : FunctionComponent = () : ReactElement => {
    return(
        <Routes>
            <Route path="/" element={<InBox/>}/>
        </Routes>
    );
}