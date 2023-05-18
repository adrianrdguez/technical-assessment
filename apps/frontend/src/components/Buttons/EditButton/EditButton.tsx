import React from 'react';
import styled from 'styled-components';

interface EditButtonProps {
  onClick: () => void;
}

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      Editar Estudiante
    </StyledButton>
  );
};

export default EditButton;
