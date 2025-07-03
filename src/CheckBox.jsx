import React, { useState } from 'react'

function CheckBox() {
const [hobby,setHobby]=useState([]);

const hobbies=(event)=>{

    console.log(event.target.value, event.target.checked);

    if(event.target.checked){
      setHobby([...hobby,event.target.value]);
    } else {
      setHobby([...hobby.filter((item)=> item != event.target.value)])
    }
    
}

  return (
    <div>
        <h2>Select Your Hobbies</h2>

        <input type="checkbox" onChange={hobbies} id='Cooking' value='Cooking'/> 
        <label htmlFor="Cooking">Cooking</label>
        <br /><br />

        <input type="checkbox" onChange={hobbies} id='Music' value='Music'/> 
        <label htmlFor="Music">Music</label>
        <br /><br />

        <input type="checkbox" onChange={hobbies} id='Traveling' value='Traveling'/> 
        <label htmlFor="Traveling">Traveling</label>
        <br /><br />

        <input type="checkbox" onChange={hobbies} id='Gardening' value='Gardening'/> 
        <label htmlFor="Gardening">Gardening</label>
        <br /><br />

        <input type="checkbox" onChange={hobbies} id='Reading' value='Reading'/> 
        <label htmlFor="Reading">Reading</label>
        <br /><br />

        <h1>{hobby.toString()}</h1>
    </div>
  )
}

export default CheckBox