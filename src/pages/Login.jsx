import InputField from '../components/InputField'
import logo from '../assets/stake-logo.svg'
import CustomButton from '../components/CustomButton'
import styles from '../style.js'
import LoginForm from '../components/LoginForm'

const Login = () => {
    return (
        <div className={`h-screen max-w-full relative ${styles.flexCenter} flex-col overflow-hidden bg-creamWhite`}>
            <div className={`h-full w-[100%] md:w-[80%] lg:w-[35%] md:mt-12 ${styles.flexCenter} flex-col  border-2 rounded-lg  z-50 bg-white`}>
                
                <LoginForm />
            </div>

            <div className={`text-white z-50 md:mt-10 hidden md:${styles.flexCenter} flex-col`}>
                <h1 className={`${styles.boldText}`}>Don’t have an account <span className='text-[#41CE8E] cursor-pointer'>Join us today</span> </h1>
                <h1 className='font-normal text-xs mb-20 pt-3'>Regulated by the DFSA</h1>
            </div>

            
            <div className="w-full absolute top-[50%] bg-darkBlue left-0  h-full lg:h-[600px] -skew-y-3"/>
        
        </div>
    )
}

export default Login