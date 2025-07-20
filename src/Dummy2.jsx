import React, { useState } from 'react'
import Dummy1 from './Dummy1'

function Dummy2() {
    const [color,setColor]=useState('blue');
    const [bcolor,setBcolor]=useState('gray');
  return (
    <div>
        <h1 style={{color:'green'}}>Digital Clock</h1>
          <label htmlFor="time">Select Time Color :</label>
        <select id='time' onChange={(event)=>setColor(event.target.value)}>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
            <option value="Purple">Purple</option>
        </select>
        <br /> <br />

        <label htmlFor="time">Select Block Color :</label>
        <select id='btime' onChange={(event)=>setBcolor(event.target.value)}>
            <option value="yellow">Yellow</option>
            <option value="lightgray">Light Gray</option>
            <option value="lighblue">Blue</option>
            <option value="orange">Orange</option>
            <option value="Purple">Purple</option>
        </select>
      
      
        
        <Dummy1 color={color} bcolor={bcolor}/>
    </div>
  )
}

export default Dummy2