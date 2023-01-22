import React from 'react'
import styles from '../style'
import InputField from './InputField'
import CustomButton from './CustomButton'
const SignUpForm = () => {
    return (
        <>
                    <h2 className={`${styles.boldText} text-2xl`}>
                        Join Stake
                    </h2>

                    <form action="">
                    <div className="pt-10">
                        <h1 className={`${styles.boldText}  mb-2`}>Name</h1>
                        <InputField
                            type="text"
                            
                            />
                    </div>

                    <div className="pt-10">
                        <h1 className={`${styles.boldText}  mb-2`}>Email Address</h1>
                        <InputField
                            type="email"
                        />
                    </div>

                    <h1 className="text-sm font-normal text-gray-600 pt-3">We'll never share your email.</h1>

                        <div className="mt-7">
                            <CustomButton text={"Let's go"} type="submit"/>
                        </div>
                    
                    </form>

                    <h1 className={`${styles.boldText} pt-5`}>Already a member? <span className='text-lightGreen cursor-pointer'>Sign In</span> </h1>
                    </>
        
    )
}

export default SignUpForm