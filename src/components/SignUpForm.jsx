import React, { useRef } from 'react'
import styles from '../style'
import InputField from './InputField'
import CustomButton from './CustomButton'
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {

    const navigate = useNavigate();

    const nameRef = useRef('');
    const emailRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name: nameRef.current.value,
            email: emailRef.current.value,
        })
        localStorage.setItem('email', emailRef.current.value);
        navigate("/confirmEmail")
    }

    return (
        <>
            <h2 className={`${styles.boldText} text-2xl`}>
                Join Stake
            </h2>

            <form action="" onSubmit={handleSubmit}>
                <div className="pt-10">
                    <h1 className={`${styles.boldText}  mb-2`}>Name</h1>
                    <InputField
                        type="text"
                        refs={nameRef}
                    />
                </div>

                <div className="pt-10">
                    <h1 className={`${styles.boldText}  mb-2`}>Email Address</h1>
                    <InputField
                        type="email"
                        refs={emailRef}
                    />
                </div>

                <h1 className="text-sm font-normal text-gray-600 pt-3">We'll never share your email.</h1>

                <div className="mt-7">
                    <CustomButton type={"submit"} text="Let's go" />
                    {/* <button type="submit" className={`bg-lightGreen p-2 w-full rounded-lg text-white mt-5 ${styles.flexCenter} ${styles.boldText}`}>
                        Let's go
                    </button> */}
                </div>

            </form>

            <h1 className={`${styles.boldText} pt-5`}>Already a member? <Link to={"/"} className='text-lightGreen cursor-pointer'> Sign In</Link> </h1>
        </>

    )
}

export default SignUpForm