import React, { useEffect, useState } from 'react'

function Dummy() {
    
    const [count,setCount]=useState(1);
    const [data,setData]=useState(5);

    function oneTime(){
        console.log("counter:",count,"\t" , "Data:",data);
    }

    useEffect(()=>{
        oneTime();
    },[count,data]);
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count {count}</button>
        <button onClick={()=>setData(data+5)}>Data {data}</button>
        
    </div>
  )
}

export default Dummy