import React from 'react'
import styles from '../../../style';
import { Space, Table, Tag } from 'antd';
import CustomButton from "../../../components/CustomButton"
import { Link } from 'react-router-dom';
import '../../../components/Sidebar.css'
const columns = [
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        responsive: ['md'],
    },
    {
        title: 'Property ID',
        dataIndex: 'propertyId',
        key: 'propertyId',

    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',

    },
    {
        title: 'Property Percentage',
        dataIndex: 'propertyPercentage',
        key: 'propertyPercentage',
        responsive: ['md'],
    },
    {
        title: 'Transcation ID',
        dataIndex: 'transactionId',
        key: 'transactionId',
    },
    {
        title: 'Documents',
        key: 'action',
        responsive: ['md'],
        render: (_, record) => (
            <Space size="middle" className='text-lightGreen'>
                <div>Documents</div>
            </Space>
        ),
    },
    {
        title: 'View Property',
        key: 'action',
        render: (_, record) => (
            <Space size="middle" className='text-lightGreen'>
                <div>View Property</div>
            </Space>
        ),
        responsive: ['md'],

    },
];
const data = [
    {
        key: '1',
        username: "Alisa",
        amount: 425175,
        propertyId:52,
        transactionId: 5954,
        propertyPercentage: "59%",
    },
    {
        key: '2',
        username: "Jhon",
        amount: 425175,
        propertyId:52,
        transactionId: 5954,
        propertyPercentage: "9%",
    },
    {
        key: '3',
        username: "Akmal",
        amount: 4275,
        propertyId:2,
        transactionId: 512,
        propertyPercentage: "25%",
    },
    {
        key: '4',
        username: "Parker",
        amount: 21475,
        propertyId:59,
        transactionId: 96,
        propertyPercentage: "51%",
    },
    {
        key: '5',
        username: "Harry",
        amount: 78481,
        propertyId:42,
        transactionId: 94,
        propertyPercentage: "42%",
    },
    {
        key: '5',
        username: "Alisa",
        amount: 425175,
        propertyId:52,
        transactionId: 5954,
        propertyPercentage: "59%",
    },
    {
        key: '7',
        username: "Alisa",
        amount: 425175,
        propertyId:52,
        transactionId: 5954,
        propertyPercentage: "59%",
    },
    {
        key: '8',
        username: "Alisa",
        amount: 425175,
        propertyId:52,
        transactionId: 5954,
        propertyPercentage: "59%",
    },

];


const PurchaseRequestsTab = () => {
    return (
        <div>
            <h1 className={`${styles.boldText} text-center md:text-left text-lightGreen text-3xl md:pl-10 lg:pl-0`}>Purchase Requests</h1>
            <h1 className='text-sm text-gray-500 mt-3 text-center md:text-left mb-8'>View All pruchase requests here </h1>
            {/* <Link to="/adminPanel/addProperty" className='inline-block mb-8 '>
                <CustomButton text="Add new Property" />
            </Link> */}


            <Table pagination={{ pageSize: 7 }} columns={columns} dataSource={data} />
        </div>
    )
}


export default PurchaseRequestsTab