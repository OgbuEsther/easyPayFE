import React from 'react'
import styled from 'styled-components'
import img from "../Assets/airtel.jpg"

const Airtels = () => {
  return (
      <Container>
      <Card>
        <Top>
          <Img src={img} />
          <Texthold>
            <h3>Airtel Airtime VTU</h3>
            <p>Airtel airtime - Get instant top up</p>
          </Texthold>
        </Top>

        <Inputhold>
          <Hold>
            <Up><label htmlFor="">Phone Number</label></Up>
            <Input placeholder='Enter Phone Number' type="number"/>
          </Hold>

          <Hold>
            <Up><label htmlFor="">Email address</label></Up>
            <Input placeholder='Your email' type="email"/>
          </Hold>

          <Hold>
            <Up><label htmlFor="">Amount</label></Up>
            <Input placeholder='Enter Amount' type="email"/>
          </Hold>
        </Inputhold>

        <Buttonhold>
          <Cancle>Cancle</Cancle>
        </Buttonhold>
          </Card>
    </Container>
  )
}

export default Airtels
const Cancle = styled.div`
  cursor: pointer;
  min-width: 50px !important;
    border: 1px solid red;
    color: #333;
    border-radius: 0;
    letter-spacing: 0.01em;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 500;
`
const Buttonhold = styled.div`
  display: flex;
`
const Input = styled.input`
  background-color: #e0e8f3;
    color: #333;
    border-radius: 0;
    border: 1px solid #d2dde9;
    width: 100%;
    padding: 10px 20px;
    line-height: 20px;
    font-size: .9em;
    transition: all .4s;
    margin-top: 15px;
    outline: none;
    border-radius: 4px;
`
const Up = styled.div`
  font-size: 14px;
    font-weight: 500;
    color: #495463;
    line-height: 1.1;
`
const Hold = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 65px;
  margin-bottom: 30px;
`
const Inputhold = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 85px;
`
const Texthold = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  justify-content: center;
  h3{
    font-weight: 500;
    color: #174159;
    font-size: 1.52em;
    margin: 0;
    line-height: 1.3;
  }
  p{
    margin-top: 7px;
  }
`
const Img = styled.img`
  height: 80px;
`
const Top = styled.div`
  display: flex;
  align-items: center;
`
const Card = styled.div`
  width: 570px;
  height: 470px;
  background-color: #fff;
  border-radius: 10px;
  padding: 25px;
  flex-direction: column;
  display: flex;
`

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