import React, { useState } from 'react'
import { Tabs } from 'antd'
import AvailableProperties from '../components/AvailableProperties';
import styles from '../style';
const { TabPane } = Tabs;

const PropertiesTabs = () => {
    const [activeTab, setActiveTab] = useState('1');

    const handleTabChange = (key) => {
        setActiveTab(key);
    };
    return (
        <div className=''>
            <h1 className={`${styles.boldText} text-lightGreen text-center text-3xl`}>Properties</h1>
            <Tabs activeKey={activeTab}
                centered
                onChange={handleTabChange}
                // defaultActiveKey="2"
                defaultChecked="1"
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