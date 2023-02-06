import React from 'react'
import SideBar from '../../../components/AdminPanelComp/SideBar'
import AllPropertiesTab from './AllPropertiesTab'
const Properties = () => {
    return (
        <>
            <SideBar component={<AllPropertiesTab />} selectedKey="1" />
        </>
    )
}

export default Properties