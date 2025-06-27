import React, { useState } from 'react'

function InputBoxData() {
    const [val,setVal]=useState("");
    return (
        <div>
            <h1>Input Box Data</h1>
            <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder='Enter Your Name' />
            <h1>{val}</h1>
            <button onClick={()=> setVal("")}>Reset Form</button>
        </div>
    )
}

export default InputBoxData