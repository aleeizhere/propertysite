import styles from "../style"
import logo from '../assets/stake-logo.svg'
import HeroImgComp from "../components/HeroImgComp"
import email from '../assets/email.svg'
import InputField from "../components/InputField"
import CustomButton from "../components/CustomButton"
import PasswordComp from "../components/PasswordComp"
import PhoneNumInput from "../components/PhoneNumInput"
import Timer from "../components/Timer"


const VerfiyPhone = () => {
    let enable;
    const handleTimeEnd = () => {
        console.log('Time is up!');
         enable = true
      }

    return (
        <>
            <div className="p-0 flex ">
                {/* Left Side confirm email Comp */}
                <div className="w-full lg:w-1/2">

                    <div className={`${styles.flexCenter} flex-col px-2`}>
                        <div className="pt-16 md:pt-28 md:w-2/3">

                            <h1 className={`${styles.boldText} text-xl md:text-4xl`}>Verify Phone Number</h1>

                            <div className="py-14">
                                <h1 className="pb-5 text-gray-600">Please enter the one time password (OTP) sent to you {"+82 415 485 548"}</h1>
                                <h1 className="pb-5 text-gray-600">The Otp will expire in {<Timer time="15"/>}</h1>


                                <InputField
                                    type="text"
                                />
                            </div>
                            <div className="text-sm">
                                <h1 className="pb-5 text-gray-600 flex items-center justify-end"> ({<Timer time="10" onTimeEnd={handleTimeEnd} />})&nbsp; <span className={`text-lightGreen cursor-pointer font-semibold ${enable ? 'opacity-100' : 'opacity-40'}`}>Resend Otp</span></h1>
                                <h1 className="flex justify-end items-center">Didn't recieve OTP? &nbsp; <span className={`text-lightGreen cursor-pointer ${styles.boldText}`}> Skip this step</span></h1>
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



export default VerfiyPhone