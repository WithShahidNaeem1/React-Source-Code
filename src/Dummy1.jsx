import React from 'react'

function Dummy1({courses}) {
  return (
    <div>
        {
            courses.map((courses,index)=>(
                <div key={index}>
                    <ul>
                        <li>
                            <h2 style={{color:'blue'}}>Course : {courses.course}</h2>
                        </li>
                        <ul>
                            <li>Duration : {courses.duration}</li>
                            <li>Semester Fee: {courses.SemesterFee}</li>
                        </ul>
                    </ul>
                </div>
            ))
        }
    </div>
  )
}

export default Dummy1