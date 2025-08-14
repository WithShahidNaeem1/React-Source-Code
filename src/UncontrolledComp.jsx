import React, { useRef } from 'react'

function UncontrolledComp() {
    const user=useRef();
    const pass=useRef();

    function formWithuesref(event){
        event.preventDefault();
        const username=user.current.value;
        const password=pass.current.value;

        console.log("Username:",username," Password",password);
    }
  return (
    <div>
        <h1>Uncontrolled Component using useRef</h1>
        <form onSubmit={formWithuesref} action="">
            <input type="text" ref={user} placeholder='Enter Username' />
            <br /><br />
            <input type="password" ref={pass} placeholder='Enter Password' />
            <br /><br />
            <button>Submit using useRef</button>
        </form>
    </div>
  )
}

export default UncontrolledComp



// import React from 'react'

// function UncontrolledComp() {


//     function formHandler(event){
//         event.preventDefault();
//         const username=document.querySelector('#user').value; 
//         console.log("Username:",username);
//         const password=document.querySelector('#pass').value;
//         console.log("Password:",password);

//     }
//   return (
//     <div>
//         <h1>UnControlled Component using Query Selector</h1>
//         <form onSubmit={formHandler} action="">
//             <input type="text" id='user' placeholder='Enter Username' />
//             <br /><br />
//             <input type="password" id='pass' placeholder='Enter Password' />
//             <br /><br />
//             <button>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default UncontrolledComp