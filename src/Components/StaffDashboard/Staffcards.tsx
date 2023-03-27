<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'
import { FaGoogleWallet } from "react-icons/fa"


import { UseAppSelector } from '../Global/Store'

const Cards = () => {

    const user = UseAppSelector((state) => state.Client);

  console.log(user);
 
  return (
    <Container>
        <Boxhold>
            <Card>
                  <Circle>
                      <FaGoogleWallet />
                  </Circle>
                  <Wallet>
                      <p>Wallet</p>
                      <h3>$000.00</h3>
                  </Wallet>
              </Card>

              <Card2>
                  <Circle2>
                      <FaGoogleWallet />
                  </Circle2>
                  <Wallet>
                      <p>Wallet Number</p>
                      <h3>{user?.walletNumber} </h3>
                  </Wallet>
              </Card2>

              <Card3>
                  <Spend>Spendings</Spend>
              </Card3>

              
              {/* <Card2>
                  <Circle2>
                      <MdSchool />
                  </Circle2>
                  <Wallet>
                      <p>School Fees</p>
                      <h3>$000.00</h3>
                  </Wallet>
              </Card2> */}

              {/* <Card3>
                  <Circle3>
                      <BsBusFrontFill />
                  </Circle3>
                  <Wallet>
                      <p>Travel & Tour</p>
                      <h3>$000.00</h3>
                  </Wallet>
              </Card3> */}

              {/* <Card4>
                  <Circle4>
                      <BsHousesFill />
                  </Circle4>
                  <Wallet>
                      <p>Rents</p>
                      <h3>$000.00</h3>
                  </Wallet>
              </Card4> */}
        </Boxhold>

=======
import React from "react";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import styled from "styled-components";

const Staffcards = () => {
  return (
    <Container>
      <Card>
        <CardHold>
          <IconHold
            style={{
              backgroundColor: "#2a9d8f",
            }}
          >
            <MdOutlineAccountBalanceWallet />
          </IconHold>
          <CardTitle>Balance</CardTitle>
          <CardInfo>₦230,550</CardInfo>
        </CardHold>
      </Card>
      <Card>
        <CardHold>
          <IconHold
            style={{
              backgroundColor: "#e9c46a",
            }}
          >
            <FaMoneyBillAlt />
          </IconHold>
          <CardTitle>Income</CardTitle>
          <CardInfo>₦152,320</CardInfo>
        </CardHold>
      </Card>
      <Card>
        <CardHold>
          <IconHold
            style={{
              backgroundColor: "#f4a261",
            }}
          >
            <GiExpense />
          </IconHold>
          <CardTitle>Expenses</CardTitle>
          <CardInfo>₦112,580</CardInfo>
        </CardHold>
      </Card>
      <Card>
        <CardHold>
          <IconHold
            style={{
              backgroundColor: "#e76f51",
            }}
          >
            <BsFillPiggyBankFill />
          </IconHold>
          <CardTitle>Savings</CardTitle>
          <CardInfo>₦20,890</CardInfo>
        </CardHold>
      </Card>
>>>>>>> b1cf657d26ef2b383e13781553c7d40ce8af48f0
    </Container>
  );
};

<<<<<<< HEAD
export default Cards
const Spend = styled.div`
    
`
const Wallet = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    margin-top: 15px;
    p{
        color: #fff;
        margin: 0;
    }
    h3{
        color: #fff;
        margin-top: 5px;
        font-size: 23px;
    }
`

const Circle2 = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: #f7a156;
    color: #fff;
    font-size: 30px;
`
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
`

const Card3 = styled.div`
    width: 330px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    cursor: pointer;
    padding-left: 15px;
    padding-top: 15px;
`
const Card2 = styled.div`
    width: 230px;
    height: 150px;
    background-color: #EF7914;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;
`
=======
export default Staffcards;
>>>>>>> b1cf657d26ef2b383e13781553c7d40ce8af48f0

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  height: 120px;
  width: 220px;
  background-color: #fff;
  border-radius: 3px;
  border-bottom: 2px solid darkred;
  font-family: Montserrat;
  display: flex;
  justify-content: center;
  margin: 10px;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const CardHold = styled.div`
  width: 85%;
  margin-top: 15px;
`;

const IconHold = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 15px;
`;
const CardTitle = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;
const CardInfo = styled.div`
  font-size: 20px;
  font-weight: 800;
`;
