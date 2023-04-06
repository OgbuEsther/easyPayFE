import React from 'react'
import styled from 'styled-components'
import img from "../Assets/chat.png"

const Chathold = () => {
  return (
      <Container>
          <Left>
              <Img src={img} />
          </Left>
    </Container>
  )
}

export default Chathold
const Img = styled.img`
    height: 600px;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 400px;
    /* background-color: red; */
`