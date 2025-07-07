import React, { useState } from 'react'

function RadioAndDrop() {
    const [gender, setGender] = useState('Male');
    const [city, setCity] = useState('Lahore');
    return (
        <div>
            <h1>Radio Buttons & Drop Down</h1>
            <h3>Select City</h3>
            <input type="Radio" checked={gender == 'Male'} onChange={(event) => setGender(event.target.value)} name='gender' id='Male' value={'Male'} />
            <label htmlFor="Male">Male</label>
            <input type="Radio" checked={gender == 'Female'} onChange={(event) => setGender(event.target.value)} name='gender' id='Female' value={'Female'} />
            <label htmlFor="Female">Female</label>
            <h3 style={{ color: "green" }}>Gender : {gender}</h3>
            <br />
            <h3>Select City</h3>
            <select defaultValue={'Lahore'} onChange={(event)=>setCity(event.target.value)} name="" id="">
                <option value="Karachi">Karachi</option>
                <option value="Quetta">Quetta</option>
                <option value="Lahore">Lahore</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Islamabad">Islamabad</option>
            </select>
            <br />
            <h3 style={{ color: "green" }}>Selected City: {city}</h3>
        </div>
    )
}

export default RadioAndDrop