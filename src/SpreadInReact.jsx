import React from 'react'

function SpreadInReact() {
    const maleStudents=['Abid', 'Nasir','Bilal','Shahid'];
    const femaleStudents=['Sobia', 'Ayesha', 'Marrium','Noreen'];
    const allStudent=[...maleStudents,...femaleStudents];
  return (
    <div>
        <h3>List of All Students</h3>
        <ul>
        {
            allStudent.map((student,index)=>
            
            (<li key={index}>{student}</li>)
            
            )

        }

        </ul>

    </div>
  )
}

export default SpreadInReact