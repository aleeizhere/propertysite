import React,{useRef} from 'react'
import logo from '../assets/stake-logo.svg'
import styles from '../style'
import CustomButton from './CustomButton'
import InputField from './InputField'
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {

  const navigate = useNavigate()

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
    email: emailRef.current.value,
    password: passwordRef.current.value
})
  navigate("/homePage")
  }

  return (
    <div className="w-11/12 md:w-4/5 m-auto">

      <div className={`${styles.flexCenter} p-10`}>
        <img src={logo} alt="" />
      </div>

      <h1 className={`${styles.boldText} mb-2`}>Email Address</h1>
      {/* Input comp */}
      <form action="" onSubmit={handleSubmit}>
        <InputField
          refs={emailRef}
          type="email"
          placeholder={"E.g YourCompany@company.com"} />

        <h1 className={`${styles.boldText} mt-8 mb-2`}>Password</h1>
        {/* Input comp */}
        <InputField
          refs={passwordRef}
          type="password"
          placeholder={"Enter your password"} />

        {/* Login button */}
        <CustomButton type={"submit"} text="Login" />
        {/* <button type="submit" className={`bg-lightGreen p-2 w-full rounded-lg text-white mt-5 ${styles.flexCenter} ${styles.boldText}`}>
          Login
        </button> */}
      </form>
      <h1 className={`${styles.flexCenter} mt-8 text-lightGreen ${styles.boldText}`}>Forgot Password</h1>

      <div className={`pt-8 pb-8 ${styles.flexCenter}`}>
        <h3 className='text-xs font-light text-gray-400'>By clicking Log In you agree to <span className='font-semibold underline cursor-pointer'> Stake's Terms & Conditions </span> and <span className='font-semibold underline cursor-pointer'> Key Risks</span></h3>
      </div>


    </div>
  )
}

export default LoginForm