import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const Navbar = () => {

    const Nav= styled.nav`
    .navbar-list{
        display:flex;
        gap: 4.8rem;
    }

    li{
        list-style: none;

        .navbar-link{
            &:link,
            &:visited{
                display: inline-block;
                text-decoration: none;
                font-size: 1.4rem;
                font-weight: 700;
                text-transform: uppercase;
                color: ${({theme}) => theme.colors.black};
                transition: color 0.2s linear; 
            }

            &:hover{
                content: '';
                width: 100%;
                transform: scaleX(1);
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: red;
                // transform-origin: bottom right;
                transition: transform 0.25s ease-out;
            }
            &:active{
                color: red; 

            }
        }
    }

    
    `;

  return (
  <Nav>
    <div className='menuIcon'>
        <ul className='navbar-list'>
            <li>
                <NavLink className="navbar-link" to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className="navbar-link" to='/about'>About Us</NavLink>
            </li>
            <li>
                <NavLink className="navbar-link" to='/crmfarm'>CRMFarm</NavLink>
            </li>
            <li>
                <NavLink className="navbar-link" to='/service'>Services</NavLink>
            </li>
            <li>
                <NavLink className="navbar-link" to='/career'>Career</NavLink>
            </li>
            <li>
                <NavLink className="navbar-link" to='/contact'>Contact Us</NavLink>
            </li>
        </ul>
    </div>
  </Nav>
  );

  
};


export default Navbar