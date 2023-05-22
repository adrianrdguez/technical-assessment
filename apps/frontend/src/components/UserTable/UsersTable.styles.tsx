import styled from "styled-components";

interface ConexionProp {
  isOnline: boolean;
}

export const CustomThead = styled.thead`
  border-bottom: 2px solid black;
`;

export const ContainerDiv = styled.div`
overflow-x: auto;
width: 100%;
`;

export const CustomTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 15px 10px;
  text-align: left;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #CDCDCD;
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

export const ConexionTd = styled.td<ConexionProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 18px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 300px;
  font-family: 'Poppins', sans-serif;
  background: ${(props) => (props.isOnline ? '#0ABB87' : '#ffffff')};
  border: ${(props) => (props.isOnline ? 'none' : '0.5px solid #9e9e9e')};
`;