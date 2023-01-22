import React from 'react'
import styles from '../style'

const CustomButton = ({text, type}) => {
    return (
        <button  type={type} className={`bg-lightGreen p-2 w-full rounded-lg text-white ${styles.flexCenter} ${styles.boldText}`}>
                {/* <h1 className={`text-white ${styles.flexCenter} ${styles.boldText}`}>{text}</h1> */}
                {text}
        </button>
    )
}

export default CustomButton