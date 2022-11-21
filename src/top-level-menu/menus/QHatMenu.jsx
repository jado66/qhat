import { Menu, SubMenu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import { useContext } from 'react';
import { TabsContext } from '../../App';

export const QHatMenu = () => {
  const {addTab} = useContext(TabsContext)

    return (
      <>
        <Menu menuButton={<MenuButton className={"border-0"}>QHat</MenuButton>} transition>
          <MenuItem>Home</MenuItem>

          <SubMenu label="New">
            <MenuItem onClick={()=>{addTab("Database")}}>Database Display</MenuItem>
            <MenuItem onClick={()=>{addTab("Algorithm")}}>Algorithm Creator</MenuItem>
            <MenuItem onClick={()=>{addTab("Hardware")}}>Hardware Designer</MenuItem>
          </SubMenu>
          <MenuDivider />
          <MenuItem>Open</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuItem>Save As</MenuItem>
          <MenuItem>Download</MenuItem>
          <MenuDivider />
          <MenuItem>Settings</MenuItem>



         
        </Menu>
      </>
      
    );
  }