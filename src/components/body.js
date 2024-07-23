import React from "react";
import Sidebar from "./sidebar";
import Maincontainer from "./maincontainer";

const Body = () =>{
    return(
        <div className="flex">
        {/* <div>Body</div> */}
        <Sidebar/>
        <Maincontainer/>
        </div>

    )
}

export default Body;