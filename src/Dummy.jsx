import React, { useEffect, useState } from 'react'

function Dummy({color}) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

  }, [])
  return (
    <div>
      <h1>Digital Clock</h1>
      <h1 style={{
        color:color,
        backgroundColor:'#ccc',
        width:'120px',
        padding:'10px',
        borderRadius:'5px'
        
      }}>{time}</h1>
    </div>
  )
}

export default Dummy

// function App() {
//   const [color,setColor]=useState('red');
//    return (
//   <>
//     <h1 style={{ color: "chocolate" }}>Learn React (with) Shahid Naeem</h1>
//     <select onChange={(event)=>setColor(event.target.value)}>
//       <option value="red">Red</option>
//       <option value="blue">Blue</option>
//       <option value="green">Green</option>
//       <option value="black"></option>
//       <option value="purple">Purple</option>
//     </select>
//     <Dummy color={color} />