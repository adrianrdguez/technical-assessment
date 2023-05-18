import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 8px 16px;
  position: 'absolute',
  bottom: '10px', 
  right: '10px',
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const EditButtonContainer = styled.div`
display:flex;
position:absolute;
right:20px;
top:20px;
`;