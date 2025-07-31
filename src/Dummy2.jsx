import React, { useState } from 'react'

function Dummy2() {

    const [empCard,setEmpCard] =useState({
        border: '4px solid gray',
        width: '200px',
        margin: '10px',
        borderRadius: '10px',
        boxShadow: '5px 5px 5px 0px gray'
    });

    const [grid,setGrid]=useState(true);

function setTheme(bgColor,TextColor,bColor){
   setEmpCard({...empCard,backgroundColor:bgColor,color:TextColor,borderColor:bColor});
}

    return (
        <>
            <h1 style={{ color: 'green' }}>Employee Card</h1>
            <button onClick={()=>setTheme('gray','white','black')}>Gray Theme</button>
            <button onClick={()=>setTheme('white', 'black','gray')}>Default Theme</button>
            <button onClick={()=>setGrid(!grid)}>Grid ON/OFF</button>
            <div style={{display:grid?'flex':'block',flexWrap:'wrap'}}>
                <div style={empCard}>
                    <img style={{
                        width: '200px',
                        borderTopRightRadius: '5px',
                        borderTopLeftRadius: '5px'
                    }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div style={{ textAlign: 'center' }}>
                        <h2>Khalid Mahmood</h2>
                        <h4>Web Devloper</h4>
                    </div>
                </div>
                <div style={empCard}>
                    <img style={{
                        width: '200px',
                        borderTopRightRadius: '5px',
                        borderTopLeftRadius: '5px'
                    }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div style={{ textAlign: 'center' }}>
                        <h2>Khalid Mahmood</h2>
                        <h4>Web Devloper</h4>
                    </div>
                </div>
                <div style={empCard}>
                    <img style={{
                        width: '200px',
                        borderTopRightRadius: '5px',
                        borderTopLeftRadius: '5px'
                    }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div style={{ textAlign: 'center' }}>
                        <h2>Khalid Mahmood</h2>
                        <h4>Web Devloper</h4>
                    </div>
                </div>
                <div style={empCard}>
                    <img style={{
                        width: '200px',
                        borderTopRightRadius: '5px',
                        borderTopLeftRadius: '5px'
                    }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div style={{ textAlign: 'center' }}>
                        <h2>Khalid Mahmood</h2>
                        <h4>Web Devloper</h4>
                    </div>
                </div>
                <div style={empCard}>
                    <img style={{
                        width: '200px',
                        borderTopRightRadius: '5px',
                        borderTopLeftRadius: '5px'
                    }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div style={{ textAlign: 'center' }}>
                        <h2>Khalid Mahmood</h2>
                        <h4>Web Devloper</h4>
                    </div>
                </div>
                <div style={empCard}>
                    <img style={{
                        width: '200px',
                        borderTopRightRadius: '5px',
                        borderTopLeftRadius: '5px'
                    }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div style={{ textAlign: 'center' }}>
                        <h2>Khalid Mahmood</h2>
                        <h4>Web Devloper</h4>
                    </div>
                </div>
                <div style={empCard}>
                    <img style={{
                        width: '200px',
                        borderTopRightRadius: '5px',
                        borderTopLeftRadius: '5px'
                    }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div style={{ textAlign: 'center' }}>
                        <h2>Khalid Mahmood</h2>
                        <h4>Web Devloper</h4>
                    </div>
                </div>
                <div style={empCard}>
                    <img style={{
                        width: '200px',
                        borderTopRightRadius: '5px',
                        borderTopLeftRadius: '5px'
                    }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div style={{ textAlign: 'center' }}>
                        <h2>Khalid Mahmood</h2>
                        <h4>Web Devloper</h4>
                    </div>
                </div>
                

            </div>


        </>
    )
}

export default Dummy2