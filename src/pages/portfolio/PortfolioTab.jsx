import React from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import styles from '../../style';
import BalanceCard from '../../components/BalanceCard'
import { RiseOutlined, HomeOutlined, CalendarOutlined, BarChartOutlined } from '@ant-design/icons';
import InsightsCard from '../../components/InsightsCard';
import { Divider, Table } from 'antd';

const data = [
    {
        key: '1',
        property: 'deposit',
        location: 'completed',
        investmentValue: "24 jan 2023",
        rentEarned: "100100",
    },
    {
        key: '2',
        property: 'deposit',
        location: 'pending',
        investmentValue: '21 Jan 2023',
        rentEarned: "5005000",
    },
    {
        key: '3',
        property: 'withdraw',
        location: 'pending',
        investmentValue: '29 Dec 2022',
        rentEarned: "5005000",
    },
];

const columns = [
    {
        title: 'Property',
        dataIndex: 'property',
        key: 'property',
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Investment Value',
        dataIndex: 'investmentValue',
        key: 'investmentValue',
    },
    {
        title: 'Rent Earned',
        dataIndex: 'rentEarned',
        key: 'rentEarned',
    },
];



const PortfolioTab = () => {
    return (
        <div className=''>
            <h1 className={`${styles.boldText} text-lightGreen text-center text-3xl`}>Portfolio</h1>
            <Divider className='border-black border' />


            {/* portfolio component */}
            <div className='bg-white p-7 mt-12 md:min-h-[30rem]'>
                <div>
                    <h1 className='font-normal md:text-lg'>Portfolio Value</h1>
                    <h1 className={`${styles.boldText} text-3xl`}>Taka 0</h1>
                </div>
                <div className={`${styles.flexCenter} flex-col mt-[10%]`}>
                    <h1 className='font-normal md:text-lg text-center'>Invest in properties <br /> to start building your wealth</h1>
                    <Link to={"/homePage"}>
                        <CustomButton text="Buy Properties" />
                    </Link>
                </div>

            </div>

            {/* KEY Financials divs */}

            <h1 className={`${styles.boldText} text-lightGreen text-center text-3xl mt-12`}>Key financials</h1>
            <Divider className='border-black border' />

            <div className='flex flex-col gap-y-3 md:flex-row justify-between mt-12'>
                <BalanceCard heading="Monthly income (Jan 2023)" amount="Taka 15000" icon={<RiseOutlined className='iconStyleLg' />} />
                <BalanceCard heading="Total income (As of Jan 2023)" amount="Taka 45000" icon={<RiseOutlined className='iconStyleLg' />} />
            </div>


            {/* Quick Insights */}

            <h1 className={`${styles.boldText} text-lightGreen text-center text-3xl mt-12`}>Quick insights</h1>
            <Divider className='border-black border' />

            <div className='flex flex-col gap-y-3 md:flex-row justify-between mt-12'>
                <InsightsCard heading="Number of Properties" amount="5" icon={<HomeOutlined className='iconStyle' />} />
                <InsightsCard heading="Portfolio Occupancy" amount="100%" icon={<CalendarOutlined className='iconStyle' />} />
                <InsightsCard heading="Annaulised Rental Yield" amount="25,000" icon={<BarChartOutlined className='iconStyle' />} />
            </div>


            {/* Investments table  */}

            <h1 className={`${styles.boldText} mt-12 text-lightGreen text-center text-3xl`}>Active Investments</h1>
            <Divider className='border-black border' />

            <div className='mt-12'>
                <Table columns={columns} dataSource={data} />
            </div>

            <h1 className={`${styles.boldText} text-lightGreen text-center text-3xl`}>Live Investments</h1>
            <Divider className='border-black border' />

            <div className='mt-12'>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}

export default PortfolioTab