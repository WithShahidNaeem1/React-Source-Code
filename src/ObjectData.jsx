import React from 'react'

function ObjectData({user}) {
  return (
    <div>
        {/* <h1>Object and Props</h1> */}
        <h2>Name : {user.name}</h2>
        <h2>Salary : {user.salary}</h2>
        <h2>Age : {user.age}</h2>
        <h2>Email : {user.email}</h2>
        <hr />
    </div>
  )
}

export default ObjectData