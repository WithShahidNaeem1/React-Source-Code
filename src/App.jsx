import { useState } from 'react'
import './App.css'
import UseStateAsProps from './UseStateAsProps'

function App() {
  const[empName,setEmpName]=useState("Yasmin Khan");
 
return (
  <>
    <h1 style={{ color: "chocolate" }}>Learn React (by) Shahid Naeem</h1>
    {
    empName && <UseStateAsProps emp={empName} />
    }
    <button onClick={()=> setEmpName("Fareeha Khan")}>Change Name</button>
  </>
)
}

export default App
