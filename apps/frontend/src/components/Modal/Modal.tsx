import React from 'react';
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

  const userProfileProps = {
    avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/26/2621da26f5c7e9163a60f0a9d1129f5e53984663.jpg',
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    inscriptionDate: user.inscriptionDate,
    courses: [{
      _id: 'd102c6b4-ecc8-4733-9a4f-b51afd7f3826',
      title: 'Ex dolorem voluptate ut suscipit et libero corrupti dolore quasi.',
      description:
        'Et culpa laboriosam. Necessitatibus dolor totam reprehenderit voluptas necessitatibus voluptatem aliquid delectus. Deserunt sequi modi. Et ad architecto.',
      percentCompleted: 48,
      inscriptionDate: '09/08/2022'
    }, {
      _id: '3939d277-5dcf-41a7-a015-c46183be887d',
      title: 'Maxime magni odit qui porro occaecati accusantium.',
      description:
        'Earum eligendi odit ipsum. Accusamus et corporis rerum quod dignissimos repellendus omnis. Minus voluptas doloremque qui aut fuga. Et explicabo eveniet perferendis. Perferendis sunt quibusdam quis sint et tenetur saepe est.',
      percentCompleted: 91,
      inscriptionDate: '18/03/2022'
    }]
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
          Close
        </CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

