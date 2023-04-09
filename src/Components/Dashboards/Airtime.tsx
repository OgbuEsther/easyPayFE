import React from 'react';
import styled from 'styled-components';


interface Props {
  isOpen: boolean;
}

const Popup: React.FC<Props> = ({ isOpen }) => {
  if (!isOpen) {
    return null; // if popup is closed, don't render anything
  }

  return (
    <Popups>
      
    </Popups>
  );
};

export default Popup;





const Popup_content = styled.div`
    width: 850px;
    height: 450px;
    background-color: white;
    display: flex;
    flex-direction: column;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
   animation: popup-open 0.5s ease-out forwards;

   @keyframes popup-open {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
  }
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