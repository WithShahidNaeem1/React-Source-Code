import React, { useState } from 'react'

function ControlledComponent() {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [phno,setPhno]=useState('');

    // function clearData(){
    //     setName('');
    //     setPassword('');
    //     setPhno('');
    // }

  return (
    <div>
        <h1>Controlled Component</h1>
        {/* <form action=""> */}
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter Your Name' />
        <br /><br />

        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='Enter Your Password' />
        <br /><br />

        <input type="tel" value={phno} onChange={(event)=>setPhno(event.target.value)} placeholder='Enter Your Ph. No.' />
        <br /><br />
        <button>Submit</button>
        <button onClick={()=>{setName(''); setPassword(''); setPhno('');}}>Clear Data</button>
       <h2>{name}</h2>
       <h2>{password}</h2>
       <h2>{phno}</h2>




        {/* </form> */}

    </div>
  )
}

export default ControlledComponent