import logo from '../../assets/logo-ucademy.svg';
import { StyledLogo, StyledNavBar, StyledButton } from './NavBar.styles';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  isMobile: boolean;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMobile, sidebarOpen, toggleSidebar }) => {
  return (
    <StyledNavBar>
      <StyledLogo src={logo} alt='logo-ucademy' data-cy="ucademy-logo" />
      {isMobile && (
        <StyledButton onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </StyledButton>)}
    </StyledNavBar>
  );
};

export default Navbar;



import React from 'react';
