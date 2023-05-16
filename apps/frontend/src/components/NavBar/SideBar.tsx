import { ReactNode } from 'react';
import { CustomLi, CustomImg } from '../../styles/SideBar.styles';

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
          <CustomLi key={text}>
            <CustomImg src={logo} alt={text} />
            {text}
          </CustomLi>
        )}
      </ul>
      {children}
    </div>
  );
};

export default Sidebar;

