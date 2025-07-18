import React from 'react'

function CurrentDate() {
    const currentDate=new Date();
    const day=currentDate.getDate();
    const month=currentDate.getMonth()+1;
    const year=currentDate.getFullYear();
  return (
    <div>
        <h1>Date & Time</h1>
        <h1>{currentDate.toString()}</h1>
        <h1>Date: <span style={{color:'green'}}>{currentDate.toDateString()}</span> </h1>
        <h1>Time: <span style={{color:'green'}}>{currentDate.toTimeString()}</span> </h1>
        <h1 style={{color:'blue'}}>Local Date and time : {currentDate.toLocaleDateString()}</h1>
        <h1  style={{color:'blue'}}>Local Date and time : {currentDate.toLocaleTimeString()}</h1>
        <h1>Date: {day}</h1>
        <h1>Month: {month}</h1>
        <h1>Year: {year}</h1>
        <br />
        <h1>Date : {day}/{month}/{year}</h1>
    </div>
  )
}

export default CurrentDate