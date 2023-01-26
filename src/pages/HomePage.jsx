import React from 'react'
import PropertiesTabs from './PropertiesTabs'
import SidebarLayout from '../components/SidebarLayout'

const HomePage = () => {
  return (
    <>
      <SidebarLayout component={<PropertiesTabs />} selectedKey="1"/>
    </>
  )
}

export default HomePage