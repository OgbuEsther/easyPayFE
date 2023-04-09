import { useQuery } from "@tanstack/react-query";
import React, {useState} from "react";
import { BsFillPiggyBankFill, BsTelephoneFill, BsDatabase } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import styled from "styled-components";
import { getOneAdmin } from "../api/adminEndpoints";
import { UseAppSelector } from "../Global/Store";
import Airtime from "./Airtime"

const Cards: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  }
  const user = UseAppSelector((state) => state.Admin);
  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(user?._id),
  });


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
          <CardTitle>wallet Number </CardTitle>
          <CardInfo>{user?.walletNumber} </CardInfo>
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
          <CardTitle>Balance</CardTitle>
          {
           getAdmin?.data?.data?.wallet?.map((el:any)=>(
            <CardInfo>{el?.balance} </CardInfo>
           ))
          }
        
        </CardHold>
      </Card>
      <Card>
        <CardHold>
          <IconHold
            style={{
              backgroundColor: "#2a9d8f",
            }}
          >
            <BsTelephoneFill />
          </IconHold>
          
            <CardInfo>Buy Airtime</CardInfo>
          
        
        </CardHold>
      </Card>

      <Card onClick={() => setIsPopupOpen(true)}>
        <CardHold>
          <IconHold
            style={{
              backgroundColor: "#e76f51",
            }}
          >
            <BsDatabase />
          </IconHold>
          
            <CardInfo>Buy Data</CardInfo>
          
        
        </CardHold>
      </Card>
      <Airtime isOpen={isPopupOpen}/>
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  @media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
  }
`;
const Card = styled.div`
  height: 180px;
  width: 228px;
  background-color: #fff;
  border-radius: 3px;
  border-bottom: 2px solid #0d71fa;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 320px;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const CardHold = styled.div`
  width: 85%;
  margin-top: 15px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
`;
