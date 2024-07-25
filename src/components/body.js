import React from "react";
import Sidebar from "./sidebar";
//import Maincontainer from "./maincontainer";

import {Outlet} from "react-router-dom";

const Body = () =>{
    return(
        <div className="flex grid-flow-col">
        {/* <div>Body</div> */}
        <div className="col-span-2"><Sidebar/></div>
        <div className="col-span-10"><Outlet/></div>  {/** here this outlet can be maincontainer or watchpage , this comes from the children routing of the router configuration from the app,js file*/}
        
        </div>

    )
}

export default Body;