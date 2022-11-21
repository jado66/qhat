import {AlgorithmMenu, DatabaseMenu, HardwareMenu, QHatMenu, TabMenu, DebugMenu } from './menus'
import { TabsContext } from '../App'
import { useContext } from 'react'

const ToplevelMenu = (props) => {

  
  const AppSpecificTabMenus = {
    Algorithm: <AlgorithmMenu/>,
    Hardware: <HardwareMenu/>,
    Database: <DatabaseMenu/>
  }

  const {currentTabType, debug} = useContext(TabsContext)

  return (
    
    <div className='d-flex'>
      <QHatMenu/>
     
    </div>
      
  );
}

export default ToplevelMenu;
//<TabMenu/>
//{/* React Conditional Rendering */}
//  {
 //   currentTabType && // If we are passing a currentTabType prop render the specific 
   //   AppSpecificTabMenus[props.currentTabType]
//  }

 // {
   // debug && // If we pass a debug prop show the debug tab
     // <DebugMenu/>
  //}
