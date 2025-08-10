import React from 'react'
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Dummy1 from './Dummy1';
import Dropdown from 'react-bootstrap/Dropdown';
import Dummy2 from './Dummy2';



function Dummy() {
  return (
    <div style={{ padding: '20px',margin:'10px' }}>
      <h1>React-Bootstrap</h1>
      <Dummy2 />
      
      <Button onClick={()=> alert("File Downloaded")} variant="primary">Click Here</Button>
      <Alert variant='dark'>This is My alert</Alert>
      <br />
       <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Our Stores
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Lahore</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Karachi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Peshawar</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Quetta</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <br />
      <Dummy1 />
     
      
      
    </div>
  )
}

export default Dummy