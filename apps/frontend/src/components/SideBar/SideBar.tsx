import { ReactNode } from 'react';
import { CustomLi, CustomImg, CustomDiv, DivContainer, TableContent } from './SideBar.styles';

interface SidebarProps {
  children: ReactNode;
  items: {
    logo: string;
    text: string;
  }[];
  isHidden: boolean;
}

const Sidebar = ({ children, items, isHidden }: SidebarProps) => {
  return (
    <DivContainer>
      <CustomDiv isHidden={isHidden}>
        <ul>
          {items.map(({ logo, text }) =>
            <CustomLi key={text}>
              <CustomImg src={logo} alt={text} />
              {text}
            </CustomLi>
          )}
        </ul>
      </CustomDiv>
      <TableContent>
        {children}
      </TableContent>
    </DivContainer>
  );
};

export default Sidebar;


