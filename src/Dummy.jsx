import React from 'react'
import Dummy1 from './Dummy1';

function Dummy() {
    const uni=[
        {
            uniName: "XMT",
            city:"Karachi",
            email:"xmt@ymail.com",
            courses:[
                {
                    course :'BSCS',
                    duration : '4 Years',
                    SemesterFee: 'Rs. 75000/-'
                },
                {
                    course :'MBA',
                    duration : '4 Years',
                    SemesterFee: 'Rs. 75000/-'
                },
                {
                    course :'MARKETING',
                    duration : '4 Years',
                    SemesterFee: 'Rs. 75000/-'
                },
            ]
        },
         {
            uniName: "XMT",
            city:"Karachi",
            email:"xmt@ymail.com",
            courses:[
                {
                    course :'BSCS',
                    duration : '4 Years',
                    SemesterFee: 'Rs. 75000/-'
                },
                {
                    course :'BSCS',
                    duration : '4 Years',
                    SemesterFee: 'Rs. 75000/-'
                },
                {
                    course :'BSCS',
                    duration : '4 Years',
                    SemesterFee: 'Rs. 75000/-'
                },
            ]
        },
         {
            uniName: "XMT",
            city:"Karachi",
            email:"xmt@ymail.com",
            courses:[
                {
                    course :'BSCS',
                    duration : '4 Years',
                    SemesterFee: 'Rs. 75000/-'
                },
                {
                    course :'BSCS',
                    duration : '4 Years',
                    SemesterFee: 'Rs. 75000/-'
                },
                {
                    course :'BSCS',
                    duration : '4 Years',
                    SemesterFee: 'Rs. 75000/-'
                },
            ]
        },
    ];
  return (
    <div>
        <h1 style={{color:'red'}}>List of Universities</h1>
        {
            uni.map((uni,index)=>(
               <div key={index} style={{
                backgroundColor:'#ccc',
                margin: '20px',
                padding:'20px',
                borderBottom:'4px solid black',
                borderRadius:'10px',
                width:'800px',
                
               }}>
                <h1>University Name :<span style={{color:'green'}}>{uni.uniName}</span> </h1>
                <h2>City: <span style={{color:'green'}}>{uni.city}</span></h2>
                <h2>Email: {uni.email}</h2>
                <h2 style={{color:'green'}}>Courses Detail</h2>
                <Dummy1 courses={uni.courses}/>
                </div> 
            ))
            
        }
    </div>
  )
}

export default Dummy