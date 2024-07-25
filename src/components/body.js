import React from "react";
import Sidebar from "./sidebar";
import Maincontainer from "./maincontainer";

const Body = () =>{
    return(
        <div className="flex grid-flow-col">
        {/* <div>Body</div> */}
        <div className="col-span-2"><Sidebar/></div>
        <div className="col-span-10"><Maincontainer/></div>
        
        </div>

    )
}

export default Body;