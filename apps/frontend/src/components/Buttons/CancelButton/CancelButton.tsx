import React from 'react';
import { StyledCancelButton } from '../Button.styles';

interface CancelButtonProps {
  onClick: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
  return (
    <StyledCancelButton onClick={onClick}>
      Cancelar Edición
    </StyledCancelButton>
  );
};

export default CancelButton;