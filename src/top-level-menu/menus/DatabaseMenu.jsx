import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export const DatabaseMenu = () => {
    return (
        <Menu menuButton={<MenuButton className={"border-0"}>Database Options</MenuButton>} transition>
          <MenuItem>Database Option 1</MenuItem>
          
        </Menu>      
    );
  }