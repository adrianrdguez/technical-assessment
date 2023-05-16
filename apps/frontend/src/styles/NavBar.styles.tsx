import styled from "styled-components";
import { deviceSizes } from "./responsive";

export const StyledNavBar = styled.nav`
background: #262D34;
display: flex;
align-items: center;
padding: 20px;
@media(min-width:${deviceSizes.tablet}){
  padding: 30px;
}
`;

export const StyledLogo = styled.img`
width: 100%;
max-width: 180px;
@media(min-width:${deviceSizes.tablet}){
  max-width: 223px;
}
`;

