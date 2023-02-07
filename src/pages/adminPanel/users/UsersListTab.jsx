import React from 'react'
import styles from '../../../style';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table } from 'antd';
import CustomButton from "../../../components/CustomButton"
import { Link } from 'react-router-dom';
import '../../../components/Sidebar.css'

//! Rows For main table
const columns = [
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        responsive: ['md'],
    },
    {
        title: 'User ID',
        dataIndex: 'userId',
        key: 'userId',

    },
    {
        title: 'No. Of Properties',
        dataIndex: 'noOfProperties',
        key: 'noOfProperties',

    },
    {
        title: 'Total Investment',
        dataIndex: 'totalInvestment',
        key: 'totalInvestment'
    },
    {
        title: 'Total Earnings',
        dataIndex: 'totalEarnings',
        key: 'totalEarnings',
        responsive: ['md'],

    },

];
//! Columns For main table

const data = [
    {
        key: '1',
        username: "Alisa",
        noOfProperties: 5,
        userId: 52,
        totalEarnings: "50000",
        totalInvestment: "69000",
    },
    {
        key: '2',
        username: "Jhon",
        noOfProperties: 2,
        userId: 52,
        totalEarnings: "950000",
        totalInvestment: "8000",
    },
    {
        key: '3',
        username: "Akmal",
        noOfProperties: 4,
        userId: 2,
        totalEarnings: "350000",
        totalInvestment: "9000",
    },
    {
        key: '4',
        username: "Parker",
        noOfProperties: 0,
        userId: 59,
        totalEarnings: "0",
        totalInvestment: "0",
    },
    {
        key: '5',
        username: "Harry",
        noOfProperties: 3,
        userId: 42,
        totalEarnings: "250000",
        totalInvestment: "49000",
    },
    {
        key: '6',
        username: "Alisa",
        noOfProperties: 0,
        userId: 52,
        totalEarnings: "0",
        totalInvestment: "0",
    },
    {
        key: '7',
        username: "Alisa",
        noOfProperties: 2,
        userId: 52,
        totalEarnings: "150000",
        totalInvestment: "99000",
    },
    {
        key: '8',
        username: "Alisa",
        noOfProperties: 1,
        userId: 52,
        totalEarnings: "150000",
        totalInvestment: "70000",
    },

];



const UsersListTab = () => {

    // !Expandable Table Data
    const expandedRowRender = () => {
        const columns = [
            {
                title: 'Property Name',
                dataIndex: 'propertyName',
                key: 'propertyName',
            },
            {
                title: 'Investment',
                dataIndex: 'investment',
                key: 'investment',
            },
            {
                title: 'Earning',
                dataIndex: 'earning',
                key: 'earning',
            },
            
        ];
        const data = [
            {
                key: 78,
                propertyName: 'Dubai Al Khaeleej Tower',
                investment: '85222',
                earning: '95459',
            },
            {
                key: 89,
                propertyName: 'Dubai Al Khaeleej Tower',
                investment: '85222',
                earning: '95459',
            },
            {
                key: 74,
                propertyName: 'Dubai Al Khaeleej Tower',
                investment: '85222',
                earning: '95459',
            },
        ]
        return <Table columns={columns} dataSource={data} pagination={false} className="mb-3"/>;
    };


    return (
        <div>
            <h1 className={`${styles.boldText} text-center md:text-left text-lightGreen text-3xl md:pl-10 lg:pl-0`}>All Users</h1>
            <h1 className='text-sm text-gray-500 mt-3 text-center md:text-left mb-8'>View All Users details on your platform </h1>
            {/* <Link to="/adminPanel/addProperty" className='inline-block mb-8 '>
                <CustomButton text="Add new Property" />
            </Link> */}


            {/* <Table pagination={{ pageSize: 7 }} columns={columns} dataSource={data} /> */}
            <Table
            pagination={{ pageSize: 7 }} 
                columns={columns}
                expandable={{
                    expandedRowRender,
                    defaultExpandedRowKeys: ['0'],
                }}
                dataSource={data}
            />
        </div>
    )
}


export default UsersListTab