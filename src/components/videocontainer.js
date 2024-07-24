import React from "react";
import Videocard from "./videocards";

import { useEffect,useState } from "react";
import youtube_api from "../constants/urls";

const Videocontainer = () =>{

    const [video,setVideo] = useState([]);
    useEffect(()=> {
        getVideos()
    },[]);

    const getVideos = async () =>{
        const data = await fetch(youtube_api);
        const jsonValue = await data.json();
        console.log(jsonValue.items);
        setVideo(jsonValue.items);
        

    }

    return(
        <div>

            <Videocard/>
        </div>
    )
}

export default Videocontainer;