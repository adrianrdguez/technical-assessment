import React from 'react';
import { EditStyledButton } from '../Button.styles';

interface EditButtonProps {
  onClick: () => void;
}


const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <EditStyledButton onClick={onClick}>
      Editar Estudiante
    </EditStyledButton>
  );
};

export default EditButton;
