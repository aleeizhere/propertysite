import styles from "../style"
import logo from '../assets/stake-white.svg'
import HeroImgComp from "../components/HeroImgComp"
import SignUpForm from "../components/SignUpForm"

const SignUp = () => {
    return (
        <>
            {/* Logo for mid screen */}
            <div className={`${styles.flexCenter} p-7 shadow-sm lg:hidden`}>
                <img src={logo} alt="Logo" className="w-20"/>
            </div>

            <div className="p-5 md:p-14 lg:p-0 flex ">

                {/* Left Side Form Comp */}
                <div className="w-full lg:w-1/2 lg:p-14">
                    <SignUpForm />
                </div>

                {/*Right side Hero image comp */}
                <div className="hidden w-1/2 lg:flex relative">
                    <HeroImgComp />
                </div>
                    
                
            </div>



        </>
    )
}

export default SignUp