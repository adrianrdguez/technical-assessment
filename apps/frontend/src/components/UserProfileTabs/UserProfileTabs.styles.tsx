import styled, { css } from 'styled-components';

export const UserProfileTabsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

interface UserProfileTabButtonProps {
  isActive: boolean;
}

export const UserProfileTabButton = styled.button<UserProfileTabButtonProps>`
background: transparent;
border: none;
font-size: 13px;
margin-right: 5px;
cursor: pointer;
${(props) =>
    props.isActive &&
    css`
    border-bottom: 6px solid #0ABB87;
  `}
`;



export const UserProfileTabContent = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 0 0 5px 5px;
`;