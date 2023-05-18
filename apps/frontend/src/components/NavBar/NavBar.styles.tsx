import styled from 'styled-components';
import { deviceSizes } from '../../styles/constants';

export const StyledNavBar = styled.nav`
  background: #262d34;
  display: flex;
  align-items: center;
  padding: 20px;
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


