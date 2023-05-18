import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';
import { CustomThead, ContainerDiv, CustomTable, Td, Th, PaginationContainer, PaginationButton } from './UsersTable.styles';
import { ReactComponent as InfoIcon } from '../../assets/info.svg'

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
  const [data, setData] = useState<TableData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page: number) => {
    try {
      const response = await axios.get<TableData[]>(`http://localhost:3333/api/users?page=${page}&limit=10`);
      setData(response.data);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

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

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 10, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 10);
  };

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
                  <InfoIcon style={{ cursor: 'pointer' }} onClick={() => onInfoClick(rowData)} />
                </Td>
              </tr>
            );
          })}
        </tbody>
      </CustomTable>

      <PaginationContainer>
        <PaginationButton disabled={currentPage === 0} onClick={handlePrevPage}>
          Previous
        </PaginationButton>
        <PaginationButton onClick={handleNextPage}>
          Next
        </PaginationButton>
      </PaginationContainer>
    </ContainerDiv>
  );
};

export default UsersTable;
