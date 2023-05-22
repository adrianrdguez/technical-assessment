import styled, { css } from "styled-components";
import { deviceSizes } from "../../styles/constants";

interface SideBarProps {
  isHidden: boolean;
}

export const CustomLi = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const CustomImg = styled.img`
  margin: 20px;
`;

export const CustomDiv = styled.div<SideBarProps>`
  position: fixed;
  padding: 20px;
  @media (min-width:${deviceSizes.laptop}) {
    position: relative;
    padding-top: 35px;
    padding: 20px;
  }
  @media (max-width:${deviceSizes.tablet}) {
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #262D34;
    background-color: #FFF;
    padding: 20px;
    border-radius: 10px;
    ${props =>
    props.isHidden &&
    css`
        display: none;
      `}
  }
`;

export const DivContainer = styled.div`
display: flex;
flex-direction: row;
@media (min-width:${deviceSizes.laptop}) {
  display: flex;
  align-items: top;
}
`;

export const TableContent = styled.div`
  margin: 40px;
  flex-grow: 1; 
  overflow-y: auto;
  @media (min-width:${deviceSizes.laptop}) {
    width: 100%;
  }
`;


