import React from 'react';
import { useTable } from 'react-table';
import { CustomThead, ContainerDiv, CustomTable, Td, Th } from './UsersTable.styles';

interface TableData {
  name: string;
  isOnline: boolean;
  email: string;
  phone: string;
  username: string;
  icon: string;
}
interface CustomColumn {
  Header: string;
  accessor: keyof TableData;
}

interface UsersTableProps {
  onInfoClick: (rowData: TableData) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ onInfoClick }) => {
  const data: TableData[] = React.useMemo(
    () => [
      {
        name: 'John Doe',
        isOnline: true,
        email: 'john.doe@example.com',
        phone: '555-1234',
        username: 'johndoe',
        icon: 'https://example.com/johndoe.jpg',
      },
      {
        name: 'Jane Smith',
        isOnline: false,
        email: 'jane.smith@example.com',
        phone: '555-5678',
        username: 'janesmith',
        icon: 'https://example.com/janesmith.jpg',
      },
      {
        name: 'Bob Johnson',
        isOnline: true,
        email: 'bob.johnson@example.com',
        phone: '555-4321',
        username: 'bobjohnson',
        icon: 'https://example.com/bobjohnson.jpg',
      },
    ],
    []
  );

  const columns: CustomColumn[] = React.useMemo(
    () => [
      { Header: 'Conexión', accessor: 'isOnline' },
      { Header: 'Nombre y Apellidos', accessor: 'name' },
      { Header: 'Nombre de Usuario', accessor: 'username' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Móvil', accessor: 'phone' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <ContainerDiv>
      <CustomTable {...getTableProps()}>
        <CustomThead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </tr>
          ))}
        </CustomThead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const rowData = row.original as TableData;
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                ))}
                <Td>
                  <button onClick={() => onInfoClick(rowData)}>Info</button>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </CustomTable>
    </ContainerDiv>
  );
};

export default UsersTable;