import { useState } from 'react';
import UsersTable from '../components/UserTable/UserTable';
import Button from '../components/Buttons/AddStudentButton/Button';
import Modal from '../components/Modal/Modal';

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openModalWithButton = () => {
    setIsButtonClicked(true);
    openModal();
  };

  const handleInfoClick = (rowData: any) => {
    setSelectedUser(rowData);
    setIsButtonClicked(false);
    openModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsButtonClicked(false);
  };

  return (
    <>
      <Button dataCypress="create-user" onClick={openModalWithButton}>Nuevo Estudiante</Button>
      <UsersTable onInfoClick={handleInfoClick} />
      <Modal user={selectedUser} isOpen={isModalOpen} onClose={closeModal} isButtonClicked={isButtonClicked} />
    </>
  );
}

export default Users;

