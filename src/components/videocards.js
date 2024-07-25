import React from "react";

const Videocard = ({data}) =>{
    const {snippet,statistics}=data
    const {thumbnails,channelTitle,title}=snippet;
    return(
        <div className=" w-[350px] h-[300px] rounded-lg bg-slate-100 p-1">
            <img alt="thumbanil_image" src={thumbnails.medium.url} className="my-1 mx-2 rounded-lg" />
            <ul className="mx-1.5 px-1">
                <ol className="font-bold">{title}</ol>
                <ol className="text-slate-500">{channelTitle}</ol>
                <ol className="text-slate-500">{statistics.viewCount} views</ol>
            </ul>
        </div>
    )
}

export default Videocard;