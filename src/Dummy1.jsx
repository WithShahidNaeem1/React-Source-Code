import React from 'react'
import { forwardRef } from 'react'

function Dummy1(props,ref) {
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}

export default forwardRef(Dummy1)