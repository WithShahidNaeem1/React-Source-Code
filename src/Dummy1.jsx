import React, { useEffect } from 'react'

function Dummy1({ counter , data}) {
    const onceRun = () => {
        console.log("Value of Black:",counter);
    }

    const redFun=()=>{
        console.log("Red Value is Changed",data);
    }

    useEffect(() => {
        redFun();
    }, [data]);

    useEffect(() => {
        onceRun();
    }, [counter]);


    return (
        <div>
            <h1>Counter Value : {counter}</h1>
            <h1 style={{color:'red'}}>Red Value : {data}</h1>
        </div>
    )
}

export default Dummy1