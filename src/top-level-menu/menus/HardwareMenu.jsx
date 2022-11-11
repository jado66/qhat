import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export const HardwareMenu = () => {
    return (
        <Menu menuButton={<MenuButton className={"border-0"}>Hardware Options</MenuButton>} transition>
          <MenuItem>New Hardware</MenuItem>
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