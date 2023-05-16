import React, { ReactNode } from 'react';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {children}
    </div>
  );
};

export default Sidebar;

