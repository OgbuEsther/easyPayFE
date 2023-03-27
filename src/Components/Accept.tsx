import React from 'react'
import styled from 'styled-components'

const Accept = () => {
  return (
      <Container>
          <Wrapper>
              <Top><h2></h2></Top>
          </Wrapper>
    </Container>
  )
}

export default Accept
const Top = styled.div`
    h2{
        color: #000;
        font-weight: 600;
    }
`
const Wrapper = styled.div`
    display: flex;
    width: 92%;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`