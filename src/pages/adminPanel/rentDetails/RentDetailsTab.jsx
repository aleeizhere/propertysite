import React from 'react'
import styles from '../../../style';
import { Table } from 'antd';

//! Rows For main table
const columns = [
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Total Cost',
        dataIndex: 'totalCost',
        key: 'totalCost',
    },
    {
        title: 'Rent per Month',
        dataIndex: 'rentPerMonth',
        key: 'rentPerMonth'
    },
    {
        title: 'Investors',
        dataIndex: 'investors',
        key: 'investors',
        responsive: ['md'],

    },

];
//! Columns For main table

const data = [
    {
        key: '1',
        address: '1 Bed in Marquise Square - Business Bay',
        totalCost: 1500000,
        userId: 52,
        investors: 5,
        rentPerMonth: "69000",
    },
    {
        key: '2',
        address: 'Studio in Sky Gardens - DIFC',
        totalCost: 5500000,
        userId: 52,
        investors: 5,
        rentPerMonth: "8000",
    },
    {
        key: '3',
        address: 'Studio in Studio One - Dubai Marina',
        totalCost: 7500000,
        userId: 2,
        investors: 112,
        rentPerMonth: "9000",
    },
    {
        key: '4',
        address: '3 Bed in Boulevard Point Downtown Dubai',
        totalCost: 1700000,
        userId: 59,
        investors: 4,
        rentPerMonth: "TBD",
    },
    {
        key: '5',
        address: '1 Bed in Marquise Square - Business Bay',
        totalCost: 1900000,
        userId: 42,
        investors: 4,
        rentPerMonth: "49000",
    },
    {
        key: '6',
        address: 'Studio in Sky Gardens - DIFC',
        totalCost: 1500000,
        userId: 52,
        investors: 1,
        rentPerMonth: "TBD",
    },
    {
        key: '7',
        address: '3 Bed in Boulevard Point Downtown Dubai',
        totalCost: 89500000,
        userId: 52,
        investors: 5,
        rentPerMonth: "99000",
    },
    {
        key: '8',
        address: '1 Bed in Marquise Square - Business Bay',
        totalCost: 1500000,
        userId: 52,
        investors: 7,
        rentPerMonth: "70000",
    },

];



const RentDetailsTab = () => {

    // !Expandable Table Data
    const expandedRowRender = () => {
        const columns = [
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: 'Investment Date',
                dataIndex: 'date',
                key: 'date',
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
                username: 'peter',
                investment: '85222',
                earning: '95459',
                date: '2014-12-24'
            },
            {
                key: 89,
                username: 'Larem',
                investment: '85222',
                earning: '95459',
                date: '2014-12-24'

            },
            {
                key: 74,
                username: 'Shakib',
                investment: '85222',
                earning: '95459',
                date: '2014-12-24'

            },
        ]
        return <Table title={() => <h2 className={`${styles.boldText} text-lightGreen `}>Investors Information</h2>} columns={columns} dataSource={data} pagination={false} className="mb-3" />;
    };


    return (
        <div>
            <h1 className={`${styles.boldText} text-center md:text-left text-lightGreen text-3xl md:pl-10 lg:pl-0`}>Rent Details</h1>
            <h1 className='text-sm text-gray-500 mt-3 text-center md:text-left mb-8'>View All Rent Details of the properties</h1>
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



export default RentDetailsTab