import React, { ReactNode } from 'react';
import { StyledButton } from '../Button.styles';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  dataCypress?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, dataCypress }) => {
  return <StyledButton data-cy={dataCypress} onClick={onClick}>{children}</StyledButton>;
};

export default Button;

