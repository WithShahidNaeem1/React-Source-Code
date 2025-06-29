import React, { useState } from 'react'

function Dummy() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phno, setPhno] = useState('');
    // function clearForm(){
    //     setName('');
    //     setPassword('');
    //     setPhno('');
    // }


    return (
        <div>
            {/* <form action=""> */}
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter Your Name' />
            <br /> <br />
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter Your Password' />
            <br /> <br />
            <input type="tel" value={phno} onChange={(event) => setPhno(event.target.value)} placeholder='Enter Your Ph. No.' />
            <br /> <br />
            <button>Submit</button>
            <button onClick={() => { setName(''); setPassword(''); setPhno(''); }}>Reset</button>
            <h3>{name}</h3>
            <h3>{password}</h3>
            <h3>{phno}</h3>

            {/* </form> */}
        </div>
    )
}

export default Dummy