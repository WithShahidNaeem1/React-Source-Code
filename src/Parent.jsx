import React, { useRef } from 'react'
import Child from './Child';

function Parent() {
    const year=useRef();

    function Year(){
        year.current.focus();
        year.current.value='2025';
        year.current.style.color='red';
        year.current.style.backgroundColor='yellow';
    }
  return (
    <div>
        <h1>ForwardRef Function</h1>
        <Child ref={year} />
        <br /> <br />
        <button onClick={Year}>Enter Year</button>
    </div>
  )
}

export default Parent