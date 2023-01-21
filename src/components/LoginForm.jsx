import React from 'react'
import logo from '../assets/stake-logo.svg'
import styles from '../style'
import CustomButton from './CustomButton'
import InputField from './InputField'
const LoginForm = () => {
  return (
    <div className="w-11/12 md:w-4/5 m-auto">
                
    <div className={`${styles.flexCenter} p-10`}>
        <img src={logo} alt="" />
    </div>
        
    <h1 className={`${styles.boldText} mb-2`}>Email Address</h1>
    {/* Input comp */}
    <InputField
    type="email"
    placeholder={"E.g YourCompany@company.com"}/>

    <h1 className={`${styles.boldText} mt-8 mb-2`}>Password</h1>
    {/* Input comp */}
    <InputField 
    type="password"
    placeholder={"Enter your password"}/>

    {/* Login button */}
    <CustomButton text="Login" />

    <h1 className={`${styles.flexCenter} mt-8 text-lightGreen ${styles.boldText}`}>Forgot Password</h1>

    <div className={`pt-8 pb-8 ${styles.flexCenter}`}>
        <h3 className='text-xs font-light text-gray-400'>By clicking Log In you agree to <span className='font-semibold underline cursor-pointer'> Stake's Terms & Conditions </span> and <span className='font-semibold underline cursor-pointer'> Key Risks</span></h3>
    </div>
    

</div>
  )
}

export default LoginForm