import React, { useState } from 'react';
import { ModalContent, ModalOverlay } from './Modal.styles';
import UserProfile from '../UserProfile/UserProfile';
import UserProfileTabs from '../UserProfileTabs/UserProfileTabs';
import UserProfileTab from '../UserProfileTabs/UserProfileTab';
import CloseButton from '../Buttons/CloseButton/CloseButton';
import UserCourses from '../UserCourses/UserCourses';
import EditButton from '../Buttons/EditButton/EditButton';
import { EditButtonContainer } from '../Buttons/CloseButton/CloseButton.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  const [isEditing, setIsEditing] = useState(false);

  const userProfileProps = user && {
    avatar: user.avatar,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    inscriptionDate: user.inscriptionDate,
    courses: user.courses || [],
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = (formData: any) => {
    console.log('Form data:', formData);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <UserProfileTabs defaultTab="Perfil">
          <UserProfileTab label="Perfil">
            <EditButtonContainer>
              <EditButton onClick={handleEditClick} />
            </EditButtonContainer>
            <UserProfile {...userProfileProps} />
          </UserProfileTab>
          <UserProfileTab label="Cursos">
            <UserCourses courses={userProfileProps.courses} />
          </UserProfileTab>
        </UserProfileTabs>
        <CloseButton onClick={onClose}>Cerrar</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
