import React from 'react';
import styled from 'styled-components';
import img from "../Assets/airtel.jpg"
import img2 from "../Assets/mtn.jpg"
import img3 from "../Assets/glo.jpg"

interface Props {
  isOpen: boolean;
}

const Popup: React.FC<Props> = ({ isOpen }) => {
  if (!isOpen) {
    return null; // if popup is closed, don't render anything
  }

  return (
    <Popups>
      <Popup_content>
              <h3>Payments</h3>
              <p>Select the service you want to make payment for</p>
              <h4>Data Services</h4>
              <Box>
                  <Airtel>
                      <Img src={img} />
                      <AirtelText>
                          <strong>Airtel Data</strong>
                          <Text>Airtel Data - Get instant top up</Text>
                      </AirtelText>
                  </Airtel>

                  <Airtel>
                      <Img src={img2} />
                      <AirtelText>
                          <strong>MTN Data</strong>
                          <Text>MTN Data - Get instant Data Top up</Text>
                      </AirtelText>
                  </Airtel>

                  <Airtel>
                      <Img src={img3} />
                      <AirtelText>
                          <strong>GLO Data</strong>
                          <Text>GLO Data - Get instant Top up</Text>
                      </AirtelText>
                  </Airtel>

                  <Airtel>
                      <Img src={img3} />
                      <AirtelText>
                          <strong>GLO Data</strong>
                          <Text>GLO Data - Get instant Top up</Text>
                      </AirtelText>
                  </Airtel>

                  <Airtel>
                      <Img src={img3} />
                      <AirtelText>
                          <strong>GLO Data</strong>
                          <Text>GLO Data - Get instant Top up</Text>
                      </AirtelText>
                  </Airtel>

                  <Airtel>
                      <Img src={img3} />
                      <AirtelText>
                          <strong>GLO Data</strong>
                          <Text>GLO Data - Get instant Top up</Text>
                      </AirtelText>
                  </Airtel>

                  <Airtel>
                      <Img src={img3} />
                      <AirtelText>
                          <strong>GLO Data</strong>
                          <Text>GLO Data - Get instant Top up</Text>
                      </AirtelText>
                  </Airtel>
              </Box>
      </Popup_content>
    </Popups>
  );
};

export default Popup;
const Text = styled.div`
    font-size: 11px;
`
const AirtelText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    strong{
        margin: 0;
        font-weight: 500;
        font-size: 15px;
    }
`
const Img = styled.img`
    height: 50px;
`
const Airtel = styled.div`
    width: 250px;
    height: 50px;
    border: 1px solid #CEC2C2;
    padding: 10px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 10px;
`
const Box = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* background-color: green; */
`
const Popup_content = styled.div`
    width: 850px;
    height: 450px;
    background-color: white;
    display: flex;
    flex-direction: column;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  h3{
    margin: 0px;
    color: #173D52 !important;
    font-size: 1.3em;
    font-weight: 500;
  }
  p{
    font-size: 15px;
    margin-top: 7px;
  }
  h4{
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
  }
`

const Popups = styled.div`
    z-index: 123456;
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`