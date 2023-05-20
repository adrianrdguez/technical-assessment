import React, { useState } from 'react';
import { ModalContent, ModalOverlay, ButtonsContainer } from './Modal.styles';
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
import { createUser, updateUser } from '../../services/Users/users.service';
import { User } from '../../services/Users/users.models'

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
    _id: user._id,
    avatar: user.avatar,
    name: user.name,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    phone: user.phone,
    inscriptionDate: user.inscriptionDate,
    courses: user.courses || [],
  };

  const blankInitialValues = {
    name: '',
    lastName: '',
    username: '',
    email: '',
    phone: ''
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleFormSubmitCreateUser = async (formData: User) => {
    try {
      const response = await createUser(formData);
      console.log('User created:', response);
    } catch (error) {
      console.log('Error creating user:', error);
    }
  };

  const handleFormSubmitEditUser = async (formData: User) => {
    try {
      const updatedUser = { ...userProfileProps, ...formData };
      const response = await updateUser(userProfileProps._id, updatedUser);
      console.log('Updated User:', response);
    } catch (error) {
      console.log('Error updating user:', error);
    }
  };


  return (
    <ModalOverlay>
      <ModalContent>
        {isButtonClicked ? (
          <UserForm
            onSubmit={handleFormSubmitCreateUser}
            initialValues={blankInitialValues}
            renderButtons={({ handleSubmit }) => (
              <ButtonsContainer>
                <SaveButton onClick={handleSubmit} />
              </ButtonsContainer>
            )}
          />
        ) :
          <UserProfileTabs defaultTab="Perfil">
            <UserProfileTab label="Perfil">
              <EditButtonContainer>
                {!isEditing ? (
                  <EditButton onClick={handleEditClick} />
                ) : (
                  <>
                  </>
                )}
              </EditButtonContainer>
              {isEditing ? (
                <UserForm
                  onSubmit={handleFormSubmitEditUser}
                  initialValues={userProfileProps}
                  renderButtons={({ handleSubmit }) => (
                    <ButtonsContainer>
                      <CancelButton onClick={handleEditClick} />
                      <SaveButton onClick={handleSubmit} />
                    </ButtonsContainer>
                  )}
                />
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