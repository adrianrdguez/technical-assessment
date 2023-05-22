import { deviceSizes } from 'apps/frontend/src/styles/constants';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 8px 16px;
  position: 'absolute',
  bottom: '10px', 
  right: '10px',
  background-color: #FFF;
  color: #262D34;
  border: 1px solid #262D34;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
  @media (max-width:${deviceSizes.tablet}) { 
    margin-right: 50px;
  }
`;

export const EditButtonContainer = styled.div`
display:flex;
position:absolute;
right:20px;
top:20px;
`;
