import React from 'react';
import { EditStyledButton } from '../Button.styles';

interface EditButtonProps {
  onClick: () => void;
  dataCypress?: string;
}


const EditButton: React.FC<EditButtonProps> = ({ onClick, dataCypress }) => {
  return (
    <EditStyledButton data-cy={dataCypress} onClick={onClick}>
      Editar Estudiante
    </EditStyledButton>
  );
};

export default EditButton;
