import React from 'react'
import styles from '../style'
import { StarOutlined } from '@ant-design/icons';

const BalanceCard = ({ heading, amount, btns }) => {
    return (
        <div className="flex justify-between md:w-[48%] p-2 md:p-10 bg-white rounded-lg">
            <div className=" flex flex-col justify-evenly">
                <h1 className="font-normal md:text-lg">{heading}</h1>
                <h1 className={`${styles.boldText} text-lightGreen md:text-3xl`}>{amount}</h1>
            </div>
            {
                btns ?
                    <div className=' flex flex-col justify-evenly gap-y-2 w-40 items-center'>
                        <h1 className={`md:${styles.boldText} cursor-pointer bg-lightGreen w-full text-center rounded-lg p-2`}>withdraw</h1>
                        <h1 className={`md:${styles.boldText} cursor-pointer bg-creamWhite w-full text-center rounded-lg p-2`}>withdraw</h1>

                    </div> : <div className=' flex  items-center'>
                        <StarOutlined className='text-6xl text-lightGreen' />
                    </div>
            }
        </div>
    )
}

export default BalanceCard