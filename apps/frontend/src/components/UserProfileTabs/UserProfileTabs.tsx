import React, { useState } from 'react';
import { UserProfileTabsContainer, UserProfileTabButton } from './UserProfileTabs.styles';

interface TabProps {
  label: string;
  children: any;
}

const UserProfileTabs = ({ defaultTab, children }: { defaultTab: string; children: any }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <UserProfileTabsContainer>
      <div>
        {React.Children.map(children, (child: React.ReactElement<TabProps>) => {
          if (child.props.label === activeTab) {
            return child;
          }
          return null;
        })}
      </div>
      <div>
        {React.Children.map(children, (child: React.ReactElement<TabProps>) => (
          <UserProfileTabButton
            key={child.props.label}
            onClick={() => handleTabClick(child.props.label)}
            style={{ fontWeight: activeTab === child.props.label ? 'bold' : 'normal' }}
            isActive={activeTab === child.props.label}
          >
            {child.props.label}
          </UserProfileTabButton>
        ))}
      </div>
    </UserProfileTabsContainer>
  );
};

export default UserProfileTabs;
