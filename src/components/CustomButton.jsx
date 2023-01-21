import React from 'react'
import styles from '../style'

const CustomButton = ({text}) => {
    return (
        <div className='bg-lightGreen mt-7 p-2 rounded-lg'>
            <h1 className={`text-white ${styles.flexCenter} ${styles.boldText}`}>{text}</h1>
        </div>
    )
}

export default CustomButton