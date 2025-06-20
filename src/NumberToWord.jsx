import { useState } from "react";

function NumberToWord(){
    const [number,setNumber]=useState(0);
    return(
        <>
        <h1>Number To Words</h1>
        <h1>{number}</h1>
        <button onClick={()=> setNumber(number+1)}>Plus</button>
        <button onClick={()=> setNumber(number-1)}>Minus</button>
        <button onClick={()=> setNumber(0)}>Rest</button>
        <h3>Range(0 To 5)</h3>
        {
            number==0?<h1>Zero</h1>
            :number==1?<h1>One</h1>
            :number==2?<h1>Two</h1>
            :number==3?<h1>Three</h1>
            :number==4?<h1>Four</h1>
            :number==5?<h1>Five</h1>:<h1>Out of Range</h1>

        }
        
        </>


    )
}
export default NumberToWord;