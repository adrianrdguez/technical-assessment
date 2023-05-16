import React, { ReactNode } from 'react';
import { StyledButton } from '../../styles/Button.styles';


interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
