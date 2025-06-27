import React from 'react'

function PassJsxToProps({children,textcol="green"}) {
  return (
    <div style={{color:textcol,border:"5px solid", padding:"10px",width:"600px", borderRadius:"10px",margin:"10px"}}>
        {children}
    </div>
  )
}

export default PassJsxToProps