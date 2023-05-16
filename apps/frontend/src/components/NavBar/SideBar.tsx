import { ReactNode } from 'react';
import { CustomLi, CustomImg, CustomDiv, DivContainer } from '../../styles/SideBar.styles';

interface SidebarProps {
  children: ReactNode;
  items: {
    logo: string;
    text: string;
  }[]
}

const Sidebar = ({ children, items }: SidebarProps) => {
  return (
    <DivContainer>
      <CustomDiv>
        <ul>
          {items.map(({ logo, text }) =>
            <CustomLi key={text}>
              <CustomImg src={logo} alt={text} />
              {text}
            </CustomLi>
          )}
        </ul>
      </CustomDiv>
      {children}
    </DivContainer>
  );
};

export default Sidebar;

