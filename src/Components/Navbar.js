import React, {useState} from "react";
import "./CSS/Navbar.css";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
    <>
    <nav className='navbar'>

      <div className = "nav-container">

        <StyledNavLink to = "/" className = "nav-logo">
          SpaceVisualizer
        </StyledNavLink>

        <div className = "hi">

        <ul className= {click ? "nav-menu active" : "nav-menu"}>
          
          <li className = "nav-item">
            <StyledNavLink to = "/" activeClassName = "active" className = "nav-links" onClick = {handleClick}>
              Home
            </StyledNavLink>
          </li>

          <li className = "nav-item">
            <StyledNavLink to = "/satellite-images" activeClassName = "active" className = "nav-links" onClick = {handleClick}>
              APOD
            </StyledNavLink>
          </li>
          
          <li className = "nav-item">
            <StyledNavLink to = "/contact" activeClassName = "active" className = "nav-links" onClick = {handleClick}>
              Contact
            </StyledNavLink>
          </li>
        </ul>

        <div className = "nav-icon" onClick = {handleClick}>
            <i className = {click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        
      </div>
      </div>
    </nav>
  </>
    )
}

const StyledNavLink = styled(NavLink)`
  text-emphasis: none;
  text-decoration: none;
  &:hover {
    text-emphasis: none;
    text-decoration: none;
    color: white;
  }
`;

export default Navbar;