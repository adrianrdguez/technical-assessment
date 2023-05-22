import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { CustomThead, ContainerDiv, CustomTable, Td, Th, Tr, PaginationContainer, PaginationButton, ConexionTd } from './UsersTable.styles';
import { ReactComponent as InfoIcon } from '../../assets/info.svg'
import { fetchUsers } from '../../services/Users/users.service';
import { User } from '../../services/Users/users.models';

interface CustomColumn {
  Header: string;
  accessor: keyof User;
}

interface UsersTableProps {
  onInfoClick: (rowData: User) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ onInfoClick }) => {
  const [data, setData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchUsers(currentPage)
      .then(updatedData => setData(updatedData))
      .catch(error => console.log('Error fetching users:', error));
  }, [currentPage]);

  const columns: CustomColumn[] = React.useMemo(
    () => [
      { Header: 'Conexión', accessor: 'isOnline' },
      {
        Header: 'Nombre y Apellidos',
        accessor: 'fullName',
      },
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

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 10, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 10);
  };

  return (
    <ContainerDiv>
      <CustomTable data-cy="users-table" {...getTableProps()}>
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
            const rowData = row.original as User;
            return (
              <Tr {...row.getRowProps()} data-cy="usersTable-row">
                {row.cells.map((cell) => {
                  if (cell.column.id === 'isOnline') {
                    return (
                      <Td>
                        <ConexionTd isOnline={cell.value} {...cell.getCellProps()}>{cell.value ? 'Online' : 'Offline'}</ConexionTd>
                      </Td>
                    );
                  }
                  return (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  );
                })}
                <Td>
                  <InfoIcon data-cy="info-button" style={{ cursor: 'pointer' }} onClick={() => onInfoClick(rowData)} />
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </CustomTable>
      <PaginationContainer>
        <PaginationButton data-cy="table-prev-button" disabled={currentPage === 0} onClick={handlePrevPage}>
          Previous
        </PaginationButton>
        <PaginationButton data-cy="table-next-button" onClick={handleNextPage}>
          Next
        </PaginationButton>
      </PaginationContainer>
    </ContainerDiv>
  );
};

export default UsersTable;
