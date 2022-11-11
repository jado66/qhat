import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export const DatabaseMenu = () => {
    return (
        <Menu menuButton={<MenuButton className={"border-0"}>Database Options</MenuButton>} transition>
          <MenuItem>New Algorithm</MenuItem>
          <MenuItem>Save Algorithm</MenuItem>
          <MenuItem>Duplicate Algorithm</MenuItem>
          <MenuItem>Load Algorithm</MenuItem>
          <MenuItem>Clear Algorithm</MenuItem>
          <MenuDivider />
          <MenuItem>Qubit Indexing</MenuItem>
          <MenuItem>Auto Scroll Workplace</MenuItem>
          <MenuDivider />
          <MenuItem>Load Backend</MenuItem>
          <MenuDivider />
          <MenuItem>Toolbar Options</MenuItem>
        </Menu>      
    );
  }