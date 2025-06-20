import React from 'react'

function PropsInReact({fullName , age , adrs}) {
    
  return (
    <div>
        <h1>Props in React</h1>
       <h2>Name :{fullName}</h2>
       <h2>Age : {age}</h2>
       <h2>Address : {adrs}</h2>
    </div>
  )
}

export default PropsInReact