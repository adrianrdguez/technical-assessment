import React from 'react';
import styled from 'styled-components';

interface SaveButtonProps {
  onClick: () => void;
  dataCypress?: string;
  dataCypress2?: string;
}

const StyledButton = styled.button`
  background-color: #262D34;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SaveButton: React.FC<SaveButtonProps> = ({ onClick, dataCypress, dataCypress2 }) => {
  return (
    <StyledButton data-cy={dataCypress} data-cy2={dataCypress2} onClick={onClick}>
      Cuardar
    </StyledButton>
  );
};

export default SaveButton;