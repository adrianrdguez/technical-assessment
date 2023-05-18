import { useState } from 'react';
import UsersTable from '../components/UserTable/UserTable';
import Button from '../components/Buttons/AddStudentButton/Button';
import Modal from '../components/Modal/Modal';

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleInfoClick = (rowData: any) => {
    setSelectedUser(rowData);
    openModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (<>
    <Button>Nuevo Estudiante</Button>
    <UsersTable onInfoClick={handleInfoClick} />
    <Modal user={selectedUser} isOpen={isModalOpen} onClose={closeModal} />
  </>);
}

export default Users;