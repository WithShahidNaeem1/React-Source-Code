import React, { useEffect } from 'react'

function DisplayData({black,red}) {

const forBlack=()=>{
    console.log("Black Value:",black);
}

const forRed=()=>{
    console.log("Red Value:", red);
}

useEffect(()=>{
forRed();
},[red]);

useEffect(()=>{
forBlack();
},[black]);



  return (
    <div>
        <h1>Value of Black : {black}</h1>
        <h1 style={{color:'red'}}>Value of Red : {red}</h1>
    </div>
  )
}

export default DisplayData