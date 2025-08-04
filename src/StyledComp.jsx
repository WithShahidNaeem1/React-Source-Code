import React from 'react'
import styled from 'styled-components';

function StyledComp() {
//  const MyHeading=styled.h1 `
//  color:maroon;
//  border: 1px solid red;
//  border-radius: 5px;
//  background-color: yellow;
//  padding : 20px;
//  width: 500px;
//  margin : 20px;
//  `;

// const MyHead=styled.h1({
//     color: 'blue',
//     backgroundColor : 'lightgreen',
//     padding : '20px',
//     margin : '20px'

// });

const MyBtn=styled.button`
background-color:blue;
color:white;
padding : 10px 20px;
border-radius: 5px;
border: none;

&:hover{
background-color:darkblue;
}

`;

  return (
    <div>
        <h1>Styled Components</h1>
        <MyBtn>Learn More</MyBtn>
        <br /><br />
        <MyBtn>Download</MyBtn>
        <br /><br />
        <MyBtn>Click Here</MyBtn>
        <br /><br />

             
        {/* <MyHeading>My New Heading</MyHeading>
        <MyHeading>My New Heading2</MyHeading>
        <MyHeading>My New Heading3</MyHeading>
        <MyHeading>My New Heading4</MyHeading>
        <MyHeading>My New Heading5</MyHeading> */}
        {/* <MyHead>New Heading with Different Method</MyHead>
        <MyHead>New Heading with Different Method</MyHead>
        <MyHead>New Heading with Different Method</MyHead> */}
    </div>
  )
}

export default StyledComp