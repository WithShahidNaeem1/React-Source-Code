import React from 'react'
import card from './CSS/card.module.css';


function StudentCard() {
  return (
    <div>
        <div className={card.card}>
            <h1 className={card.heading}>Student Card</h1>
            <img className={card.img} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div>
                <h3 className={card.sname}>MARIA KHAN</h3>
                <h4>BS-CS</h4>
            </div>
        </div>
    </div>
  )
}

export default StudentCard