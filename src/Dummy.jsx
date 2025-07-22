import React, { useEffect, useState } from 'react'

function Dummy() {
  const [counter,setCounter]=useState(1);

  function whenMount(){
  console.log("Component is Mounted");
}

function whenUpdate(){
  console.log("Component is Updating");
}

function whenEnd(){
  console.log("Component Unmounted/Ended");
}

useEffect(()=>{whenMount();},[]);
useEffect(()=>{whenUpdate();},[counter]);
useEffect(()=>{

  return ()=> whenEnd();
},[]);
  
  return (
    <div>
      <h1>Value:{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increase</button>
    </div>
  )
}

export default Dummy