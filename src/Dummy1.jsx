import React from 'react'

function Dummy1({showName , name, passWord}) {
const user='Shahid Naeem';


  return (
    <div>
      <button onClick={()=>showName(name)}>Display User</button>
      <button onClick={passWord}>Show Password</button>
    </div>
  )
}

export default Dummy1