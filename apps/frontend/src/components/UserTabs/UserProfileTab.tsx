import React, { ReactNode } from 'react';
import { UserProfileTabContent } from '../../styles/UserProfileTabs.styles';

interface UserProfileTabProps {
  label: string;
  children: ReactNode;
}

const UserProfileTab: React.FC<UserProfileTabProps> = ({ label, children }) => {
  return (
    <UserProfileTabContent>
      {children}
    </UserProfileTabContent>
  );
};

export default UserProfileTab;
