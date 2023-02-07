import React from 'react'
import styles from '../../../style';
import { Space, Table, Tag } from 'antd';
import CustomButton from "../../../components/CustomButton"
import { Link } from 'react-router-dom';
import '../../../components/Sidebar.css'
const columns = [
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Investors',
        dataIndex: 'investors',
        key: 'investors',
        responsive: ['md'],

    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        responsive: ['md'],

    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        responsive: ['md'],
        filters: [
            {
                text: 'Available',
                value: 'Available',
            },
            {
                text: 'Funded',
                value: 'Funded',
            },
        ],
        onFilter: (value, record) => record.status.indexOf(value) === 0,
        render: (text) => {
            return <span className={`${text === "Available" ? 'bg-green-300' : 'bg-red-300'} p-1 rounded-md`}>{text}</span>;
        },

    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
        responsive: ['md'],
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle" className='text-lightGreen'>
                <Link to="/adminPanel/addProperty">Edit</Link>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        price: 425175,
        address: 'Studio in Studio One - Dubai Marina',
        tags: ['Dubai', 'Holiday'],
        status: "Available",
        investors: 127
    },
    {
        key: '2',
        price: 451545,
        address: '1 Bed in The Address Downtown',
        tags: ['Bangladesh', 'Home'],
        status: "Funded",
        investors: 11

    },
    {
        key: '3',
        price: 327484,
        address: '1 Bed in Marquise Square - Business Bay',
        tags: ['Australia', 'Holiday'],
        status: "Funded",
        investors: 12

    },
    {
        key: '4',
        price: 34552,
        address: 'Studio in Sky Gardens - DIFC',
        tags: ['Dubai', 'Rented'],
        status: "Funded",
        investors: 5

    },
    {
        key: '5',
        price: 32452,
        address: 'Studio in Studio One - Dubai Marina',
        tags: ['London', 'Holiday'],
        status: "Available",
        investors: 4

    },
    {
        key: '6',
        price: 31552,
        address: '3 Bed in Boulevard Point Downtown Dubai',
        tags: ['Dubai', 'Holiday'],
        status: "Available",
        investors: "-"

    },

];


const AllPropertiesTab = () => {
    return (
        <div>
            <h1 className={`${styles.boldText} text-center md:text-left text-lightGreen text-3xl md:pl-10 lg:pl-0`}>Properties</h1>
            <h1 className='text-sm text-gray-500 mt-3 text-center md:text-left'>View, Edit and Update All properties details</h1>
            <Link to="/adminPanel/addProperty" className='inline-block mb-8 '>
                <CustomButton text="Add new Property" />
            </Link>


            <Table pagination={{ pageSize: 7 }} columns={columns} dataSource={data} />
        </div>
    )
}


export default AllPropertiesTab