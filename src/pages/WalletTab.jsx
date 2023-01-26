import React from 'react'
import styles from '../style';
import BalanceCard from '../components/BalanceCard';
import TransactionTable from '../components/TransactionTable';
import { CreditCardOutlined, PlusOutlined } from '@ant-design/icons';
import CustomButton from '../components/CustomButton'
const WalletTab = () => {
    return (
        <>
            <h1 className={`${styles.boldText} text-lightGreen text-center text-3xl`}>Wallet</h1>

            <div className="flex flex-col gap-y-3 md:flex-row justify-between mt-12">
                <BalanceCard heading="Cash balance" amount="Taka 0" btns={true} />
                <BalanceCard heading="Rewards Balance" amount="Taka 0"/>
            </div>

            <h1 className={`${styles.boldText} mt-12 text-lightGreen text-center text-3xl`}>Transactions</h1>
            <div className='overflow-scroll'>
            <TransactionTable />
            </div>

            <h1 className={`${styles.boldText}  text-lightGreen text-center text-3xl`}>Banks</h1>
            
            <div className='bg-white md:w-[48%] mt-12 rounded-lg'>
                <div className='flex items-center gap-x-5 pl-5 pt-5'>
                    <CreditCardOutlined className='text-3xl'/>
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