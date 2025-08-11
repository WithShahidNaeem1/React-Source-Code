import React, { useRef, useState } from 'react'

function Dummy() {
  const inputName=useRef();
  const h1Ref=useRef();
  const [col,setCol]=useState(true);

function nameHandler(){
  console.log(inputName);
  inputName.current.focus();
  inputName.current.placeholder='Enter Name';
  inputName.current.style.color='green';
}

function hideShow(){
  if(inputName.current.style.display=='none')
  {
    inputName.current.style.display='inline';
  }else{
    inputName.current.style.display='none ';
  }
  

}

function h1Handler(){
  setCol(!col);

 col? h1Ref.current.style.color='green':h1Ref.current.style.color='black'
}

  return (
    <div>
      <h1 ref={h1Ref}>useRef Hook in React JS</h1>
      <input ref={inputName} type="text" />
      <button onClick={nameHandler}>Enter Name</button>
      <br /><br />
      <button onClick={hideShow}>Hide/Show</button>
      <button onClick={h1Handler}>Change Color</button>
    </div>
  )
}

export default Dummy