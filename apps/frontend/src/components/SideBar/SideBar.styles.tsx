import styled from "styled-components";
import { deviceSizes } from "../../styles/constants";

export const CustomLi = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const CustomImg = styled.img`
  margin: 20px;
`;

export const CustomDiv = styled.div`
  position: fixed;
  padding: 20px;
  @media (min-width:${deviceSizes.laptop}) {
    position: relative;
    padding-top: 35px;
    padding: 20px;
  }
`;

export const DivContainer = styled.div`
display: flex;
flex-direction: row;
height: 100vw;
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
    max-width: 1080px;
  }
`;