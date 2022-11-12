import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export function AlgorithmMenu () {
    return (
        <Menu menuButton={<MenuButton className={"border-0"}>Algorithm Options</MenuButton>} transition>
          <MenuItem onClick={()=>{alert("Open new Algorithm")}}>New Algorithm</MenuItem>
          {/* <MenuItem>Save Algorithm</MenuItem>
          <MenuItem>Duplicate Algorithm</MenuItem>
          <MenuItem>Load Algorithm</MenuItem>
          <MenuItem>Clear Algorithm</MenuItem>
          <MenuDivider />
          <MenuItem>Qubit Indexing</MenuItem>
          <MenuItem>Auto Scroll Workplace</MenuItem>
          <MenuDivider />
          <MenuItem>Load Backend</MenuItem>
          <MenuDivider />
          <MenuItem>Toolbar Options</MenuItem> */}
        </Menu>      
    );
  }