import React from 'react'
import styled from 'styled-components'

function Dummy1() {
    const Myheading=styled.h3 `
    `;

    const MyButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: darkblue;
  }
`;
  return (
    <div>
        <h1>Styled Components</h1>
        <Myheading>Hellow World</Myheading>
        <MyButton>Download</MyButton>
    </div>
  )
}

export default Dummy1