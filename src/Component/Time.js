import React from "react"

const Time=()=>{
    const hello="Hello Everyone";
    let currTime=  new Date();
    currTime= currTime.getHours();
    let greeting="";
    if(currTime>=1 && currTime<12){
        greeting= "Good Morning"
    }
    else if(currTime>=12 && currTime<16){
        greeting= "Good Afternoon"
    }
    else if(currTime>=16 && currTime<19){
        greeting= "Good Evening"
    }else if(currTime>=19 && currTime<24){
        greeting= "Good Night"
    }

    return(
<div className="time">
    <h1>{`${hello},${greeting}`}</h1>
</div>
    )
}
export default Time