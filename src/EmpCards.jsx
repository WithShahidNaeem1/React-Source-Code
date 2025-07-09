import React from 'react'

function EmpCards({data}) {
  return (
    <div style={{
        border : '2px solid green',
        width : '500px',
        margin: '10px',
        padding : '10px',
        borderRadius : '10px',
        backgroundColor : 'lightyellow'
        }}>
        <h1 style={{color:'red', textAlign:'center'}}>Employee Card</h1>
        <h2>Emp. ID : <span style={{color:'green'}}>{data.id}</span></h2>
        <h2>Name : <span style={{color:'green'}}>{data.name}</span></h2>
        <h2>Age : <span style={{color:'green'}}>{data.age}</span></h2>
        <h2>Salary : <span style={{color:'green'}}>{data.salary}</span></h2>
        <h2>Email : <span style={{color:'green'}}>{data.email}</span></h2>
    </div>
  )
}

export default EmpCards