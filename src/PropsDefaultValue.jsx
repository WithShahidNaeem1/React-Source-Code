import React from 'react'

function PropsDefaultValue({userName="Guest User"}) {
  return (
    <div>
        <h1>Assign Default Value To Props</h1>
        <h1>Hello! : {userName}</h1>
        <hr />
    </div>
  )
}

export default PropsDefaultValue