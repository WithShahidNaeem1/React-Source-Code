import React from 'react'

function Dummy() {

    const empInfo = [
        {
            id: '1',
            name: 'Shahid',
            Salary: 50000,
            age: 35,
            email: 'shahid@gmail.com'
        },
        {
            id: '2',
            name: 'Naeem',
            Salary: 35000,
            age: 25,
            email: 'naeem@gmail.com'
        },
        {
            id: '3',
            name: 'Tariq',
            Salary: 45000,
            age: 19,
            email: 'tariq@gmail.com'
        },
        {
            id: '4',
            name: 'Bilal',
            Salary: 60000,
            age: 45,
            email: 'bilal@gmail.com'
        },
    ]
    return (
        <div>
            <h1>Employees Data</h1>
            <table border='1'>
                <thead>
                    <tr style={{ color: 'red', textAlign: 'center' }}>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>SALARY</td>
                        <td>AGE</td>
                        <td>EMAIL</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        empInfo.map((user) => (
                            <tr key={user.id} style={{textAlign:'center'}}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.Salary}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>

                        ))
                    }
                </tbody>

            </table>
            {/* <h1>Dummy Data</h1>
            <table border='1'>
                <thead>
                    <tr style={{ color: 'red', textAlign: 'center' }}>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>SALARY</td>
                        <td>AGE</td>
                        <td>EMAIL</td>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ textAlign: 'center' }}>
                        <td>1</td>
                        <td>Shahid</td>
                        <td>50000</td>
                        <td>25</td>
                        <td>shahid@gmail.com</td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <td>2</td>
                        <td>Tahir</td>
                        <td>60000</td>
                        <td>35</td>
                        <td>tahir@gmail.com</td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <td>3</td>
                        <td>Nasir</td>
                        <td>35000</td>
                        <td>28</td>
                        <td>nasir@gmail.com</td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <td>4</td>
                        <td>Bilal</td>
                        <td>65000</td>
                        <td>45</td>
                        <td>bilal@gmail.com</td>
                    </tr>
                </tbody>
            </table> */}

        </div>
    )
}

export default Dummy