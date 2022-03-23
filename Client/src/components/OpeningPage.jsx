import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    
    background-image: url('../Images/open.jpg');
    height=100vh;
    color: white;
    text-align: center;
    padding: 355px;
    background-size: cover;
    background-repeat: no-repeat;
    font-weight: bold;
    overflow: hidden;
    background-position: center;
    
`;

const ImgContainer = styled.div`
font-size: 70px; 
`;

// const Image = styled.img`
//  height: 80%;
// `;


const OpeningPage = () => {
  return (
    <Container>
      <ImgContainer>
      Gewürze</ImgContainer>
    </Container>
  )
}

export default OpeningPage
