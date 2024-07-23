import React from "react";
import Buttonlist from "./buttonlist";
import Videocontainer from "./videocontainer";

const Maincontainer = () =>{
    return(
        <div className="flex">
            <Buttonlist/>
            <Videocontainer/>
        </div>
    )
}

export default Maincontainer;