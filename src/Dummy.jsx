import React from 'react'
import Card from './Card';

function Dummy() {
    const empInfo = [
        {
            id: '1',
            name: 'Bilal',
            age: 35,
            salary: 35000,
            email: 'bilal@ymail.com'
        },
        {
            id: '2',
            name: 'Tahir',
            age: 45,
            salary: 65000,
            email: 'tahir@ymail.com'
        },
        {
            id: '3',
            name: 'Naveed',
            age: 25,
            salary: 45000,
            email: 'naveed@ymail.com'
        },
        {
            id: '4',
            name: 'Sadia',
            age: 44,
            salary: 56000,
            email: 'sadia@ymail.com'
        },
        {
            id: '5',
            name: 'Nabeel',
            age: 55,
            salary: 75000,
            email: 'nabeel@ymail.com'
        },


    ];

    return (
        <div>
            <h1>Array Data in Table</h1>
            {
                empInfo.map((user)=>(
                    <div key={user.id}> 
                        <Card data={user} />
                    </div>

                ))
            }         
        </div>
    )
}

export default Dummy