import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export const QHatMenu = () => {
    return (
      <>
        <Menu menuButton={<MenuButton className={"border-0"}>QHat</MenuButton>} transition>
          <MenuItem>New Window</MenuItem>
          <MenuDivider />
          <MenuItem>Zoom In</MenuItem>
          <MenuItem>Zoom Out</MenuItem>
          <MenuItem>Reset Zoom</MenuItem>
          <MenuItem>Increase Font</MenuItem>
          <MenuItem>Decrease Font</MenuItem>
          <MenuDivider />
          <MenuItem>Change Theme</MenuItem>
          <MenuDivider />
          <MenuItem>About KBR</MenuItem>
        </Menu>
      </>
      
    );
  }