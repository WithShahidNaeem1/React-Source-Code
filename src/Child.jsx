// import React from 'react'
// import { forwardRef } from 'react'

// function Child(props,ref) {
//   return (
//     <div>
//         <input type="text" ref={ref} />
//     </div>
//   )
// }

// export default forwardRef(Child)
import React from 'react'

function Child(props) {
  return (
    <div>
        <input type="text" ref={props.ref} />
    </div>
  )
}

export default Child