import styles from "../style"
import logo from '../assets/stake-logo.svg'
import HeroImgComp from "../components/HeroImgComp"
import email from '../assets/email.svg'
import InputField from "../components/InputField"
import CustomButton from "../components/CustomButton"
import PasswordComp from "../components/PasswordComp"
import PhoneNumInput from "../components/PhoneNumInput"


const PhoneNumber = () => {
    return (
        <>
            <div className="p-0 flex ">
                {/* Left Side confirm email Comp */}
                <div className="w-full lg:w-1/2">

                    <div className={`${styles.flexCenter} flex-col px-2`}>
                        <div className="pt-16 md:pt-28 md:w-2/3">

                            <h1 className={`${styles.boldText} text-xl md:text-4xl`}>Enter Phone Number</h1>

                            <div className="py-14">
                                <h1 className="pb-5">Please enter your phone number to continue</h1>
                                <PhoneNumInput />
                            </div>
                            <CustomButton text="Next" />
                        </div>
                    </div>

                </div>

                {/*Right side Hero image comp */}
                <div className="hidden w-1/2 lg:flex relative">
                    <HeroImgComp />
                </div>


            </div>



        </>
    )
}


export default PhoneNumber