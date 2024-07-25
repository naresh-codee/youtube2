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
        setVideo(jsonValue.items)

    }

    if(video.length===0) return null;

    return(
        <div className="mx-1 flex flex-wrap">
            {video.map((v)=>(
                <Videocard data={v} key={v.id}/>
            )
            )}

             {/*Videocard data={video[1]}/> */}
   
        </div>
    )
}

export default Videocontainer;