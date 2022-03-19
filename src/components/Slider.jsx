import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'

import styled from 'styled-components';
// import TumericImg from '';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;
const Arrow = styled.div`
  width : 50px;
  height: 50px;
  background-color: #E2D784;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;

`;

const Wrapper = styled.div`
height: 100%;


`;

const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;

`;

const ImgContainer = styled.div`
height 100%;
flex: 1;
`;

const Image = styled.img`
 height: 80%;
`;

const InfoContainer = styled.div`
padding 50px;
flex: 1;


`;

const Title = styled.h1`
font-size : 70px;
`;
const Description = styled.p`
margin: 50px 0px;
font-size : 20px;
`;
const Button = styled.button`
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
      <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper>
          <Slide>

          
        <ImgContainer>
        <Image src="../Images/Slide.jpg" />
        </ImgContainer>
        
        
        <InfoContainer>
            <Title>Get the best hand made spices!</Title>
            <Description>Made with the best quality spices from India</Description>
            <Button>Shop Now!</Button>

        </InfoContainer>
        </Slide>
        
      </Wrapper>
      <Arrow direction="right">
      <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider
