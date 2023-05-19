import React, { useState } from 'react';
import { ModalContent, ModalOverlay } from './Modal.styles';
import UserProfile from '../UserProfile/UserProfile';
import UserProfileTabs from '../UserProfileTabs/UserProfileTabs';
import UserProfileTab from '../UserProfileTabs/UserProfileTab';
import CloseButton from '../Buttons/CloseButton/CloseButton';
import UserCourses from '../UserCourses/UserCourses';
import EditButton from '../Buttons/EditButton/EditButton';
import { EditButtonContainer } from '../Buttons/CloseButton/CloseButton.styles';
import UserForm from '../UserForm/UserForm';
import SaveButton from '../Buttons/SaveButton/SaveButton';
import CancelButton from '../Buttons/CancelButton/CancelButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: any;
  isButtonClicked?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, user, isButtonClicked }) => {
  if (!isOpen) return null;

  const [isEditing, setIsEditing] = useState(false);

  const userProfileProps = user && {
    avatar: user.avatar,
    name: user.name,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    phone: user.phone,
    inscriptionDate: user.inscriptionDate,
    courses: user.courses || [],
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleFormSubmit = (formData: any) => {
    console.log('Form data:', formData);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        {isButtonClicked ? (
          <UserForm onSubmit={handleFormSubmit} initialValues={userProfileProps} />
        ) :
          <UserProfileTabs defaultTab="Perfil">
            <UserProfileTab label="Perfil">
              <EditButtonContainer>
                {!isEditing ? (
                  <EditButton onClick={handleEditClick} />
                ) : (
                  <>
                    <CancelButton onClick={handleEditClick} />
                    <SaveButton onClick={handleEditClick} />
                  </>
                )}
              </EditButtonContainer>
              {isEditing ? (
                <UserForm onSubmit={handleFormSubmit} initialValues={userProfileProps} />
              ) : (
                <UserProfile {...userProfileProps} />
              )}
            </UserProfileTab>
            <UserProfileTab label="Cursos">
              <UserCourses courses={userProfileProps.courses} />
            </UserProfileTab>
          </UserProfileTabs>
        }
        <CloseButton onClick={onClose}>Cerrar</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
