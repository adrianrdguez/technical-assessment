import React, { ReactNode } from 'react';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="sidebar">
      <ul>
      </ul>
      {children}
    </div>
  );
};

export default Sidebar;

