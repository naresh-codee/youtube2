import React from "react";

import hamburgermenu from "../constants/images/hamburgermenu.png";
import youtube_logo from "../constants/images/Youtubelogo.jpg";
import user_logo from "../constants/images/userlogo.jpg"

import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appslice";



const Head = () => {

    const dispatch = useDispatch();
    const hamburgerMenuToggle= () =>{
        dispatch(toggleMenu());
    }
    

    return(
        <div className="grid grid-flow-col items-center my-1 shadow-lg">
            <div className="flex p-1 col-span-1 items-center ">
                <img className="h-10 w-12" alt="hamburger_menu" src={hamburgermenu} onClick={() =>{
                    hamburgerMenuToggle()
                }} />
                <img className="h-16 w-24" alt="youtube_logo" src={youtube_logo}/>
            </div>

            <div className="col-span-10">
                
                <input className=" border border-black border-r-none rounded-full rounded-r-none py-2 px-2 w-1/2 bg-slate-300 text-black " type="text" placeholder="Search" />
                <button className="border border-black border-l-transparent rounded-r-full p-2 w-10">🔍</button>
            </div>


            <div>
                <img className="col-span-1 h-12 w-13  p-1 " alt="user_logo" src={user_logo}/>
            </div>
        </div>
    )
}

export default Head ;