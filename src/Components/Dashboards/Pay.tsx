import React from 'react'
import styled from 'styled-components'
import img from "../Assets/21.jpeg"

const Pay = () => {
  return (
      <Container>
          <Top><h3>Pay Staffs</h3></Top>
          <Inputhold>
              <Text>Wallet Number</Text>

                  <Input type="text" placeholder='**** **** **** 1234'/>

          </Inputhold>

          <Inputhold>
              <Text>Staff name</Text>
                  <Input type="text" placeholder='Savio'/>
          </Inputhold>

          <Inputhold>
              <Text>Amount</Text>
                  <Input type="number" placeholder='$300.00'/>
          </Inputhold>
          
          <Down>
              <button>Send</button>
          </Down>
    </Container>
  )
}

export default Pay
const Down = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
    button{
        width: 130px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        border-radius: 10px;
        color: #fff;
        background-color: #0D71FA;
        cursor: pointer;
    }
`
const Input = styled.input`
    width: 400px;
    margin-left: 60px;
    height: 45px;
    border-radius: 12px;
    padding-left: 15px;
    border: 1px solid gray;
    outline: none;
    font-size: 17px;
`
const Text = styled.div`
    width: 150px;
`
const Inputhold = styled.div`
    display: flex;
    margin-top: 60px;
    align-items: center;
`
const Top = styled.div`
    h3{
        font-size: 20px;
        margin: 0;
    }
`

const Container = styled.div`
    width: 57%;
    display: flex;
    height: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 30px;
    margin-top: 30px;
    flex-direction: column;
    margin-bottom: 30px;
    background-color: #fff;
    border-radius: 12px;
    margin-left: 270px;
    @media screen and (max-width: 1024px) {
        margin-left: 0px;
        width: 93%;
        /* background-color: red; */
    }
`