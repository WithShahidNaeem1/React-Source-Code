import React, { useEffect, useState } from 'react'

function Clock({tcolor , bcolor}) {
    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        const intervalID=setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=> clearInterval(intervalID);
    },[]);

    

  return (
    <div>
        
        <h1 style={{
            color:tcolor,
            backgroundColor:bcolor,
            width:'120px',
            padding:'10px',
            borderRadius:'5px'
            
        }}>{time.toLocaleTimeString()}</h1>
    </div>
  )
}

export default Clock