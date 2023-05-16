import logo from '../../assets/logo-ucademy.svg';
import { StyledLogo, StyledNavBar } from '../../styles/NavBar.styles';

const NavBar = () => (
  <StyledNavBar>
    <StyledLogo src={logo} alt='logo-ucademy' />
  </StyledNavBar>
);

export default NavBar;