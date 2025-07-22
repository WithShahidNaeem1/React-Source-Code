import { useState } from "react"
import LifeCycle from "./LifeCycle"

function App() {
  const [display,setDisplay]=useState(true);
       return (
  <>
    <h1 style={{ color: "chocolate" }}>Learn React (with) Shahid Naeem</h1>
    {
      display?<LifeCycle />:null
    }
    <br />
    <button onClick={()=>setDisplay(!display)}>Hide/Display</button>
  </>
)
}

export default App
