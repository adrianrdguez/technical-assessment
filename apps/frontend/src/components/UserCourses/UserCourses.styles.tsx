import styled from 'styled-components';

interface ProgressProps {
  maxWidth: number;
}

export const Bar = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  height: 8px;
`;

export const Progress = styled.div<ProgressProps>`
  background-color: #00c853;
  border-radius: 4px;
  height: 100%;
  width: ${props => `${props.maxWidth}%`};
`;

