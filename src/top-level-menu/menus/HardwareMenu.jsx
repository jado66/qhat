import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export const HardwareMenu = () => {
    return (
        <Menu menuButton={<MenuButton className={"border-0"}>Hardware Options</MenuButton>} transition>
          <MenuItem onClick={()=>{alert("Clear Hardware Desginer")}}>Clear Hardware Desginer</MenuItem>
          
        </Menu>      
    );
  }