import React from 'react'
import { useRef } from "react"
import Dummy1 from './Dummy1';

function Dummy() {
   const year=useRef();

  function Year(){
    year.current.focus();
    year.current.value='2025';
    year.current.style.color='red';
    year.current.style.backgroundColor='lightblue';
    
  }

  return (
    <div>
      <Dummy1 ref={year}/>
      <br />
      <button onClick={Year}>Enter Year</button>
    </div>
  )
}

export default Dummy