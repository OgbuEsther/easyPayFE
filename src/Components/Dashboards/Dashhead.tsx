import React, {useState} from 'react'
import styled from 'styled-components'
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io"
import {FiMenu} from "react-icons/fi"
import SideBar from './SideBar'
import img from "../Assets/blush12.png"


const Dashhead = () => {
    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show)
    }
  return (
      <Container>
          <Wrapper>
              <Left onClick={Toggle}>
                  <FiMenu />
              </Left>
              {/* <Mid>
                  <Inputhold>
                      <
                  </Inputhold>
              </Mid> */}
              <Right>
                  <Icons>
                      <IoIosNotificationsOutline />
                      <Circle>2</Circle>
                  </Icons>
                  <Up>
                      <Profile>
                      <Img src={ img} />
                      </Profile>
                  </Up>
              </Right>

              
           </Wrapper>
           {show ? (
              <Hold>
                  hfhfhfh
                  </Hold>
              ): null}
    </Container>
  )
}

export default Dashhead
const Text = styled.div`
    margin-left: 25px;
`
const Up = styled.div`
    display: flex;
    align-items: center;
`
const Hold = styled.div`
    width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #03993f;
    top: 80px;
    position: absolute;
    left: 0;
    z-index: 2;
    overflow: hidden;
    padding-top: 40px
`
const Left = styled.div`
    font-size: 25px;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 1024px) {
        display: flex;
    }
    @media screen and (max-width: 500px) {
        margin-left: 30px;
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Profile = styled.div`
    width: 44px;
    height: 44px;
    overflow: hidden;
    display: flex;
    margin-right: 35px;
    border-radius: 50px;
    background-color: red;
`
const Circle = styled.div`
    width: 17px;
    height: 17px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    background-color: red;
    font-size: 13px;
    top: 20px;
`
const Icons = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 27px;
    margin-right: 30px;
`
const Right = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    width: 120px;
    justify-content: space-between;
`
const Input = styled.input`
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
`
const Icon = styled.div`
    width: 70px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
`
const Inputhold = styled.div`
    width: 350px;
    height: 45px;
    border-radius: 50px;
    border: 1px solid #f1f1f1;
    display: flex;
    overflow: hidden;
`
const Wrapper = styled.div`
    width: 76%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 30px;
    justify-content: flex-end;
    position: relative;
    @media screen and (max-width: 1024px) {
        width: 93%;
        justify-content: space-between;
    }
`
const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    position: fixed;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    z-index: 1;
    background-color: #fff;
    justify-content: flex-end;
    /* position: relative; */
    @media screen and (max-width: 500px) {
        justify-content: center;
        display: flex;
    }
`