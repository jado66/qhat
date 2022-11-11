import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useContext } from 'react';
import { TabsContext } from '../../App';

export const TabMenu = () => {
  
  const {addTab} = useContext(TabsContext)

  return (
    <>
      <Menu menuButton={<MenuButton className={"border-0"}>Add Tabs</MenuButton>} transition>
        <MenuItem>New Database Display</MenuItem>
        <MenuItem onClick={()=>{addTab("Algorithm")}}>New Algorithm Creator</MenuItem>
        <MenuItem onClick={()=>{addTab("Hardware")}}>New Hardware Designer</MenuItem>
        <MenuDivider />
        <MenuItem>IBM Quantum Experience</MenuItem>
        <MenuItem>Quirk</MenuItem>
      </Menu>
    </>
    
  );
  }