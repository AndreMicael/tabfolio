import React from 'react'
import {Tab, Tabs} from '../Tabs/index'

const TabContent = () => {
  return (
    <div>
         <Tabs>
        {/* label should be unique for each tab */}
        <Tab label={"tab0"} tabName={"Sobre Mim"}>
          <p>Tab 1 content</p>
        </Tab>
        <Tab label={"tab1"} tabName={"Habilidades"}>
          <p>Tab 2 content</p>
        </Tab>
        <Tab label={"tab2"} tabName={"Projetos"}>
          <p>Tab 3 content</p>
        </Tab>
        <Tab label={"tab3"} tabName={"Contato"}>
          <p>Tab 4 content</p>
        </Tab>
      </Tabs>
    </div>
  )
}

export default TabContent