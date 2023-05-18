import React, { useEffect, useState } from 'react';
import { ModalContent, ModalOverlay } from './Modal.styles';
import UserProfile from '../UserProfile/UserProfile';
import UserProfileTabs from '../UserProfileTabs/UserProfileTabs';
import UserProfileTab from '../UserProfileTabs/UserProfileTab';
import CloseButton from '../Buttons/CloseButton';
import UserCourses from '../UserCourses/UserCourses';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  const userProfileProps = user && {
    avatar: user.avatar,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    inscriptionDate: user.inscriptionDate,
    courses: user.courses || [],
  };

  return (
    <ModalOverlay>
      <ModalContent className='hola'>
        <UserProfileTabs defaultTab="Perfil">
          <UserProfileTab label="Perfil">
            <UserProfile {...userProfileProps} />
          </UserProfileTab>
          <UserProfileTab label="Cursos">
            <UserCourses courses={userProfileProps.courses} />
          </UserProfileTab>
        </UserProfileTabs>
        <CloseButton
          onClick={onClose}
        >
          Cerrar
        </CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

