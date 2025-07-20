import React, { useEffect, useState } from 'react'

function Dummy1({color , bcolor}) {
const [time,setTime]=useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

            return ()=> clearInterval(intervalID);
    }, []);

    return (
        <div>
            <h1 style={{
                color:color,
                width:'120px',
                padding:'10px',
                backgroundColor:bcolor,
                borderRadius:'5px'
            }}>{time.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Dummy1