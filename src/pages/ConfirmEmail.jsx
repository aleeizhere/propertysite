import styles from "../style"
import logo from '../assets/stake-logo.svg'
import HeroImgComp from "../components/HeroImgComp"
import email from '../assets/email.svg'
import CustomButton from "../components/CustomButton"
import { Link } from "react-router-dom"
const ConfirmEmail = () => {
    const useremail = localStorage.getItem('email');

    return (
        <>
            {/* Logo for mid screen */}
            <div className={`${styles.flexCenter} p-7 shadow-sm lg:hidden`}>
                <img src={logo} alt="Logo" className="w-20" />
            </div>

            <div className="p-5 md:p-14 lg:p-0 flex ">

                {/* Left Side confirm email Comp */}
                <div className="w-full lg:w-1/2 lg:p-14">
                    <div className={`${styles.flexCenter} mt-10 my-10 lg:mt-0 flex-col justify-evenly h-full lg:h-4/5`}>
                        <h1 className={`${styles.boldText} text-xl md:text-3xl`}>Confirm your email</h1>
                        <h1 className={`${styles.flexCenter} flex-col md:flex-row`}>Confirmation Link was sent to &nbsp; <span className='text-lightGreen cursor-pointer'>{useremail}</span> </h1>
                        <img src={email} alt="Email confirmation" />
                        <Link to={"/createPassword"} className="absolute bottom-5">
                            <CustomButton text={"next"} />
                        </Link>
                    </div>
                </div>

                {/*Right side Hero image comp */}
                <div className="hidden w-1/2 lg:flex relative">
                    <HeroImgComp />
                </div   >


            </div>



        </>
    )
}

export default ConfirmEmail