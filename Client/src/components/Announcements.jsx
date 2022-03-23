import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
    height=40px;
    background-color: #F05454;
    color: white;
    text-align: center;
    padding: 7px;
    font-weight: bold;
`

const Announcements = () => {
  return (
    <Container>
      50% off on all products
    </Container>
  )
}

export default Announcements
