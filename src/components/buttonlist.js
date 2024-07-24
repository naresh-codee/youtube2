import React from "react";

const Buttonlist = () =>{
    const buttons = ["javascript","tamil cinema","Music","News","Gaming","Mixes","live","software development","Javascript","science fiction" ,"pop music","Engineering"]
    return (
        <div className="flex">
            {buttons.map((b,index) =>(
               
                    <button key={index} className= " bg-slate-300 m-1 py-1 px-2 border border-black shadow-lg rounded-lg " >{b}</button>
                
                
            ))
            }
        </div>
    )
}

export default Buttonlist;