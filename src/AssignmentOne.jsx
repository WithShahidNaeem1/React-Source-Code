import { useState } from "react";

function AssignmentOne(){
    const [num,setNum]=useState(1);
    return(
        <>
        <h1>Hit Counter</h1>
        <h1>Counter : {num}</h1>
        <button onClick={()=>setNum(num+1)}>PLUS</button>
        <button onClick={()=>setNum(num-1)}>MINUS</button>
        </>
    )
}
export default AssignmentOne;