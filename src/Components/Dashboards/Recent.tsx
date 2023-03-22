import React from 'react'
import styled from 'styled-components'

const Recent = () => {
  return (
      <Container>
          <Top><h2>List of Staffs</h2></Top>
          <Boxhold>
              
              
          </Boxhold>
          <Head>
                  <Navs>Staff</Navs>
                  <Navs>Role</Navs>
                  <Navs>Joined</Navs>
            </Head>
              <Head2>
              

             

              
          </Head2>
    </Container>
  )
}

export default Recent
const Hold = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    background-color: blue;
    align-items: center;
`
const Navs2 = styled.div`
    color: #5a5a5a;
    font-size: 18px;
`
const Navs = styled.div`
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`
const Head2 = styled.div`
    background-color: #F6F7F9;
    /* justify-content: space-between; */
    /* align-items: center; */
    flex-direction: column;
    display: flex;
    /* height: 100%; */
    /* height: 60px; */
    padding-left: 10px;
    padding-right: 10px;
    overflow-y: scroll;
`
const Head = styled.div`
    margin-top: 15px;
    justify-content: space-between;
    background-color: #03993f;
    align-items: center;
    display: flex;
    height: 60px;
    padding-left: 10px;
    padding-right: 10px;
    position: sticky;
`
const Boxhold = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    
    /* background-color: red; */
`
const Top = styled.div`
    h2{
        margin: 0;
        font-size: 20px;
    }
`

const Container = styled.div`
    width: 93%;
    display: flex;
    height: 350px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 30px;
    margin-top: 30px;
    flex-direction: column;
    background-color: #fff;
`