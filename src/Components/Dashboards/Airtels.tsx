import React from 'react'
import styled from 'styled-components'

const Airtels = () => {
  return (
      <Container>
          
    </Container>
  )
}

export default Airtels

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 8;
    position: fixed;
    animation: show 0.5s ease-out forwards;

   @keyframes show {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
  }
`