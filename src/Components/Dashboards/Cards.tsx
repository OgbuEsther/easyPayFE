import React from "react";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import styled from "styled-components";

const Cards = () => {
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
          <CardTitle>Company name</CardTitle>
          <CardInfo>Codelab</CardInfo>
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
          <CardTitle>Company code</CardTitle>
          <CardInfo>322567</CardInfo>
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
          <CardTitle>Admin name</CardTitle>
          <CardInfo>Ogbu Esther</CardInfo>
        </CardHold>
      </Card>
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  height: 120px;
  width: 220px;
  background-color: #fff;
  border-radius: 3px;
  border-bottom: 2px solid #0D71FA;
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
