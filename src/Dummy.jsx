import React, { useState } from 'react'
import Dummy1 from './Dummy1';

function Dummy() {
  const [counter,setCounter]=useState(1);
  const [data,setData]=useState(5);
  return (
    <div>
      <Dummy1 counter={counter} data={data} />
      <button onClick={()=>setCounter(counter+1)}>Increase Black</button>
      <button onClick={()=>setData(data+5)}>Increase Red</button>
      
    </div>
  )
}

export default Dummy