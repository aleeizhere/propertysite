import React from 'react'
import styles from '../../../style';
import { Space, Table, Tag } from 'antd';
import CustomButton from "../../../components/CustomButton"
import { Link } from 'react-router-dom';
const columns = [
    // {
    //     title: 'Name',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: (text) => <a>{text}</a>,
    // },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Investors',
        dataIndex: 'investors',
        key: 'investors',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
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
        name: 'John Brown',
        price: 425175,
        address: 'Studio in Studio One - Dubai Marina',
        tags: ['Dubai', 'Holiday'],
        status: "Available",
        investors: 127
    },
    {
        key: '2',
        name: 'Jim Green',
        price: 451545,
        address: '1 Bed in The Address Downtown',
        tags: ['Bangladesh', 'Home'],
        status: "Funded",
        investors: 11

    },
    {
        key: '3',
        name: 'Joe Black',
        price: 327484,
        address: '1 Bed in Marquise Square - Business Bay',
        tags: ['Australia', 'Holiday'],
        status: "Funded",
        investors: 12

    },
    {
        key: '4',
        name: 'Joe Black',
        price: 34552,
        address: 'Studio in Sky Gardens - DIFC',
        tags: ['Dubai', 'Rented'],
        status: "Funded",
        investors: 5

    },
    {
        key: '5',
        name: 'Joe Black',
        price: 32452,
        address: 'Studio in Studio One - Dubai Marina',
        tags: ['London', 'Holiday'],
        status: "Available",
        investors: 4

    },
    {
        key: '6',
        name: 'Joe Black',
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
            <h1 className={`${styles.boldText} text-center md:text-left text-lightGreen text-3xl`}>Properties</h1>
            <h1 className='text-sm text-gray-500 mt-3 text-center md:text-left'>View, Edit and Update All properties details</h1>
            <Link to="/adminPanel/addProperty" className='inline-block mb-8 '>
                <CustomButton text="Add new Property" />
            </Link>


            <Table pagination={{ pageSize: 7 }} columns={columns} dataSource={data} />
        </div>
    )
}


export default AllPropertiesTab