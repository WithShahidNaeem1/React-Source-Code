import React from 'react'
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import DropDown from './DropDown';
import Product from './Product';
import NavBar from './NavBar';

function BootstrapComp() {
  return (
    <div style={{padding:'25px'}}>
        <h1>React-Bootstrap</h1>
        <NavBar />
                <br />
        <Alert variant="success">We are learning React JS & Bootstrap</Alert>
        <DropDown />
        <br />
        <Product />
        
        
    </div>
  )
}

export default BootstrapComp