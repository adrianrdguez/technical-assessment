import styled from "styled-components";
import { deviceSizes } from "../../styles/constants";


export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #0ABB87;
  color: white;
  border: 1px solid #0ABB87;
  border-radius: 8px;
  cursor: pointer;
`;

export const StyledCancelButton = styled.button`
  background-color: #FFF;
  color: #262D34;
  padding: 8px 16px;
  border: 1px solid #262D34;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
`;

export const EditStyledButton = styled.button`
  background-color: #262D34;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width:${deviceSizes.tablet}) { 
    margin-right: 20px;
  }
`;