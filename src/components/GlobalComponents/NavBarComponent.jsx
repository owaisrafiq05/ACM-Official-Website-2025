import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCalendarAlt, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import logo from "../../assets/acm-logo-png.png";

const Container = styled.div`
  position: fixed;
  z-index: 999;
  height: 100vh; /* Full screen height to allow vertical centering */
  display: flex; /* Flexbox to align content */
  align-items: center; /* Vertically center the content */
  @media (max-width: 1024px) { /* Tailwind lg breakpoint */
    display: none; /* Hide on small screens */
  }
`;

const SidebarContainer = styled.div`
  background-color: #f0f0f0; 
  width: 4rem; 
  border-radius: 0 30px 30px 0;
  padding: 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center the content */
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); 
  height: auto; /* Ensure height fits the content dynamically */
`;

const Logo = styled.div`
  width: 5.75rem; 
  margin-bottom: 1rem; 

  img {
    margin-left: 0.3rem;
    width: 100%;
    height: auto; 
    max-height: 5.75rem; 
  }
`;

const SlickBar = styled.ul`
  color: black; 
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: #f0f0f0; 
  padding: 0; 
  margin: 0; 
  width: 100%; 
  border-radius: 0 30px 30px 0;
`;

const Item = styled(({ exact, ...props }) => <NavLink {...props} />)`
  text-decoration: none;
  color: black; 
  width: 100%;
  padding: 1rem 0; 
  cursor: pointer;
  display: flex;
  justify-content: center; /* Center the icon */
  align-items: center;
  position: relative;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(11, 70, 109, 0.1); 
    border-right: 4px solid #0b466d; 
  }

  &:hover svg {
    color: #0b466d;
  }

  svg {
    width: 1.5rem; 
    height: auto;
    color: #666;
    transition: color 0.3s ease;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  background-color: #0b466d;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  margin-left: 0.5rem;
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -4px;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: #0b466d;
  }

  ${Item}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const NavBarComponent = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <SidebarContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar>
          <Item onClick={handleLinkClick} exact to="/">
            <FontAwesomeIcon icon={faHome} />
            <Tooltip>Home</Tooltip>
          </Item>
          <Item onClick={handleLinkClick} to="/events">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <Tooltip>Events</Tooltip>
          </Item>
          <Item onClick={handleLinkClick} to="/our-team">
            <FontAwesomeIcon icon={faUsers} />
            <Tooltip>Team</Tooltip>
          </Item>
          <Item onClick={handleLinkClick} to="/contact-us">
            <FontAwesomeIcon icon={faPhone} />
            <Tooltip>Contact</Tooltip>
          </Item>
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

export default NavBarComponent;
