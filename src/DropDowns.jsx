import React, { useState } from 'react'
import Clock from './Clock'

function DropDowns() {
    const [tcolor,setTColor]=useState('black');
    const [bcolor,setBcolor]=useState('gray');
  return (
    <div>
        <h1 style={{color:'green'}}>Digital Clock</h1>
        <label htmlFor="time">Select Time Color : </label>
        <select id="time" onChange={(event)=>setTColor(event.target.value)}>
            <option value="black">Black</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="green">Green</option>
            <option value="Purple">Purple</option>
        </select>
        <br /><br />

        <label htmlFor="btime">Select Block Color : </label>
        <select id="btime" onChange={(event)=>setBcolor(event.target.value)}>
            <option value="#ccc">Gray</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            
        </select>
        <Clock tcolor={tcolor} bcolor={bcolor}/>

    </div>
  )
}

export default DropDowns