import React from 'react'
import styles from '../../style';
import BalanceCard from '../../components/BalanceCard';
import { CreditCardOutlined, StarOutlined } from '@ant-design/icons';
import CustomButton from '../../components/CustomButton';
import { Divider, Table } from 'antd';

const data = [
    {
        key: '1',
        type: 'deposit',
        status: 'completed',
        date: "24 jan 2023",
        amount: "100100",
    },
    {
        key: '2',
        type: 'deposit',
        status: 'pending',
        date: '21 Jan 2023',
        amount: "5005000",
    },
    {
        key: '3',
        type: 'withdraw',
        status: 'pending',
        date: '29 Dec 2022',
        amount: "5005000",
    },
];

const columns = [
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
];


const WalletTab = () => {
    return (
        <>
            <h1 className={`${styles.boldText} text-lightGreen text-center text-3xl`}>Wallet</h1>
            <Divider className='border-lightGray' />
            <div className="flex flex-col gap-y-3 md:flex-row justify-between mt-12">
                <BalanceCard heading="Cash balance" amount="Taka 0" btns={true} />
                <BalanceCard heading="Rewards Balance" amount="Taka 0" icon={<StarOutlined className='iconStyleLg' />} />
            </div>

            <h1 className={`${styles.boldText} mt-12 text-lightGreen text-center text-3xl`}>Transactions</h1>
            <Divider className='border-lightGray' />
                <div className='mt-12'>
                    <Table columns={columns} dataSource={data} />;
                </div>

            <h1 className={`${styles.boldText}  text-lightGreen text-center text-3xl`}>Banks</h1>
            <Divider className='border-lightGray' />

            <div className='bg-white md:w-[48%] mt-12 rounded-lg'>
                <div className='flex items-center gap-x-5 pl-5 pt-5'>
                    <CreditCardOutlined className='text-3xl' />
                    <h1>Add a bank account to deposit from any where in the world</h1>
                </div>

                <div className='p-5 '>
                    <CustomButton text="Add new bank" />
                </div>

            </div>
        </>
    )
}

export default WalletTab