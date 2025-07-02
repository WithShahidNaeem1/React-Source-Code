import React, { useState } from 'react'

function CheckBox() {
    const [hobby,setHobby]=useState([]);
    const hobbies=(event)=>{
// console.log(event.target.value, event.target.checked);
if(event.target.checked){
    setHobby([...hobby,event.target.value])
}else{
    setHobby([...hobby.filter((item)=>item!=event.target.value)])
}
    }
    return (
        <div>
            <h2>Select Your Hobbies</h2>
            <input type="checkbox" onChange={hobbies } id='cooking' value='Cooking' />
            <label htmlFor="cooking">Cooking</label>
            <br />
            <input type="checkbox" onChange={hobbies } id='music' value='Music' />
            <label htmlFor="music">Music</label>
            <br />
            <input type="checkbox" onChange={hobbies } id='Traveling' value='Traveling' />
            <label htmlFor="Traveling">Traveling</label>
            <br />
            <input type="checkbox" onChange={hobbies } id='Gardinging' value='Gardinging' />
            <label htmlFor="Gardinging">Gardinging</label>
            <br />
            <input type="checkbox" onChange={hobbies } id='Reading' value='Reading' />
            <label htmlFor="Reading">Reading</label>
            <h1>{hobby.toString()}</h1>
        </div>
    )
}

export default CheckBox