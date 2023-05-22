import styled from 'styled-components';
import { deviceSizes } from '../../styles/constants';

export const StyledNavBar = styled.nav`
  background: #262d34;
  padding: 20px;
  display: flex;
    justify-content: space-between;
  @media (min-width: ${deviceSizes.tablet}) {
    padding: 40px;
  }
  @media (max-width: ${deviceSizes.mobileL}) {
    padding: 30px;
  }
`;

export const StyledLogo = styled.img`
  width: 100%;
  max-width: 180px;
  @media (min-width: ${deviceSizes.tablet}) {
    max-width: 220px;
  }
  @media (max-width: ${deviceSizes.mobileL}) {
    max-width: 210px;
  }
`;

export const StyledButton = styled.button`
color: white;
background-color: #262d34;
border: none;
font-size: 24px;
`;


