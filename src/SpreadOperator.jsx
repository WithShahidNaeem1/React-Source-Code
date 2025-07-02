import React from 'react'

function SpreadOperator() {
    // const fruits=['apple','orange','banana'];
    // const moreFruits=[...fruits,'mango','peach','melon'];
    // console.log(moreFruits);

    const student={
        name:'sara',
        age:10
    }
    const newStudent={...student,class:'5th'}
    console.log(newStudent);
  return (
    <div>
        {/* <h1>Spread Operator</h1> */}
    </div>
  )
}

export default SpreadOperator