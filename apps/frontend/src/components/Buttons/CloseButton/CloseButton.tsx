import React, { ReactNode } from 'react';
import { ButtonContainer } from './CloseButton.styles';


interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const CloseButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default CloseButton;
