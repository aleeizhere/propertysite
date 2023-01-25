import React, { useState } from 'react'
import { Tabs } from 'antd'
import AvailableProperties from './AvailableProperties';

const { TabPane } = Tabs;

const PropertiesTabs = () => {
    const [activeTab, setActiveTab] = useState('1');

    const handleTabChange = (key) => {
        setActiveTab(key);
    };
    return (
        <div className=''>
            <Tabs activeKey={activeTab}
                centered
                onChange={handleTabChange}
                defaultActiveKey="1"
                tabBarGutter={90}
                tabBarStyle={{ marginTop: "40px"}}

            >
                <TabPane

                    // tab={<span className={`${activeTab === '1' ? 'bg-lightGreen p-2 rounded-xl text-white' : 'text-gray-600'}`}>Tab 1</span>}
                    tab="Available"
                    key="1"
                >
                    <AvailableProperties />
                </TabPane>
                <TabPane
                    // tab={<span className={`${activeTab === '2' ? 'bg-lightGreen p-2 rounded-xl text-white' : 'text-gray-600'}`}>Tab 1</span>}
                    tab="Funded"
                    key="2">
                    <AvailableProperties />

                </TabPane>
                <TabPane
                    // tab={<span className={`${activeTab === '3' ? 'bg-lightGreen p-2 rounded-xl text-white' : 'text-gray-600'}`}>Tab 1</span>}
                    tab="Exited"
                    key="3">
                    <AvailableProperties />

                </TabPane>
            </Tabs>
        </div>
    )
}

export default PropertiesTabs