import React, {useState} from "react";
import styled from "styled-components";
import img from "../Assets/person.png";
import Cards from "./Cards";
import Latesttransact from "./Latesttransact";
import { FaGoogleWallet } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import Recent from "./Recent";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false)

  const Toggle = () => {
    setShow(!show)
  }

  const Toggle2 = () => {
    setShow(false)
  }
  return (
    <Container>
      <Wrapper>
        <br />
        <br />
        <Top>
          <Left>
            <Bold>Dashboard</Bold>
            <button onClick={Toggle}>Credit Wallet</button>
          </Left>
          {show ? (
            <Slidein>
              <Wallets>
                <Icon onClick={Toggle2}><MdOutlineCancel /></Icon>
                 <Card2>
          <Circle>
            <FaGoogleWallet />
          </Circle>
          <Wallet>
            <p>Wallet Balance</p>
            <h3>$0.00</h3>
          </Wallet>
        </Card2>

                <Tap>
              <p>Tap here & enter amount .. (e.g 5000)</p>
              <Input type="number"
                placeholder="Tap here & enter .. (e.g 5000)"
              />
                </Tap>
                
                <Tap2>
              <p>Tap here & enter ATM CVV</p>
              <Input type="number"
                placeholder="Enter Cvv"
              />
                </Tap2>
                
                <Tap2>
              <p>Tap here & enter Card number</p>
              <Input type="number"
                placeholder="Enter card number"
                  />
                  
                </Tap2>
                <NavLink to="/payment" style={{textDecoration: "none"}}>
                  <button>Proceed</button>
                </NavLink>
              </Wallets>
              
          </Slidein>
          ) : null}
        </Top>
        <br />
        <br />
        <br />
        <Cards />
        <Recent />
        <Latesttransact />
      </Wrapper>
    </Container>
  );
};

export default Home;
const Icon = styled.div`
  position: absolute;
  font-size: 25px;
  top: 15px;
  cursor: pointer;
`
const Input = styled.input`
  height: 40px;
  padding-left: 15px;
  border-radius: 7px;
  outline-color: #39a081;
  outline-width: 3px;
  margin-top: 3px;
  border: 1px solid gray;
`;
const Tap2 = styled.div`
  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
  }
  
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
const Tap = styled.div`
  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
  }
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #3184f7;
  color: #fff;
  font-size: 30px;
`;
const Card2 = styled.div`
  width: 300px;
  height: 150px;
  margin-top: 30px;
  background-color: #0d71fa;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
`;
const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  margin-top: 15px;
  p {
    color: #fff;
    margin: 0;
  }
  h3 {
    color: #fff;
    margin-top: 5px;
    font-size: 23px;
  }
`;
const Wallets = styled.div`
  width: 330px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  button {
    width: 100%;
    height: 50px;
    background-color: #3184f7;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 60px;
    cursor: pointer;
  }
`
const Slidein = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 12345;
  position: fixed;
  justify-content: flex-end;
  animation: slide-in 0.5s ease-out;

  @keyframes slide-in {
    from {
      transform: translateX(-100%)
    }
    to {
      transform: translateX(0)
    }
  }
`
const Img = styled.img`
  height: 45px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const P = styled.div`
  p {
    color: #718096;
    font-family: Karla, sans-serif;
    font-size: 0.875rem;
    margin: 0;
  }
  margin-top: 7px;
`;
const Bold = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Left = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 90px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button{
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0d71fa;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
    color: #fff;
    position: relative;
    border: none;
    outline: none;
}
`;
const Container = styled.div`
  width: calc(100% - 19%);
  display: flex;
  justify-content: center;
  margin-left: 260px;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: 0px;
  }
  /* background-color: red; */
`;