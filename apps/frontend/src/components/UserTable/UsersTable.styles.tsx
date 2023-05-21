import styled from "styled-components";

export const CustomThead = styled.thead`
 tr {
    th {
      border-bottom: 2px solid black;
    }
  }
`;

export const ContainerDiv = styled.div`
overflow-x: auto;
width: 100%;
`;

export const CustomTable = styled.table`
  width: 100%;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

export const Td = styled.th`
  padding: 15px 10px;
  text-align: left;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: #0ABB87;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;