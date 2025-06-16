import { useState } from "react";

function StateInReact(){
    
    const [city,setCity]=useState("Karachi");

    // function changeCity(){
    //     setCity("Islamabad");
    // }
       
        return(
        <>
        <h1>State in React</h1>
        <h1>{city}</h1>
        <button onClick={()=>setCity("Quetta")}>Change City</button>
        
        </>
    )
}
export default StateInReact;