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
      <Popup_content>
        {/* insert your popup content here */}
      </Popup_content>
    </Popups>
  );
};

export default Popup;
const Popup_content = styled.div`
    background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
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