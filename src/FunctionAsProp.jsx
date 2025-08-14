import React from 'react'

function FunctionAsProp({showName,name,passWord}) {

   
  return (
    <div>
        {/* <h1>Pass Functions As Props</h1> */}
        <button onClick={()=>showName(name)}>Shaow Name</button>
        <button onClick={passWord}>Show Password</button>
    </div>
  )
}

export default FunctionAsProp