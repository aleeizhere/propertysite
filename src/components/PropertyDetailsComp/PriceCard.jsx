import React from 'react'
import styles from '../../style'
import { Progress } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
const priceDetails = [
    { heading: "Property Price", price: "736,154 ৳" },
    { heading: "Transaction Cost", price: "736,154" },
    { heading: "Stake fees", price: "1.5%" },
]
const PriceCard = () => {
    return (
        <>   
        <h1 className={`${styles.boldText} md:text-xl text-center`}>Property Price</h1>
            <h1 className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pb-5 text-center mt-2`}>736,295 ৳</h1>
            <Progress showInfo={false} percent={100} strokeColor="#4673B8" />
            <h1 className={`${styles.boldText} text-sm pb-5 `}>100% funded</h1>
            <div className='flex justify-between'>
                <h1 className={`${styles.boldText} text-sm`}> 111 Investors </h1>
                <h1 className='text-red-500 flex items-center gap-x-2'> {<CloseCircleOutlined />} Closed on 12 Jan 2023</h1>
            </div>
            <div className='bg-creamWhite p-3 rounded-lg mt-4'>
                <h1 className='font-bold'>Propery Cost</h1>
                {priceDetails.map((detail, i) => (
                    <div className='flex justify-between py-2'>
                        <h1 className='font-thin'>{detail.heading}</h1>
                        <h1 className='font-semibold'>{detail.price}</h1>
                    </div>
                ))}
            </div>
            </>
    )
}

export default PriceCard