import styled from "styled-components";
import { deviceSizes } from "../../styles/constants";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
position: fixed;
width: 100%;
height: 50%;
max-width: 480px;
background: #FFF;
box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);
border-radius: 5px;
overflow: auto;
padding: 20px 35px;
@media (max-width:${deviceSizes.tablet}) { 
  min-height: 611px;
  bottom: 0;
  height: 80vh;
}
`;

export const ButtonsContainer = styled.div`
display: flex;
position: absolute;
right: 20px;
top: 20px;
@media (max-width:${deviceSizes.tablet}) { 
  margin-right: 20px;
}
`;