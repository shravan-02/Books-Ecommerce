import React from 'react'
import styled from "styled-components";
import { AccountBox } from '../components/accountBox';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

const Auth = () => {
  return (
    <AppContainer>
      <AccountBox />
      <p className='trademark'> 
        Made by Shirya and Shravan 🫱🏻‍🫲🏾
        <p>
          Usability Design : Dr. Anand
        </p>
      </p>
    </AppContainer>
  )
}

export default Auth