import React from 'react'
import styles from '../style'
const InsightsCard = ({heading, amount, icon}) => {
    return (
        <div className='flex justify-between md:w-[30%] p-2 md:p-10 bg-white rounded-lg'>
            {/* <HomeOutlined className='text-4xl text-lightGreen' /> */}
            {icon}
            <div className='flex flex-col gap-y-2'>
                <h1 className='font-normal md:text-lg'>{heading}</h1>
                <h1 className={`${styles.boldText} text-center`}>{amount} </h1>
            </div>
        </div>
    )
}

export default InsightsCard