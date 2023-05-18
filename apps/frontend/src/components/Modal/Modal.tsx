import React from 'react';
import { ModalContent, ModalOverlay } from '../../styles/Modal.styles';
import UserProfile from '../UserProfile/UserProfile';
import UserProfileTabs from '../UserTabs/UserProfileTabs';
import UserProfileTab from '../UserTabs/UserProfileTab';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  const userProfileProps = {
    avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/26/2621da26f5c7e9163a60f0a9d1129f5e53984663.jpg',
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    inscriptionDate: user.inscriptionDate,
  };

  return (
    <ModalOverlay>
      <ModalContent className='hola'>
        <UserProfileTabs defaultTab="Perfil">
          <UserProfileTab label="Perfil">
            <UserProfile {...userProfileProps} />
          </UserProfileTab>
          <UserProfileTab label="Cursos">
            Prueba
          </UserProfileTab>
        </UserProfileTabs>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

