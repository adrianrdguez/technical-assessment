import React, { ReactNode } from 'react';

interface SidebarProps {
  children: ReactNode;
  items: {
    logo: string;
    text: string;
  }[]
}

const Sidebar = ({ children, items }: SidebarProps) => {
  return (
    <div className="sidebar">
      <ul>
        {items.map(({ logo, text }) =>
          <li key={text}>
            <img src={logo} alt={text} />
            {text}
          </li>
        )}
      </ul>
      {children}
    </div>
  );
};

export default Sidebar;

