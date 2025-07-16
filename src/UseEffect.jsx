import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(1);
    const [data, setData] = useState(5);

    function oneCall() {
        console.log("Counter:", count, "\t", "Data:", data);
    }
    useEffect(() => {
        oneCall();
    },[data,count]);


    return (
        <div>
            <h1>useEffect in React JS</h1>
            <h1>Counter : {count}</h1>
            <h1>Data : {data}</h1>
            <button onClick={() => setCount(count + 1)}>Counter</button>
            <button onClick={() => setData(data + 5)}>Data</button>
        </div>
    )
}

export default UseEffect