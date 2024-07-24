import React from "react";

import { useSelector } from "react-redux";

const Sidebar = () =>{
    const isToggleMenu = useSelector((store) => store.app.isToggleMenu);

    if(!isToggleMenu) return null 
    
    return(
    
        <div className="shadow-lg mx-1 my-1 px-1 w-40">
            

                <div className="border border-b-slate-200 p-1">
                    <ul>
                    <ol>Home</ol>
                    <ol>Shorts</ol>
                    <ol>Subscriptions</ol>
                    </ul>
                </div>

                <div className="border border-b-slate-200 p-1">
                  
                    <ul>
                        <ol>History</ol>
                        <ol>Playlist</ol>
                        <ol>Watch later</ol>
                        <ol>Liked videos</ol>

                    </ul>
                </div>

                <div className="border border-b-slate-200 p-1" >
                    <ul>
                        <ol>Trending</ol>
                        <ol>Shopping</ol>
                        <ol>Music</ol>
                        <ol>Films</ol>
                        <ol>Live</ol>
                        <ol>Gaming</ol>
                        <ol>News</ol>
                        <ol>Sports</ol>
                        <ol>Courses</ol>
                        <ol>Fashion & Beauty</ol>
                        <ol>Podcast</ol>
                    </ul>

            </div>
            
        </div>
    )
}

export default Sidebar;