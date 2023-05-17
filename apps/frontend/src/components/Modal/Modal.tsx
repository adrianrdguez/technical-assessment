import React, { ReactNode } from 'react';
import { ModalContent, ModalOverlay } from '../../styles/Modal.styles';
import UserModal from '../UserModal/UserModal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  user: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, user }) => {
  if (!isOpen) return null;

  const userModalProps = {
    avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/26/2621da26f5c7e9163a60f0a9d1129f5e53984663.jpg',
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    inscriptionDate: user.inscriptionDate,
  };


  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <button onClick={onClose}>Close</button>
        <UserModal {...userModalProps} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
