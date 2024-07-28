import React from "react";

import hamburgermenu from "../constants/images/hamburgermenu.png";
import youtube_logo from "../constants/images/Youtubelogo.jpg";
import user_logo from "../constants/images/userlogo.jpg"

import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appslice";

import {Link} from "react-router-dom";

import { useState , useEffect } from "react";
import {YOUTUBE_SEARCH_SUGGESTIONS_API} from "../constants/urls";
import { searchCache } from "../utils/searchslice";



const Head = () => {

    const dispatch = useDispatch();
    const hamburgerMenuToggle= () =>{
        dispatch(toggleMenu());
    }

    const [searchQuery,setSearchQuery] = useState("")
    const [youtubeSuggestions,setYoutubeSuggestions]=useState([]);
    

    useEffect(()=>{
        getYoutubeSuggestions();
    },[searchQuery]);


    const getYoutubeSuggestions= async () =>{
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API+searchQuery);
        const jsonValue = await data.json();

        // console.log(jsonValue);
        setYoutubeSuggestions(jsonValue[1]); //setting the youtube suggestions to the state variable


        // setting the suggestions into the redux store
        
        dispatch(searchCache({
            // the thing we are dispatching has to like a key:value pair

            [searchQuery]:jsonValue[1] // searchQuery --> key , jsonValue[1] --> value
        }))
    }
    

    return(
        <div className="grid grid-flow-col items-center my-1 shadow-lg">
            <div className="flex p-1 col-span-1 items-center ">
                <img className="h-10 w-12 cursor-pointer" alt="hamburger_menu" src={hamburgermenu} onClick={() =>{
                    hamburgerMenuToggle()
                }} />
                <img className="h-16 w-24 cursor-pointer" alt="youtube_logo" src={youtube_logo}/>
            </div>

            <div className="col-span-10">
                
                <input className=" border border-black border-r-none rounded-full rounded-r-none py-2 px-2 w-1/2 bg-slate-300 text-black cursor-pointer " type="text" placeholder="Search" value={searchQuery} onChange={(e)=> 
                    setSearchQuery(e.target.value)
                }/>

                <button className="border border-black border-l-transparent rounded-r-full p-2 w-10 cursor-pointer">🔍</button>
            </div>


            <div className="flex">
                <img className="col-span-1 h-12 w-13  p-1 cursor-pointer" alt="user_logo" src={user_logo}/>
                <a href="/signin">signin</a>
                {/* <Link to="signin">sign in</Link> */}
            </div>
        </div>
    )
}

export default Head ;