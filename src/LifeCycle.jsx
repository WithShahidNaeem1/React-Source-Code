import React, { useEffect, useState } from 'react'

function LifeCycle() {
    const [counter,setCounter]=useState(1);

    function whenMount(){
        console.log('Component Mounted Successfully');
    }

    function whenUpdate(){
        console.log("Component Updated");
    }

    function whenEnd(){
        console.log('Component Unmounted');
    }

    useEffect(()=>{whenMount();},[]);
    useEffect(()=>{whenUpdate();},[counter]);
    useEffect(()=>{

        return ()=> whenEnd();
    },[]);

    
  return (
    <div>
        <h1 style={{color:'green'}}>Component Life Cycle</h1>
        <h1>Value : {counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increase Value</button>
    </div>
  )
}

export default LifeCycle