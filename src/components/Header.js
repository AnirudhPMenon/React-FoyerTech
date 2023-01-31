import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const header = () => {
  return (
   <MainHeader>
    <NavLink to="/">
        <img src="./images/logo.png" alt="logo" className='logo' />
    </NavLink>
    <Navbar />
   </MainHeader>
  )
}

const MainHeader= styled.header`
    padding: 0 4.8rem;
    height: 13rem;
    background-color: ${({theme}) => theme.colors.bg}; 
    display: flex;
    justify-content: center;
    align-items: center;

    .logo{
        height: auto;
        max-width: 45%;
    }
`;

export default header
