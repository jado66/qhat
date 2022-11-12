import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { AlgorithmBuilder, DatabaseDisplay, HardwareDesigner } from './applications';
import TopLevelMenu from './top-level-menu/TopLevelMenu';
import { useState, createContext } from 'react';

export const TabsContext = createContext();

function App() {

  const [tabs, setTabs] = useState(["Algorithm", "Hardware"])

  const [tabIndex, setTabIndex] = useState(0);

  const [currentTabType, setCurrentTabType] = useState()

  const ApplicationMap = {
    "Algorithm": <AlgorithmBuilder/>,
    "Hardware": <HardwareDesigner/>,
    "Database": <DatabaseDisplay/>
  }

  const addTab = (type) => {
    setTabs(prevState => [...prevState, type])
    setTabIndex(tabs.length)
  }

  const handleTabChange = (index) =>{
    setCurrentTabType(tabs[index])
    setTabIndex(index)
  }


  // Render tab panels
  const tabComponents = []

  // Render tabs
  const tabPanelComponents = []
  
  const appTypeCount = {
    "Algorithm": 0,
    "Hardware": 0,
    "Database": 0
  }

  tabs.forEach((tab) =>{

    appTypeCount[tab] = appTypeCount[tab]+1

    tabComponents.push(
      <Tab key = {tab+appTypeCount[tab]} >{tab+" "+appTypeCount[tab]}</Tab>
    )

    tabPanelComponents.push(
      <TabPanel key = {tab+"panel"+appTypeCount[tab]}>
        {ApplicationMap[tab]}
      </TabPanel>
    )
  });

  const tabContextFunctions = {
    addTab: addTab
  }

  const tabContextValues = {
    debug: true,
    currentTabType: currentTabType
  }

  return (
    <>
      <TabsContext.Provider 
        value={{...tabContextValues, ...tabContextFunctions}}
      >
        <TopLevelMenu 
          debug
          currentTabType = {currentTabType}  
        />
      </TabsContext.Provider>
      

      <Tabs selectedIndex={tabIndex} onSelect={(index) => handleTabChange(index)}>
        <TabList >
          {tabComponents}
        </TabList>     
        {tabPanelComponents}
      </Tabs>
    </>
  );
}

export default App;

// {
//   tabs.map(tab =>{
//     <TabPanel key = {tab}>
//     <span >{tab}</span>

//     </TabPanel>
//   })
// }