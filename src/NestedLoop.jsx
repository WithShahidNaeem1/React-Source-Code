import React from 'react'
import Courses from './Courses';

function NestedLoop() {
    const uni=[
        {
            uniName:'Iqbal University',
            city:'Karachi',
            email:'iqbal@ymail.com',
            courses:[
                {
                    courseName:'BSCS',
                    duration:'4 Years',
                    semFee:'Rs. 75000/-'
                },
                {
                    courseName:'MBA',
                    duration:'3 Years',
                    semFee:'Rs. 65000/-'
                },
                {
                    courseName:'MIT',
                    duration:'5 Years',
                    semFee:'Rs. 95000/-'
                }
            ]
        },
        {
            uniName:'Rumi University',
            city:'Lahore',
            email:'rumi@ymail.com',
            courses:[
                {
                    courseName:'BSCS',
                    duration:'4 Years',
                    semFee:'Rs. 75000/-'
                },
                {
                    courseName:'MBA',
                    duration:'3 Years',
                    semFee:'Rs. 65000/-'
                },
                {
                    courseName:'MIT',
                    duration:'5 Years',
                    semFee:'Rs. 95000/-'
                }
            ]
        },
        {
            uniName:'Next University',
            city:'Quetta',
            email:'next@ymail.com',
            courses:[
                {
                    courseName:'BSCS',
                    duration:'4 Years',
                    semFee:'Rs. 75000/-'
                },
                {
                    courseName:'MBA',
                    duration:'3 Years',
                    semFee:'Rs. 65000/-'
                },
                {
                    courseName:'MIT',
                    duration:'5 Years',
                    semFee:'Rs. 95000/-'
                }
            ]
        }
    ];
  return (
    <div>
        <h1>LIST OF UNIVERSITIES</h1>
        {
            uni.map((uni,index)=>(
                <div key={index} style={{
                    backgroundColor:'#ccc',
                    padding:'20px',
                    margin:'20px',
                    borderBottom : '4px solid black',
                    borderRadius:'10px',
                    width:'600px'
                }}>
                    <h1>Name : <span style={{color:'blue'}}>{uni.uniName}</span> </h1>
                    <h2>City : <span style={{color:'blue'}}>{uni.city}</span> </h2>
                    <h2>Email : <span style={{color:'blue'}}>{uni.email}</span> </h2>
                    <h2 style={{color:'green'}}>COURSES OFFERED</h2>
                    <Courses courses={uni.courses} />
                </div>

            ))
        }
    </div>
  )
}

export default NestedLoop