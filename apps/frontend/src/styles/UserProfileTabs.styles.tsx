import styled from 'styled-components';

export const UserProfileTabsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const UserProfileTabButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px 5px 0 0;
`;

export const UserProfileTabContent = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 0 0 5px 5px;
`;