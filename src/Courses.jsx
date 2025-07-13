import React from 'react'

function Courses({ courses }) {
    return (
        <div>
            {
                courses.map((courses, index) => (
                    <div key={index}>
                        <h2>Course : {courses.courseName}</h2>
                        <ul>
                            <li>Duration : {courses.duration}</li>
                            <li>Semester Fee : {courses.semFee}</li>
                        </ul>
                    </div>


                ))
            }
        </div>
    )
}

export default Courses