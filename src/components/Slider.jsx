
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components';
import {sliderItems} from '../data'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;
const Arrow = styled.div`
  width : 50px;
  height: 50px;
  background-color: #F5F5F5;
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
  z-index: 2;

`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.2s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);

`;

const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;

`;

const ImgContainer = styled.div`
padding-left: 40px;
height: 60%;
flex: 1;
text-align: center;
`;

const Image = styled.img`
 height: 80%;
`;

const InfoContainer = styled.div`
text-align: center;
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
padding: 10px;
font-size : 20px;
background-color : transparent;
cursor: pointer;
`;

const Slider = () => {


    const [slideIndex, setSlideIndex]= useState(0);

   const handleClick = (direction) => {

    if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
    }
    else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }

   };
  return (
    <Container>
      <Arrow direction="left" onClick={() =>handleClick("left")}>
      <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item =>(
        <Slide bg={item.bg}>
 
        <ImgContainer>
        <Image src={item.img} />
        </ImgContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
            <Button>Shop Now
            </Button>

        </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() =>handleClick("right")}>
      <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider
